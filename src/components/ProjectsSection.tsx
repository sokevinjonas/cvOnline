import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github, Star } from "lucide-react";

/**
 * ProjectsSection — Vitrine des réalisations.
 * Chaque projet : problème, solution, résultat, stack.
 * Projet principal (Couturart) en featured plein-largeur.
 */
interface Project {
  name: string;
  tagline: string;
  problem: string;
  solution: string;
  outcome: string;
  stack: string[];
  status: "En production" | "En développement" | "Live" | "Case study";
  links?: { demo?: string; github?: string };
  featured?: boolean;
  cover?: string;
}

const PROJECTS: Project[] = [
  {
    name: "Couturart",
    tagline: "SaaS de gestion pour ateliers de mode",
    problem:
      "Les ateliers de couture gèrent commandes, mesures, essayages et paiements sur papier — d'où pertes, retards et frustration client.",
    solution:
      "Plateforme SaaS multi-tenant : gestion des commandes, fiches clients, mesures détaillées, planning atelier, facturation et paiements.",
    outcome:
      "Digitalisation complète du cycle atelier — de la prise de commande au paiement, sur web et mobile.",
    stack: ["Angular", "Ionic", "Laravel", "PostgreSQL", "Docker", "Stripe"],
    status: "En production",
    links: { demo: "https://couturart.com" },
    featured: true,
  },
  {
    name: "ARENIA",
    tagline: "Plateforme événementielle",
    problem: "Coordination complexe entre organisateurs et prestataires.",
    solution: "Web app centralisée avec workflows dédiés et messagerie temps réel.",
    outcome: "Cycles d'organisation réduits, communication traçable.",
    stack: ["Angular", "NestJS", "PostgreSQL"],
    status: "En développement",
  },
  {
    name: "MoneyTok",
    tagline: "Fintech mobile — épargne & suivi",
    problem: "Difficulté à suivre son épargne et ses objectifs personnels.",
    solution: "App mobile avec tableaux de bord, objectifs et notifications intelligentes.",
    outcome: "Expérience mobile fluide, prête pour un pilote utilisateur.",
    stack: ["React Native", "NestJS", "PostgreSQL"],
    status: "En développement",
  },
  {
    name: "Anime Duel",
    tagline: "Jeu web multi-joueurs",
    problem: "Créer une expérience ludique temps réel autour de la culture anime.",
    solution: "Serveur de match-making, gameplay tour par tour, classement ELO.",
    outcome: "Prototype fonctionnel avec sessions temps réel stables.",
    stack: ["React", "NestJS", "WebSocket", "PostgreSQL"],
    status: "Case study",
    links: { github: "https://github.com/jonas-so" },
  },
  {
    name: "API Laravel",
    tagline: "Backend template production-ready",
    problem: "Bootstrapper rapidement une API sécurisée pour projets clients.",
    solution: "Template Laravel avec auth JWT, rôles, Swagger, Docker et CI.",
    outcome: "Base réutilisée sur plusieurs missions freelance.",
    stack: ["Laravel", "PHP", "JWT", "Docker", "Swagger"],
    status: "Live",
    links: { github: "https://github.com/jonas-so" },
  },
  {
    name: "Portfolio",
    tagline: "Ce site — vitrine ingénierie",
    problem: "Se positionner comme ingénieur senior et non simple développeur.",
    solution: "Portfolio React/TS avec design system premium, dark-first, SEO.",
    outcome: "Convertit visiteurs recruteurs et clients en conversations.",
    stack: ["React", "TypeScript", "Tailwind", "shadcn/ui"],
    status: "Live",
    links: { github: "https://github.com/jonas-so" },
  },
];

const statusStyles: Record<Project["status"], string> = {
  "En production": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Live: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  "En développement": "bg-amber-500/10 text-amber-400 border-amber-500/20",
  "Case study": "bg-foreground/10 text-foreground border-border",
};

const ProjectsSection = () => {
  const featured = PROJECTS.find((p) => p.featured)!;
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="section-padding relative"
    >
      <div className="container-custom">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Réalisations
            </p>
            <h2
              id="projects-title"
              className="text-3xl font-semibold tracking-tighter text-gradient sm:text-4xl md:text-5xl"
            >
              Des produits en production, pas des démos.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Sélection de projets illustrant ma capacité à couvrir le cycle
            complet : problème métier, architecture, code, delivery.
          </p>
        </div>

        {/* Featured project */}
        <article className="card-premium group relative mb-6 overflow-hidden p-8 md:p-10">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 opacity-60"
          >
            <div className="absolute inset-0 bg-gradient-mesh" />
          </div>

          <div className="grid gap-8 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <div className="mb-3 flex items-center gap-2">
                <Star className="h-3.5 w-3.5 text-foreground" aria-hidden />
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Projet phare
                </span>
              </div>
              <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                {featured.name}
              </h3>
              <p className="mt-1 text-muted-foreground">{featured.tagline}</p>

              <dl className="mt-6 space-y-4 text-sm">
                <div>
                  <dt className="mb-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Problème
                  </dt>
                  <dd className="text-foreground/90">{featured.problem}</dd>
                </div>
                <div>
                  <dt className="mb-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Solution
                  </dt>
                  <dd className="text-foreground/90">{featured.solution}</dd>
                </div>
                <div>
                  <dt className="mb-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Résultat
                  </dt>
                  <dd className="text-foreground/90">{featured.outcome}</dd>
                </div>
              </dl>
            </div>

            <div className="flex flex-col justify-between gap-6 lg:col-span-2">
              <div className="flex flex-wrap gap-2">
                <span
                  className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium ${statusStyles[featured.status]}`}
                >
                  {featured.status}
                </span>
                {featured.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-border/60 bg-background/60 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                {featured.links?.demo && (
                  <Button asChild className="gap-2">
                    <a
                      href={featured.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Voir la démo
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </Button>
                )}
                {featured.links?.github && (
                  <Button variant="outline" asChild className="gap-2">
                    <a
                      href={featured.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                      Code source
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </article>

        {/* Grid of other projects */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <article
              key={p.name}
              className="card-premium group flex flex-col p-6"
            >
              <div className="mb-4 flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-base font-semibold tracking-tight">
                    {p.name}
                  </h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {p.tagline}
                  </p>
                </div>
                <span
                  className={`shrink-0 inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-medium ${statusStyles[p.status]}`}
                >
                  {p.status}
                </span>
              </div>

              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                <span className="text-foreground/80">Solution : </span>
                {p.solution}
              </p>

              <div className="mb-5 mt-auto flex flex-wrap gap-1.5">
                {p.stack.slice(0, 4).map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-border/60 bg-background/50 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2">
                {p.links?.demo && (
                  <Button
                    size="sm"
                    variant="outline"
                    asChild
                    className="h-8 gap-1.5 text-xs"
                  >
                    <a
                      href={p.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Démo
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  </Button>
                )}
                {p.links?.github && (
                  <Button
                    size="sm"
                    variant="ghost"
                    asChild
                    className="h-8 gap-1.5 text-xs"
                  >
                    <a
                      href={p.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-3 w-3" />
                      GitHub
                    </a>
                  </Button>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTAs */}
        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button variant="outline" asChild className="gap-2">
            <a
              href="https://github.com/jonas-so"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" />
              Tous mes projets GitHub
            </a>
          </Button>
          <Button asChild className="gap-2">
            <a href="#contact">
              Discuter d'un projet
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
