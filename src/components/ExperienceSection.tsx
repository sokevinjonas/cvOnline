import { Briefcase, MapPin } from "lucide-react";

/**
 * ExperienceSection — Timeline verticale des expériences pros.
 * Design ligne + node, hover révèle une ombre légère.
 */
interface Experience {
  company: string;
  role: string;
  period: string;
  location?: string;
  achievements: string[];
  stack: string[];
}

const EXPERIENCES: Experience[] = [
  {
    company: "2K Corporation",
    role: "Consultant Développeur Backend & DevOps",
    period: "Avril 2026 — Juin 2026",
    achievements: [
      "Refonte et amélioration de la scalabilité du backend d'une application existante : optimisation de l'architecture et des performances.",
      "Déploiement et gestion des environnements techniques : mise en production, configuration des services et maintenance évolutive.",
    ],
    stack: ["Laravel", "Docker", "PostgreSQL", "CI/CD"],
  },
  {
    company: "HSN Consult",
    role: "Développeur Logiciel Odoo — Stage",
    period: "Février 2026 — Mars 2026",
    achievements: [
      "Personnalisation et évolution d'une solution Odoo existante : analyse des besoins métiers.",
      "Développement de nouveaux modules et fonctionnalités avec Python/XML pour améliorer les processus de gestion.",
    ],
    stack: ["Python", "XML", "Odoo", "PostgreSQL"],
  },
  {
    company: "YULCOM Technologies",
    role: "Développeur Full Stack — Stage",
    period: "Juillet 2025 — Décembre 2025",
    achievements: [
      "Développement et évolution de 3 applications web (front-end & back-end), avec intégration de correctifs.",
      "Contribution à la qualité logicielle (QA) : tests, validation des fonctionnalités, interviews terrain et formation des utilisateurs finaux.",
    ],
    stack: ["Angular", "Laravel", "PostgreSQL"],
  },
  {
    company: "KULTURA",
    role: "Consultant Développeur — Mission de consulting",
    period: "Juin 2025 — Aujourd'hui",
    achievements: [
      "Analyse des besoins métiers, rédaction du cahier des charges et conception d'une solution digitale sur mesure.",
      "Développement d'un panel d'administration et d'un site web landing page.",
      "Maintenance, déploiement et formation des employés de l'atelier.",
    ],
    stack: ["Laravel", "React", "MySQL"],
  },
  {
    company: "Expertizlab Solutions",
    role: "Développeur Full Stack — Alternance",
    period: "Novembre 2022 — Novembre 2024",
    achievements: [
      "Plus de 10 applications web développées de bout en bout et contribution à 2 applications mobiles.",
      "Déploiement et accompagnement des utilisateurs finaux : formation, assistance et suivi d'adoption.",
    ],
    stack: ["Angular", "Laravel", "Ionic", "MySQL"],
  },
];

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="section-padding bg-card/30"
    >
      <div className="container-custom">
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Expériences
          </p>
          <h2
            id="experience-title"
            className="text-3xl font-semibold tracking-tighter text-gradient sm:text-4xl md:text-5xl"
          >
            4 ans à livrer en production.
          </h2>
        </div>

        <ol className="relative space-y-8 border-l border-border pl-6 md:pl-10">
          {EXPERIENCES.map((exp, i) => (
            <li key={`${exp.company}-${i}`} className="relative">
              {/* Timeline node */}
              <span
                aria-hidden
                className="absolute -left-[calc(1.5rem+5px)] top-1.5 grid h-3 w-3 place-items-center rounded-full border border-border bg-background md:-left-[calc(2.5rem+5px)]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
              </span>

              <article className="card-premium p-6 md:p-7">
                <header className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                      {exp.period}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold tracking-tight">
                      {exp.role}
                    </h3>
                    <p className="mt-0.5 flex items-center gap-2 text-sm text-muted-foreground">
                      <Briefcase className="h-3.5 w-3.5" aria-hidden />
                      {exp.company}
                      {exp.location && (
                        <>
                          <span aria-hidden>·</span>
                          <MapPin className="h-3.5 w-3.5" aria-hidden />
                          {exp.location}
                        </>
                      )}
                    </p>
                  </div>
                </header>

                <ul className="mt-4 space-y-2">
                  {exp.achievements.map((a) => (
                    <li
                      key={a}
                      className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span
                        aria-hidden
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/50"
                      />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {exp.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-border/60 bg-background/50 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ExperienceSection;
