import { ArrowUpRight, CheckCircle2, ExternalLink, Github, Sparkles } from "lucide-react";
import portfolio from "@/assets/project-portfolio.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const keyHighlights = [
  "Responsive layout designed with modern UI standards",
  "Showcases profile, skills, academic education, and certifications",
  "Smooth scrolling with glassmorphism cards and gradient hero",
  "Interactive contact section with real-time feedback",
];

const technologies = ["HTML", "CSS", "JavaScript"];

export function Projects() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.15 });

  return (
    <section ref={ref} id="projects" className="surface-section py-20 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className={`flex flex-wrap items-end justify-between gap-3 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <div>
            <p className="text-sm font-semibold text-primary">Featured Work</p>
            <h2 className="rule-accent mt-1 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Project
            </h2>
          </div>
          <p className="text-sm text-muted-foreground">Recent web development project</p>
        </div>

        <div className="mt-12">
          {/* Card: staggerGridReveal, glassLift */}
          <article
            className={`glass-card lift-shadow-glow overflow-hidden border-border/80 transition-all duration-700 hover:border-primary/50 ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
          >
            <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="p-6 sm:p-10">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  <Sparkles className="size-3.5 animate-pulse" />
                  <span>Featured Project</span>
                </div>

                <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
                  Personal Portfolio Website
                </h3>

                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Designed and developed a responsive portfolio website showcasing my profile,
                  skills, education, and projects using HTML, CSS, and JavaScript with a modern UI.
                </p>

                <div className="mt-6 space-y-2.5">
                  {keyHighlights.map((highlight, idx) => (
                    <div
                      key={highlight}
                      className={`flex items-start gap-2.5 text-xs text-muted-foreground sm:text-sm transition-all duration-300 ${
                        isVisible ? "animate-fade-up" : "opacity-0"
                      }`}
                      style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                    >
                      <CheckCircle2 className="size-4 shrink-0 text-primary mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {technologies.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary transition-transform hover:scale-105"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons: shineSweep, purpleGlow */}
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href="#home"
                    className="btn-gradient shine-sweep purple-glow-hover inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold shadow-md sm:text-sm"
                  >
                    <ExternalLink className="size-4" />
                    Live Preview
                  </a>
                  <a
                    href="https://github.com/charantejs018-svg"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-xs font-semibold text-foreground transition-all hover:bg-secondary hover:border-primary/40 hover:scale-105 sm:text-sm"
                  >
                    <Github className="size-4" />
                    View on GitHub
                  </a>
                </div>
              </div>

              {/* Image Container: zoomIn */}
              <div className="relative h-full min-h-[300px] overflow-hidden bg-muted/40 p-4 sm:p-6 lg:p-8">
                <div className="group relative h-full w-full overflow-hidden rounded-2xl border border-border/80 shadow-md">
                  <img
                    src={portfolio}
                    alt="Personal Portfolio Website"
                    loading="lazy"
                    width={992}
                    height={672}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-medium text-white opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2">
                    <span className="font-semibold">Modern Responsive UI &bull; Glassmorphic</span>
                    <ArrowUpRight className="size-4 text-primary-glow" />
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
