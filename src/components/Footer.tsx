import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Footer — sobre, éditorial. Navigation + réseaux + retour top.
 */
const NAV = [
  { label: "Accueil", href: "#hero" },
  { label: "Expertise", href: "#expertise" },
  { label: "Expériences", href: "#experience" },
  { label: "Réalisations", href: "#projects" },
  { label: "À propos", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

const SOCIALS = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/so-kevin-jonas",
  },
  { icon: Github, label: "GitHub", href: "https://github.com/sokevinjonas" },
  { icon: Mail, label: "Email", href: "mailto:sokevin7@gmail.com" },
] as const;

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollTo = (href: string) => {
    if (href.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-border bg-background">
      <div className="container-custom py-16">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2">
              <span
                aria-hidden
                className="grid h-8 w-8 place-items-center rounded-lg border border-border bg-secondary/60 text-sm font-bold"
              >
                SK
              </span>
              <span className="text-sm font-semibold tracking-tight">
                SO Kevin Jonas Gningnabe
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Ingénieur Logiciel Full Stack · Consultant · Product Builder ·
              SaaS Founder. Basé à Ouagadougou, disponible pour missions en
              freelance.
            </p>
            <div className="mt-6 flex items-center gap-1">
              {SOCIALS.map((s) => (
                <Button
                  key={s.label}
                  variant="ghost"
                  size="icon"
                  asChild
                  aria-label={s.label}
                >
                  <a
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      s.href.startsWith("http") ? "noopener noreferrer" : undefined
                    }
                  >
                    <s.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Nav */}
          <nav aria-label="Pied de page" className="md:col-span-4">
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Navigation
            </p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
              {NAV.map((n) => (
                <li key={n.href}>
                  <button
                    onClick={() => scrollTo(n.href)}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {n.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Elsewhere */}
          <div className="md:col-span-3">
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Ailleurs
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://couturart.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Couturart →
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/so-kevin-jonas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  LinkedIn →
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/sokevinjonas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  GitHub →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse items-start justify-between gap-4 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">
            © {year} SO Kevin Jonas Gningnabe. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Ouagadougou · UTC+0
            </p>
            <Button
              variant="outline"
              size="icon"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Retour en haut"
              className="h-8 w-8"
            >
              <ArrowUp className="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;