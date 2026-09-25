import { useState } from "react";
import {
  ArrowRight,
  Download,
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import profile from "@/assets/profile.jpeg";
import { ResumeModal } from "./ResumeModal";
import { useTilt } from "@/hooks/useTilt";

export function Hero() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const profileTilt = useTilt<HTMLDivElement>({ maxTilt: 10, scale: 1.03 });
  return (
    <section
      id="home"
      className="hero-surface relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          {/* Badge: fadeIn */}
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white/90 backdrop-blur-md">
            <Sparkles className="size-3.5 text-primary-glow animate-pulse" />
            <span>Welcome to my portfolio</span>
          </div>

          {/* Name: slideLeftGradientReveal */}
          <h1 className="animate-slide-left stagger-1 mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            Charantej <span className="text-gradient-shimmer">S</span>
          </h1>

          {/* Title: fadeUp */}
          <p className="animate-fade-up stagger-2 mt-3 text-lg font-bold text-white/90 sm:text-2xl">
            Computer Science Engineering Student <br className="hidden sm:inline" />
            <span className="text-gradient">| Full Stack &amp; Python Learner</span>
          </p>

          {/* Description: fadeUpStagger */}
          <p className="animate-fade-up stagger-3 mt-4 max-w-xl text-base leading-relaxed text-navy-muted sm:text-lg">
            I build modern web applications and enjoy solving real-world problems with code.
          </p>

          {/* Contact & Location quick pills: floatUp */}
          <div className="animate-float-up stagger-4 mt-6 flex flex-wrap items-center gap-2.5 text-xs text-white/85">
            <span className="glass-pill inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 font-medium">
              <MapPin className="size-3.5 text-primary-glow shrink-0" />
              Hosur, Krishnagiri, Tamil Nadu, India
            </span>
            <a
              href="mailto:charantejs018@gmail.com"
              className="glass-pill inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 font-medium transition-colors hover:bg-white/20 hover:text-white"
            >
              <Mail className="size-3.5 text-primary-glow shrink-0" />
              charantejs018@gmail.com
            </a>
            <a
              href="tel:+919345155298"
              className="glass-pill inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 font-medium transition-colors hover:bg-white/20 hover:text-white"
            >
              <Phone className="size-3.5 text-primary-glow shrink-0" />
              +91 93451 55298
            </a>
          </div>

          {/* Action buttons: springPop */}
          <div className="animate-spring-pop stagger-5 mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="btn-gradient shine-sweep purple-glow-hover inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold shadow-lg"
            >
              Get In Touch
              <ArrowRight className="size-4" />
            </a>
            <button
              type="button"
              onClick={() => setResumeOpen(true)}
              className="purple-glow-hover inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 backdrop-blur-xs transition-all hover:bg-primary/25 hover:border-primary active:scale-95"
            >
              <FileText className="size-4 text-primary-glow" />
              View Resume
            </button>
            <a
              href="/Charantej_S_Resume.pdf"
              download="Charantej_S_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm font-medium text-navy-foreground backdrop-blur-xs transition-all hover:bg-white/10 hover:border-white/40"
            >
              <Download className="size-4" />
              Download CV
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white/80 transition-all hover:bg-white/10 hover:text-white"
            >
              Projects
            </a>
          </div>

          {/* Social Icons */}
          <div className="animate-fade-up stagger-6 mt-8 flex items-center gap-4">
            <a
              href="https://github.com/charantejs018-svg"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-white/15 bg-white/5 p-2.5 text-navy-muted transition-all hover:scale-110 hover:border-primary/50 hover:bg-white/15 hover:text-white shadow-xs"
            >
              <Github className="size-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/charantej-s-418a33393?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-white/15 bg-white/5 p-2.5 text-navy-muted transition-all hover:scale-110 hover:border-primary/50 hover:bg-white/15 hover:text-white shadow-xs"
            >
              <Linkedin className="size-5" />
            </a>
            <a
              href="mailto:charantejs018@gmail.com"
              aria-label="Email"
              className="rounded-full border border-white/15 bg-white/5 p-2.5 text-navy-muted transition-all hover:scale-110 hover:border-primary/50 hover:bg-white/15 hover:text-white shadow-xs"
            >
              <Mail className="size-5" />
            </a>
            <a
              href="tel:+919345155298"
              aria-label="Phone"
              className="rounded-full border border-white/15 bg-white/5 p-2.5 text-navy-muted transition-all hover:scale-110 hover:border-primary/50 hover:bg-white/15 hover:text-white shadow-xs"
            >
              <Phone className="size-5" />
            </a>
          </div>
        </div>

        {/* Profile Image: scaleIn, slowRotatingGlow, tilt3D */}
        <div className="relative flex justify-center lg:justify-end">
          <div
            ref={profileTilt.ref}
            style={profileTilt.style}
            onMouseMove={profileTilt.onMouseMove}
            onMouseLeave={profileTilt.onMouseLeave}
            className="animate-scale-in relative cursor-pointer"
          >
            <div className="slow-rotating-glow relative rounded-full p-1.5">
              <img
                src={profile}
                alt="Charantej S"
                width={816}
                height={816}
                className="avatar-glow size-56 rounded-full object-cover transition-transform duration-300 sm:size-72 lg:size-80"
              />
            </div>
            {/* Floating glass badge */}
            <div className="glass-card-dark absolute -bottom-3 -left-4 hidden rounded-2xl px-4 py-2.5 text-xs text-white shadow-xl transition-transform hover:scale-105 sm:flex sm:items-center sm:gap-2">
              <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Full Stack &amp; Python Learner</span>
            </div>
            <div className="glass-card-dark absolute -top-3 -right-2 hidden rounded-2xl px-4 py-2 text-xs font-semibold text-white shadow-xl transition-transform hover:scale-105 sm:block">
              🎓 B.E. CSE Student
            </div>
          </div>
          <p className="pointer-events-none absolute -right-6 bottom-4 hidden font-hand text-2xl leading-tight text-navy-foreground/80 lg:block animate-pulse">
            Code
            <br />
            Create
            <br />
            Grow
          </p>
        </div>
      </div>

      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </section>
  );
}
