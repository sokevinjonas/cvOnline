import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * BlogSection — Grille d'embeds LinkedIn.
 * Chaque entrée du tableau POSTS correspond à un post LinkedIn intégré.
 */
interface Post {
  embedUrl: string;
  title: string; // utilisé pour le title="" (accessibilité), pas affiché
}

const POSTS: Post[] = [
  {
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:share:7424869514787446784?collapsed=1",
    title: "Post LinkedIn de SO Kevin Jonas — 1",
  },
  // Ajoute tes autres posts ici, ex :
  {
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:activity:7414198692104040448?collapsed=1",
    title: "Post LinkedIn de SO Kevin Jonas — 2",
  },
  {
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:share:7375834831756247040?collapsed=1",
    title: "Post LinkedIn de SO Kevin Jonas — 3",
  },
  {
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:share:7375831080811122688?collapsed=1",
    title: "Post LinkedIn de SO Kevin Jonas — 4",
  },
  {
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:share:7373380649786916866?collapsed=1",
    title: "Post LinkedIn de SO Kevin Jonas — 5",
  },
  {
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:share:7373365598283689984?collapsed=1",
    title: "Post LinkedIn de SO Kevin Jonas — 6",
  }
];

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

        <div className="grid justify-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post) => (
            <div
              key={post.embedUrl}
              className="card-premium overflow-hidden rounded-2xl p-2"
            >
              <iframe
                src={post.embedUrl}
                height="670"
                width="504"
                frameBorder="0"
                allowFullScreen
                title={post.title}
                className="max-w-full"
              />
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button variant="outline" asChild className="gap-2">
            <a
              href="https://linkedin.com/in/so-kevin-jonas"
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