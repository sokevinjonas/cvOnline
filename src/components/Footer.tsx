import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Accueil", href: "#hero" },
    { label: "À propos", href: "#about" },
    { label: "Projets", href: "#projects" },
    { label: "Blog", href: "#blog" },
    { label: "Quiz", href: "#quiz" },
    { label: "Contact", href: "#contact" },
  ];

  const projects = [
    { label: "Couturart SaaS", href: "https://couturart.com" },
    { label: "Portfolio Template", href: "#" },
    { label: "Laravel API", href: "#" },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.open(href, '_blank');
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">SO Kevin Jonas Gningnabe</h3>
              <p className="text-muted-foreground max-w-md">
                Développeur FullStack passionné par l'innovation technologique et l'entrepreneuriat en Afrique. 
                Créateur de solutions digitales qui font la différence.
              </p>
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm" asChild>
                  <a href="https://linkedin.com/in/jonas-so" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a href="https://github.com/jonas-so" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a href="mailto:jonas.so@example.com">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="font-semibold mb-4">Projets</h4>
            <ul className="space-y-2">
              {projects.map((project) => (
                <li key={project.label}>
                  <button
                    onClick={() => scrollToSection(project.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {project.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {currentYear} Jonas Kevin SO. Tous droits réservés.
          </div>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>Développé avec ❤️ au Burkina Faso</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="p-2"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;