export const About = () => {
  return (
    <section id="about" className="bg-cream py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10 md:gap-12">
        <div className="md:col-span-4">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-terracotta mb-4">
            01 — About
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal leading-[0.95]">
            Two halves,<br />
            <span className="italic">one craft.</span>
          </h2>
        </div>

        <div className="md:col-span-8 md:pt-4">
          <p className="font-serif text-lg sm:text-xl md:text-2xl text-charcoal leading-relaxed">
            I'm an aspiring software developer who believes great software
            starts with{" "}
            <span className="italic text-terracotta">
              understanding the problem
            </span>
            , not just writing the code. I enjoy understanding user needs and
            turning them into practical solutions that people can actually see
            and use.
          </p>
          <p className="mt-6 text-base md:text-lg text-charcoal/70 leading-relaxed">
            I work across web and software development using technologies such
            as Python, JavaScript, SQL, PHP, React, Flutter, Firebase, Tailwind
            CSS and Git. I'm also expanding my knowledge of TypeScript, cloud
            technologies and AI, with a focus on continuously improving my
            technical skills and problem-solving abilities.
          </p>
          <p className="mt-4 text-base md:text-lg text-charcoal/70 leading-relaxed">
            Beyond the technical side, I bring curiosity, attention to small but
            important details and a customer-focused mindset developed through
            my experience in sales. Working with customers has strengthened my
            ability to listen, communicate effectively, understand different
            needs, and build positive relationships. I believe these skills are
            just as valuable in software development, where understanding the
            people behind a problem is essential to creating solutions that are
            practical, accessible and meaningful.
          </p>
          <p className="mt-4 text-base md:text-lg text-charcoal/70 leading-relaxed">
            I'm interested in more than simply completing tasks. I want to
            understand why a solution matters, how people will interact with it,
            and how it can be made better. I'm currently open to junior software
            development roles, internships, learnerships and collaborative
            projects where I can contribute my technical knowledge,
            customer-focused perspective and willingness to learn while growing
            as a developer.
          </p>

          <div className="mt-12 grid sm:grid-cols-2 gap-8 pt-8 border-t border-charcoal/15">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-charcoal/50 mb-2">
                Currently
              </p>
              <p className="font-serif text-lg text-charcoal">
                Full Stack Engineer at LC Studio · Web Development Intern ·
                UNISA student
              </p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-charcoal/50 mb-2">
                Credentials
              </p>
              <p className="font-serif text-lg text-charcoal">
                9 licences & certifications, incl. Real-Time Systems Developer
                and Cisco Networking Academy courses
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
