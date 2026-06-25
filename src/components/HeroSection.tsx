import { Button } from "@/components/ui/button";
import { ChevronDown, Code, Lightbulb } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-gradient-subtle">
      <div className="container-custom text-center space-y-8 animate-fade-in">
        {/* Main Title */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground">
            SO Kevin Jonas Gningnabe
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium">
            Développeur FullStack & Créateur de contenu
          </h2>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Spécialisé en <span className="text-foreground font-semibold">Angular, Ionic, Laravel</span> et 
          passionné par la création de solutions innovantes. Créateur de 
          <span className="text-foreground font-semibold"> Couturart</span>, un SaaS pour les couturières.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 py-8">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-foreground">3+</div>
            <div className="text-muted-foreground">Années d'expérience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-foreground">10+</div>
            <div className="text-muted-foreground">Projets réalisés</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-foreground">5K+</div>
            <div className="text-muted-foreground">Vues LinkedIn</div>
          </div>
        </div>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:opacity-90 transition-opacity"
            onClick={() => scrollToSection('#projects')}
          >
            <Code className="mr-2 h-5 w-5" />
            Voir mes projets
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => scrollToSection('#contact')}
          >
            <Lightbulb className="mr-2 h-5 w-5" />
            Parlons de votre projet
          </Button>
        </div>

        {/* Technology badges */}
        <div className="flex flex-wrap justify-center gap-2 pt-8">
          {['Angular', 'Ionic', 'Laravel', 'Supabase', 'TypeScript', 'Tailwind CSS'].map((tech) => (
            <span key={tech} className="skill-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={() => scrollToSection('#about')}
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors animate-bounce-subtle"
        >
          <ChevronDown className="h-6 w-6 text-primary" />
        </button>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default HeroSection;