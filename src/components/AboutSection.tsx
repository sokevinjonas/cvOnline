import { Compass, Layers, ShieldCheck, Zap } from "lucide-react";
import jonasPortrait from "@/assets/avatar.png";

/**
 * AboutSection — Narratif senior : parcours + valeurs.
 * Sortie du "je suis passionné" — ton posé et professionnel.
 */
const VALUES = [
  {
    icon: Compass,
    title: "Vision produit",
    desc: "Je pense chaque ligne de code au service d'un objectif business clair.",
  },
  {
    icon: Layers,
    title: "Architecture solide",
    desc: "Systèmes découplés, testables, prêts à scaler sans dette technique.",
  },
  {
    icon: ShieldCheck,
    title: "Rigueur d'ingénieur",
    desc: "Sécurité, tests, monitoring, CI/CD — la qualité n'est pas une option.",
  },
  {
    icon: Zap,
    title: "Vélocité maîtrisée",
    desc: "Livrer vite sans casser. Prioriser l'impact, pas le volume.",
  },
] as const;

const DOMAINS = [
  "Développement Web",
  "Développement Mobile",
  "Logiciels SaaS",
  "API REST & GraphQL",
  "Architecture Backend",
  "DevOps & Cloud",
  "Consulting technique",
];

const AboutSection = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="section-padding relative"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            À propos
          </p>
          <h2
            id="about-title"
            className="text-3xl font-semibold tracking-tighter text-gradient sm:text-4xl md:text-5xl"
          >
            L'ingénierie logicielle comme levier business.
          </h2>
        </div>

        {/* Portrait + narrative */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-4 rounded-3xl bg-gradient-mesh opacity-40 blur-2xl"
              />
              <div className="card-premium relative overflow-hidden rounded-3xl">
                <img
                  src={jonasPortrait}
                  alt="Portrait de SO Kevin Jonas Gningnabe, ingénieur logiciel Full Stack"
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              {/* Floating credentials */}
              <div className="absolute -bottom-4 left-4 right-4 flex items-center justify-between gap-2 rounded-2xl border border-border bg-background/90 px-4 py-3 backdrop-blur-xl">
                <div className="min-w-0">
                  <p className="truncate text-xs text-muted-foreground">
                    Fondateur
                  </p>
                  <p className="truncate text-sm font-semibold">
                    Couturart · SaaS mode
                  </p>
                </div>
                <span className="chip">Burkina Faso</span>
              </div>
            </div>
          </div>

          <div className="space-y-6 lg:col-span-7">
            <p className="text-lg leading-relaxed text-foreground/90">
              Ingénieur Logiciel Full Stack avec plus de{" "}
              <span className="text-foreground">4 années</span> d'expérience,
              j'accompagne startups et entreprises dans la conception et le
              déploiement de produits digitaux.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Mon parcours combine{" "}
              <span className="text-foreground">développement produit</span>,{" "}
              <span className="text-foreground">architecture logicielle</span>{" "}
              et <span className="text-foreground">DevOps</span>. J'interviens
              de la modélisation métier à la mise en production, en passant par
              l'API, l'UI et l'infrastructure.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Fondateur de <span className="text-foreground">Couturart</span>,
              une plateforme SaaS pour les ateliers de mode, je comprends les
              enjeux d'un produit qui doit à la fois convaincre ses utilisateurs
              et générer du revenu. Cette double casquette{" "}
              <span className="text-foreground">ingénieur + product builder</span>{" "}
              est ce que j'apporte à chaque mission.
            </p>

            {/* Domains */}
            <div className="pt-4">
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Domaines d'intervention
              </p>
              <div className="flex flex-wrap gap-2">
                {DOMAINS.map((d) => (
                  <span
                    key={d}
                    className="rounded-full border border-border bg-secondary/40 px-3 py-1.5 text-xs font-medium text-foreground/80"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mt-24">
          <p className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Ce qui guide mon travail
          </p>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="group relative bg-card p-6 transition-colors hover:bg-accent"
              >
                <v.icon
                  className="mb-4 h-5 w-5 text-foreground/70 transition-colors group-hover:text-foreground"
                  aria-hidden
                />
                <h3 className="mb-2 text-sm font-semibold">{v.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
