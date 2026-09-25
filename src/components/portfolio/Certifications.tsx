import { useState } from "react";
import {
  Award,
  Bot,
  Brain,
  CheckCircle,
  Download,
  ExternalLink,
  Eye,
  FileText,
  Sparkles,
  Terminal,
  Users,
  X,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  badge: string;
  pdfUrl: string;
  imageUrl: string;
  category: "AI & Machine Learning" | "Python & Data Science" | "Programming" | "Leadership";
  date: string;
  score?: string;
  tags: string[];
}

const certificates: CertificateItem[] = [
  {
    id: "ibm-python-101",
    title: "Python 101 for Data Science",
    issuer: "IBM Developer Skills Network (Cognitive Class)",
    badge: "IBM",
    pdfUrl: "/certificates/ibm-python-101.pdf",
    imageUrl: "/certificates/thumbs/ibm-python-101.png",
    category: "Python & Data Science",
    date: "March 9, 2026",
    tags: ["Python", "Data Science", "IBM Certified"],
  },
  {
    id: "udemy-ai-chatbots",
    title: "AI Chatbots Development: Generative AI with ChatGPT",
    issuer: "Udemy",
    badge: "Udemy",
    pdfUrl: "/certificates/udemy-ai-chatbots.pdf",
    imageUrl: "/certificates/thumbs/udemy-ai-chatbots.png",
    category: "AI & Machine Learning",
    date: "March 4, 2026",
    tags: ["AI Chatbots", "Generative AI", "ChatGPT"],
  },
  {
    id: "iit-bombay-c-training",
    title: "Certificate for Completion of C Training",
    issuer: "EduPyramids, SINE & IIT Bombay",
    badge: "IIT Bombay SINE",
    pdfUrl: "/certificates/iit-bombay-c-training.pdf",
    imageUrl: "/certificates/thumbs/iit-bombay-c-training.png",
    category: "Programming",
    date: "April 20, 2026",
    score: "82.50%",
    tags: ["C Programming", "IIT Bombay", "Score: 82.5%"],
  },
  {
    id: "infosys-ai-intro",
    title: "Introduction to Artificial Intelligence",
    issuer: "Infosys Springboard",
    badge: "Infosys",
    pdfUrl: "/certificates/infosys-ai-intro.pdf",
    imageUrl: "/certificates/thumbs/infosys-ai-intro.png",
    category: "AI & Machine Learning",
    date: "March 12, 2026",
    tags: ["Artificial Intelligence", "Infosys", "Core AI"],
  },
  {
    id: "infosys-ai-types",
    title: "Artificial Intelligence: Types of AI",
    issuer: "Infosys Springboard",
    badge: "Infosys",
    pdfUrl: "/certificates/infosys-ai-types.pdf",
    imageUrl: "/certificates/thumbs/infosys-ai-types.png",
    category: "AI & Machine Learning",
    date: "February 2, 2026",
    tags: ["AI Types", "Machine Learning", "Infosys"],
  },
  {
    id: "infosys-nlp-intro",
    title: "Introduction to Natural Language Processing (NLP)",
    issuer: "Infosys Springboard",
    badge: "Infosys",
    pdfUrl: "/certificates/infosys-nlp-intro.pdf",
    imageUrl: "/certificates/thumbs/infosys-nlp-intro.png",
    category: "AI & Machine Learning",
    date: "March 5, 2026",
    tags: ["NLP", "Language Processing", "Infosys"],
  },
  {
    id: "infosys-aws-aiml",
    title: "Enriching Content with Metadata on AWS: AIML",
    issuer: "Infosys Springboard",
    badge: "Infosys / AWS",
    pdfUrl: "/certificates/infosys-aws-aiml.pdf",
    imageUrl: "/certificates/thumbs/infosys-aws-aiml.png",
    category: "AI & Machine Learning",
    date: "March 5, 2026",
    tags: ["AWS Cloud", "Metadata Lakes", "AIML"],
  },
  {
    id: "intellipaat-python-datascience",
    title: "Python for Data Science Course",
    issuer: "Intellipaat Academy",
    badge: "Intellipaat",
    pdfUrl: "/certificates/intellipaat-python-datascience.pdf",
    imageUrl: "/certificates/thumbs/intellipaat-python-datascience.png",
    category: "Python & Data Science",
    date: "June 9, 2026",
    tags: ["Python", "Data Science", "Verified"],
  },
  {
    id: "glowlogics-campus-ambassador",
    title: "Certificate of Campus Ambassador",
    issuer: "Glow Logics Solutions (Ministry of MSME)",
    badge: "MSME Ambassador",
    pdfUrl: "/certificates/glowlogics-campus-ambassador.pdf",
    imageUrl: "/certificates/thumbs/glowlogics-campus-ambassador.png",
    category: "Leadership",
    date: "November 29, 2025",
    tags: ["Campus Ambassador", "Leadership", "MSME"],
  },
];

const categories = [
  "All",
  "AI & Machine Learning",
  "Python & Data Science",
  "Programming",
  "Leadership",
] as const;

export function Certifications() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.1 });
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  const filteredCerts =
    activeCategory === "All"
      ? certificates
      : certificates.filter((c) => c.category === activeCategory);

  return (
    <section ref={ref} id="certifications" className="py-20 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className={`flex flex-wrap items-end justify-between gap-3 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <div>
            <p className="text-sm font-semibold text-primary">Verified Credentials</p>
            <h2 className="rule-accent mt-1 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Certifications
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            Official certifications and verified training credentials with direct view &amp;
            verification options.
          </p>
        </div>

        {/* Category Filters */}
        <div className={`mt-8 flex flex-wrap items-center gap-2 ${isVisible ? "animate-fade-up stagger-1" : "opacity-0"}`}>
          {categories.map((cat) => {
            const count =
              cat === "All"
                ? certificates.length
                : certificates.filter((c) => c.category === cat).length;
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 hover:scale-105 ${
                  isActive
                    ? "btn-gradient text-white shadow-md"
                    : "border border-border bg-card/70 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`rounded-full px-1.5 py-0.2 text-[10px] ${
                    isActive ? "bg-white/20 text-white" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Certificates Grid: flipUp, purpleBorderGlow */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCerts.map((cert, idx) => (
            <div
              key={cert.id}
              className={`glass-card lift-shadow-glow group flex flex-col justify-between overflow-hidden border-border/80 transition-all duration-500 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/10 ${
                isVisible ? "animate-flip-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${(idx % 6) * 100}ms` }}
            >
              <div>
                {/* Certificate Preview Thumbnail */}
                <div
                  onClick={() => setSelectedCert(cert)}
                  className="relative aspect-[16/11] w-full cursor-pointer overflow-hidden border-b border-border/60 bg-muted/30"
                  title="Click to view full certificate"
                >
                  <img
                    src={cert.imageUrl}
                    alt={cert.title}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 backdrop-blur-xs transition-opacity duration-300 group-hover:opacity-100">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3.5 py-1.5 text-xs font-bold text-navy shadow-lg">
                      <Eye className="size-3.5 text-primary" />
                      View Certificate
                    </span>
                  </div>

                  <div className="absolute top-3 right-3">
                    <span className="rounded-full bg-navy-deep/85 px-2.5 py-1 text-[10px] font-bold text-white shadow-xs backdrop-blur-md">
                      {cert.badge}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1 font-semibold text-emerald-600">
                      <CheckCircle className="size-3.5" />
                      Verified Credential
                    </span>
                    <span>{cert.date}</span>
                  </div>

                  <h3 className="mt-2.5 text-base font-bold text-foreground transition-colors group-hover:text-primary">
                    {cert.title}
                  </h3>

                  <p className="mt-1 text-xs font-medium text-primary">{cert.issuer}</p>

                  {cert.score && (
                    <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-bold text-primary">
                      Score: {cert.score}
                    </div>
                  )}

                  <div className="mt-3.5 flex flex-wrap gap-1.5">
                    {cert.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-border/60 bg-muted/50 px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 border-t border-border/60 bg-muted/20 p-3.5">
                <button
                  type="button"
                  onClick={() => setSelectedCert(cert)}
                  className="btn-gradient inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg py-2 text-xs font-semibold"
                >
                  <Eye className="size-3.5" />
                  View Certificate
                </button>
                <a
                  href={cert.pdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  title="Open PDF in new tab"
                  className="inline-flex items-center justify-center rounded-lg border border-border bg-card p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  aria-label="Open PDF in new tab"
                >
                  <ExternalLink className="size-3.5" />
                </a>
                <a
                  href={cert.pdfUrl}
                  download
                  title="Download PDF"
                  className="inline-flex items-center justify-center rounded-lg border border-border bg-card p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  aria-label="Download Certificate PDF"
                >
                  <Download className="size-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Dialog for Certificate Preview */}
      {selectedCert && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in-0 duration-200"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-border/80 px-6 py-4">
              <div>
                <span className="text-[11px] font-bold tracking-wide text-primary uppercase">
                  {selectedCert.issuer}
                </span>
                <h3 className="text-base font-bold text-foreground sm:text-lg">
                  {selectedCert.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                aria-label="Close Preview"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Modal Certificate Image Preview */}
            <div className="flex-1 overflow-y-auto bg-muted/40 p-4 sm:p-6 text-center">
              <img
                src={selectedCert.imageUrl}
                alt={selectedCert.title}
                className="mx-auto max-h-[64vh] rounded-lg border border-border/80 object-contain shadow-lg"
              />
            </div>

            {/* Modal Footer with Actions */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border/80 bg-card px-6 py-3.5">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="font-semibold text-emerald-600">✓ Verified</span>
                <span>•</span>
                <span>Issued: {selectedCert.date}</span>
                {selectedCert.score && (
                  <>
                    <span>•</span>
                    <span className="font-bold text-primary">Score: {selectedCert.score}</span>
                  </>
                )}
              </div>

              <div className="flex items-center gap-2.5">
                <a
                  href={selectedCert.pdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-accent"
                >
                  <ExternalLink className="size-3.5" />
                  Open in New Tab
                </a>
                <a
                  href={selectedCert.pdfUrl}
                  download
                  className="btn-gradient inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold"
                >
                  <Download className="size-3.5" />
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
