import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Github, Linkedin, Download } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Header — Sticky, blur, hairline animée au scroll.
 * Nav : Accueil · Expertise · Réalisations · À propos · Contact
 * Droite : LinkedIn · GitHub · Télécharger CV
 */
const NAV_ITEMS = [
  { label: "Accueil", href: "#hero" },
  { label: "Expertise", href: "#expertise" },
  { label: "Réalisations", href: "#projects" },
  { label: "À propos", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent bg-background/40 backdrop-blur-md"
      )}
    >
      <nav
        aria-label="Navigation principale"
        className="container-custom flex h-16 items-center justify-between"
      >
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#hero");
          }}
          className="group flex items-center gap-2"
        >
          <span
            aria-hidden
            className="grid h-8 w-8 place-items-center rounded-lg border border-border bg-secondary/60 text-sm font-bold tracking-tight"
          >
            SK
          </span>
          <span className="hidden text-sm font-semibold tracking-tight sm:inline">
            SO Kevin Jonas
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => scrollToSection(item.href)}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="hidden items-center gap-1 md:flex">
          <Button variant="ghost" size="icon" asChild aria-label="LinkedIn">
            <a
              href="https://linkedin.com/in/jonas-so"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild aria-label="GitHub">
            <a
              href="https://github.com/jonas-so"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" />
            </a>
          </Button>
          <Button size="sm" className="ml-2 gap-2" asChild>
            <a href="/cv-so-kevin-jonas.pdf" download>
              <Download className="h-3.5 w-3.5" />
              CV
            </a>
          </Button>
        </div>

        {/* Mobile trigger */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((v) => !v)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-border/60 bg-background/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 md:hidden",
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container-custom flex flex-col gap-1 py-4">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="rounded-md px-3 py-2.5 text-left text-sm text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground"
            >
              {item.label}
            </button>
          ))}
          <div className="mt-2 flex items-center gap-2 border-t border-border/60 pt-3">
            <Button variant="outline" size="sm" asChild className="flex-1">
              <a
                href="https://linkedin.com/in/jonas-so"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-1.5 h-4 w-4" /> LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild className="flex-1">
              <a
                href="https://github.com/jonas-so"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-1.5 h-4 w-4" /> GitHub
              </a>
            </Button>
            <Button size="sm" asChild className="flex-1">
              <a href="/cv-so-kevin-jonas.pdf" download>
                <Download className="mr-1.5 h-3.5 w-3.5" /> CV
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
