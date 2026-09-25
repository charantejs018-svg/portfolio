import { useState } from "react";
import {
  Check,
  Copy,
  Download,
  ExternalLink,
  Eye,
  FileDown,
  FileText,
  Printer,
  Sparkles,
  X,
} from "lucide-react";
import { toast } from "sonner";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const resumePdfUrl = "/Charantej_S_Resume.pdf";
  const resumeDocxUrl = "/Charantej_S_Resume.docx";

  const handleCopyLink = () => {
    const fullUrl = `${window.location.origin}${resumePdfUrl}`;
    navigator.clipboard.writeText(fullUrl).then(() => {
      setCopied(true);
      toast.success("Resume link copied to clipboard!");
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
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in-0 duration-200"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[94vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-card shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/80 bg-card/95 px-5 py-3.5 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <FileText className="size-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 id="resume-modal-title" className="text-base font-bold text-foreground sm:text-lg">
                  Charantej S &mdash; Resume
                </h2>
                <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] font-semibold text-emerald-600">
                  <Sparkles className="size-3" />
                  ATS Verified
                </span>
              </div>
              <p className="text-xs text-muted-foreground">
                B.E. Computer Science Engineering &bull; Er. Perumal Manimekalai College of Engineering
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted"
              title="Copy direct link to resume PDF"
            >
              {copied ? (
                <>
                  <Check className="size-3.5 text-emerald-600" />
                  <span className="hidden sm:inline text-emerald-600 font-semibold">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="size-3.5" />
                  <span className="hidden sm:inline">Copy Link</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={onClose}
              className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="Close modal"
            >
              <X className="size-5" />
            </button>
          </div>
        </div>

        {/* Content body */}
        <div className="grid flex-1 overflow-y-auto lg:grid-cols-[1fr_320px]">
          {/* Resume Preview */}
          <div className="flex items-center justify-center bg-muted/40 p-4 sm:p-6">
            <div className="relative max-w-full overflow-hidden rounded-xl border border-border/80 bg-white shadow-xl transition-transform hover:shadow-2xl">
              <img
                src="/resume-preview.png"
                alt="Charantej S Resume Preview"
                className="mx-auto block max-h-[70vh] w-auto object-contain"
                loading="eager"
              />
            </div>
          </div>

          {/* Sidebar Info & Actions */}
          <div className="flex flex-col justify-between border-t border-border/80 bg-card p-5 lg:border-l lg:border-t-0 sm:p-6">
            <div className="space-y-5">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                  Quick Summary
                </span>
                <h3 className="mt-1 text-sm font-bold text-foreground">
                  Ready for Full-Time &amp; Internship Opportunities
                </h3>
              </div>

              {/* Badges / Highlights */}
              <div className="space-y-2.5 text-xs">
                <div className="rounded-xl border border-border/70 bg-muted/30 p-3">
                  <div className="text-[11px] font-semibold text-muted-foreground">Education</div>
                  <div className="mt-0.5 font-bold text-foreground">B.E. Computer Science</div>
                  <div className="text-primary font-medium">83% Current Score (2024–2028)</div>
                </div>

                <div className="rounded-xl border border-border/70 bg-muted/30 p-3">
                  <div className="text-[11px] font-semibold text-muted-foreground">Key Skills</div>
                  <div className="mt-1 flex flex-wrap gap-1.5">
                    {["Python", "Java", "C", "React", "TypeScript", "Tailwind CSS", "HTML/CSS"].map(
                      (skill) => (
                        <span
                          key={skill}
                          className="rounded-md bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary"
                        >
                          {skill}
                        </span>
                      )
                    )}
                  </div>
                </div>

                <div className="rounded-xl border border-border/70 bg-muted/30 p-3">
                  <div className="text-[11px] font-semibold text-muted-foreground">Top Certifications</div>
                  <ul className="mt-1 space-y-1 text-[11px] text-muted-foreground">
                    <li>&bull; <strong className="text-foreground">IBM:</strong> Python 101 for Data Science</li>
                    <li>&bull; <strong className="text-foreground">IIT Bombay SINE:</strong> C Training (82.5%)</li>
                    <li>&bull; <strong className="text-foreground">Infosys:</strong> Artificial Intelligence &amp; NLP</li>
                    <li>&bull; <strong className="text-foreground">Udemy:</strong> AI Chatbot Development</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 space-y-2.5 pt-4 border-t border-border/70">
              <a
                href={resumePdfUrl}
                download="Charantej_S_Resume.pdf"
                className="btn-gradient flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-semibold shadow-md"
              >
                <Download className="size-4" />
                Download Resume (PDF)
              </a>

              <a
                href={resumeDocxUrl}
                download="Charantej_S_Resume.docx"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-secondary py-2.5 text-xs font-semibold text-foreground transition-colors hover:bg-accent"
              >
                <FileDown className="size-4" />
                Download Word (.DOCX)
              </a>

              <div className="flex gap-2">
                <a
                  href={resumePdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-border bg-card py-2 text-xs font-medium text-foreground transition-colors hover:bg-muted"
                >
                  <ExternalLink className="size-3.5" />
                  Open in Tab
                </a>
                <button
                  type="button"
                  onClick={handlePrint}
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-border bg-card px-3 py-2 text-xs font-medium text-foreground transition-colors hover:bg-muted"
                  title="Print resume"
                >
                  <Printer className="size-3.5" />
                  <span className="sr-only sm:not-sr-only">Print</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
