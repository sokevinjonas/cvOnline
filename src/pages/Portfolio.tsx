import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import BlogSection from "@/components/BlogSection";
import QuizSection from "@/components/QuizSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <BlogSection />
        <QuizSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;