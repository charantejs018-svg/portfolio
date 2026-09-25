import { ArrowUp, Github, Linkedin, Mail, Phone } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function Footer() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.1 });

  return (
    <footer ref={ref} className="border-t border-white/10 bg-navy-deep py-12 relative overflow-hidden">
      <div className={`mx-auto max-w-6xl px-5 sm:px-8 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div>
            <a
              href="#home"
              className="text-xl font-extrabold tracking-tight text-navy-foreground transition-transform hover:scale-105 inline-block"
            >
              Charantej <span className="text-gradient">S</span>
            </a>
            <p className="mt-1 text-xs text-navy-muted sm:text-sm">
              Computer Science Engineering Student | Full Stack &amp; Python Learner
            </p>
            <p className="mt-1 text-xs text-navy-muted/80">Hosur, Krishnagiri, Tamil Nadu, India</p>
          </div>

          {/* Social Icons: scaleGlow */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/charantejs018-svg"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-white/15 bg-white/5 p-2.5 text-navy-muted transition-all duration-300 hover:scale-120 hover:border-primary/50 hover:bg-white/15 hover:text-white hover:shadow-lg hover:shadow-primary/25"
            >
              <Github className="size-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/charantej-s-418a33393?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-white/15 bg-white/5 p-2.5 text-navy-muted transition-all duration-300 hover:scale-120 hover:border-primary/50 hover:bg-white/15 hover:text-white hover:shadow-lg hover:shadow-primary/25"
            >
              <Linkedin className="size-4" />
            </a>
            <a
              href="mailto:charantejs018@gmail.com"
              aria-label="Email"
              className="rounded-full border border-white/15 bg-white/5 p-2.5 text-navy-muted transition-all duration-300 hover:scale-120 hover:border-primary/50 hover:bg-white/15 hover:text-white hover:shadow-lg hover:shadow-primary/25"
            >
              <Mail className="size-4" />
            </a>
            <a
              href="tel:+919345155298"
              aria-label="Phone"
              className="rounded-full border border-white/15 bg-white/5 p-2.5 text-navy-muted transition-all duration-300 hover:scale-120 hover:border-primary/50 hover:bg-white/15 hover:text-white hover:shadow-lg hover:shadow-primary/25"
            >
              <Phone className="size-4" />
            </a>
            <a
              href="#home"
              aria-label="Back to top"
              className="rounded-full border border-white/15 bg-white/5 p-2.5 text-navy-muted transition-all duration-300 hover:scale-120 hover:border-primary/50 hover:bg-white/15 hover:text-white hover:shadow-lg hover:shadow-primary/25"
            >
              <ArrowUp className="size-4" />
            </a>
          </div>
        </div>

        {/* Copyright & Quick Links: fadeIn */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-navy-muted sm:flex-row">
          <p className="transition-opacity">
            © 2026 <span className="font-semibold text-navy-foreground">Charantej S</span>. All
            rights reserved.
          </p>

          <div className="flex items-center gap-3">
            <a href="#resume" className="nav-link-animated transition-colors hover:text-navy-foreground">
              Resume
            </a>
            <span>•</span>
            <a
              href="/Charantej_S_Resume.pdf"
              download="Charantej_S_Resume.pdf"
              className="nav-link-animated font-medium text-white/90 transition-colors hover:text-primary-glow"
            >
              Download PDF
            </a>
            <span>•</span>
            <a
              href="/Charantej_S_Resume.docx"
              download="Charantej_S_Resume.docx"
              className="nav-link-animated transition-colors hover:text-navy-foreground"
            >
              DOCX
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
