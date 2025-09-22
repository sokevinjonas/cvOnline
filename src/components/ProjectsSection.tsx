import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Users, TrendingUp, Star } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Couturart SaaS",
      description: "Plateforme SaaS complète pour la gestion d'ateliers de couture. Gestion des commandes, clients, stock et facturation.",
      image: "/placeholder.svg",
      technologies: ["Angular", "Ionic", "Laravel", "MySQL", "Stripe"],
      metrics: {
        users: "50+",
        growth: "+150%",
        rating: "4.8/5"
      },
      highlights: [
        "Interface mobile et web responsive",
        "Système de facturation automatisé",
        "Gestion multi-ateliers",
        "Tableau de bord analytique"
      ],
      status: "En production",
      links: {
        demo: "https://couturart.com",
        github: "#"
      }
    },
    {
      title: "Portfolio Développeur",
      description: "Template de portfolio moderne pour développeurs avec mini-jeu algorithmique intégré et système de blog.",
      image: "/placeholder.svg",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
      metrics: {
        users: "100+",
        growth: "+200%",
        rating: "4.9/5"
      },
      highlights: [
        "Design moderne et responsive",
        "Mini-jeu algorithmique",
        "Système de blog intégré",
        "SEO optimisé"
      ],
      status: "Open Source",
      links: {
        demo: "#",
        github: "https://github.com/jonas-so/portfolio"
      }
    },
    {
      title: "API REST Laravel",
      description: "API robuste pour applications mobiles avec authentification JWT, gestion des rôles et documentation Swagger.",
      image: "/placeholder.svg",
      technologies: ["Laravel", "PHP", "JWT", "Swagger", "Docker"],
      metrics: {
        users: "25+",
        growth: "+80%",
        rating: "4.7/5"
      },
      highlights: [
        "Architecture scalable",
        "Tests automatisés",
        "Documentation complète",
        "Déploiement containerisé"
      ],
      status: "En développement",
      links: {
        demo: "#",
        github: "https://github.com/jonas-so/laravel-api"
      }
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mes <span className="hero-text">Projets</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez quelques-uns de mes projets qui illustrent ma passion pour le développement et l'innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover group overflow-hidden">
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant={project.status === "En production" ? "default" : "secondary"}>
                    {project.status}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {project.title}
                  <div className="flex gap-2">
                    {project.links.demo !== "#" && (
                      <Button variant="ghost" size="sm" asChild>
                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {project.links.github !== "#" && (
                      <Button variant="ghost" size="sm" asChild>
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">{project.description}</p>
                
                {/* Metrics */}
                <div className="flex justify-between text-sm">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-primary" />
                    <span>{project.metrics.users} utilisateurs</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="h-4 w-4 text-green-500" />
                    <span>{project.metrics.growth}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span>{project.metrics.rating}</span>
                  </div>
                </div>
                
                {/* Highlights */}
                <div className="space-y-1">
                  <h5 className="font-medium text-sm">Points clés :</h5>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-primary rounded-full"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/jonas-so" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              Voir tous mes projets sur GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;