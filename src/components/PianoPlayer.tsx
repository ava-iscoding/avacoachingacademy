import { useEffect, useRef, useState } from "react";

export function PianoPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.18;

    audio
      .play()
      .then(() => {
        setPlaying(true);
      })
      .catch(() => {
        // Browser blocked autoplay.
        setPlaying(false);
      });
  }, []);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.18;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      await audio.play();
      setPlaying(true);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/soft-piano.mp3"
        loop
        autoPlay
        preload="auto"
      />

      <button
        onClick={toggleMusic}
        aria-label={playing ? "Pause piano music" : "Play soft piano music"}
        className="fixed bottom-5 right-5 z-50 rounded-full border border-border/60 bg-background/90 px-4 py-2.5 text-xs tracking-wide shadow-lg backdrop-blur-md transition hover:bg-background"
      >
        {playing ? "♫ Pause" : "♫ Soft Piano"}
      </button>
    </>
  );
}
