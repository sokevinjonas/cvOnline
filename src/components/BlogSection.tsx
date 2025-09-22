import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Eye, ThumbsUp, ExternalLink, Linkedin } from "lucide-react";

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Comment structurer une application Angular scalable",
      excerpt: "Guide complet pour organiser votre code Angular de manière modulaire et maintenable. Architecture, bonnes pratiques et exemples concrets.",
      date: "2024-01-15",
      views: "2.5K",
      likes: "127",
      tags: ["Angular", "Architecture", "Best Practices"],
      readTime: "8 min",
      linkedinUrl: "https://linkedin.com/posts/jonas-so-angular-architecture"
    },
    {
      title: "Laravel + Ionic : Stack parfait pour le développement mobile",
      excerpt: "Retour d'expérience sur l'utilisation de Laravel comme backend API avec Ionic pour créer des applications mobiles performantes.",
      date: "2024-01-08",
      views: "1.8K",
      likes: "89",
      tags: ["Laravel", "Ionic", "Mobile"],
      readTime: "6 min",
      linkedinUrl: "https://linkedin.com/posts/jonas-so-laravel-ionic"
    },
    {
      title: "Créer un SaaS rentable en Afrique : Mon expérience avec Couturart",
      excerpt: "Les défis et opportunités du développement SaaS en Afrique. Comment j'ai conçu et lancé Couturart pour répondre aux besoins locaux.",
      date: "2023-12-20",
      views: "3.2K",
      likes: "201",
      tags: ["SaaS", "Entrepreneuriat", "Afrique"],
      readTime: "12 min",
      linkedinUrl: "https://linkedin.com/posts/jonas-so-couturart-saas"
    },
    {
      title: "TypeScript : 5 astuces avancées pour être plus productif",
      excerpt: "Découvrez des techniques TypeScript avancées qui vont améliorer votre productivité et la qualité de votre code au quotidien.",
      date: "2023-12-10",
      views: "1.5K",
      likes: "76",
      tags: ["TypeScript", "Productivity", "Tips"],
      readTime: "5 min",
      linkedinUrl: "https://linkedin.com/posts/jonas-so-typescript-tips"
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="blog" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mon <span className="hero-text">Blog</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mes réflexions et retours d'expérience sur le développement, l'entrepreneuriat tech et l'écosystème africain
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {blogPosts.map((post, index) => (
            <Card key={index} className="card-hover group">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <Button variant="ghost" size="sm" asChild>
                    <a href={post.linkedinUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {formatDate(post.date)}
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    {post.views} vues
                  </div>
                  <div className="flex items-center gap-1">
                    <ThumbsUp className="h-4 w-4" />
                    {post.likes}
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {post.readTime}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <Button variant="ghost" size="sm" className="p-0 h-auto font-medium" asChild>
                  <a href={post.linkedinUrl} target="_blank" rel="noopener noreferrer">
                    Lire sur LinkedIn →
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <a href="https://linkedin.com/in/jonas-so" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-5 w-5" />
              Suivre sur LinkedIn pour plus de contenu
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;