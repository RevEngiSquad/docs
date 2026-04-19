'use client';

import { useState } from 'react';
import PaymentCard from '@/components/PaymentCard';
import { InfoCircledIcon } from '@radix-ui/react-icons';

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute top-2 right-2 rounded-md border border-border bg-muted/50 p-1.5 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
      title="Copy to clipboard"
    >
      {copied ? (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )}
    </button>
  );
}

function CodeBlock({ children }: { children: string }) {
  return (
    <div className="relative mt-2">
      <code className="block break-all whitespace-pre-wrap rounded-md border border-border bg-muted/30 px-3 py-3 pr-10 font-mono text-sm text-foreground/80">
        {children}
      </code>
      <CopyButton text={children} />
    </div>
  );
}

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-background px-4 pt-28 pb-16 text-foreground sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <section className="mb-14 max-w-4xl">
          <div className="mb-5 inline-flex rounded-md border border-border bg-muted/50 px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Support RevEngi
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Fund the tools you use.
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
            RevEngi stays usable because the community helps cover infrastructure, hosting, and ongoing development. If you want higher limits, premium access, or public sponsorship placement, donate through any method below and contact us after payment.
          </p>
        </section>

        <section className="mb-14 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-xl border border-border bg-muted/50 p-6 sm:p-8">
            <h2 className="mb-4 text-2xl font-semibold">Why donate</h2>
            <div className="space-y-4 text-sm leading-7 text-muted-foreground sm:text-base">
              <p>
                RevEngiBot and the RevEngi API remain largely free, but large file handling and cloud workloads cost real money. Donations keep the service online and fund new reverse engineering features.
              </p>
              <p>
                Instead of hard paywalls, we reward supporters with better limits and premium access. Donate any amount, then send your proof of payment and account details so we can upgrade your access.
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-muted/50 p-6 sm:p-8">
            <h2 className="mb-4 text-2xl font-semibold">Sponsor placement</h2>
            <p className="text-sm leading-7 text-muted-foreground sm:text-base">
              If you want to support RevEngi publicly, sponsors are featured on the homepage as a thank-you. Donate first, then reach out and we’ll handle the listing.
            </p>
          </div>
        </section>

        <section className="mb-14" id="payment-methods">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold sm:text-3xl">Payment methods</h2>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              Choose the channel that is easiest for you. Patreon is the most direct option for automatic premium access.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <PaymentCard
              title="Patreon"
              description="Subscribe via Patreon and get premium access automatically."
              badge="Recommended"
            >
              <a
                href="https://www.patreon.com/abhithemodder/shop"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-md border border-border bg-foreground px-4 py-3 text-sm font-medium text-background transition hover:bg-foreground/90"
              >
                Visit Patreon
              </a>
            </PaymentCard>

            <PaymentCard title="UPI" description="Instant transfer for India.">
              <CodeBlock>smishra247@airtel</CodeBlock>
            </PaymentCard>

            <PaymentCard
              title="Binance Pay"
              description="No network fees. USDT only."
              badge="Zero fees"
            >
              <CodeBlock>570920434</CodeBlock>
            </PaymentCard>

            <PaymentCard title="Crypto Payments" description="Manual verification required.">
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-foreground/80">USDT (TRC-20)</p>
                  <CodeBlock>TTZwdQSKwfN5jDhh95FTij3AE7RnEsovz4</CodeBlock>
                </div>

                <div>
                  <p className="text-sm font-medium text-foreground/80">USDT (BEP-20)</p>
                  <CodeBlock>0x85588e07617eac195b98c6b76d5d45c4ce32d531</CodeBlock>
                </div>

                <div>
                  <p className="text-sm font-medium text-foreground/80">BTC</p>
                  <CodeBlock>bc1qqq0gcdp2quvuhed8kv8lpdhrdkej32lpu0wrsd</CodeBlock>
                </div>

                <div>
                  <p className="text-sm font-medium text-foreground/80">ETH</p>
                  <CodeBlock>0x97b5122FF1eA32139693C5221C83fe9c6D7298D3</CodeBlock>
                </div>
              </div>
            </PaymentCard>
          </div>
        </section>

        <section className="rounded-xl border border-border bg-muted/50 p-6 sm:p-8">
          <h2 className="mb-5 flex items-center gap-2 text-lg font-semibold text-foreground">
            <InfoCircledIcon className="h-5 w-5" />
            Important notes
          </h2>

          <ul className="space-y-4 text-sm leading-7 text-muted-foreground">
            <li>
              After donating, send the transaction ID or screenshot to{' '}
              <a href="https://t.me/RevEngiSupportBot" className="text-foreground hover:text-foreground/75">
                @RevEngiSupportBot
              </a>{' '}
              with your account or user ID. If you don’t receive a reply within 24 hours, report it in our{' '}
              <a href="/contact" className="text-foreground hover:text-foreground/75">
                Telegram support group
              </a>
              .
            </li>

            <li>
              You can also email proof of payment to{' '}
              <a href="mailto:support@revengi.in" className="text-foreground hover:text-foreground/75">
                support@revengi.in
              </a>
              .
            </li>

            <li>
              For crypto payments, double-check the destination address and account for network fees before sending.
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
