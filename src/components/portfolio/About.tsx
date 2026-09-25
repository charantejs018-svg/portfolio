import { Brain, Code2, Download, FileText, GraduationCap, Languages, MapPin } from "lucide-react";
import laptop from "@/assets/about-laptop.png";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCountUp } from "@/hooks/useCountUp";

const languages = ["English", "Tamil", "Telugu", "Kannada", "Hindi"];

export function About() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.15 });
  const scoreCount = useCountUp(83, 1500, isVisible);

  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      text: "B.E. CSE (3rd Year · 2024–2028)",
      badge: `Current Score: ${scoreCount}%`,
    },
    {
      icon: MapPin,
      title: "Institution",
      text: "Er. Perumal Manimekalai College of Engineering",
      badge: "Hosur, Tamil Nadu",
    },
    {
      icon: Brain,
      title: "Focus Areas",
      text: "Full Stack, Python, AI & Practical Problem Solving",
      badge: "Active Learner",
    },
  ];

  return (
    <section ref={ref} id="about" className="py-20 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Text column: slideLeft */}
          <div className={isVisible ? "animate-slide-left" : "opacity-0"}>
            <p className="text-sm font-semibold text-primary">About Me</p>
            <h2 className="rule-accent mt-1 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Who am I?
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              I am a 3rd-year B.E. Computer Science Engineering student at Er. Perumal Manimekalai
              College of Engineering. I am passionate about full-stack development, Python, AI, and
              creating practical software solutions. I enjoy learning new technologies and building
              projects that solve real-world problems.
            </p>

            {/* Highlights Cards: stats countUp */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {highlights.map((card, idx) => (
                <div
                  key={card.title}
                  className={`glass-card card-lift flex flex-col justify-between p-5 transition-all duration-300 hover:scale-[1.02] ${
                    isVisible ? "animate-fade-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${(idx + 1) * 120}ms` }}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <card.icon className="size-5 text-primary" />
                    </div>
                    <h3 className="mt-3 text-sm font-bold text-foreground">{card.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {card.text}
                    </p>
                  </div>
                  <span className="mt-3 inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold text-primary transition-colors">
                    {card.badge}
                  </span>
                </div>
              ))}
            </div>

            {/* Languages Spoken */}
            <div className="mt-8 rounded-2xl border border-border/80 bg-muted/30 p-4 transition-colors hover:border-primary/40">
              <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
                <Languages className="size-4 text-primary" />
                <span>Languages Known:</span>
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <span
                    key={lang}
                    className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-foreground shadow-xs transition-transform hover:scale-105 hover:border-primary/40"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Resume Link */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#resume"
                className="btn-gradient shine-sweep purple-glow-hover inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold shadow-md"
              >
                <FileText className="size-3.5" />
                View Full Resume &amp; Credentials
              </a>
              <a
                href="/Charantej_S_Resume.pdf"
                download="Charantej_S_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-xs font-semibold text-foreground transition-all hover:bg-muted hover:border-primary/40"
              >
                <Download className="size-3.5" />
                Download PDF
              </a>
            </div>
          </div>

          {/* Image column: slideRight */}
          <div className={`relative ${isVisible ? "animate-slide-right" : "opacity-0"}`}>
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary/15 via-primary/5 to-transparent blur-2xl animate-pulse" />
            <img
              src={laptop}
              alt="Code development setup"
              loading="lazy"
              width={928}
              height={720}
              className="relative mx-auto w-full max-w-md drop-shadow-2xl transition-transform duration-500 hover:scale-105 animate-float-slow"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
