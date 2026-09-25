import {
  Activity,
  Award,
  BookOpen,
  CheckCircle2,
  Compass,
  GraduationCap,
  Headphones,
  Languages,
  Palette,
  Sparkles,
  Trophy,
  Zap,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCountUp } from "@/hooks/useCountUp";

const symposiums = [
  {
    institution: "Sairam College of Engineering & Technology",
    location: "Anekal",
    type: "Technical Symposium",
  },
  {
    institution: "Christ College of Science and Management",
    location: "Alambadi",
    type: "Academic Symposium",
  },
];

const strengths = [
  "Leadership",
  "Problem Solving",
  "Teamwork",
  "Positive Thinking",
  "Time Management",
  "Quick Learner",
];

const interests = [
  { name: "Reading Books", icon: BookOpen },
  { name: "Drawing", icon: Palette },
  { name: "Cricket & Football", icon: Activity },
  { name: "Listening to Music", icon: Headphones },
  { name: "Exploring New Places", icon: Compass },
];

const languages = [
  { name: "English", level: "Fluent" },
  { name: "Tamil", level: "Fluent" },
  { name: "Telugu", level: "Fluent" },
  { name: "Kannada", level: "Conversational" },
  { name: "Hindi", level: "Conversational" },
];

export function Highlights() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.15 });

  // Number count-ups
  const scoreVal = useCountUp(83, 1400, isVisible);
  const certsVal = useCountUp(9, 1200, isVisible);
  const langsVal = useCountUp(5, 1000, isVisible);
  const sympVal = useCountUp(2, 1000, isVisible);

  const stats = [
    { label: "B.E. Current Score", value: `${scoreVal}%`, icon: GraduationCap },
    { label: "Verified Certifications", value: `${certsVal}+`, icon: Award },
    { label: "Languages Spoken", value: langsVal, icon: Languages },
    { label: "Symposiums Attended", value: sympVal, icon: Trophy },
  ];

  return (
    <section ref={ref} id="highlights" className="surface-section py-20 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className={`flex flex-wrap items-end justify-between gap-3 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <div>
            <p className="text-sm font-semibold text-primary">Beyond Code</p>
            <h2 className="rule-accent mt-1 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Highlights &amp; Strengths
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            Symposium participation, personal strengths, interests, and multilingual capabilities
          </p>
        </div>

        {/* Stats CountUp Grid */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat, sIdx) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`glass-card lift-shadow-glow flex flex-col items-center justify-center p-5 text-center transition-all duration-500 ${
                  isVisible ? "animate-fade-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${sIdx * 100}ms` }}
              >
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-5 animate-bounce-in" />
                </div>
                <div className="mt-3 text-2xl font-black text-foreground sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs font-medium text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Cards Grid: fadeUp */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* Symposiums Card */}
          <div
            className={`glass-card lift-shadow-glow flex flex-col justify-between p-6 sm:p-7 transition-all duration-500 hover:border-primary/50 ${
              isVisible ? "animate-fade-up stagger-1" : "opacity-0"
            }`}
          >
            <div>
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Trophy className="size-5 animate-bounce-in" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">Symposiums</h3>
                  <p className="text-xs text-muted-foreground">
                    Technical events and college participation
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {symposiums.map((symp) => (
                  <div
                    key={symp.institution}
                    className="flex items-start gap-3 rounded-xl border border-border/70 bg-card/60 p-3.5 transition-all hover:border-primary/40 hover:bg-card hover:scale-[1.01]"
                  >
                    <div className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Award className="size-3.5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground">{symp.institution}</h4>
                      <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{symp.location}</span>
                        <span>•</span>
                        <span className="font-medium text-primary">{symp.type}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 border-t border-border/50 pt-4 text-xs font-medium text-muted-foreground">
              Participated actively in college-level symposiums and technical gatherings.
            </div>
          </div>

          {/* Strengths Card */}
          <div
            className={`glass-card lift-shadow-glow flex flex-col justify-between p-6 sm:p-7 transition-all duration-500 hover:border-primary/50 ${
              isVisible ? "animate-fade-up stagger-2" : "opacity-0"
            }`}
          >
            <div>
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Zap className="size-5 animate-bounce-in" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">Core Strengths</h3>
                  <p className="text-xs text-muted-foreground">
                    Key interpersonal and professional attributes
                  </p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {strengths.map((strength) => (
                  <div
                    key={strength}
                    className="flex items-center gap-2 rounded-xl border border-border/70 bg-card/60 px-3 py-2.5 text-xs font-semibold text-foreground transition-all hover:border-primary/40 hover:bg-card hover:scale-105"
                  >
                    <CheckCircle2 className="size-4 shrink-0 text-primary" />
                    <span>{strength}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 border-t border-border/50 pt-4 text-xs font-medium text-muted-foreground">
              Collaborative mindset with strong problem-solving and rapid learning capabilities.
            </div>
          </div>

          {/* Interests Card */}
          <div
            className={`glass-card lift-shadow-glow flex flex-col justify-between p-6 sm:p-7 transition-all duration-500 hover:border-primary/50 ${
              isVisible ? "animate-fade-up stagger-3" : "opacity-0"
            }`}
          >
            <div>
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Sparkles className="size-5 animate-bounce-in" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">Interests &amp; Hobbies</h3>
                  <p className="text-xs text-muted-foreground">
                    Activities and passions that spark creativity
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2.5">
                {interests.map((interest) => {
                  const Icon = interest.icon;
                  return (
                    <div
                      key={interest.name}
                      className="flex items-center gap-2 rounded-xl border border-border/70 bg-card/60 px-3.5 py-2.5 text-xs font-semibold text-foreground transition-all hover:border-primary/40 hover:bg-card hover:scale-105"
                    >
                      <Icon className="size-4 text-primary" />
                      <span>{interest.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 border-t border-border/50 pt-4 text-xs font-medium text-muted-foreground">
              Maintaining curiosity and balance through sports, reading, music, and travel.
            </div>
          </div>

          {/* Languages Card */}
          <div
            className={`glass-card lift-shadow-glow flex flex-col justify-between p-6 sm:p-7 transition-all duration-500 hover:border-primary/50 ${
              isVisible ? "animate-fade-up stagger-4" : "opacity-0"
            }`}
          >
            <div>
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Languages className="size-5 animate-bounce-in" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">Languages</h3>
                  <p className="text-xs text-muted-foreground">Multilingual communication skills</p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="flex flex-col justify-center rounded-xl border border-border/70 bg-card/60 p-3 transition-all hover:border-primary/40 hover:bg-card hover:scale-105"
                  >
                    <span className="text-sm font-bold text-foreground">{lang.name}</span>
                    <span className="mt-0.5 text-[11px] font-medium text-primary">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 border-t border-border/50 pt-4 text-xs font-medium text-muted-foreground">
              Proficient in communicating with diverse teams across multiple regional languages.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
