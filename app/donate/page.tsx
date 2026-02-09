'use client';

import { useState } from 'react';
import PaymentCard from '@/components/PaymentCard';
import { InfoCircledIcon } from "@radix-ui/react-icons";

function CopyButton({ text }: { text: string }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    return (
        <button
            onClick={handleCopy}
            className="absolute top-2 right-2 p-1.5 rounded bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors text-xs"
            title="Copy to clipboard"
        >
            {copied ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
            ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
            )}
        </button>
    );
}

function CodeBlock({ children }: { children: string }) {
  return (
    <div className="relative mt-2">
      <code
        className="
          block
          rounded-lg
          border border-border
          bg-muted/60
          px-3 py-2
          text-sm
          font-mono
          text-foreground
          break-all whitespace-pre-wrap
          pr-10
          backdrop-blur
        "
      >
        {children}
      </code>

      <CopyButton text={children} />
    </div>
  );
}

export default function DonatePage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <section className="mb-8">
              <h1 className="text-3xl font-bold mb-6">
                Become a Sponsor
              </h1>

              <p className="mb-6 text-muted-foreground">
                Want to support RevEngi publicly? Sponsors who contribute are featured on our
                homepage as a token of appreciation. If you're interested in sponsoring,
                donate any amount and reach out — we’ll take care of the rest 🤝
              </p>

              <h2 className="text-2xl font-semibold mb-4">
                Support Us
              </h2>
              <p className="mb-4">
                  While RevEngiBot and RevEngi API remains largely free to use, we've introduced some file size limits to manage our server load. As a small team, we don't profit from this project—but we do rely on community support to keep it running. To help sustain and improve RevEngiBot, we offer premium subscriptions that remove these restrictions and fund our dedicated cloud hosting. Your support enables us to maintain the service and develop even more powerful features!
              </p>
              <p className="mb-4">
                  Instead of paywalls, we prefer to <em>reward</em> those who support us by increasing their usage limits ❤️.
                  If you'd like to contribute, simply donate any amount and let us know, we'll be happy to extend your access accordingly!
              </p>
            </section>
            <section className="mb-10" id="payment-methods">
              <h2 className="text-2xl font-semibold mb-6">
                Payment methods
              </h2>
              <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
                  <PaymentCard
                    title="Patreon"
                    description="Subscribe via Patreon and get premium access automatically."
                    badge="Recommended"
                  >
                    <a
                      href="https://www.patreon.com/abhithemodder/shop"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:underline"
                    >
                      Visit Patreon →
                    </a>
                  </PaymentCard>

                  <PaymentCard
                    title="UPI"
                    description="Instant transfer (India)."
                  >
                    <CodeBlock>smishra247@airtel</CodeBlock>
                  </PaymentCard>

                  <PaymentCard
                    title="Binance Pay"
                    description="No network fees. USDT only."
                    badge="Zero fees"
                  >
                    <CodeBlock>570920434</CodeBlock>
                  </PaymentCard>

                  <PaymentCard
                    title="Crypto Payments"
                    description="Manual verification required."
                  >
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-medium">USDT (TRC-20)</p>
                        <CodeBlock>TTZwdQSKwfN5jDhh95FTij3AE7RnEsovz4</CodeBlock>
                      </div>

                      <div>
                        <p className="text-sm font-medium">USDT (BEP-20)</p>
                        <CodeBlock>0x85588e07617eac195b98c6b76d5d45c4ce32d531</CodeBlock>
                      </div>

                      <div>
                        <p className="text-sm font-medium">BTC</p>
                        <CodeBlock>bc1qqq0gcdp2quvuhed8kv8lpdhrdkej32lpu0wrsd</CodeBlock>
                      </div>

                      <div>
                        <p className="text-sm font-medium">ETH</p>
                        <CodeBlock>0x97b5122FF1eA32139693C5221C83fe9c6D7298D3</CodeBlock>
                      </div>
                    </div>
                  </PaymentCard>

              </div>
            </section>

            <section className="mt-10 rounded-xl border border-border bg-muted/30 p-6">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <InfoCircledIcon className="w-5 h-5" />
                Important notes
              </h2>

              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  After donating, please send the transaction ID or screenshot to{" "}
                  <a
                    href="https://t.me/RevEngiSupportBot"
                    className="text-foreground hover:underline"
                  >
                    @RevEngiSupportBot
                  </a>{" "}
                  along with your Account / User ID.
                  If you don’t receive a reply within 24 hours, report it in our{" "}
                  <a href="/contact" className="text-foreground hover:underline">
                    Telegram support group
                  </a>.
                </li>

                <li>
                  Alternatively, you can email the screenshot to{" "}
                  <a
                    href="mailto:support@revengi.in"
                    className="text-foreground hover:underline"
                  >
                    support@revengi.in
                  </a>.
                </li>

                <li>
                  For crypto payments, please double-check the destination address and
                  consider network fees before sending.
                </li>
              </ul>
            </section>
        </div>
    );
}
