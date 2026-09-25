import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  Award,
  Check,
  CheckCircle2,
  Copy,
  Download,
  ExternalLink,
  FileDown,
  FileText,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Printer,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const title = "Resume — Charantej S | B.E. Computer Science Engineering";
const description =
  "Official resume of Charantej S, 3rd-year B.E. Computer Science Engineering student. Download PDF, DOCX or view credentials online.";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ResumePage,
});

function ResumePage() {
  const [copied, setCopied] = useState(false);
  const resumePdfUrl = "/Charantej_S_Resume.pdf";
  const resumeDocxUrl = "/Charantej_S_Resume.docx";

  const handleCopyLink = () => {
    const fullUrl = `${window.location.origin}${resumePdfUrl}`;
    navigator.clipboard.writeText(fullUrl).then(() => {
      setCopied(true);
      toast.success("Resume PDF link copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handlePrint = () => {
    const printWindow = window.open(resumePdfUrl, "_blank");
    if (printWindow) {
      printWindow.focus();
    }
  };

  return (
    <div className="min-h-screen bg-navy-deep text-foreground">
      {/* Top Bar Navigation */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-navy-deep/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/90 transition-colors hover:text-white"
          >
            <ArrowLeft className="size-4 text-primary-glow" />
            <span>Back to Portfolio</span>
          </Link>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-white/15"
            >
              {copied ? (
                <>
                  <Check className="size-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="size-3.5" />
                  <span>Copy Link</span>
                </>
              )}
            </button>

            <a
              href={resumePdfUrl}
              download="Charantej_S_Resume.pdf"
              className="btn-gradient inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold shadow-md"
            >
              <Download className="size-3.5" />
              Download PDF
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14">
        {/* Banner Section */}
        <div className="rounded-2xl border border-white/15 bg-white/5 p-6 sm:p-8 backdrop-blur-md">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/90">
                <Sparkles className="size-3.5 text-primary-glow" />
                <span>Verified ATS-Friendly Format</span>
              </div>
              <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Charantej <span className="text-gradient">S</span>
              </h1>
              <p className="mt-1 text-sm font-medium text-white/80 sm:text-base">
                Computer Science &amp; Engineering Student &bull; Full Stack &amp; Python Learner
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-white/70">
                <span className="inline-flex items-center gap-1">
                  <MapPin className="size-3.5 text-primary-glow" />
                  Hosur, Tamil Nadu, India
                </span>
                <span>&bull;</span>
                <span className="inline-flex items-center gap-1">
                  <Mail className="size-3.5 text-primary-glow" />
                  charantejs018@gmail.com
                </span>
                <span>&bull;</span>
                <span className="inline-flex items-center gap-1">
                  <Phone className="size-3.5 text-primary-glow" />
                  +91 93451 55298
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href={resumePdfUrl}
                download="Charantej_S_Resume.pdf"
                className="btn-gradient inline-flex items-center gap-2 rounded-xl px-5 py-3 text-xs font-semibold shadow-lg sm:text-sm"
              >
                <Download className="size-4" />
                Download PDF
              </a>

              <a
                href={resumeDocxUrl}
                download="Charantej_S_Resume.docx"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-xs font-semibold text-white transition-colors hover:bg-white/20 sm:text-sm"
              >
                <FileDown className="size-4" />
                Word (.docx)
              </a>

              <a
                href={resumePdfUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl border border-white/20 bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
                title="Open raw PDF in new tab"
              >
                <ExternalLink className="size-4" />
              </a>

              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 rounded-xl border border-white/20 bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
                title="Print resume"
              >
                <Printer className="size-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Document Viewer & Quick Stats */}
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_340px]">
          {/* Document Preview */}
          <div className="overflow-hidden rounded-2xl border border-white/15 bg-white p-3 sm:p-5 shadow-2xl">
            <div className="relative overflow-hidden rounded-xl border border-slate-200">
              <img
                src="/resume-preview.png"
                alt="Charantej S Official Resume"
                className="w-full object-contain"
                loading="eager"
              />
            </div>
          </div>

          {/* Sidebar Highlights */}
          <div className="space-y-5">
            <div className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-md">
              <div className="flex items-center gap-2.5">
                <div className="flex size-9 items-center justify-center rounded-lg bg-primary/20 text-primary-glow">
                  <GraduationCap className="size-5" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-white">Current Degree</h2>
                  <p className="text-xs text-white/70">B.E. Computer Science</p>
                </div>
              </div>
              <div className="mt-3 border-t border-white/10 pt-3 text-xs text-white/80">
                <p className="font-semibold text-white">Er. Perumal Manimekalai College of Engg</p>
                <p className="text-emerald-400 font-bold mt-1">Current Score: 83% &bull; Batch 2024–2028</p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-md">
              <div className="flex items-center gap-2.5">
                <div className="flex size-9 items-center justify-center rounded-lg bg-primary/20 text-primary-glow">
                  <Award className="size-5" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-white">Key Credentials</h2>
                  <p className="text-xs text-white/70">Verified Industry Certifications</p>
                </div>
              </div>
              <ul className="mt-3 space-y-2 border-t border-white/10 pt-3 text-xs text-white/80">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="size-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>IBM Python 101 for Data Science</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="size-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>IIT Bombay SINE C Training (82.5%)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="size-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Infosys AI &amp; NLP Certifications</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="size-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Udemy AI Chatbots &amp; ChatGPT</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-md">
              <div className="flex items-center gap-2.5">
                <div className="flex size-9 items-center justify-center rounded-lg bg-primary/20 text-primary-glow">
                  <FileText className="size-5" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-white">Document Details</h2>
                  <p className="text-xs text-white/70">Format Information</p>
                </div>
              </div>
              <div className="mt-3 space-y-1.5 border-t border-white/10 pt-3 text-xs text-white/80">
                <div className="flex justify-between">
                  <span className="text-white/60">Length:</span>
                  <span className="font-semibold text-white">1 Page (A4)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Compatibility:</span>
                  <span className="font-semibold text-white">ATS Compliant</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Formats:</span>
                  <span className="font-semibold text-white">PDF (.pdf), Word (.docx)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Updated:</span>
                  <span className="font-semibold text-emerald-400">September 2026</span>
                </div>
              </div>
            </div>

            {/* Quick Action Box */}
            <div className="rounded-2xl border border-primary/30 bg-primary/10 p-5 text-center">
              <h3 className="text-sm font-bold text-white">Interested in working together?</h3>
              <p className="mt-1 text-xs text-white/70">
                Feel free to reach out directly via email or phone.
              </p>
              <div className="mt-4 flex flex-col gap-2">
                <a
                  href="mailto:charantejs018@gmail.com"
                  className="btn-gradient rounded-xl py-2.5 text-xs font-semibold text-white"
                >
                  Send Email
                </a>
                <Link
                  to="/"
                  className="rounded-xl border border-white/20 bg-white/5 py-2 text-xs font-semibold text-white transition-colors hover:bg-white/15"
                >
                  View Full Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
