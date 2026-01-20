type TechArchitectureCard = {
  title: string;
  description: string;
};

type TechDetailsProps = {
  title: string;
  lead?: string;
  architectureCards?: TechArchitectureCard[];
  bullets: string[];
  note?: string;
  decisions?: string[];
  mvpPlanned?: string[];
  productExtensions?: string[];
  locale?: "fr" | "en";
};

export function TechDetails({
  title,
  lead,
  architectureCards = [],
  bullets,
  note,
  decisions = [],
  mvpPlanned = [],
  productExtensions = [],
  locale = "fr",
}: TechDetailsProps) {
  const labels =
    locale === "en"
      ? {
          decisions: "Technical decisions",
          implemented: "Implemented",
          mvp: "Initial MVP (not delivered)",
          planned: "Planned",
          extensions: "Product extensions",
          considered: "Considered",
        }
      : {
          decisions: "Décisions techniques",
          implemented: "Implémenté",
          mvp: "MVP initial (non livré)",
          planned: "Prévu",
          extensions: "Extensions produit",
          considered: "Envisagé",
        };

  const detailCards = [
    {
      title: labels.decisions,
      badge: labels.implemented,
      tone: "emerald",
      items: decisions,
    },
    {
      title: labels.mvp,
      badge: labels.planned,
      tone: "amber",
      items: mvpPlanned,
    },
    {
      title: labels.extensions,
      badge: labels.considered,
      tone: "slate",
      items: productExtensions,
    },
  ].filter((card) => card.items && card.items.length > 0);

  return (
    <section id="tech-details" className="py-16">
      <div className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl dark:text-slate-100">
            {title}
          </h2>
          {lead ? (
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {lead}
            </p>
          ) : null}
        </div>

        {architectureCards.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-3">
            {architectureCards.slice(0, 3).map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-slate-200/70 bg-white/70 p-5 shadow-[0_18px_50px_-40px_rgba(15,23,42,0.4)] dark:border-slate-800/80 dark:bg-slate-950/60 dark:shadow-[0_18px_50px_-40px_rgba(0,0,0,0.7)]"
              >
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-900/70 dark:bg-slate-100/70" />
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                    {card.title}
                  </p>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        ) : null}

        <div className="grid gap-3 md:grid-cols-2">
          {bullets.map((bullet) => (
            <div key={bullet} className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-500" />
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {bullet}
              </p>
            </div>
          ))}
        </div>

        {detailCards.length > 0 ? (
          <div className="grid gap-4 lg:grid-cols-3">
            {detailCards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6 dark:border-slate-800 dark:bg-slate-950/40"
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                    {card.title}
                  </h3>
                  <span
                    className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] ${
                      card.tone === "emerald"
                        ? "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-900/70 dark:bg-emerald-900/30 dark:text-emerald-200"
                        : card.tone === "amber"
                          ? "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-900/70 dark:bg-amber-900/30 dark:text-amber-200"
                          : "border-slate-200 bg-slate-50 text-slate-600 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-300"
                    }`}
                  >
                    {card.badge}
                  </span>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : null}

        {note ? (
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {note}
          </p>
        ) : null}
      </div>
    </section>
  );
}
