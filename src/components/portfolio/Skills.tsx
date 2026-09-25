import { Code, Layers, Wrench } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface SkillItem {
  name: string;
  label: string;
  color: string;
  level: string;
  proficiency: number;
}

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Layers,
    description: "Building responsive, modern, and interactive interfaces",
    skills: [
      { name: "HTML", label: "</>", color: "#e34f26", level: "Semantic HTML5", proficiency: 92 },
      { name: "CSS", label: "#", color: "#1572b6", level: "Responsive Styling", proficiency: 88 },
      { name: "JavaScript", label: "JS", color: "#f7df1e", level: "ES6+ Logic", proficiency: 82 },
    ],
  },
  {
    title: "Programming Languages",
    icon: Code,
    description: "Core algorithms, data manipulation, and software problem solving",
    skills: [
      { name: "Python", label: "Py", color: "#3776ab", level: "Data & Scripting", proficiency: 86 },
      { name: "Java", label: "☕", color: "#f89820", level: "OOP Fundamentals", proficiency: 78 },
      { name: "C", label: "C", color: "#a8b9cc", level: "System Foundations", proficiency: 82 },
    ],
  },
  {
    title: "Tools & Databases",
    icon: Wrench,
    description: "Development workflows, version control, and data storage",
    skills: [
      { name: "VS Code", label: "VS", color: "#007acc", level: "Code Editor", proficiency: 90 },
      { name: "Git & GitHub", label: "Git", color: "#f05032", level: "Version Control", proficiency: 85 },
      { name: "MS Office", label: "MS", color: "#d83b01", level: "Productivity Suite", proficiency: 88 },
      { name: "MySQL", label: "SQL", color: "#4479a1", level: "Relational DB", proficiency: 76 },
    ],
  },
];

export function Skills() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.15 });

  return (
    <section ref={ref} id="skills" className="py-20 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className={`flex flex-wrap items-end justify-between gap-3 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <div>
            <p className="text-sm font-semibold text-primary">Technical Proficiency</p>
            <h2 className="rule-accent mt-1 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Skills
            </h2>
          </div>
          <p className="text-sm text-muted-foreground">
            Frontend, Programming &amp; Developer Tools
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {skillCategories.map((category, catIdx) => (
            <div
              key={category.title}
              className={`glass-card lift-shadow-glow flex flex-col justify-between p-6 sm:p-7 transition-all duration-500 hover:border-primary/50 ${
                isVisible ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${(catIdx + 1) * 150}ms` }}
            >
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 hover:rotate-12">
                    <category.icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{category.title}</h3>
                    <p className="text-xs text-muted-foreground">{category.description}</p>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-1">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={skill.name}
                      className="group flex flex-col rounded-xl border border-border/70 bg-card/60 p-3 transition-all duration-300 hover:border-primary/40 hover:bg-card hover:shadow-md hover:scale-[1.02]"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span
                            className="flex size-9 items-center justify-center rounded-lg text-sm font-black shadow-xs transition-transform duration-300 group-hover:scale-115 group-hover:rotate-6"
                            style={{
                              backgroundColor: `${skill.color}15`,
                              color: skill.color,
                            }}
                          >
                            {skill.label}
                          </span>
                          <div>
                            <p className="text-sm font-bold text-foreground">{skill.name}</p>
                            <p className="text-[11px] text-muted-foreground">{skill.level}</p>
                          </div>
                        </div>
                        <span className="text-xs font-semibold text-primary font-mono">
                          {skill.proficiency}%
                        </span>
                      </div>

                      {/* Smooth Progress Fill: fillAnimation */}
                      <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-secondary/80">
                        <div
                          className="h-full rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: isVisible ? `${skill.proficiency}%` : "0%",
                            backgroundColor: skill.color,
                            transitionDelay: `${(catIdx * 3 + sIdx + 1) * 80}ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 border-t border-border/50 pt-4 text-center">
                <span className="text-[11px] font-semibold tracking-wide text-primary uppercase">
                  {category.skills.length} Technologies
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
