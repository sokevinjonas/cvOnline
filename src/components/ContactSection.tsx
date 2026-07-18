import {
  Mail,
  MessageCircle,
  Phone,
  Linkedin,
  Github,
  MapPin,
  Clock,
  Languages,
  ArrowUpRight,
} from "lucide-react";

/**
 * ContactSection — Infos de contact directes, sans formulaire.
 * Disponibilité mise en avant (Freelance · Mission · CDI).
 */
const CONTACTS = [
  {
    icon: Mail,
    label: "Email",
    value: "sokevin7@gmail.com",
    href: "mailto:sokevin7@gmail.com",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+226 52 64 56 34",
    href: "https://wa.me/22652645634",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "+226 52 64 56 34",
    href: "tel:+22652645634",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "SO Kevin Jonas",
    href: "https://linkedin.com/in/so-kevin-jonas",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/sokevinjonas",
    href: "https://github.com/sokevinjonas",
  },
] as const;

const META = [
  { icon: MapPin, label: "Basé à", value: "Ouagadougou, Burkina Faso" },
  { icon: Clock, label: "Fuseau", value: "UTC+0 (GMT)" },
  { icon: Languages, label: "Langues", value: "Français, Anglais (B1)" },
] as const;

const ContactSection = () => {
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

        {/* Contact infos */}
        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
          <ul className="card-premium divide-y divide-border overflow-hidden sm:col-span-2">
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

          <ul className="card-premium divide-y divide-border overflow-hidden sm:col-span-2">
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
      </div>
    </section>
  );
};

export default ContactSection;