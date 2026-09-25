import { useState } from "react";
import {
  Award,
  CheckCircle2,
  Download,
  ExternalLink,
  Eye,
  FileCheck,
  FileDown,
  FileText,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { ResumeModal } from "./ResumeModal";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTilt } from "@/hooks/useTilt";

export function ResumeSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.15 });
  const previewTilt = useTilt<HTMLDivElement>({ maxTilt: 6, scale: 1.02 });

  const resumePdfUrl = "/Charantej_S_Resume.pdf";
  const resumeDocxUrl = "/Charantej_S_Resume.docx";

  const keyHighlights = [
    {
      icon: GraduationCap,
      label: "Education",
      val: "B.E. Computer Science (83%)",
      desc: "Er. Perumal Manimekalai College of Engg (2024–2028)",
    },
    {
      icon: Award,
      label: "Certifications",
      val: "9+ Verified Credentials",
      desc: "IBM Data Science, IIT Bombay C, Infosys AI, Udemy",
    },
    {
      icon: FileCheck,
      label: "Format & Compliance",
      val: "1-Page ATS Standard",
      desc: "Optimized for applicant tracking systems & recruiter review",
    },
  ];

  return (
    <section ref={ref} id="resume" className="surface-section relative overflow-hidden py-20 sm:py-24">
      {/* Background glow decoration */}
      <div className="pointer-events-none absolute -left-20 top-1/2 size-96 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl animate-float-slow" />
      <div className="pointer-events-none absolute -right-20 top-1/3 size-96 rounded-full bg-primary/5 blur-3xl animate-float-delayed" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className={`flex flex-wrap items-end justify-between gap-4 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <Sparkles className="size-3.5 animate-pulse" />
              <span>Curriculum Vitae</span>
            </div>
            <h2 className="rule-accent mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Resume &amp; Credentials
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            Download my comprehensive resume or preview it interactively. Available in both ATS-friendly PDF and editable Word formats.
          </p>
        </div>

        <div className="mt-12 grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left: Highlights & Action Hub */}
          <div className={isVisible ? "animate-fade-up" : "opacity-0"}>
            <div className="glass-card lift-shadow-glow p-6 sm:p-8">
              <h3 className="text-xl font-bold text-foreground">
                Charantej S &mdash; Developer Resume
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                3rd-year B.E. CSE student focusing on full-stack web development, Python programming, and practical software solutions. Seeking software engineering internships and junior developer opportunities.
              </p>

              {/* Highlights cards */}
              <div className="mt-6 space-y-3.5">
                {keyHighlights.map((item, idx) => (
                  <div
                    key={item.label}
                    className={`flex items-start gap-3.5 rounded-xl border border-border/70 bg-card/60 p-3.5 transition-all duration-300 hover:border-primary/40 hover:bg-card hover:scale-[1.01] ${
                      isVisible ? "animate-fade-up" : "opacity-0"
                    }`}
                    style={{ animationDelay: `${(idx + 1) * 120}ms` }}
                  >
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <item.icon className="size-4.5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                          {item.label}
                        </span>
                      </div>
                      <div className="text-sm font-bold text-foreground">{item.val}</div>
                      <div className="text-xs text-muted-foreground">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons: gradientPulse, shineSweep */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="btn-gradient shine-sweep purple-glow-hover animate-gradient-pulse inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs sm:text-sm font-semibold shadow-md transition-transform active:scale-95"
                >
                  <Eye className="size-4" />
                  Preview Resume
                </button>

                <a
                  href={resumePdfUrl}
                  download="Charantej_S_Resume.pdf"
                  className="purple-glow-hover inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-3 text-xs sm:text-sm font-semibold text-primary transition-all hover:bg-primary/20 hover:scale-105"
                >
                  <Download className="size-4" />
                  Download PDF
                </a>

                <a
                  href={resumeDocxUrl}
                  download="Charantej_S_Resume.docx"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-3 text-xs sm:text-sm font-medium text-foreground transition-all hover:bg-muted hover:border-primary/40 hover:scale-105"
                >
                  <FileDown className="size-4" />
                  Word (.docx)
                </a>

                <a
                  href={resumePdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full p-3 text-muted-foreground transition-all hover:bg-muted hover:text-foreground hover:scale-110"
                  title="Open PDF in new tab"
                >
                  <ExternalLink className="size-4" />
                  <span className="sr-only">Open PDF in new tab</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Interactive Live Visual Document Card with slideLeft & tilt3D */}
          <div
            ref={previewTilt.ref}
            style={previewTilt.style}
            onMouseMove={previewTilt.onMouseMove}
            onMouseLeave={previewTilt.onMouseLeave}
            className={`relative mx-auto w-full max-w-md ${
              isVisible ? "animate-slide-left stagger-2" : "opacity-0"
            }`}
          >
            <div
              onClick={() => setModalOpen(true)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-border/80 bg-white p-3 shadow-xl transition-all duration-300 hover:border-primary/60 hover:shadow-2xl hover:shadow-primary/20"
            >
              <div className="relative overflow-hidden rounded-xl border border-border/60">
                <img
                  src="/resume-preview.png"
                  alt="Charantej S Resume Preview"
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Hover overlay with button */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-navy-deep/60 opacity-0 backdrop-blur-xs transition-opacity duration-300 group-hover:opacity-100">
                  <div className="btn-gradient shine-sweep inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold text-white shadow-lg">
                    <Eye className="size-4" />
                    Click to Open Fullscreen
                  </div>
                  <span className="mt-2 text-[11px] font-medium text-white/80">
                    High Resolution Preview &bull; PDF / Word Download
                  </span>
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-3 flex items-center justify-between px-2 py-1 text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-3.5 text-emerald-600 animate-pulse" />
                  <span className="font-semibold text-foreground">Charantej_S_Resume.pdf</span>
                </div>
                <span className="rounded-md bg-secondary px-2 py-0.5 font-mono text-[10px]">
                  1-Page A4
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ResumeModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
