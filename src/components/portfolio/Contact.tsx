import { useState } from "react";
import { Check, Copy, Github, Linkedin, Mail, MapPin, Phone, Send, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [copied, setCopied] = useState<string | null>(null);
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.15 });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! Your message has been sent to Charantej.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    toast.success(`${label} copied to clipboard!`);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section ref={ref} id="contact" className="py-20 sm:py-24 overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Left Column: Details & Social Badges */}
        <div className={isVisible ? "animate-fade-up" : "opacity-0"}>
          <p className="text-sm font-semibold text-primary">Get In Touch</p>
          <h2 className="rule-accent mt-1 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Contact Me
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            Feel free to reach out for opportunities, collaboration, or any queries. I am always
            open to discussing software development and technology.
          </p>

          <div className="mt-8 space-y-4">
            {/* Email item */}
            <div className="glass-card lift-shadow-glow flex items-center justify-between p-4 transition-all duration-300 hover:border-primary/40">
              <div className="flex items-center gap-3.5">
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 hover:scale-110">
                  <Mail className="size-5" />
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">Email Address</p>
                  <a
                    href="mailto:charantejs018@gmail.com"
                    className="text-sm font-semibold text-foreground transition-colors hover:text-primary"
                  >
                    charantejs018@gmail.com
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={() => copyToClipboard("charantejs018@gmail.com", "Email")}
                className="rounded-lg p-2 text-muted-foreground transition-all hover:bg-muted hover:text-foreground hover:scale-110"
                aria-label="Copy Email"
              >
                {copied === "Email" ? (
                  <Check className="size-4 text-emerald-600 animate-bounce-in" />
                ) : (
                  <Copy className="size-4" />
                )}
              </button>
            </div>

            {/* Phone item */}
            <div className="glass-card lift-shadow-glow flex items-center justify-between p-4 transition-all duration-300 hover:border-primary/40">
              <div className="flex items-center gap-3.5">
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 hover:scale-110">
                  <Phone className="size-5" />
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">Phone Number</p>
                  <a
                    href="tel:+919345155298"
                    className="text-sm font-semibold text-foreground transition-colors hover:text-primary"
                  >
                    +91 93451 55298
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={() => copyToClipboard("+919345155298", "Phone")}
                className="rounded-lg p-2 text-muted-foreground transition-all hover:bg-muted hover:text-foreground hover:scale-110"
                aria-label="Copy Phone"
              >
                {copied === "Phone" ? (
                  <Check className="size-4 text-emerald-600 animate-bounce-in" />
                ) : (
                  <Copy className="size-4" />
                )}
              </button>
            </div>

            {/* Location item */}
            <div className="glass-card lift-shadow-glow flex items-center justify-between p-4 transition-all duration-300 hover:border-primary/40">
              <div className="flex items-center gap-3.5">
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 hover:scale-110">
                  <MapPin className="size-5" />
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">Location</p>
                  <p className="text-sm font-semibold text-foreground">
                    Hosur, Krishnagiri, Tamil Nadu, India
                  </p>
                </div>
              </div>
            </div>

            {/* Social Connect Badges: liftGlow */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://www.linkedin.com/in/charantej-s-418a33393?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noreferrer"
                className="glass-card lift-shadow-glow inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold text-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary hover:scale-105"
              >
                <Linkedin className="size-4 text-primary" />
                Connect on LinkedIn
              </a>
              <a
                href="https://github.com/charantejs018-svg"
                target="_blank"
                rel="noreferrer"
                className="glass-card lift-shadow-glow inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold text-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary hover:scale-105"
              >
                <Github className="size-4 text-primary" />
                Follow on GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form: fadeUp, inputs glowFocus, submit successRipple */}
        <div
          className={`glass-card lift-shadow-glow relative overflow-hidden p-6 sm:p-8 transition-all duration-700 hover:border-primary/50 ${
            isVisible ? "animate-fade-up stagger-2" : "opacity-0"
          }`}
        >
          <div className="mb-6 flex items-center gap-2">
            <Sparkles className="size-4 text-primary animate-pulse" />
            <h3 className="text-lg font-bold text-foreground">Send a Message</h3>
          </div>

          <form onSubmit={onSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-xs font-semibold text-foreground">
                Your Name
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Enter your name"
                  className="glow-focus mt-1.5 w-full rounded-xl border border-input bg-background/80 px-3.5 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground"
                />
              </label>

              <label className="block text-xs font-semibold text-foreground">
                Your Email
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="Enter your email address"
                  className="glow-focus mt-1.5 w-full rounded-xl border border-input bg-background/80 px-3.5 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground"
                />
              </label>
            </div>

            <label className="block text-xs font-semibold text-foreground">
              Subject
              <input
                required
                type="text"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                placeholder="Enter message subject"
                className="glow-focus mt-1.5 w-full rounded-xl border border-input bg-background/80 px-3.5 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground"
              />
            </label>

            <label className="block text-xs font-semibold text-foreground">
              Message
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Write your message here..."
                className="glow-focus mt-1.5 w-full resize-none rounded-xl border border-input bg-background/80 px-3.5 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground"
              />
            </label>

            <button
              type="submit"
              className="btn-gradient shine-sweep purple-glow-hover inline-flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold shadow-lg transition-transform active:scale-[0.98]"
            >
              <Send className="size-4" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
