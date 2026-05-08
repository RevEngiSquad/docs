import Link from "next/link";
import { EnvelopeClosedIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { LiaTelegram } from "react-icons/lia";

const contactCards = [
  {
    icon: <LiaTelegram className="h-5 w-5" />,
    title: "Telegram Support",
    description: "Get direct support through our Telegram group or message the support bot.",
    actions: [
      { href: "https://t.me/RevEngiSupport", label: "Join Group" },
      { href: "https://t.me/RevEngiSupportBot", label: "Contact Bot" },
    ],
  },
  {
    icon: <EnvelopeClosedIcon className="h-5 w-5" />,
    title: "Email Support",
    description: "Reach out for technical help, account issues, or general questions.",
    actions: [{ href: "mailto:support@revengi.in", label: "Send Email" }],
  },
  {
    icon: <GitHubLogoIcon className="h-5 w-5" />,
    title: "GitHub",
    description: "Report issues, follow development, or contribute to the project.",
    actions: [{ href: "https://github.com/RevEngiSquad", label: "View GitHub" }],
  },
  {
    icon: <LiaTelegram className="h-5 w-5" />,
    title: "Support RevEngi",
    description: "Help fund infrastructure and ongoing development.",
    actions: [{ href: "/donate", label: "Donate" }],
  },
];

export default function ContactPage() {
  return (
    <main className="bg-background px-4 pt-24 pb-16 text-foreground sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <section className="mb-12">
          <span className="inline-block border border-border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            Contact
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">Get in touch with RevEngi.</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
            Use the channel that best matches your issue. Telegram is the fastest path for active support, while email is better for longer-form requests and account-specific follow-up.
          </p>
        </section>

        <section className="grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-2 xl:grid-cols-4">
          {contactCards.map((card) => (
            <ContactCard key={card.title} {...card} />
          ))}
        </section>

        <section className="mt-12 border border-border bg-background p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-foreground">API support</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">
            For API-specific questions, email{' '}
            <a href="mailto:api@revengi.in" className="text-foreground underline decoration-border underline-offset-4 hover:decoration-muted-foreground">
              api@revengi.in
            </a>{' '}
            or review the{' '}
            <Link href="/docs/api" className="text-foreground underline decoration-border underline-offset-4 hover:decoration-muted-foreground">
              API documentation
            </Link>
            .
          </p>
        </section>
      </div>
    </main>
  );
}

function ContactCard({
  icon,
  title,
  description,
  actions,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  actions: { href: string; label: string }[];
}) {
  return (
    <div className="flex h-full flex-col bg-background p-6 transition-colors hover:bg-muted/30">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground/50">Channel</p>
          <h2 className="mt-1.5 text-xl font-semibold text-foreground">{title}</h2>
        </div>
        <div className="flex h-10 w-10 items-center justify-center border border-border text-foreground/60">
          {icon}
        </div>
      </div>

      <p className="mb-5 text-sm leading-6 text-muted-foreground">{description}</p>

      <div className="mt-auto flex flex-col gap-2">
        {actions.map((action) => (
          <Link
            key={action.label}
            href={action.href}
            className="inline-flex w-full items-center justify-center bg-foreground px-4 py-2.5 text-sm font-medium text-background transition hover:bg-foreground/90"
          >
            {action.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
