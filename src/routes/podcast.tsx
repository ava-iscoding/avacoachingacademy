import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PODCAST } from "@/config/podcast";
import cover from "@/assets/podcast/cover.png.asset.json";
import episodeCover from "@/assets/podcast/recovery.jpeg.asset.json";

export const Route = createFileRoute("/podcast")({
  head: () => ({
    meta: [
      { title: "Podcast — Ava Coaching Academy" },
      { name: "description", content: "Conscious conversations with Ava Naeini on relationships, personal growth, hope, values and purpose. Listen to the Ava Coaching Academy podcast." },
      { property: "og:title", content: "Podcast — Ava Coaching Academy" },
      { property: "og:description", content: "Conscious conversations for a brighter tomorrow. Listen to Ava Naeini on relationships, growth, hope and meaning." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PodcastPage,
});

function PodcastPage() {
  return (
    <>
      <section className="dawn px-6 py-12 text-center sm:px-10 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow">The podcast · Ava Naeini</p>
          <h1 className="mt-4 text-4xl leading-tight sm:text-6xl">Ava Coaching Academy</h1>
          <p className="mt-4 text-lg text-muted-foreground">Conscious conversations for a brighter tomorrow.</p>
          <img src={cover.url} alt="Ava Coaching Academy podcast cover with Ava Naeini, a golden microphone and a sunset" width={768} height={768} className="mx-auto mt-8 aspect-square w-full max-w-[420px] object-contain" />
          <div className="mt-7 flex justify-center">
            <Button asChild size="lg" className="h-auto whitespace-normal rounded-xs py-3">
              <a href={PODCAST.showUrl} target="_blank" rel="noopener noreferrer"><Headphones />Listen on Spotify<ArrowUpRight /></a>
            </Button>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:gap-16">
            <div>
              <p className="eyebrow">Conversations with Ava</p>
              <h2 className="mt-4 text-3xl sm:text-4xl">Hope, growth & meaning</h2>
              <p className="mt-5 max-w-lg text-base leading-[1.9] text-muted-foreground">Love and relationships. Personal development. Hope and healing. Growth and career change. Success and meaning. Values and purpose.</p>
            </div>
            <div>
              <h2 className="mb-5 text-3xl">Listen to the episodes</h2>
              <iframe src={PODCAST.embedUrl} title="Ava Coaching Academy podcast episodes on Spotify" width="100%" height="352" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" allowFullScreen className="w-full rounded-sm border-0" />
              <a href={PODCAST.showUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground">All episodes on Spotify<ArrowUpRight className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sand px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow">Featured episode</p>
          <div className="mt-8 grid items-start gap-10 md:grid-cols-[minmax(0,360px)_1fr] md:gap-16">
            <a href={PODCAST.featuredEpisode.url} target="_blank" rel="noopener noreferrer" aria-label="Listen to Recovery from Abusive Relationships on Spotify">
              <img src={episodeCover.url} alt="Recovery from Abusive Relationships episode artwork: awareness, detachment, healing and empowerment" width={768} height={937} loading="lazy" className="h-auto w-full object-contain" />
            </a>
            <div className="md:pt-8">
              <p className="text-sm text-muted-foreground">{PODCAST.featuredEpisode.duration}</p>
              <h2 className="mt-4 max-w-xl text-3xl leading-tight sm:text-4xl">{PODCAST.featuredEpisode.title}</h2>
              <p className="mt-6 max-w-lg text-base leading-[1.9] text-muted-foreground">{PODCAST.featuredEpisode.description}</p>
              <Button asChild size="lg" className="mt-8 h-auto whitespace-normal rounded-xs py-3">
                <a href={PODCAST.featuredEpisode.url} target="_blank" rel="noopener noreferrer"><Headphones />Listen to this episode<ArrowUpRight /></a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}