import { useReveal } from "@/hooks/use-reveal";

const skills = [
  { label: "Languages", number: "01", items: ["Python", "JavaScript", "PHP", "SQL"] },
  { label: "Frontend", number: "02", items: ["React", "Flutter", "Tailwind CSS", "HTML & CSS"] },
  { label: "Tools & Platforms", number: "03", items: ["Firebase", "Git & GitHub", "Oracle APEX", "Figma"] },
];

const growing = ["TypeScript", "Cloud Technologies", "AI", "Modern Dev Practices"];

export const Skills = () => {
  const { ref, revealed } = useReveal<HTMLElement>(0.2);

  return (
    <section
      id="skills"
      ref={ref}
      className={`py-20 md:py-32 px-6 md:px-12 transition-colors duration-[1200ms] ease-out ${
        revealed ? "bg-charcoal text-cream" : "bg-white text-charcoal"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16 gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-terracotta mb-4">
              02 — Skills
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-[0.95]">
              The tools<br />
              <span className="italic">I build with.</span>
            </h2>
          </div>
          <p className={`font-serif italic max-w-sm transition-colors duration-[1200ms] ${revealed ? "text-cream/50" : "text-charcoal/50"}`}>
            A working palette — chosen for clarity, scale, and longevity.
          </p>
        </div>

        <div className={`grid md:grid-cols-3 gap-px transition-colors duration-[1200ms] ${revealed ? "bg-cream/10" : "bg-charcoal/10"}`}>
          {skills.map((s) => (
            <div
              key={s.label}
              className={`p-8 md:p-10 transition-colors duration-[1200ms] group ${
                revealed ? "bg-charcoal hover:bg-charcoal-soft" : "bg-white hover:bg-cream"
              }`}
            >
              <div className="flex items-baseline justify-between mb-8">
                <span className={`font-mono text-xs uppercase tracking-[0.3em] ${revealed ? "text-cream/40" : "text-charcoal/40"}`}>
                  [ {s.number} ]
                </span>
                <span className="w-2 h-2 rounded-full bg-terracotta opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-serif text-3xl mb-6">{s.label}</h3>
              <ul className="space-y-2">
                {s.items.map((item) => (
                  <li key={item} className={`font-serif italic text-lg ${revealed ? "text-cream/70" : "text-charcoal/70"}`}>
                    — {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className={`mt-8 font-mono text-xs uppercase tracking-[0.25em] transition-colors duration-[1200ms] ${revealed ? "text-cream/50" : "text-charcoal/50"}`}>
          Currently growing → {growing.join(" · ")}
        </p>
      </div>
    </section>
  );
};
