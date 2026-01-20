"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTheme } from "next-themes";
import { getContent } from "@/content/content";

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const currentLocale = pathname?.split("/")[1] === "en" ? "en" : "fr";
  const content = getContent(currentLocale);

  const switchLocale = (nextLocale: "fr" | "en") => {
    const path = pathname ?? "/";
    const segments = path.split("/");
    const hasLocale = segments[1] === "fr" || segments[1] === "en";
    const rest = hasLocale ? segments.slice(2) : segments.slice(1);
    const nextPath =
      rest.length > 0 ? `/${nextLocale}/${rest.join("/")}` : `/${nextLocale}`;
    const queryString = searchParams?.toString();
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    const querySuffix = queryString ? `?${queryString}` : "";

    router.push(`${nextPath}${querySuffix}${hash}`);
  };

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/60 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:border-slate-800/80 dark:bg-slate-950/80 dark:supports-[backdrop-filter]:bg-slate-950/70">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 md:px-6">
        <span className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-900 dark:text-slate-100">
          {content.site.title ?? "ATS"}
        </span>
        <div className="flex items-center gap-3">
          <a
            href={content.site.links.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
            className="inline-flex items-center justify-center rounded-full border border-slate-200/80 bg-white/80 p-2 text-slate-600 shadow-sm transition duration-150 hover:border-slate-300 hover:bg-slate-50 hover:text-[#0A66C2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-slate-700/80 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:bg-slate-800 dark:hover:text-[#0A66C2] dark:focus-visible:ring-slate-500/40 dark:focus-visible:ring-offset-slate-950"
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
          <div className="inline-flex rounded-full border border-slate-200/80 bg-slate-50/80 p-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-700 shadow-sm backdrop-blur dark:border-slate-700/80 dark:bg-slate-900/60 dark:text-slate-200">
            <button
              type="button"
              onClick={() => switchLocale("fr")}
              aria-label="Basculer en francais"
              aria-pressed={currentLocale === "fr"}
              title="FR"
              className={`rounded-full px-2.5 py-1 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-slate-500/40 dark:focus-visible:ring-offset-slate-950 ${
                currentLocale === "fr"
                  ? "bg-white text-slate-700 shadow-sm ring-1 ring-inset ring-slate-200 dark:bg-slate-900/60 dark:text-slate-200 dark:ring-slate-700"
                  : "text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
              }`}
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 16"
                className="h-3.5 w-5"
                focusable="false"
              >
                <rect width="24" height="16" fill="#ffffff" />
                <rect width="8" height="16" fill="#1f4aa8" />
                <rect x="16" width="8" height="16" fill="#d7263d" />
              </svg>
              <span className="sr-only">FR</span>
            </button>
            <button
              type="button"
              onClick={() => switchLocale("en")}
              aria-label="Switch to English"
              aria-pressed={currentLocale === "en"}
              title="EN"
              className={`rounded-full px-2.5 py-1 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-slate-500/40 dark:focus-visible:ring-offset-slate-950 ${
                currentLocale === "en"
                  ? "bg-white text-slate-700 shadow-sm ring-1 ring-inset ring-slate-200 dark:bg-slate-900/60 dark:text-slate-200 dark:ring-slate-700"
                  : "text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
              }`}
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 16"
                className="h-3.5 w-5"
                focusable="false"
              >
                <rect width="24" height="16" fill="#0a2f6b" />
                <path
                  d="M0 0L24 16M24 0L0 16"
                  stroke="#ffffff"
                  strokeWidth="3"
                />
                <path
                  d="M0 0L24 16M24 0L0 16"
                  stroke="#d7263d"
                  strokeWidth="1.5"
                />
                <rect x="9" width="6" height="16" fill="#ffffff" />
                <rect y="5" width="24" height="6" fill="#ffffff" />
                <rect x="10" width="4" height="16" fill="#d7263d" />
                <rect y="6" width="24" height="4" fill="#d7263d" />
              </svg>
              <span className="sr-only">EN</span>
            </button>
          </div>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/80 p-2 text-slate-700 shadow-sm transition duration-150 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:bg-slate-800 dark:hover:text-white dark:focus-visible:ring-slate-600 dark:focus-visible:ring-offset-slate-950"
          >
            {mounted && resolvedTheme === "dark" ? (
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="currentColor"
              >
                <path d="M17.75 14.5a7.25 7.25 0 0 1-8.25-8.25 8.25 8.25 0 1 0 8.25 8.25Z" />
              </svg>
            ) : (
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="currentColor"
              >
                <path d="M12 4.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 12 4.5Zm0 10.5a3.75 3.75 0 1 1 0-7.5 3.75 3.75 0 0 1 0 7.5Zm7.5-3a.75.75 0 0 1 .75.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75Zm-15 0a.75.75 0 0 1 .75.75H6a.75.75 0 0 1 0 1.5H5.25a.75.75 0 0 1-.75-.75Zm11.303-5.553a.75.75 0 0 1 1.06 0l1.061 1.061a.75.75 0 1 1-1.06 1.06l-1.061-1.06a.75.75 0 0 1 0-1.061Zm-9.19 9.19a.75.75 0 0 1 1.06 0l1.061 1.061a.75.75 0 0 1-1.06 1.06l-1.061-1.06a.75.75 0 0 1 0-1.061Zm0-9.19a.75.75 0 0 1 0 1.06L5.552 8.57a.75.75 0 1 1-1.06-1.06l1.061-1.061a.75.75 0 0 1 1.06 0Zm9.19 9.19a.75.75 0 0 1 0 1.06l-1.061 1.061a.75.75 0 1 1-1.06-1.06l1.061-1.061a.75.75 0 0 1 1.06 0ZM12 18.75a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 12 18.75Z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
