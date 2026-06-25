import { Card, CardContent } from "@/components/ui/card";
import { User, Target, Lightbulb, Heart, Code2, Sparkles } from "lucide-react";
import jonasPortrait from "@/assets/jonas-portrait.jpg";

const AboutSection = () => {
  const values = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Orienté Solutions",
      description: "J'aime résoudre des problèmes complexes avec des solutions élégantes et efficaces.",
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Innovation",
      description: "Toujours à l'affût des dernières technologies pour créer des expériences utilisateur exceptionnelles.",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Passion",
      description: "Le développement est plus qu'un métier, c'est une passion que je partage à travers mes contenus.",
    },
  ];

  // Technologies with category + accent
  const technologies = [
    { name: "Angular", category: "Frontend", initial: "A" },
    { name: "Ionic", category: "Mobile", initial: "I" },
    { name: "React", category: "Frontend", initial: "R" },
    { name: "TypeScript", category: "Language", initial: "TS" },
    { name: "Laravel", category: "Backend", initial: "L" },
    { name: "PHP", category: "Language", initial: "P" },
    { name: "Supabase", category: "Backend", initial: "S" },
    { name: "MySQL", category: "Database", initial: "DB" },
    { name: "Tailwind", category: "UI", initial: "TW" },
    { name: "Git", category: "Tools", initial: "G" },
  ];

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            À propos de <span className="hero-text">moi</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Développeur passionné par l'innovation et la création de solutions qui ont un impact réel
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Portrait */}
          <div className="lg:col-span-5">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-primary rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative overflow-hidden rounded-3xl border border-border shadow-strong">
                <img
                  src={jonasPortrait}
                  alt="SO Kevin Jonas Gningnabe, développeur FullStack au Burkina Faso"
                  width={1024}
                  height={1536}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-background border border-border rounded-2xl px-4 py-3 shadow-medium flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-sm font-medium">Disponible pour missions</span>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <User className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-semibold">Mon parcours</h3>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Basé au <strong>Burkina Faso</strong>, je suis un développeur FullStack avec plus de 3 ans d'expérience
              dans la création d'applications web et mobiles. Ma spécialité réside dans l'écosystème
              <strong> Angular/Ionic</strong> pour le frontend et <strong>Laravel</strong> pour le backend.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Mon projet phare, <strong className="text-foreground">Couturart</strong>, est un SaaS conçu pour
              révolutionner la gestion des ateliers de couture. Cette expérience m'a permis de maîtriser toute la
              chaîne de développement, de la conception à la mise en production.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Parallèlement au développement, je suis actif sur <strong>LinkedIn</strong> où je partage mes
              connaissances et mon expérience avec la communauté des développeurs africains.
            </p>

            {/* Technologies — refonte */}
            <div className="pt-6">
              <div className="flex items-center gap-2 mb-5">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Code2 className="h-5 w-5" />
                </div>
                <h4 className="text-lg font-semibold">Technologies principales</h4>
                <Sparkles className="h-4 w-4 text-primary ml-auto" />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="group relative flex items-center gap-3 p-3 rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-medium transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-primary text-primary-foreground text-sm font-bold shadow-soft">
                      {tech.initial}
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold truncate">{tech.name}</div>
                      <div className="text-[11px] text-muted-foreground truncate">{tech.category}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold mb-8 text-center">Mes valeurs</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="card-hover border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">{value.icon}</div>
                    <div>
                      <h4 className="font-semibold mb-2">{value.title}</h4>
                      <p className="text-muted-foreground text-sm">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
