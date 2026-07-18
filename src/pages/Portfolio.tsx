import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

/**
 * Portfolio — Page principale.
 * Ordre pensé pour la conversion :
 * Hero → Expertise → Réalisations → Expériences → À propos → Écrits → Contact
 */
const Portfolio = () => {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <ExpertiseSection />
        <ProjectsSection />
        <ExperienceSection />
        <AboutSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
