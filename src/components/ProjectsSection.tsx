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
  category: "Client" | "Personnel" | "Open source";
  links?: { demo?: string; github?: string };
  featured?: boolean;
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
    category: "Personnel",
    links: { demo: "https://couturart.com" },
    featured: true,
  },
  {
    name: "Nanika — Anime Duel Mobile",
    tagline: "Jeu mobile PvP de quiz anime en temps réel",
    problem:
      "Les fans d'anime manquent d'un jeu de quiz compétitif et social alliant temps réel et progression narrative.",
    solution:
      "App mobile Expo/React Native avec duels PvP temps réel (Socket.io), mode solo contre IA et progression par arcs, connectée à un backend GraphQL.",
    outcome:
      "Architecture temps réel opérationnelle (Apollo Client + Socket.io), développement actif sur nan-ika.com.",
    stack: ["Expo", "React Native", "GraphQL", "Socket.io", "TypeScript"],
    status: "En développement",
    category: "Personnel",
  },
  {
    name: "Nanika API",
    tagline: "Backend GraphQL temps réel avec économie F2P",
    problem:
      "Le jeu Nanika nécessite un backend scalable gérant temps réel, monétisation F2P et anti-triche.",
    solution:
      "API NestJS avec GraphQL + WebSocket, cache Redis, paiements Monapaie/GeniusPay, IA (Groq/Bedrock) pour la génération de contenu.",
    outcome:
      "Backend testé en profondeur (216 tests Jest, load testing K6), déployé via CI/CD self-hosted (Gitea Actions).",
    stack: ["NestJS", "GraphQL", "PostgreSQL", "Redis", "Prisma"],
    status: "En développement",
    category: "Personnel",
  },
  {
    name: "Kultura",
    tagline: "Gestion complète d'atelier de couture",
    problem:
      "Un atelier de couture gère mesures, commandes et facturation manuellement, sans visibilité ni traçabilité.",
    solution:
      "Application web (Laravel) et mobile (React) : mesures clients, commandes, affectation des couturiers, stock tissus, facturation automatique et alertes SMS.",
    outcome:
      "Solution en production avec gestion fine des droits d'accès et statistiques avancées sur couturiers et clients.",
    stack: ["Laravel", "React", "MySQL"],
    status: "En production",
    category: "Client",
  },
  {
    name: "StopVol API",
    tagline: "API de déclaration et suivi de vols d'engins",
    problem:
      "Difficile de déclarer et suivre le vol d'une moto ou d'un engin deux-roues de façon centralisée et sécurisée.",
    solution:
      "API RESTful Laravel avec authentification OTP par SMS, architecture sécurisée (UUID), stockage de documents et notifications via queues.",
    outcome: "Projet terminé, open source, prêt pour intégration front.",
    stack: ["Laravel", "MySQL/PostgreSQL", "Sanctum", "OTP"],
    status: "Case study",
    category: "Open source",
    links: { github: "https://github.com/sokevinjonas/StopVol-API" },
  },
  {
    name: "Amadeus",
    tagline: "Plateforme de réservation de billets d'avion pour entreprises",
    problem:
      "Les entreprises réservent leurs billets directement à l'aéroport, sans centralisation ni suivi.",
    solution:
      "Plateforme Laravel permettant aux entreprises de passer par une agence pour réserver et gérer leurs billets.",
    outcome: "Solution en production, utilisée par l'agence et ses clients entreprises.",
    stack: ["Laravel", "MySQL"],
    status: "En production",
    category: "Client",
    links: { github: "https://github.com/ibrahpremier/amadeus-plateforme" },
  },
  {
    name: "Gest-Microfin",
    tagline: "Digitalisation de la collecte pour institutions de microfinance",
    problem:
      "Les agents de microfinance collectent l'argent sur cahier papier, sans traçabilité ni reporting fiable.",
    solution:
      "Plateforme permettant aux entreprises de microfinance de digitaliser leur processus de collecte.",
    outcome: "Solution déployée en production, remplaçant le suivi papier.",
    stack: ["Laravel", "MySQL"],
    status: "En production",
    category: "Client",
    links: { github: "https://github.com/ibrahpremier/gest-microfin" },
  },
  {
    name: "Seen-Releveur",
    tagline: "App mobile de relevé de compteurs pour l'ONEA",
    problem: "Les releveurs de compteurs d'eau opèrent sans outil mobile centralisé.",
    solution: "Application mobile Ionic/Angular dédiée au relevé de compteurs sur le terrain.",
    outcome: "Solution en production, utilisée par les releveurs de l'ONEA.",
    stack: ["Ionic", "Angular"],
    status: "En production",
    category: "Client",
    links: { github: "https://github.com/ibrahpremier/seen-releveur" },
  },
  {
    name: "Gest-Club",
    tagline: "Plateforme de gestion pour club service (Rotary Ouaga)",
    problem:
      "Un club service doit suivre présences, cotisations, mandats et missions sans outil digital adapté.",
    solution:
      "Plateforme Laravel de gestion complète : présence, rencontres, cotisations, mandats et missions.",
    outcome: "Solution en production pour le Rotary Club Ouaga.",
    stack: ["Laravel", "MySQL"],
    status: "En production",
    category: "Client",
  },
  {
    name: "Manager App",
    tagline: "Gestion de points de vente",
    problem: "Les commerces manquent d'un outil unifié pour gérer leurs points de vente.",
    solution: "Application de gestion de point de vente : front mobile Ionic et backend Laravel.",
    outcome: "Solution en production chez plusieurs clients commerçants.",
    stack: ["Ionic", "Laravel"],
    status: "En production",
    category: "Client",
  },
  {
    name: "Rocky DevOps Environment",
    tagline: "Laboratoire DevOps local automatisé",
    problem:
      "Manque d'environnement proche d'un serveur d'entreprise pour pratiquer l'administration et le déploiement.",
    solution:
      "Lab automatisé (Vagrant, VirtualBox, Rocky Linux 9, Docker, Docker Compose) pour s'entraîner à l'administration Linux, l'IaC et la conteneurisation.",
    outcome: "Environnement reproductible utilisé pour monter en compétence DevOps.",
    stack: ["Vagrant", "Docker", "Rocky Linux", "VirtualBox"],
    status: "Case study",
    category: "Open source",
    links: { github: "https://github.com/sokevinjonas/rocky-devops" },
  },
  {
    name: "Prédiction des Jours de Forte Vente",
    tagline: "Machine learning pour anticiper les pics de vente",
    problem:
      "Les commerçants ouest-africains gèrent leur stock à l'instinct, causant surstockage ou ruptures.",
    solution:
      "Système de machine learning qui prédit les jours de forte affluence pour optimiser stock, personnel et logistique.",
    outcome: "Réduction des ruptures de stock de 30 à 50 % grâce à des prévisions fiables.",
    stack: ["Python", "Machine Learning"],
    status: "Case study",
    category: "Open source",
    links: { github: "https://github.com/sokevinjonas/Pr-diction-des-Jours-de-Forte-Vente" },
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
              href="https://github.com/sokevinjonas"
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
