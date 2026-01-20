import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { ThemeProvider } from "next-themes";

const SUPPORTED_LOCALES = ["fr", "en"] as const;

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
};

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

type LocaleMetadataProps = {
  params: {
    locale: string;
  };
};

export async function generateMetadata({
  params,
}: LocaleMetadataProps): Promise<Metadata> {
  const { locale } = await params;
  const isEnglish = locale === "en";

  const title = isEnglish
    ? "ATS – Recruitment system project | Jeffrey Basset"
    : "ATS – Projet de recrutement | Portfolio Jeffrey Basset";
  const description = isEnglish
    ? "ATS project built during a full-stack internship: candidate portal, HR back office and recruitment workflow."
    : "Projet ATS développé en stage : portail candidat, back-office RH et workflow de recrutement. Démonstration technique full-stack.";

  return {
    title,
    description,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `/${locale}`,
    },
    openGraph: {
      title,
      description,
      type: "website",
      locale: isEnglish ? "en_US" : "fr_FR",
      images: [
        {
          url: "/og/ats-og.jpg",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og/ats-og.jpg"],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!SUPPORTED_LOCALES.includes(locale as "fr" | "en")) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
