import Link from 'next/link';
import { InfoCircledIcon } from '@radix-ui/react-icons';
import { ShieldCheckIcon } from 'lucide-react';

function Section({
  title,
  icon,
  children,
}: {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
      <h2 className="mb-5 flex items-center gap-2 text-2xl font-semibold text-white">
        {icon}
        {title}
      </h2>
      <div className="space-y-4 text-sm leading-7 text-white/60 sm:text-base">{children}</div>
    </section>
  );
}

function LegalList({ children }: { children: React.ReactNode }) {
  return <ul className="list-disc space-y-2 pl-5 text-white/60">{children}</ul>;
}

function InlineLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-white underline decoration-white/20 underline-offset-4 hover:decoration-white/60">
      {children}
    </Link>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#050505] px-4 pt-28 pb-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 max-w-3xl">
          <div className="mb-5 inline-flex rounded-md border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-white/70">
            Legal
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Privacy Policy</h1>
          <p className="mt-4 text-sm text-white/45">Last Updated: February 09, 2026</p>
          <p className="mt-5 max-w-3xl text-base leading-7 text-white/60 sm:text-lg">
            This policy explains how RevEngi collects, uses, stores, and protects information across the bot, API, and related services.
          </p>
        </div>

        <div className="space-y-6">
          <Section title="Introduction" icon={<InfoCircledIcon className="h-5 w-5" />}>
            <p>
              Welcome to RevEngi. We are committed to protecting your privacy and being transparent about our data practices. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Telegram bot (<InlineLink href="https://t.me/RevEngiBot">@RevEngiBot</InlineLink>), API services, and related services (collectively, “Services”).
            </p>
            <p>
              By using our Services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, you must <strong className="text-white">immediately cease all use</strong> of our Services.
            </p>
          </Section>

          <Section title="We Do Not Sell Your Data">
            <p>We do not sell, rent, trade, or otherwise transfer your personal information to third parties for marketing or commercial purposes.</p>
            <p className="font-medium text-white/80">Your data is not used to:</p>
            <LegalList>
              <li>Train artificial intelligence or machine learning models.</li>
              <li>Create advertising profiles.</li>
              <li>Be sold to data brokers.</li>
              <li>Be shared with third parties for their marketing purposes.</li>
            </LegalList>
          </Section>

          <Section title="Information We Collect">
            <div>
              <h3 className="mb-3 text-xl font-semibold text-white">1. Information You Provide</h3>
              <p>When you use our Services, we may collect the following information:</p>
              <LegalList>
                <li><strong className="text-white">Telegram User Information:</strong> Your Telegram user ID, username, and profile information as provided by Telegram’s API.</li>
                <li><strong className="text-white">Files and Content:</strong> APK files, DEX files, Smali files, Java files, and other files you upload for analysis, which are automatically deleted after processing.</li>
                <li><strong className="text-white">Commands and Queries:</strong> Bot commands you send and AI assistant queries.</li>
                <li><strong className="text-white">Account Information:</strong> If you use our web dashboard or API, we may collect your email address and securely hashed credentials.</li>
              </LegalList>
            </div>
            <div>
              <h3 className="mb-3 text-xl font-semibold text-white">2. Automatically Collected Information</h3>
              <LegalList>
                <li><strong className="text-white">Usage Data:</strong> Information about how you interact with our Services, including command frequency, processing times, and feature usage.</li>
                <li><strong className="text-white">Error Logs:</strong> System errors and performance data used to improve service quality.</li>
              </LegalList>
            </div>
          </Section>

          <Section title="How We Use Your Information">
            <p>All analytics and logging data is used exclusively for:</p>
            <LegalList>
              <li><strong className="text-white">Communication:</strong> Sending important updates, responding to support requests, and providing customer service.</li>
              <li><strong className="text-white">Diagnostics:</strong> Identifying and fixing bugs, errors, and technical issues.</li>
              <li><strong className="text-white">Performance:</strong> Optimizing application speed and responsiveness.</li>
              <li><strong className="text-white">Product Improvement:</strong> Understanding how users interact with our Services to improve them.</li>
              <li><strong className="text-white">Stability:</strong> Ensuring reliable operation and preventing service disruptions.</li>
              <li><strong className="text-white">Security:</strong> Detecting and preventing fraudulent or malicious activity.</li>
              <li><strong className="text-white">Service Delivery:</strong> Processing your files, executing commands, and providing core functionality.</li>
            </LegalList>
          </Section>

          <Section title="Data Retention">
            <div className="rounded-md border border-white/10 bg-black/30 px-4 py-3">
              <p className="flex items-start gap-2 text-white/70">
                <ShieldCheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-white" />
                <span>
                  <strong className="text-white">File Processing:</strong> Files uploaded for processing are temporarily stored on our servers and are automatically deleted after processing is complete or within 24 hours, whichever comes first.
                </span>
              </p>
            </div>
            <LegalList>
              <li><strong className="text-white">Account data:</strong> Retained while your account is active and for a reasonable period thereafter. Upon account deletion, we will delete or anonymize your personal data within 30 days.</li>
              <li><strong className="text-white">Analytics data:</strong> Retained for up to 24 months for performance analysis.</li>
              <li><strong className="text-white">Logs:</strong> Server logs and error reports are retained for up to 90 days for security and debugging purposes.</li>
            </LegalList>
          </Section>

          <Section title="Information Sharing">
            <p>We only share your information in the following limited circumstances:</p>
            <LegalList>
              <li><strong className="text-white">Service Providers:</strong> Trusted third-party service providers who assist in operating our Services, such as cloud hosting and AI APIs.</li>
              <li><strong className="text-white">Legal Requirements:</strong> When required by law, court order, or government request.</li>
              <li><strong className="text-white">Safety:</strong> To protect the rights, property, or safety of RevEngi, our users, or the public.</li>
              <li><strong className="text-white">Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, with prior notice.</li>
            </LegalList>
          </Section>

          <Section title="Third-Party Services">
            <p>Our Services may integrate with third-party services:</p>
            <LegalList>
              <li><strong className="text-white">Telegram:</strong> Our bot operates on the Telegram platform and is subject to Telegram’s privacy policy.</li>
              <li><strong className="text-white">AI Services:</strong> AI features may use third-party AI APIs such as Google Gemini, which have their own privacy policies.</li>
              <li><strong className="text-white">Vercel:</strong> Our websites are hosted on Vercel and subject to Vercel’s privacy policy.</li>
            </LegalList>
            <p>We encourage you to review their privacy policies.</p>
          </Section>

          <Section title="Data Security">
            <p>We implement appropriate technical and organizational security measures to protect your data:</p>
            <LegalList>
              <li>Encryption of data in transit (TLS/SSL).</li>
              <li>Encryption of sensitive data at rest.</li>
              <li>Secure password hashing.</li>
              <li>Regular security audits and updates.</li>
              <li>Access controls and authentication mechanisms.</li>
              <li>Automatic deletion of temporary files.</li>
            </LegalList>
            <p>
              However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee absolute security.
            </p>
          </Section>

          <Section title="Your Rights and Choices">
            <p>Depending on your location, you may have the following rights:</p>
            <LegalList>
              <li><strong className="text-white">Access:</strong> Request a copy of the personal data we hold about you.</li>
              <li><strong className="text-white">Correction:</strong> Request correction of inaccurate information.</li>
              <li><strong className="text-white">Deletion:</strong> Request deletion of your data, subject to legal obligations.</li>
              <li><strong className="text-white">Portability:</strong> Request a copy of your data in a portable format.</li>
              <li><strong className="text-white">Withdraw Consent:</strong> Stop using our Services or revoke API access at any time.</li>
            </LegalList>
            <p>
              To exercise these rights, please contact us at <a href="mailto:support@revengi.in" className="text-white underline decoration-white/20 underline-offset-4 hover:decoration-white/60">support@revengi.in</a>. We will respond to your request within 30 days.
            </p>
          </Section>

          <Section title="Children’s Privacy">
            <p>
              Our Services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately. If we learn we have collected personal information from a child under 18, we will delete that information promptly.
            </p>
          </Section>

          <Section title="International Data Transfers">
            <p>
              Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place for such transfers. By using our Services, you consent to such transfers.
            </p>
          </Section>

          <Section title="Changes to This Privacy Policy">
            <p>We may update this Privacy Policy from time to time. We will notify you of material changes by:</p>
            <LegalList>
              <li>Updating the last updated date at the top of this policy.</li>
              <li>Posting announcements on our Telegram channels.</li>
              <li>Sending notifications through the bot or email for significant changes.</li>
            </LegalList>
            <p>Your continued use of our Services after changes become effective constitutes acceptance of the updated policy.</p>
          </Section>

          <Section title="Contact Us">
            <p>If you have questions or concerns about this Privacy Policy or our data practices, please contact us:</p>
            <div className="rounded-md border border-white/10 bg-black/30 px-4 py-3">
              <ul className="space-y-2 text-white/70">
                <li>
                  <strong className="text-white">Email:</strong>{' '}
                  <a href="mailto:support@revengi.in" className="text-white underline decoration-white/20 underline-offset-4 hover:decoration-white/60">
                    support@revengi.in
                  </a>
                </li>
                <li>
                  <strong className="text-white">Telegram Bot:</strong>{' '}
                  <a href="https://t.me/RevEngiSupportBot" className="text-white underline decoration-white/20 underline-offset-4 hover:decoration-white/60">
                    @RevEngiSupportBot
                  </a>
                </li>
              </ul>
            </div>
          </Section>

          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6 text-center text-sm leading-7 text-white/50 sm:p-8">
            By using RevEngi Services, you acknowledge that you have read and understood this Privacy Policy and agree to its <InlineLink href="/terms">Terms of Service</InlineLink>.
          </div>
        </div>
      </div>
    </main>
  );
}
