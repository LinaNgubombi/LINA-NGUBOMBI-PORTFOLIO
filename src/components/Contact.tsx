import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { useReveal } from "@/hooks/use-reveal";

// ─────────────────────────────────────────────────────────────
// WEB3FORMS — messages sent through this form arrive in your Gmail inbox.
// To change the receiving address or generate a new key, sign in at
// https://web3forms.com with ngubombilina@gmail.com.
// ─────────────────────────────────────────────────────────────
const WEB3FORMS_ACCESS_KEY = "8558321d-74f7-40eb-85ae-e7e38590dee3";

const channels = [
  { label: "Email", value: "ngubombilina@gmail.com", href: "mailto:ngubombilina@gmail.com" },
  { label: "Location", value: "Available remotely · worldwide", href: null },
  { label: "LinkedIn", value: "linkedin.com/in/lina-ngubombi", href: "https://linkedin.com/in/lina-ngubombi/" },
  { label: "GitHub", value: "github.com/LinaNgubombi", href: "https://github.com/LinaNgubombi" },
];

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const { ref, revealed } = useReveal<HTMLElement>(0.2);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    try {
      // Sent as a plain form post (not JSON) so the browser doesn't need a
      // pre-flight check — this is the submission style Web3Forms documents.
      const body = new FormData();
      body.append("access_key", WEB3FORMS_ACCESS_KEY);
      body.append("subject", `Portfolio message from ${form.name.trim()}`);
      body.append("from_name", "Lina Ngubombi Portfolio");
      body.append("name", form.name.trim());
      body.append("email", form.email.trim());
      body.append("message", form.message.trim());

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body,
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message || "Send failed");
      setForm({ name: "", email: "", message: "" });
      toast({ title: "Message sent", description: "Thanks for reaching out — I'll get back to you soon." });
    } catch {
      toast({
        title: "Something went wrong",
        description: "Your message couldn't be sent. Please try again.",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className={`py-20 md:py-32 px-6 md:px-12 transition-colors duration-[1200ms] ease-out ${
        revealed ? "bg-charcoal text-cream" : "bg-white text-charcoal"
      }`}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10 md:gap-12">
        <div className="md:col-span-5">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-terracotta mb-4">
            04 — Contact
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl leading-[0.95]">
            Let's make<br />
            <span className="italic text-terracotta">something.</span>
          </h2>
          <p className={`mt-6 md:mt-8 font-serif italic text-base md:text-lg max-w-md transition-colors duration-[1200ms] ${revealed ? "text-cream/60" : "text-charcoal/60"}`}>
            Whether it's a quiet coffee chat or a loud product launch — I'm listening.
          </p>

          <ul className="mt-12 space-y-5">
            {channels.map((c) => (
              <li key={c.label} className={`flex items-baseline gap-6 border-b pb-4 transition-colors duration-[1200ms] ${revealed ? "border-cream/10" : "border-charcoal/10"}`}>
                <span className={`font-mono text-[10px] uppercase tracking-[0.3em] w-20 shrink-0 ${revealed ? "text-cream/40" : "text-charcoal/40"}`}>
                  {c.label}
                </span>
                {c.href ? (
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className={`font-serif text-base md:text-lg hover:text-terracotta transition-colors break-all ${revealed ? "text-cream" : "text-charcoal"}`}
                  >
                    {c.value}
                  </a>
                ) : (
                  <span className={`font-serif text-base md:text-lg ${revealed ? "text-cream/80" : "text-charcoal/80"}`}>{c.value}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <form
          onSubmit={onSubmit}
          className={`md:col-span-7 md:pl-12 md:border-l space-y-6 md:space-y-8 transition-colors duration-[1200ms] ${revealed ? "border-cream/10" : "border-charcoal/10"}`}
        >
          {[
            { key: "name", label: "Your Name", type: "text", placeholder: "Lina" },
            { key: "email", label: "Your Email", type: "email", placeholder: "you@somewhere.com" },
          ].map((f) => (
            <div key={f.key}>
              <label className={`block font-mono text-[10px] uppercase tracking-[0.3em] mb-2 ${revealed ? "text-cream/50" : "text-charcoal/50"}`}>
                {f.label}
              </label>
              <input
                required
                type={f.type}
                value={(form as any)[f.key]}
                onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                className={`w-full bg-transparent border-b focus:border-terracotta outline-none py-3 font-serif text-xl transition-colors ${
                  revealed ? "border-cream/20 text-cream placeholder:text-cream/30" : "border-charcoal/20 text-charcoal placeholder:text-charcoal/30"
                }`}
                placeholder={f.placeholder}
              />
            </div>
          ))}
          <div>
            <label className={`block font-mono text-[10px] uppercase tracking-[0.3em] mb-2 ${revealed ? "text-cream/50" : "text-charcoal/50"}`}>
              Your Message
            </label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={`w-full bg-transparent border-b focus:border-terracotta outline-none py-3 font-serif text-lg resize-none transition-colors ${
                revealed ? "border-cream/20 text-cream placeholder:text-cream/30" : "border-charcoal/20 text-charcoal placeholder:text-charcoal/30"
              }`}
              placeholder="Tell me about your idea…"
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="font-mono text-xs uppercase tracking-[0.3em] bg-terracotta text-cream px-8 py-4 hover:bg-terracotta-soft transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {sending ? "Sending…" : "Send Message →"}
          </button>
        </form>
      </div>

      <footer className={`max-w-6xl mx-auto mt-24 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4 transition-colors duration-[1200ms] ${revealed ? "border-cream/10" : "border-charcoal/10"}`}>
        <p className={`font-mono text-[10px] uppercase tracking-[0.3em] ${revealed ? "text-cream/40" : "text-charcoal/40"}`}>
          © 2026 Lina Ngubombi · designed with intention
        </p>
        <p className={`font-serif italic text-sm ${revealed ? "text-cream/40" : "text-charcoal/40"}`}>always two things at once.</p>
      </footer>
    </section>
  );
};
