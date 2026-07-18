import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  Mail,
  MessageCircle,
  Phone,
  Linkedin,
  Github,
  MapPin,
  Clock,
  Languages,
  Send,
  ArrowUpRight,
} from "lucide-react";

/**
 * ContactSection — Grille split : infos + formulaire premium.
 * Disponibilité mise en avant (Freelance · Mission · CDI).
 */
const CONTACTS = [
  {
    icon: Mail,
    label: "Email",
    value: "jonas.so@example.com",
    href: "mailto:jonas.so@example.com",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+226 XX XX XX XX",
    href: "https://wa.me/226XXXXXXXX",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "+226 XX XX XX XX",
    href: "tel:+226XXXXXXXX",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/jonas-so",
    href: "https://linkedin.com/in/jonas-so",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/jonas-so",
    href: "https://github.com/jonas-so",
  },
] as const;

const META = [
  { icon: MapPin, label: "Basé à", value: "Ouagadougou, Burkina Faso" },
  { icon: Clock, label: "Fuseau", value: "UTC+0 (GMT)" },
  { icon: Languages, label: "Langues", value: "Français, Anglais" },
] as const;

const ContactSection = () => {
  const { toast } = useToast();
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    // Fake latency — brancher un endpoint réel plus tard
    setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast({
        title: "Message envoyé",
        description: "Je vous réponds sous 24h. Merci !",
      });
    }, 800);
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="section-padding relative overflow-hidden"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 bottom-0 h-[500px] bg-gradient-radial opacity-70" />
      </div>

      <div className="container-custom">
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Contact
          </p>
          <h2
            id="contact-title"
            className="text-3xl font-semibold tracking-tighter text-gradient sm:text-4xl md:text-5xl"
          >
            Discutons de votre projet.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Je réponds à chaque message sous 24h ouvrées. Que ce soit une
            mission courte, un projet long ou un simple échange technique.
          </p>
        </div>

        {/* Availability banner */}
        <div className="mb-8 flex flex-wrap items-center gap-3 rounded-2xl border border-border bg-card p-4">
          <span className="chip">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Disponible
          </span>
          <span className="text-sm text-muted-foreground">Ouvert aux :</span>
          <div className="flex flex-wrap gap-2">
            {["Freelance", "Mission ponctuelle", "CDI", "Consulting"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-5">
          {/* Left: infos */}
          <div className="space-y-6 lg:col-span-2">
            <ul className="card-premium divide-y divide-border overflow-hidden">
              {CONTACTS.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-4 p-5 transition-colors hover:bg-accent"
                  >
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-border bg-secondary/50 text-foreground/70 group-hover:text-foreground">
                      <c.icon className="h-4 w-4" aria-hidden />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                        {c.label}
                      </p>
                      <p className="truncate text-sm font-medium">{c.value}</p>
                    </div>
                    <ArrowUpRight
                      className="h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
                      aria-hidden
                    />
                  </a>
                </li>
              ))}
            </ul>

            <ul className="card-premium divide-y divide-border overflow-hidden">
              {META.map((m) => (
                <li key={m.label} className="flex items-center gap-4 p-5">
                  <m.icon
                    className="h-4 w-4 shrink-0 text-muted-foreground"
                    aria-hidden
                  />
                  <div className="min-w-0 flex-1">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      {m.label}
                    </p>
                    <p className="text-sm font-medium">{m.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: form */}
          <form
            onSubmit={handleSubmit}
            className="card-premium space-y-5 p-6 md:p-8 lg:col-span-3"
            aria-label="Formulaire de contact"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Nom complet</Label>
                <Input
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="Votre nom"
                  className="h-11"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="vous@entreprise.com"
                  className="h-11"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Entreprise (optionnel)</Label>
              <Input
                id="company"
                name="company"
                autoComplete="organization"
                placeholder="Nom de la société"
                className="h-11"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Sujet</Label>
              <Input
                id="subject"
                name="subject"
                required
                placeholder="Ex. Développement d'un SaaS de gestion"
                className="h-11"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Votre message</Label>
              <Textarea
                id="message"
                name="message"
                required
                placeholder="Décrivez brièvement votre projet, votre équipe, votre calendrier..."
                rows={6}
                className="resize-none"
              />
            </div>

            <div className="flex flex-col-reverse items-start gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-muted-foreground">
                En envoyant ce formulaire, vous acceptez d'être recontacté par
                email.
              </p>
              <Button
                type="submit"
                size="lg"
                disabled={sending}
                className="btn-shine gap-2"
              >
                <Send className="h-4 w-4" />
                {sending ? "Envoi..." : "Envoyer le message"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
