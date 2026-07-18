import { ArrowUpRight, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * BlogSection — Style éditorial minimaliste (à la Vercel /blog).
 * Liste plutôt que cartes lourdes : titre + méta + tags.
 */
interface Post {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  url: string;
}

const POSTS: Post[] = [
  {
    title: "Structurer une application Angular scalable",
    excerpt:
      "Modules, lazy-loading, state, séparation domaine/UI : les fondations qui évitent la dette technique.",
    date: "2024-01-15",
    readTime: "8 min",
    tags: ["Angular", "Architecture"],
    url: "https://linkedin.com/in/jonas-so",
  },
  {
    title: "Laravel + Ionic : stack pragmatique pour le mobile",
    excerpt:
      "Retour d'expérience Couturart : API Laravel + client Ionic, ce qui fonctionne vraiment en production.",
    date: "2024-01-08",
    readTime: "6 min",
    tags: ["Laravel", "Ionic", "Mobile"],
    url: "https://linkedin.com/in/jonas-so",
  },
  {
    title: "Construire un SaaS en Afrique : leçons apprises",
    excerpt:
      "Contraintes de paiement, réalités bandwidth, adoption. Ce que j'ai appris en lançant Couturart.",
    date: "2023-12-20",
    readTime: "12 min",
    tags: ["SaaS", "Produit"],
    url: "https://linkedin.com/in/jonas-so",
  },
  {
    title: "TypeScript : 5 patterns pour du code robuste",
    excerpt:
      "Discriminated unions, template literals, branded types — écrire du TS qui prévient les bugs.",
    date: "2023-12-10",
    readTime: "5 min",
    tags: ["TypeScript"],
    url: "https://linkedin.com/in/jonas-so",
  },
];

const formatDate = (d: string) =>
  new Date(d).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

const BlogSection = () => {
  return (
    <section
      id="blog"
      aria-labelledby="blog-title"
      className="section-padding bg-card/30"
    >
      <div className="container-custom">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Écrits
            </p>
            <h2
              id="blog-title"
              className="text-3xl font-semibold tracking-tighter text-gradient sm:text-4xl md:text-5xl"
            >
              Je partage ce que j'apprends.
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            Retours d'expérience et notes techniques publiés sur LinkedIn.
          </p>
        </div>

        <ul className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
          {POSTS.map((post) => (
            <li key={post.title}>
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-4 p-6 transition-colors hover:bg-accent md:flex-row md:items-center md:justify-between md:p-8"
              >
                <div className="min-w-0 flex-1">
                  <div className="mb-2 flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span aria-hidden>·</span>
                    <span>{post.readTime}</span>
                    <span aria-hidden>·</span>
                    <span className="flex flex-wrap gap-1.5">
                      {post.tags.map((t) => (
                        <span key={t} className="text-foreground/70">
                          #{t}
                        </span>
                      ))}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight transition-colors group-hover:text-foreground md:text-xl">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                </div>
                <ArrowUpRight
                  className="hidden h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground md:block"
                  aria-hidden
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center">
          <Button variant="outline" asChild className="gap-2">
            <a
              href="https://linkedin.com/in/jonas-so"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-4 w-4" />
              Me suivre sur LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
