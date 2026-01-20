"use client";

import { useEffect, useId, useState } from "react";

type FeatureVideoProps = {
  id?: string;
  title: string;
  description: string;
  videoSrc: string;
  poster?: string;
  reverse?: boolean;
  status?: string;
  eyebrow?: string;
  highlight?: boolean;
};

export function FeatureVideo({
  id,
  title,
  description,
  videoSrc,
  poster,
  reverse = false,
  status,
  eyebrow,
  highlight = false,
}: FeatureVideoProps) {
  const [isOpen, setIsOpen] = useState(false);
  const modalTitleId = useId();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <section id={id} className="py-16">
      <div
        className={`${
          highlight
            ? "rounded-2xl border border-slate-200/90 bg-slate-100/90 p-6 shadow-[0_30px_80px_-55px_rgba(15,23,42,0.4)] md:p-10 dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-[0_30px_80px_-55px_rgba(0,0,0,0.7)]"
            : ""
        }`}
      >
        <div
          className={`flex flex-col items-start gap-10 md:items-center ${
            reverse ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          <div className="w-full space-y-4 md:w-4/12">
            {eyebrow ? (
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                {eyebrow}
              </p>
            ) : null}
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl dark:text-slate-100">
              {title}
            </h2>
            {status && status !== "done" ? (
              <span className="rounded-full border border-slate-200/80 bg-white/80 px-2.5 py-1 text-xs font-medium uppercase tracking-wide text-slate-500 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-300">
                {status}
              </span>
            ) : null}
          </div>
            <p className="text-base leading-relaxed text-slate-600 md:text-lg dark:text-slate-300">
              {description}
            </p>
          </div>
          <div className="relative w-full overflow-hidden rounded-3xl border border-slate-200/60 bg-white/70 shadow-[0_32px_80px_-50px_rgba(15,23,42,0.6)] backdrop-blur dark:border-slate-700/70 dark:bg-slate-950/60 dark:shadow-[0_32px_80px_-50px_rgba(0,0,0,0.8)] md:w-8/12">
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              aria-label={`Agrandir ${title}`}
            className="absolute right-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white/80 px-3 py-1 text-xs font-semibold text-slate-600 shadow-sm transition hover:border-slate-300 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-slate-700/80 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:bg-slate-900 dark:focus-visible:ring-slate-500/40 dark:focus-visible:ring-offset-slate-950"
            >
              Agrandir
            </button>
          <div className="aspect-video bg-gradient-to-br from-slate-900/5 via-transparent to-slate-900/10 dark:from-slate-900/50 dark:via-slate-900/30 dark:to-slate-900/60">
            <video
              className="h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              poster={poster ?? ""}
            >
              <source src={videoSrc} type="video/mp4" />
              Video unavailable
            </video>
          </div>
          </div>
        </div>
      </div>
      {isOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby={modalTitleId}
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-7xl overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-[0_40px_130px_-70px_rgba(15,23,42,0.7)] dark:border-slate-700/80 dark:bg-slate-950"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-200/70 px-5 py-4 dark:border-slate-800/80">
              <h3
                id={modalTitleId}
                className="text-sm font-semibold text-slate-900 dark:text-slate-100"
              >
                {title}
              </h3>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Fermer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/80 bg-white/80 text-slate-600 transition hover:border-slate-300 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-slate-700/80 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:bg-slate-900 dark:focus-visible:ring-slate-500/40 dark:focus-visible:ring-offset-slate-950"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="p-4 md:p-6">
              <div className="aspect-video max-h-[90vh] bg-transparent">
                <video
                  className="h-full w-full object-contain"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  poster={poster ?? ""}
                >
                  <source src={videoSrc} type="video/mp4" />
                  Video unavailable
                </video>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
