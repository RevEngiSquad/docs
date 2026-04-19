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
    <main className="min-h-screen bg-[#050505] px-4 pt-28 pb-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <section className="mb-14 max-w-3xl">
          <div className="mb-5 inline-flex rounded-md border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-white/70">
            Contact
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Get in touch with RevEngi.</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
            Use the channel that best matches your issue. Telegram is the fastest path for active support, while email is better for longer-form requests and account-specific follow-up.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {contactCards.map((card) => (
            <ContactCard key={card.title} {...card} />
          ))}
        </section>

        <section className="mt-14 rounded-xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-white">API support</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/60 sm:text-base">
            For API-specific questions, email{' '}
            <a href="mailto:api@revengi.in" className="text-white underline decoration-white/20 underline-offset-4 hover:decoration-white/60">
              api@revengi.in
            </a>{' '}
            or review the{' '}
            <Link href="/docs/api" className="text-white underline decoration-white/20 underline-offset-4 hover:decoration-white/60">
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
    <div className="flex h-full flex-col rounded-xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:bg-white/[0.05]">
      <div className="mb-5 flex items-center gap-3 border-b border-white/10 pb-5">
        <div className="flex h-10 w-10 items-center justify-center border border-white/10 bg-white/[0.04] text-white/75">
          {icon}
        </div>
        <h2 className="text-xl font-semibold text-white">{title}</h2>
      </div>

      <p className="mb-6 text-sm leading-6 text-white/55">{description}</p>

      <div className="mt-auto grid gap-3 sm:grid-cols-2 md:grid-cols-1">
        {actions.map((action) => (
          <Link
            key={action.label}
            href={action.href}
            className="inline-flex w-full justify-center rounded-md border border-white/10 bg-white px-4 py-3 text-sm font-medium text-black transition hover:bg-white/90"
          >
            {action.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
