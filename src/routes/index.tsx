import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Education } from "@/components/portfolio/Education";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Certifications } from "@/components/portfolio/Certifications";
import { ResumeSection } from "@/components/portfolio/ResumeSection";
import { Highlights } from "@/components/portfolio/Highlights";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { AmbientEffects } from "@/components/portfolio/AmbientEffects";

const title = "Charantej S — Computer Science Engineering Student | Full Stack & Python Learner";
const description =
  "Portfolio of Charantej S, a 3rd-year B.E. Computer Science Engineering student passionate about full-stack development, Python, AI, and practical software solutions.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <AmbientEffects />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <ResumeSection />
        <Highlights />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
