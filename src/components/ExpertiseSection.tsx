import {
  Globe,
  Smartphone,
  Cloud,
  Boxes,
  Database,
  Cpu,
  GitBranch,
  Workflow,
  LayoutDashboard,
  Lightbulb,
  Container,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/**
 * ExpertiseSection — Grille bento des capacités.
 * On vend de la valeur, pas des mots-clés : chaque carte a un titre,
 * une promesse et un stack ciblé.
 */
interface Capability {
  icon: LucideIcon;
  title: string;
  description: string;
  stack: string[];
  featured?: boolean;
}

const CAPABILITIES: Capability[] = [
  {
    icon: Cloud,
    title: "Logiciels SaaS",
    description:
      "Conception et industrialisation de plateformes métier, du modèle de données au déploiement.",
    stack: ["Laravel", "PostgreSQL", "Docker"],
    featured: true,
  },
  {
    icon: Globe,
    title: "Applications Web",
    description:
      "Interfaces rapides, accessibles et scalables pour le web moderne.",
    stack: ["Angular", "React.js", "TypeScript"],
  },
  {
    icon: Smartphone,
    title: "Applications Mobile",
    description:
      "Apps iOS/Android performantes en une base de code, temps réel inclus.",
    stack: ["React Native", "Ionic"],
  },
  {
    icon: Boxes,
    title: "API REST & GraphQL",
    description:
      "Backends robustes, documentés, sécurisés — prêts pour la production.",
    stack: ["NestJS", "Laravel", "GraphQL"],
  },
  {
    icon: LayoutDashboard,
    title: "ERP · Back-offices",
    description:
      "Personnalisation et évolution de solutions métier sur-mesure.",
    stack: ["Odoo", "Python/XML", "Angular"],
  },
  {
    icon: Container,
    title: "DevOps & Déploiement",
    description:
      "Conteneurisation, CI/CD, environnements reproductibles, mises en prod sereines.",
    stack: ["Docker", "Vagrant", "CI/CD"],
  },
  {
    icon: Database,
    title: "Architecture Backend",
    description:
      "Modélisation, Clean Architecture, MVC — des fondations qui tiennent.",
    stack: ["PostgreSQL", "MySQL", "Clean Architecture"],
  },
  {
    icon: Lightbulb,
    title: "Consulting technique",
    description:
      "Audit de code, cadrage produit, rédaction de cahiers des charges et accompagnement client.",
    stack: ["Audit", "Cadrage", "Roadmap"],
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description:
      "Suivi fonctionnel, correctifs, tests et accompagnement des utilisateurs finaux.",
    stack: ["Postman", "Tests QA", "Git"],
  },
];

const ExpertiseSection = () => {
  return (
    <section
      id="expertise"
      aria-labelledby="expertise-title"
      className="section-padding relative overflow-hidden"
    >
      {/* Ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-lines opacity-40" />
      </div>

      <div className="container-custom">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Expertise
            </p>
            <h2
              id="expertise-title"
              className="text-3xl font-semibold tracking-tighter text-gradient sm:text-4xl md:text-5xl"
            >
              Ce que je conçois, code et déploie.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            De l'idée au produit en production — un seul interlocuteur pour
            couvrir toute la chaîne technique.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((c) => (
            <article
              key={c.title}
              className={`card-premium group relative flex flex-col gap-4 p-6 ${
                c.featured ? "lg:col-span-2 lg:row-span-1" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-secondary/50 text-foreground/80 transition-colors group-hover:text-foreground">
                  <c.icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="text-base font-semibold tracking-tight">
                  {c.title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {c.description}
              </p>
              <div className="mt-auto flex flex-wrap gap-1.5">
                {c.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-border/60 bg-background/50 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Process ribbon */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-border bg-card p-6 text-sm text-muted-foreground">
          <Workflow className="h-4 w-4 shrink-0" aria-hidden />
          <span className="font-medium text-foreground">Process :</span>
          <span>Cadrage</span>
          <span aria-hidden>·</span>
          <span>Architecture</span>
          <span aria-hidden>·</span>
          <span>Prototypage</span>
          <span aria-hidden>·</span>
          <span>Développement</span>
          <span aria-hidden>·</span>
          <span>Tests</span>
          <span aria-hidden>·</span>
          <span>Déploiement</span>
          <span aria-hidden>·</span>
          <span>Maintenance</span>
          <GitBranch className="h-4 w-4 shrink-0" aria-hidden />
          <Cpu className="hidden h-4 w-4 shrink-0 md:block" aria-hidden />
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
