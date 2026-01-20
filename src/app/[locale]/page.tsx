import { notFound } from "next/navigation";
import { getContent } from "@/content/content";
import { FeatureVideo } from "@/components/landing/FeatureVideo";
import { Footer } from "@/components/landing/Footer";
import { HeroVideo } from "@/components/landing/HeroVideo";
import { Navbar } from "@/components/layout/Navbar";
import { TechDetails } from "@/components/landing/TechDetails";

const SUPPORTED_LOCALES = ["fr", "en"] as const;

type PageProps = {
  params: {
    locale: string;
  };
};

export default async function Home({ params }: PageProps) {
  const { locale } = await params;

  if (!SUPPORTED_LOCALES.includes(locale as "fr" | "en")) {
    notFound();
  }

  const { hero, features, footer, techDetails } = getContent(locale);

  const featureItems = features.items
    .filter((item) => item.status === "done" && item.media?.type === "video")
    .slice(0, 2);

  const fallbackPoster = hero.media.poster ?? "";

  return (
    <div className="premium-surface min-h-screen text-slate-900 dark:text-slate-100">
      <Navbar />
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
        <HeroVideo
          title={hero.title}
          subtitle={hero.subtitle}
          badges={hero.badges}
          ctas={hero.ctas}
          media={{
            src: hero.media.src,
            poster: hero.media.poster,
          }}
        />

        <main className="divide-y divide-slate-200/60 dark:divide-slate-800/70">
          <section id="overview">
            {featureItems.map((item, index) => (
              <FeatureVideo
                key={item.title}
                title={item.title}
                description={item.description}
                videoSrc={item.media?.src ?? ""}
                poster={fallbackPoster}
                reverse={index % 2 === 1}
                status={item.status}
                eyebrow={item.eyebrow}
                highlight={index % 2 === 1}
              />
            ))}
          </section>
          <TechDetails
            title={techDetails.title}
            lead={techDetails.placeholder}
            architectureCards={techDetails.architectureCards}
            bullets={techDetails.bullets}
            note={techDetails.note}
            decisions={techDetails.decisions}
            mvpPlanned={techDetails.mvpPlanned}
            productExtensions={techDetails.productExtensions}
            locale={locale as "fr" | "en"}
          />
        </main>

        <Footer
          disclaimer={footer.disclaimer}
          otherProjects={footer.otherProjects}
        />
      </div>
    </div>
  );
}
