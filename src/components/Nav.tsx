import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || open ? "bg-cream/95 backdrop-blur-md border-b border-charcoal/10" : ""
      }`}
    >
      {!scrolled && !open && (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden overflow-hidden bg-charcoal md:block">
          <div className="nav-seam-body absolute inset-y-0 left-0 bg-cream" />
          <svg
            className="nav-seam-curve absolute inset-y-0 h-full text-cream"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path d="M0 0 H12 C62 0 100 28 100 50 C100 72 62 100 12 100 H0 Z" fill="currentColor" />
          </svg>
        </div>
      )}
      <nav className="relative z-30 max-w-7xl mx-auto px-6 md:px-10 py-4 md:py-5 flex items-center justify-between">
        <a
          href="#home"
          onClick={() => setOpen(false)}
          className="font-serif text-base sm:text-lg md:text-xl tracking-tight text-charcoal relative z-50"
        >
          Lina <span className="italic text-terracotta">Ngubombi</span>
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l, index) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-xs uppercase tracking-[0.2em] font-mono hover:text-terracotta transition-colors ${
                  !scrolled && index >= 3 ? "text-cream/70" : "text-charcoal/70"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden md:inline-block text-xs uppercase tracking-[0.2em] font-mono text-cream bg-charcoal px-4 py-2 hover:bg-terracotta transition-colors"
        >
          Say Hi
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden relative z-50 text-charcoal p-2 -mr-2"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`md:hidden fixed inset-0 top-[60px] bg-cream transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col px-6 py-10 gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-serif text-3xl text-charcoal hover:text-terracotta transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-6">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-block text-xs uppercase tracking-[0.3em] font-mono text-cream bg-charcoal px-6 py-3"
            >
              Say Hi
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
