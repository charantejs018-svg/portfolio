import { useEffect, useState } from "react";
import { FileText, Menu, X } from "lucide-react";
import { ResumeModal } from "./ResumeModal";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Project", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Resume", href: "#resume" },
  { label: "Highlights", href: "#highlights" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 animate-navbar ${
          scrolled ? "bg-navy-deep/90 shadow-lg shadow-black/20 backdrop-blur-md border-b border-white/10" : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <a
            href="#home"
            className="text-lg font-extrabold tracking-tight text-navy-foreground transition-transform hover:scale-105"
          >
            Charantej <span className="text-gradient">S</span>
          </a>

          <ul className="hidden items-center gap-5 xl:gap-6 lg:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="nav-link-animated text-xs font-semibold tracking-wide text-navy-muted transition-colors hover:text-navy-foreground sm:text-sm"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-2.5 lg:flex">
            <button
              type="button"
              onClick={() => setResumeOpen(true)}
              className="purple-glow-hover inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white backdrop-blur-xs transition-all hover:bg-white/20 hover:border-primary/50"
            >
              <FileText className="size-3.5 text-primary-glow" />
              Resume
            </button>
            <a
              href="#contact"
              className="btn-gradient shine-sweep purple-glow-hover inline-flex items-center rounded-full px-4 py-2 text-xs font-semibold shadow-xs"
            >
              Connect
            </a>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg p-1.5 text-navy-foreground transition-colors hover:bg-white/10 lg:hidden"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </nav>

        {open && (
          <ul className="space-y-1 border-t border-white/10 bg-navy-deep/95 px-5 pb-5 pt-3 backdrop-blur-md lg:hidden">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-navy-muted transition-colors hover:bg-white/10 hover:text-navy-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="grid grid-cols-2 gap-2 pt-3">
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  setResumeOpen(true);
                }}
                className="flex items-center justify-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-xs font-semibold text-white"
              >
                <FileText className="size-3.5 text-primary-glow" />
                Resume
              </button>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-gradient flex items-center justify-center rounded-full px-4 py-2.5 text-xs font-semibold"
              >
                Get In Touch
              </a>
            </li>
          </ul>
        )}
      </header>

      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}
