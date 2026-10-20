import { useReveal } from "@/hooks/use-reveal";

const projects = [
  {
    number: "01",
    title: "Task-based Management System",
    category: "Management System",
    description: "HR and payroll management system that centralizes employee data, tracks attendance and leave requests.",
    tags: ["Vue", "Node.js", "MySQL"],
    url: "https://github.com/Toufeeq1/Group_7_ModernTech_Solutions_full_stack",
    linkLabel: "GitHub",
  },
  {
    number: "02",
    title: "Analytics Dashboard",
    category: "Data Visualization",
    description: "An interactive data visualisation dashboard built with Oracle APEX for business analytics.",
    tags: ["Oracle APEX", "SQL"],
    url: "https://www.loom.com/share/0d3565dc4c664c90bdb97cb5a0940c43",
    linkLabel: "Loom",
  },
  {
    number: "03",
    title: "Managing Employee Attendance",
    category: "Full Stack Application",
    description: "An employee attendance management system that replaces paper registers with digital records.",
    tags: ["Attendance Tracking", "Reporting"],
    url: "https://lnkd.in/p/eFMk_zVf",
    linkLabel: "LinkedIn",
  },
];

export const Projects = () => {
  const { ref, revealed } = useReveal<HTMLElement>(0.15);

  return (
    <section
      id="projects"
      ref={ref}
      className={`py-20 md:py-32 px-6 md:px-12 transition-colors duration-[1200ms] ease-out ${
        revealed ? "bg-cream" : "bg-white"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 md:mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-terracotta mb-4">
            03 — Selected Work
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal leading-[0.95]">
            Things I've<br />
            <span className="italic">made real.</span>
          </h2>
        </div>

        <div className="border-t border-charcoal/20">
          {projects.map((p) => (
            <a
              key={p.number}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border-b border-charcoal/20 py-8 md:py-14 hover:bg-charcoal/[0.03] transition-colors"
            >
              <div className="grid md:grid-cols-12 gap-4 md:gap-6 items-start px-2">
                <div className="md:col-span-1 flex items-center justify-between md:block">
                  <span className="font-mono text-xs text-charcoal/40 tracking-[0.2em]">[{p.number}]</span>
                  <span className="md:hidden font-serif italic text-charcoal/60 text-sm">{p.linkLabel} ↗</span>
                </div>
                <div className="md:col-span-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-terracotta mb-2">{p.category}</p>
                  <h3 className="font-serif text-2xl sm:text-3xl md:text-5xl text-charcoal group-hover:italic transition-all">{p.title}</h3>
                </div>
                <div className="md:col-span-4">
                  <p className="text-charcoal/70 leading-relaxed text-sm md:text-base">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="font-mono text-[10px] uppercase tracking-[0.2em] text-charcoal/50 border border-charcoal/20 px-2 py-1">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="hidden md:block md:col-span-2 md:text-right">
                  <span className="font-serif italic text-charcoal group-hover:text-terracotta transition-colors">{p.linkLabel} ↗</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
