import { Card, CardContent } from "@/components/ui/card";
import { User, Target, Lightbulb, Heart } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Orienté Solutions",
      description: "J'aime résoudre des problèmes complexes avec des solutions élégantes et efficaces."
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Innovation",
      description: "Toujours à l'affût des dernières technologies pour créer des expériences utilisateur exceptionnelles."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Passion",
      description: "Le développement est plus qu'un métier, c'est une passion que je partage à travers mes contenus."
    }
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

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
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
              révolutionner la gestion des ateliers de couture. Cette expérience m'a permis de maîtriser 
              toute la chaîne de développement, de la conception à la mise en production.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              Parallèlement au développement, je suis actif sur <strong>LinkedIn</strong> où je partage 
              mes connaissances et mon expérience avec la communauté des développeurs africains.
            </p>

            <div className="pt-4">
              <h4 className="font-semibold mb-3">Technologies principales :</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'Angular', 'Ionic', 'Laravel', 'TypeScript', 'PHP', 
                  'Supabase', 'MySQL', 'Tailwind CSS', 'Git'
                ].map((tech) => (
                  <span key={tech} className="skill-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Values Cards */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Mes valeurs</h3>
            {values.map((value, index) => (
              <Card key={index} className="card-hover border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {value.icon}
                    </div>
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