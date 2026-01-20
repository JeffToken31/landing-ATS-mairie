import { contentFR } from "@/content/content";
import { FeatureVideo } from "@/components/landing/FeatureVideo";
import { Footer } from "@/components/landing/Footer";
import { HeroVideo } from "@/components/landing/HeroVideo";
import { Navbar } from "@/components/layout/Navbar";

export default function Home() {
  const { hero, features, footer } = contentFR;

  const featureItems = features.items
    .filter((item) => item.status === "done" && item.media?.type === "video")
    .slice(0, 2);

  const fallbackPoster = hero.media.poster ?? "";

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(226,232,240,0.7),_transparent_55%),linear-gradient(180deg,_#ffffff_0%,_#f8fafc_45%,_#f1f5f9_100%)] text-slate-900 dark:bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.6),_transparent_55%),linear-gradient(180deg,_#020617_0%,_#0f172a_55%,_#1e293b_100%)] dark:text-slate-100">
      <Navbar />
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
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

        <main className="divide-y divide-slate-200/70 dark:divide-slate-800">
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
              />
            ))}
          </section>
          <section id="tech-details" className="py-16">
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl dark:text-slate-100">
                Détails techniques
              </h2>
              <p className="text-base text-slate-600 md:text-lg dark:text-slate-300">
                Coming soon
              </p>
            </div>
          </section>
        </main>

        <Footer
          disclaimer={footer.disclaimer}
          otherProjects={footer.otherProjects}
        />
      </div>
    </div>
  );
}
