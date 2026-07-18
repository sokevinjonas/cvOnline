import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

/**
 * HeroSection — Style Vercel/Linear.
 * Fond : mesh gradient subtil + dot grid + halo radial.
 * Titre gradient blanc→gris, sous-titre mono, badge dispo animé.
 */
const STATS = [
  { value: "4+", label: "années d'expérience" },
  { value: "15+", label: "applications développées" },
  { value: "5", label: "entreprises accompagnées" },
  { value: "1", label: "SaaS en développement" },
] as const;

const BADGES = [
  "Laravel",
  "Angular",
  "NestJS",
  "React Native",
  "Docker",
  "PostgreSQL",
  "DevOps",
  "TypeScript",
] as const;

const HeroSection = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[100dvh] items-center overflow-hidden pt-24"
    >
      {/* Ambient background layers */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-dot-grid opacity-70" />
        <div className="absolute inset-0 glow-ambient" />
        <div className="absolute inset-x-0 top-0 h-[600px] bg-gradient-radial" />
      </div>

      <div className="container-custom relative">
        <div className="flex flex-col items-center text-center">
          {/* Status pill */}
          <div className="chip animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Disponible · Freelance & Missions
          </div>

          {/* Title */}
          <h1 className="mt-8 max-w-4xl animate-fade-in-up text-4xl font-semibold tracking-tighter text-gradient sm:text-6xl md:text-7xl">
            SO Kevin Jonas Gningnabe
          </h1>

          {/* Subtitle */}
          <p className="mt-5 animate-fade-in-up animation-delay-100 font-mono text-sm uppercase tracking-[0.2em] text-muted-foreground sm:text-base">
            Ingénieur Logiciel Full Stack
          </p>

          {/* Description */}
          <p className="mt-8 max-w-2xl animate-fade-in-up animation-delay-200 text-base leading-relaxed text-muted-foreground sm:text-lg">
            J'aide les entreprises, startups et porteurs de projets à transformer
            leurs idées en applications{" "}
            <span className="text-foreground">Web</span>,{" "}
            <span className="text-foreground">Mobile</span> et{" "}
            <span className="text-foreground">SaaS</span> performantes — de la
            conception à la mise en production.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex animate-fade-in-up animation-delay-300 flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="btn-shine group h-12 gap-2 px-6"
              onClick={() => scrollTo("#projects")}
            >
              Découvrir mes réalisations
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 gap-2 px-6"
              onClick={() => scrollTo("#contact")}
            >
              <Sparkles className="h-4 w-4" />
              Travaillons ensemble
            </Button>
          </div>

          {/* Stats */}
          <dl className="mt-16 grid w-full max-w-3xl animate-fade-in-up animation-delay-400 grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center gap-1 bg-background px-4 py-6"
              >
                <dt className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  {s.value}
                </dt>
                <dd className="text-xs text-muted-foreground sm:text-sm">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>

          {/* Tech badges */}
          <div className="mt-12 flex animate-fade-in-up animation-delay-500 flex-wrap justify-center gap-2">
            {BADGES.map((b) => (
              <span
                key={b}
                className="rounded-full border border-border bg-secondary/40 px-3 py-1 font-mono text-xs text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
