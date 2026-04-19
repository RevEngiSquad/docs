import Link from 'next/link';
import { InfoCircledIcon } from '@radix-ui/react-icons';
import { FileTextIcon } from 'lucide-react';

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

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-[#050505] px-4 pt-28 pb-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 max-w-3xl">
          <div className="mb-5 inline-flex rounded-md border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-white/70">
            Legal
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Terms of Service</h1>
          <p className="mt-4 text-sm text-white/45">Last Updated: February 19, 2026</p>
          <p className="mt-5 max-w-3xl text-base leading-7 text-white/60 sm:text-lg">
            These terms govern use of RevEngi, including the Telegram bot, API services, and related tooling.
          </p>
        </div>

        <div className="space-y-6">
          <Section title="Introduction" icon={<InfoCircledIcon className="h-5 w-5" />}>
            <p>
              Welcome to <strong className="text-white">RevEngi</strong>. By accessing or using our Telegram bot (
              <InlineLink href="https://t.me/RevEngiBot">@RevEngiBot</InlineLink>), API services, and related services (collectively, <strong className="text-white">“Services”</strong>), you agree to be bound by these Terms of Service. If you do not agree to these Terms, you must <strong className="text-white">immediately cease all use</strong> of the Services.
            </p>
            <p>
              For the purposes of these Terms, <strong className="text-white">“RevEngi Entities”</strong> includes RevEngi and its owners, developers, contributors, and agents.
            </p>
            <p>
              RevEngi provides automated reverse engineering tools, security analysis, and AI-assisted binary exploration. Our tools are intended for legitimate security research, application debugging, and educational purposes only.
            </p>
          </Section>

          <Section title="Acceptance of Terms">
            <p>
              By creating an account, accessing, or using the Services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our <InlineLink href="/privacy">Privacy Policy</InlineLink>. You must be at least 18 years of age or the age of legal majority in your jurisdiction to use these Services.
            </p>
          </Section>

          <Section title="User Responsibilities and Acceptable Use">
            <p>You are solely responsible for:</p>
            <LegalList>
              <li>Ensuring you have the legal right to analyze any files you upload to our Services.</li>
              <li>Complying with all applicable laws and regulations when using our Services.</li>
              <li>Maintaining the confidentiality of your account credentials.</li>
              <li>All activities that occur under your account.</li>
            </LegalList>
            <p>You agree <strong className="text-white">not</strong> to use our Services to:</p>
            <LegalList>
              <li>Analyze applications without proper authorization from the rights holder.</li>
              <li>Engage in any activity that violates intellectual property rights.</li>
              <li>Circumvent digital rights management or security measures for malicious purposes.</li>
              <li>Develop malware, exploits, or tools intended to harm others.</li>
              <li>Engage in any illegal activity or assist others in doing so.</li>
              <li>Attempt to circumvent rate limits, authentication, or security measures of the Services.</li>
              <li>Engage in automated scraping or spamming of our API or Telegram bot.</li>
              <li>Resell our Services without prior written authorization.</li>
            </LegalList>
          </Section>

          <Section title="File Ownership and Copyright Disclaimer">
            <p className="font-semibold text-white">Important Legal Notice</p>
            <p>
              We do not accept any responsibility for the ownership, legality, or copyright status of files uploaded to our Services. Users are solely responsible for ensuring they have the legal right to upload, analyze, and process any files.
            </p>
            <p>
              Security researchers, developers, and analysts may upload applications they are authorized to analyze. We are not liable for any claims, damages, or legal actions arising from users uploading copyrighted, proprietary, or unauthorized material.
            </p>
            <p>
              If you are a copyright holder and believe your work has been uploaded without authorization, please contact us at <a href="mailto:legal@revengi.in" className="text-white underline decoration-white/20 underline-offset-4 hover:decoration-white/60">legal@revengi.in</a> with appropriate documentation.
            </p>
          </Section>

          <Section title="Limitation of Liability">
            <div className="rounded-md border border-white/10 bg-black/30 px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/75">Important Liability Disclaimer</p>
            </div>
            <p className="text-xs uppercase leading-relaxed tracking-[0.08em] text-white/55 sm:text-sm">
              To the maximum extent permitted by applicable law, in no event shall the RevEngi Entities be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
            </p>
            <LegalList>
              <li><strong className="text-white">Economic Loss:</strong> Any loss of profits, revenue, data, or business opportunities.</li>
              <li><strong className="text-white">Security Breaches:</strong> Unauthorized access to or use of our Services.</li>
              <li><strong className="text-white">Tool Misuse:</strong> Damages resulting from the misuse of our tools for hacking, exploitation, or other malicious purposes.</li>
              <li><strong className="text-white">Unauthorized Analysis:</strong> Claims arising from the analysis of applications you were not authorized to process.</li>
              <li><strong className="text-white">Third-Party Claims:</strong> Any legal actions or damages brought against us by third parties related to your use of the Services.</li>
            </LegalList>
            <div className="rounded-md border border-white/10 bg-white/[0.03] px-4 py-3">
              <p className="text-sm text-white/70">
                <span className="font-semibold text-white">Liability Cap:</span> RevEngi’s total aggregate liability for any claim shall not exceed the total amount actually paid by you to RevEngi for use of the Services in the last 3 months. If you have not paid any fees, RevEngi shall have no monetary liability.
              </p>
            </div>
            <p className="italic text-white/45">
              We expressly disclaim any liability for illegal activities conducted by users, including unauthorized system access, intellectual property theft, or the development of malicious software.
            </p>
          </Section>

          <Section title="Disclaimer of Warranties">
            <p className="font-semibold text-white">
              The Services are provided “as is” and “as available” without warranties of any kind, express or implied, including but not limited to:
            </p>
            <LegalList>
              <li>Merchantability or fitness for a particular purpose.</li>
              <li>Non-infringement of third-party rights.</li>
              <li>Accuracy, reliability, or completeness of analysis results.</li>
              <li>Uninterrupted or error-free operation.</li>
              <li>Security against unauthorized access.</li>
            </LegalList>
            <p>We do not offer any Service Level Agreements, uptime guarantees, or support commitments for non-enterprise customers.</p>
          </Section>

          <Section title="Indemnification">
            <p>
              You agree to indemnify and hold harmless the RevEngi Entities from and against any claims, liabilities, damages, losses, and expenses, including reasonable legal and accounting fees, arising out of or in any way connected with:
            </p>
            <LegalList>
              <li>Your use or misuse of the Services.</li>
              <li>Your violation of these Terms.</li>
              <li>Your violation of any applicable laws or regulations.</li>
              <li>Your infringement of any third-party rights, including intellectual property rights.</li>
              <li>Any claim that your uploaded content caused damage to a third party.</li>
            </LegalList>
            <p>You agree to cooperate as fully as reasonably required in the defense of any claim.</p>
          </Section>

          <Section title="Account Termination">
            <p>
              We reserve the right to suspend or terminate your account and access to the Services at any time, without prior notice or liability, for any reason, including but not limited to:
            </p>
            <LegalList>
              <li>Violation of these Terms.</li>
              <li>Suspected fraudulent, abusive, or illegal activity.</li>
              <li>Upon request by law enforcement or government agencies.</li>
              <li>Extended periods of inactivity.</li>
              <li>Discontinuation of the Services in whole or in part.</li>
            </LegalList>
            <p>
              Upon termination, your right to use the Services will immediately cease. We may delete your account data in accordance with our <InlineLink href="/privacy">Privacy Policy</InlineLink>.
            </p>
          </Section>

          <Section title="Intellectual Property">
            <p>
              The Services, including all original content, features, and functionality, are the exclusive property of RevEngi and its licensors. These Services are protected by copyright, trademark, and other laws.
            </p>
            <p>
              <strong className="text-white">Open Source Components:</strong> Certain components of our software are released under open-source licenses. Your use of those specific components is governed by the terms of their respective licenses. Nothing in these Terms limits your rights under those open-source licenses.
            </p>
            <p>
              You retain ownership of any content you upload to the Services. However, by uploading content, you grant us a limited, non-exclusive license to process and analyze such content solely for the purpose of providing the Services.
            </p>
          </Section>

          <Section title="Modifications to Terms" icon={<FileTextIcon className="h-5 w-5" />}>
            <p>We reserve the right to modify these Terms at any time. We will notify you of material changes by:</p>
            <LegalList>
              <li>Posting terms on this page.</li>
              <li>Updating the last updated date at the top of this policy.</li>
              <li>Sending notifications through the bot or email for significant changes.</li>
            </LegalList>
            <p>Your continued use of our Services after changes become effective constitutes acceptance of the updated policy.</p>
          </Section>

          <Section title="Governing Law and Dispute Resolution">
            <p>
              These Terms shall be governed by and construed in accordance with the <strong className="text-white">laws of India</strong>, without regard to conflict of law provisions. In the event of a dispute, the parties shall first attempt to resolve the matter through <strong className="text-white">mutual discussions for a period of 30 days</strong> before initiating arbitration. Any disputes arising out of or in connection with these Terms shall be resolved through binding arbitration in accordance with the <strong className="text-white">Arbitration and Conciliation Act, 1996</strong>. The seat and venue of arbitration shall be <strong className="text-white">New Delhi, India</strong>. The language of arbitration shall be English.
            </p>
          </Section>

          <Section title="Severability">
            <p>If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions will continue in full force and effect.</p>
          </Section>

          <Section title="Contact Information">
            <p>If you have any questions about these Terms, please contact us at:</p>
            <div className="rounded-md border border-white/10 bg-black/30 px-4 py-3">
              <p className="text-white/70">
                <strong className="text-white">Email:</strong>{' '}
                <a href="mailto:legal@revengi.in" className="text-white underline decoration-white/20 underline-offset-4 hover:decoration-white/60">
                  legal@revengi.in
                </a>
              </p>
            </div>
          </Section>
        </div>
      </div>
    </main>
  );
}
