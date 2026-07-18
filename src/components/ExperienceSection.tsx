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
    role: "Consultant Backend & DevOps",
    period: "2024 — Présent",
    achievements: [
      "Optimisation backend et amélioration des performances applicatives.",
      "Mise en place de stratégies de scalabilité et de résilience.",
      "Automatisation des déploiements et maintenance continue.",
    ],
    stack: ["Laravel", "Docker", "PostgreSQL", "CI/CD"],
  },
  {
    company: "Expertizlab Solutions",
    role: "Développeur Full Stack",
    period: "2022 — 2024",
    achievements: [
      "Plus de 10 applications web développées de bout en bout.",
      "2 applications mobiles livrées en production.",
      "Encadrement technique et revues de code.",
    ],
    stack: ["Angular", "Laravel", "Ionic", "MySQL"],
  },
  {
    company: "YULCOM Technologies",
    role: "Développeur Full Stack",
    period: "2021 — 2022",
    achievements: [
      "3 applications web livrées.",
      "Assurance qualité et tests fonctionnels.",
      "Formation des utilisateurs finaux.",
    ],
    stack: ["Angular", "Laravel", "PostgreSQL"],
  },
  {
    company: "HSN Consult",
    role: "Développeur Odoo",
    period: "2020 — 2021",
    achievements: [
      "Développement de modules Odoo sur-mesure.",
      "Intégration métier ERP pour clients grands comptes.",
    ],
    stack: ["Python", "XML", "Odoo", "PostgreSQL"],
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
