import { useHydrated } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { ArrowUpRight, Headphones, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PODCAST } from "@/config/podcast";

const itunesNamespace = "http://www.itunes.com/dtds/podcast-1.0.dtd";

function safeUrl(value: string | null | undefined) {
  if (!value) return null;
  try {
    const url = new URL(value);
    return url.protocol === "https:" ? url.href : null;
  } catch {
    return null;
  }
}

async function fetchEpisodes() {
  const response = await fetch(PODCAST.rssUrl, { signal: AbortSignal.timeout(15000) });
  if (!response.ok) throw new Error("Feed unavailable");
  const xml = new DOMParser().parseFromString(await response.text(), "application/xml");
  if (xml.querySelector("parsererror") || !xml.querySelector("channel")) throw new Error("Invalid feed");
  return Array.from(xml.querySelectorAll("item")).map((item, index) => {
    const guid = item.querySelector("guid")?.textContent?.trim() || `episode-${index}`;
    const description = new DOMParser().parseFromString(item.querySelector("description")?.textContent || "", "text/html").body.textContent?.trim() || "";
    const date = Date.parse(item.querySelector("pubDate")?.textContent || "");
    return {
      guid,
      title: item.querySelector("title")?.textContent?.trim() || "Untitled episode",
      description,
      date: Number.isFinite(date) ? date : null,
      duration: item.getElementsByTagNameNS(itunesNamespace, "duration")[0]?.textContent?.trim(),
      image: safeUrl(item.getElementsByTagNameNS(itunesNamespace, "image")[0]?.getAttribute("href")),
      link: safeUrl(item.querySelector("link")?.textContent?.trim()) || PODCAST.showUrl,
      audio: safeUrl(item.querySelector("enclosure")?.getAttribute("url")),
    };
  }).sort((a, b) => (b.date || 0) - (a.date || 0));
}

export function PodcastEpisodes() {
  const hydrated = useHydrated();
  const { data, isPending, isError, refetch, isFetching } = useQuery({
    queryKey: ["podcast-episodes", PODCAST.rssUrl],
    queryFn: fetchEpisodes,
    enabled: hydrated,
    staleTime: 5 * 60 * 1000,
    refetchInterval: 5 * 60 * 1000,
    retry: 1,
  });

  return (
    <section className="bg-sand px-6 py-16 sm:px-10 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow">Conversations with Ava</p>
        <h2 className="mt-4 text-3xl sm:text-4xl">Latest episodes</h2>
        {isPending && <p role="status" className="mt-8 text-muted-foreground">Loading episodes…</p>}
        {isError && !data && (
          <div className="mt-8 space-y-4">
            <p role="status" className="text-muted-foreground">Episodes are temporarily unavailable. You can still listen on Spotify.</p>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" disabled={isFetching} onClick={() => refetch()}><RefreshCw />Try again</Button>
              <Button asChild><a href={PODCAST.showUrl} target="_blank" rel="noopener noreferrer"><Headphones />Listen on Spotify</a></Button>
            </div>
          </div>
        )}
        {data?.length === 0 && <p className="mt-8 text-muted-foreground">New conversations are coming soon.</p>}
        <div className="mt-8 divide-y divide-border">
          {data?.map((episode) => (
            <article key={episode.guid} className="grid items-start gap-8 py-10 first:pt-0 md:grid-cols-[minmax(0,300px)_1fr] md:gap-16">
              {episode.image ? <a href={episode.link} target="_blank" rel="noopener noreferrer" aria-label={`Listen to ${episode.title}`}><img src={episode.image} alt={`${episode.title} episode artwork`} loading="lazy" className="mx-auto h-auto w-full max-w-[300px] object-contain" /></a> : <div aria-hidden="true" className="flex aspect-square max-w-[300px] items-center justify-center bg-background text-muted-foreground"><Headphones className="h-16 w-16" /></div>}
              <div className="min-w-0 md:pt-4">
                <p className="text-sm text-muted-foreground">{episode.date && <time dateTime={new Date(episode.date).toISOString()}>{new Intl.DateTimeFormat("en", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" }).format(episode.date)}</time>}{episode.date && episode.duration ? " · " : ""}{episode.duration}</p>
                <h3 className="mt-4 text-3xl leading-tight break-words sm:text-4xl">{episode.title}</h3>
                {episode.description && <p className="mt-6 max-w-2xl text-base leading-[1.9] break-words text-muted-foreground">{episode.description}</p>}
                {episode.audio && <audio controls preload="none" src={episode.audio} aria-label={`Play ${episode.title}`} className="mt-6 w-full max-w-lg" />}
                <Button asChild size="lg" className="mt-6 h-auto whitespace-normal rounded-xs py-3"><a href={episode.link} target="_blank" rel="noopener noreferrer"><Headphones />Listen to this episode<ArrowUpRight /></a></Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}