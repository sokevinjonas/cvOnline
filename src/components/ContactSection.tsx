import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Linkedin, Github, Phone, Sparkles, ArrowRight } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "jonas.so@example.com",
      link: "mailto:jonas.so@example.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Téléphone",
      value: "+226 XX XX XX XX",
      link: "tel:+226XXXXXXXX",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Localisation",
      value: "Ouagadougou, Burkina Faso",
      link: "#",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "/in/jonas-so",
      link: "https://linkedin.com/in/jonas-so",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Restons en <span className="hero-text">Contact</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un projet en tête ? Une collaboration ? Choisissons le canal qui vous convient le mieux.
          </p>
        </div>

        {/* Featured CTA — Prêt à collaborer */}
        <div className="relative mb-12 max-w-5xl mx-auto">
          <div className="absolute -inset-4 bg-gradient-primary rounded-3xl blur-3xl opacity-25"></div>
          <Card className="relative overflow-hidden border-0 bg-gradient-primary text-primary-foreground shadow-strong">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-5 gap-8 items-center">
                <div className="md:col-span-3 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur text-xs font-medium">
                    <Sparkles className="h-3.5 w-3.5" />
                    Disponible pour nouveaux projets
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                    Prêt à collaborer ?
                  </h3>
                  <p className="text-base md:text-lg opacity-90 leading-relaxed">
                    Développement sur mesure, conseil technique ou création de contenu —
                    transformons votre idée en produit concret.
                  </p>
                </div>
                <div className="md:col-span-2 flex flex-col gap-3">
                  <Button size="lg" variant="secondary" className="justify-between group" asChild>
                    <a href="https://linkedin.com/in/jonas-so" target="_blank" rel="noopener noreferrer">
                      <span className="flex items-center">
                        <Linkedin className="h-4 w-4 mr-2" />
                        Discuter sur LinkedIn
                      </span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                  <Button size="lg" variant="secondary" className="justify-between group" asChild>
                    <a href="mailto:jonas.so@example.com">
                      <span className="flex items-center">
                        <Mail className="h-4 w-4 mr-2" />
                        Envoyer un email
                      </span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                  <Button size="lg" variant="secondary" className="justify-between group" asChild>
                    <a href="https://github.com/jonas-so" target="_blank" rel="noopener noreferrer">
                      <span className="flex items-center">
                        <Github className="h-4 w-4 mr-2" />
                        Voir mon GitHub
                      </span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact info grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {contactInfo.map((info, index) => {
            const isExternal = info.link.startsWith("http");
            const isPlain = info.link === "#";
            const Wrapper: any = isPlain ? "div" : "a";
            const wrapperProps = isPlain
              ? {}
              : {
                  href: info.link,
                  target: isExternal ? "_blank" : "_self",
                  rel: isExternal ? "noopener noreferrer" : undefined,
                };
            return (
              <Wrapper key={index} {...wrapperProps} className="block">
                <Card className="card-hover h-full border-border hover:border-primary/40">
                  <CardContent className="p-5 flex items-start gap-3">
                    <div className="p-2.5 bg-primary/10 rounded-lg text-primary shrink-0">
                      {info.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-wide text-muted-foreground">
                        {info.label}
                      </p>
                      <p className="font-medium text-sm truncate">{info.value}</p>
                    </div>
                  </CardContent>
                </Card>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
