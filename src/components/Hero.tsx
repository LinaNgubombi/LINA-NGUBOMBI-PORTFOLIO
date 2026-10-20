export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      {/* Split background */}
      <div className="absolute inset-0 grid grid-cols-2">
        <div className="bg-cream" />
        <div className="bg-charcoal" />
      </div>

      {/* Top labels */}
      <div className="relative z-10 pt-28 md:pt-32 px-6 md:px-12 grid grid-cols-2">
        <div className="text-charcoal/60 font-mono text-[10px] md:text-xs uppercase tracking-[0.3em]">
          Quiet · Observer
        </div>
        <div className="text-cream/60 font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-right">
          Loud · Builder
        </div>
      </div>

      {/* Name split — LINA on cream side, NGUBOMBI on charcoal side */}
      <div className="relative z-10 mt-20 sm:mt-24 md:mt-40 grid grid-cols-2 items-center">
        <div className="flex justify-center">
          <h1 className="font-serif font-light leading-none tracking-tight text-charcoal text-[18vw] md:text-[16vw] lg:text-[14vw] animate-fade-up">
            LINA
          </h1>
        </div>
        <div className="flex justify-center px-1">
          <h1
            className="font-serif font-light italic leading-none tracking-tight text-cream text-[11vw] sm:text-[12vw] md:text-[12vw] lg:text-[10vw] animate-fade-up break-all"
            style={{ animationDelay: "0.15s" }}
          >
            NGUBOMBI
          </h1>
        </div>
      </div>

      {/* Tagline + status */}
      <div className="relative z-10 mt-16 md:mt-24 text-center px-6">
        <p className="font-serif italic text-terracotta text-base md:text-2xl">
          developer · ambivert · always two things at once
        </p>
        <div className="mt-6 inline-flex items-center gap-2 font-mono text-[10px] md:text-xs uppercase tracking-[0.25em]">
          <span className="w-2 h-2 rounded-full bg-terracotta animate-soft-pulse" />
          <span className="text-charcoal/70">Available — Spring 2026</span>
        </div>
      </div>

      {/* CTAs */}
      <div className="relative z-10 mt-10 md:mt-14 grid grid-cols-2 px-6 md:px-12 pb-12 gap-4 md:gap-0">
        <div className="flex justify-center md:justify-end md:pr-12">
          <a
            href="#projects"
            className="font-serif italic text-charcoal underline underline-offset-8 decoration-1 hover:text-terracotta transition-colors text-base md:text-lg"
          >
            ↓ explore my work
          </a>
        </div>
        <div className="flex justify-center md:justify-start md:pl-12">
          <a
            href="#contact"
            className="font-serif italic text-cream underline underline-offset-8 decoration-1 hover:text-terracotta transition-colors text-base md:text-lg"
          >
            let's connect →
          </a>
        </div>
      </div>

      {/* Bottom mirrored captions */}
      <div className="relative z-10 grid grid-cols-2 px-6 md:px-12 pb-8 md:pb-12">
        <p className="font-serif italic text-charcoal/60 text-xs md:text-sm">
          currently reading. listening. thinking.
        </p>
        <p className="font-serif italic text-cream/60 text-xs md:text-sm text-right">
          currently shipping. speaking. building.
        </p>
      </div>
    </section>
  );
};
