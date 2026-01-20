import { contentEN, contentFR } from "@/content/content";

type FooterProject = {
  label: string;
  url: string;
};

type FooterProps = {
  disclaimer: string;
  otherProjects?: FooterProject[];
};

export function Footer({ disclaimer, otherProjects }: FooterProps) {
  const content =
    disclaimer === contentEN.footer.disclaimer ? contentEN : contentFR;
  const { author, footer } = content;

  return (
    <footer className="py-12">
      <div className="border-t border-slate-200/60 pt-8 dark:border-slate-800/80">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="space-y-3">
            <div className="space-y-1">
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                {author.name}
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {author.role}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={author.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200/80 bg-white/80 text-slate-600 shadow-sm transition duration-150 hover:border-slate-300 hover:bg-slate-50 hover:text-[#0A66C2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-slate-700/80 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:bg-slate-800 dark:hover:text-[#0A66C2] dark:focus-visible:ring-slate-500/40 dark:focus-visible:ring-offset-slate-950"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                >
                  <path d="M20.5 3h-17A1.5 1.5 0 0 0 2 4.5v15A1.5 1.5 0 0 0 3.5 21h17a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 20.5 3ZM8.2 18H5.6V9.2h2.6V18Zm-1.3-10.1a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM19 18h-2.6v-4.2c0-1-.3-1.7-1.2-1.7-.6 0-1 .4-1.1.8-.1.2-.1.5-.1.8V18h-2.6s0-7.2 0-8H14v1.1c.3-.5 1-1.2 2.4-1.2 1.8 0 3.2 1.2 3.2 3.7V18Z" />
                </svg>
              </a>
              <a
                href={author.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200/80 bg-white/80 text-slate-600 shadow-sm transition duration-150 hover:border-slate-300 hover:bg-slate-50 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-slate-700/80 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:bg-slate-800 dark:hover:text-white dark:focus-visible:ring-slate-500/40 dark:focus-visible:ring-offset-slate-950"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.6 2.87 8.5 6.84 9.88.5.1.68-.22.68-.5 0-.24-.01-.88-.02-1.72-2.78.62-3.37-1.37-3.37-1.37-.45-1.19-1.11-1.51-1.11-1.51-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.9 1.56 2.36 1.11 2.94.85.09-.67.35-1.11.64-1.37-2.22-.26-4.56-1.15-4.56-5.1 0-1.13.39-2.06 1.02-2.79-.1-.26-.44-1.32.1-2.75 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.54 1.43.2 2.49.1 2.75.64.73 1.02 1.66 1.02 2.79 0 3.96-2.34 4.83-4.57 5.08.36.32.68.94.68 1.9 0 1.37-.02 2.47-.02 2.81 0 .28.18.6.69.5 3.96-1.38 6.83-5.28 6.83-9.88C22 6.58 17.52 2 12 2Z" />
                </svg>
              </a>
            </div>
          </div>
          {otherProjects && otherProjects.length > 0 ? (
            <div className="md:text-right">
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                {footer.title}
              </p>
              <ul className="mt-3 flex flex-col gap-2">
                {otherProjects.map((project) => (
                  <li key={project.url}>
                    <a
                      href={project.url}
                      className="text-sm text-slate-600 transition duration-150 hover:text-pink-500 hover:underline dark:text-slate-300 dark:hover:text-pink-400"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
        <p className="mt-8 text-xs text-slate-500 dark:text-slate-400">
          {disclaimer}
        </p>
      </div>
    </footer>
  );
}
