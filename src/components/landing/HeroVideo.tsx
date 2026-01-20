type HeroCtas = {
  primary: {
    label: string;
    href: string;
  };
  secondary: {
    label: string;
    href: string;
  };
};

type HeroMedia = {
  src: string;
  poster?: string;
};

type HeroVideoProps = {
  title: string;
  subtitle: string;
  badges: string[];
  ctas: HeroCtas;
  media: HeroMedia;
};

export function HeroVideo({
  title,
  subtitle,
  badges,
  ctas,
  media,
}: HeroVideoProps) {
  return (
    <section className="hero-surface py-20">
      <div className="space-y-10">
        <div className="space-y-6">
          <div className="flex flex-wrap gap-2">
            {badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-slate-200/80 bg-white/80 px-3 py-1 text-xs font-medium text-slate-600 shadow-sm backdrop-blur dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200"
              >
                {badge}
              </span>
            ))}
          </div>
          <h1 className="text-4xl font-semibold tracking-[-0.02em] text-slate-900 md:text-6xl md:leading-[1.02] dark:text-slate-100">
            {title}
          </h1>
        </div>
        <div className="grid items-start gap-10 md:grid-cols-[1.5fr_0.5fr]">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-white/70 shadow-[0_40px_100px_-55px_rgba(15,23,42,0.65)] backdrop-blur before:pointer-events-none before:absolute before:inset-0 before:rounded-3xl before:shadow-[0_0_140px_rgba(59,130,246,0.08)] dark:border-slate-700/70 dark:bg-slate-950/60 dark:shadow-[0_40px_100px_-55px_rgba(0,0,0,0.8)] dark:before:shadow-[0_0_160px_rgba(56,189,248,0.12)]">
            <div className="aspect-[16/10] min-h-[280px] bg-gradient-to-br from-slate-900/5 via-transparent to-slate-900/10 dark:from-slate-900/50 dark:via-slate-900/30 dark:to-slate-900/60 md:aspect-[16/9] md:min-h-[420px]">
              <video
                className="h-full w-full object-contain"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                poster={media.poster ?? ""}
              >
                <source src={media.src} type="video/mp4" />
                Video unavailable
              </video>
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-slate-600 md:text-lg dark:text-slate-300">
              {subtitle}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={ctas.primary.href}
                className="inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white dark:focus-visible:ring-slate-300 dark:focus-visible:ring-offset-slate-950"
              >
                {ctas.primary.label}
              </a>
              <a
                href={ctas.secondary.href}
                className="inline-flex items-center justify-center rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:bg-slate-900/60 dark:focus-visible:ring-slate-600 dark:focus-visible:ring-offset-slate-950"
              >
                {ctas.secondary.label}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
