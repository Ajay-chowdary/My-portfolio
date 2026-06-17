import Reveal from "./Reveal";

const quickLinks = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#blog", label: "Writing" },
];

const socials = [
  { href: "https://github.com/Ajay-chowdary", label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/ajaychowdarydodda/",
    label: "LinkedIn",
  },
  { href: "mailto:ajaycdodda@gmail.com", label: "Email" },
];

const PRIMARY_EMAIL = "ajaycdodda@gmail.com";
const EMAILS = ["ajaycdodda@gmail.com", "ajaydodda09@gmail.com"];
const PHONE_DISPLAY = "+1 864-722-7870";
const PHONE_TEL = "+18647227870";

export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden">
      {/* CTA */}
      <div className="relative py-28 sm:py-36">
        <div
          aria-hidden
          className="glow-amber pointer-events-none absolute inset-0"
        />
        <div className="relative z-10 mx-auto max-w-5xl px-5 text-center sm:px-8">
          <Reveal>
            <h2 className="font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-text sm:text-7xl">
              Ready to build
              <br />
              something real?
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <a
              href={`mailto:${PRIMARY_EMAIL}`}
              className="mt-12 inline-flex items-center gap-3 rounded-full bg-amber px-9 py-4 font-mono text-base font-medium text-bg transition-colors hover:bg-amber-hi"
            >
              Start a project
              <span aria-hidden className="text-lg leading-none">
                {"->"}
              </span>
            </a>
          </Reveal>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-line">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            <div className="col-span-2 sm:col-span-1">
              <p className="font-display text-lg font-bold tracking-tight text-text">
                AJAY CHOWDARY
              </p>
              <p className="mt-2 font-mono text-sm text-muted">
                AI Engineer &amp; Full Stack Developer
              </p>
            </div>

            <FooterCol title="Explore" items={quickLinks} />
            <FooterCol title="Connect" items={socials} external />
            <div>
              <p className="font-mono text-sm text-amber">Get in touch</p>
              <div className="mt-3 space-y-2">
                {EMAILS.map((email) => (
                  <a
                    key={email}
                    href={`mailto:${email}`}
                    className="block text-sm text-muted transition-colors hover:text-text"
                  >
                    {email}
                  </a>
                ))}
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="block text-sm text-muted transition-colors hover:text-text"
                >
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-2 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono text-xs text-muted">
              © {new Date().getFullYear()} Ajay Chowdary Dodda
            </p>
            <p className="font-mono text-xs text-muted">
              Built with Next.js &amp; Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}

function FooterCol({
  title,
  items,
  external = false,
}: {
  title: string;
  items: { href: string; label: string }[];
  external?: boolean;
}) {
  return (
    <div>
      <p className="font-mono text-sm text-amber">{title}</p>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="text-sm text-muted transition-colors hover:text-text"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
