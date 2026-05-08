import Link from "next/link";
import { LuGithub, LuLinkedin } from "react-icons/lu";
import { LiaTelegramPlane } from "react-icons/lia";

const links = {
  product: [
    { label: "Desktop Apps", href: "/downloads" },
    { label: "API Docs", href: "/docs/api" },
    { label: "Web App", href: "https://app.revengi.in" },
  ],
  company: [
    { label: "Contact", href: "/contact" },
    { label: "Status", href: "https://status.revengi.in", external: true },
    { label: "Donate", href: "/donate" },
  ],
  legal: [
    { label: "Terms", href: "/terms" },
    { label: "Privacy", href: "/privacy" },
  ],
};

const socials = [
  { icon: <LiaTelegramPlane size={16} />, href: "https://t.me/RevEngi", label: "Telegram" },
  { icon: <LuGithub size={16} />, href: "https://github.com/RevEngiSquad", label: "GitHub" },
  { icon: <LuLinkedin size={16} />, href: "https://linkedin.com/company/revengi", label: "LinkedIn" },
];

function FooterCol({ title, items }: { title: string; items: typeof links.product }) {
  return (
    <div>
      <h3 className="text-xs font-medium uppercase tracking-[0.1em] text-foreground">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              {...("external" in item ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative z-10 w-full border-t border-border bg-background">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="shrink-0">
            <div className="flex items-center gap-2">
              <img src="/icon.jpg" alt="RevEngi Logo" width="22" height="22" className="border border-border" />
              <span className="text-sm font-semibold tracking-tight">
                RevEngi<span className="ml-1 text-muted-foreground">BOT</span>
              </span>
            </div>
            <div className="mt-3 flex items-center gap-1">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  className="flex h-7 w-7 items-center justify-center text-muted-foreground transition-colors duration-200 hover:text-foreground"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-x-14 gap-y-6">
            <FooterCol title="Product" items={links.product} />
            <FooterCol title="Company" items={links.company} />
            <FooterCol title="Legal" items={links.legal} />
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 text-xs text-muted-foreground sm:px-6">
          <p>&copy; {new Date().getFullYear()} RevEngi. All rights reserved.</p>
          <p className="text-muted-foreground/60">Built for reverse engineers</p>
        </div>
      </div>
    </footer>
  );
}
