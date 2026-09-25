import { Award, Calendar, GraduationCap, School } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score: string;
  scoreNumber: number;
  status?: string;
  description: string;
}

const educationList: EducationItem[] = [
  {
    degree: "B.E. Computer Science Engineering",
    institution: "Er. Perumal Manimekalai College of Engineering",
    period: "2024 – 2028",
    score: "83%",
    scoreNumber: 83,
    status: "Currently in 3rd Year",
    description:
      "Pursuing Bachelor of Engineering in Computer Science with a strong focus on full-stack web development, Python programming, and practical software applications.",
  },
  {
    degree: "Higher Secondary (12th)",
    institution: "Government Higher Secondary School, Berigai",
    period: "2024",
    score: "68%",
    scoreNumber: 68,
    description:
      "Completed higher secondary school education with science and mathematics foundation.",
  },
  {
    degree: "SSLC (10th)",
    institution: "Government High School, Nandhimangalam",
    period: "2022",
    score: "53%",
    scoreNumber: 53,
    description:
      "Completed secondary school leaving certificate examinations with fundamental academic education.",
  },
];

export function Education() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.15 });

  return (
    <section ref={ref} id="education" className="surface-section py-20 sm:py-24 relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className={`flex flex-wrap items-end justify-between gap-3 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <div>
            <p className="text-sm font-semibold text-primary">Academic Journey</p>
            <h2 className="rule-accent mt-1 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Education
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            My formal qualifications and academic milestones
          </p>
        </div>

        {/* Timeline Line: drawLine */}
        <div className="relative mt-8">
          <div
            className={`hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-primary-glow to-border transition-all duration-1000 ${
              isVisible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
            }`}
            style={{ transformOrigin: "left" }}
          />
        </div>

        {/* Cards: fadeUpStagger, liftShadowGlow */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {educationList.map((item, index) => (
            <div
              key={item.degree}
              className={`glass-card lift-shadow-glow relative flex flex-col justify-between overflow-hidden p-6 sm:p-7 transition-all duration-500 ${
                index === 0 ? "border-primary/50 ring-1 ring-primary/20" : ""
              } ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${(index + 1) * 140}ms` }}
            >
              {/* Top Accent Gradient with drawLine */}
              <div
                className={`absolute inset-x-0 top-0 h-1.5 transition-all duration-700 ${
                  index === 0
                    ? "bg-gradient-to-r from-primary to-primary-glow"
                    : "bg-gradient-to-r from-muted to-border"
                } ${isVisible ? "scale-x-100" : "scale-x-0"}`}
                style={{ transformOrigin: "left" }}
              />

              <div>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 hover:scale-110">
                    {index === 0 ? (
                      <GraduationCap className="size-6 text-primary" />
                    ) : (
                      <School className="size-6 text-primary" />
                    )}
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                    <Award className="size-3.5" />
                    <span>Score: {item.score}</span>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
                  <Calendar className="size-3.5" />
                  <span>{item.period}</span>
                  {item.status && (
                    <span className="ml-auto rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-600">
                      {item.status}
                    </span>
                  )}
                </div>

                <h3 className="mt-3 text-lg font-bold text-foreground">{item.degree}</h3>
                <p className="mt-1 text-sm font-medium text-primary">{item.institution}</p>

                <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>

              {/* Progress bar visual: fillAnimation */}
              <div className="mt-6 border-t border-border/60 pt-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-muted-foreground">Academic Score</span>
                  <span className="font-bold text-foreground">{item.score}</span>
                </div>
                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-secondary">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-primary-glow transition-all duration-1000 ease-out"
                    style={{
                      width: isVisible ? `${item.scoreNumber}%` : "0%",
                      transitionDelay: `${(index + 1) * 200}ms`,
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
