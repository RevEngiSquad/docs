import Link from "next/link";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { FileTextIcon } from "lucide-react";

export default function TermsOfServicePage() {
    return (
        <main className="container mx-auto px-4 py-12 max-w-4xl">
            <div className="mb-8">
                <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
                <p className="text-gray-600 dark:text-gray-400">
                    Last Updated: February 19, 2026
                </p>
            </div>

            <div className="prose dark:prose-invert max-w-none">
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                        <InfoCircledIcon className="w-6 h-6" />
                        Introduction
                    </h2>
                    <p className="mb-4 text-gray-700 dark:text-gray-300">
                        Welcome to <strong>RevEngi</strong>. By accessing or using our Telegram bot (
                        <Link href="https://t.me/RevEngiBot" className="text-blue-500 hover:underline">
                            @RevEngiBot
                        </Link>
                        ), API services, and related services (collectively, <strong>"Services"</strong>), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you must <strong>immediately cease all use</strong> of the Services.
                    </p>
                    <p className="mb-4 text-gray-700 dark:text-gray-300">
                        For the purposes of these Terms, <strong>"RevEngi Entities"</strong> includes RevEngi and its owners, developers, contributors, and agents.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                        RevEngi provides automated reverse engineering tools, security analysis, and AI-assisted binary exploration. Our tools are intended for legitimate security research, application debugging, and educational purposes only.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
                    <p className="mb-4 text-gray-700 dark:text-gray-300">
                        By creating an account, accessing, or using the Services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our {" "}
                        <Link href="/privacy" className="text-blue-500 hover:underline">
                            Privacy Policy
                        </Link>. You must be at least 18 years of age or the age of legal majority in your jurisdiction to use these Services.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">User Responsibilities and Acceptable Use</h2>
                    <p className="mb-4 text-gray-700 dark:text-gray-300">
                        You are solely responsible for:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700 dark:text-gray-300">
                        <li>Ensuring you have the legal right to analyze any files you upload to our Services.</li>
                        <li>Complying with all applicable laws and regulations when using our Services.</li>
                        <li>Maintaining the confidentiality of your account credentials.</li>
                        <li>All activities that occur under your account.</li>
                    </ul>
                    <p className="mb-4 text-gray-700 dark:text-gray-300">
                        You agree <strong>NOT</strong> to use our Services to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                        <li>Analyze applications without proper authorization from the rights holder.</li>
                        <li>Engage in any activity that violates intellectual property rights.</li>
                        <li>Circumvent digital rights management or security measures for malicious purposes.</li>
                        <li>Develop malware, exploits, or tools intended to harm others.</li>
                        <li>Engage in any illegal activity or assist others in doing so.</li>
                        <li>Attempt to circumvent rate limits, authentication, or security measures of the Services.</li>
                        <li>Engage in automated scraping or "spamming" of our API or Telegram bot.</li>
                        <li>Reselling our Services without prior written authorization.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">File Ownership and Copyright Disclaimer</h2>
                    <p className="mb-4 text-gray-700 dark:text-gray-300 font-bold">
                        Important Legal Notice
                    </p>
                    <p className="mb-4 text-gray-700 dark:text-gray-300">
                        We do not accept any responsibility for the ownership, legality, or copyright status of files uploaded to our Services. Users are solely responsible for ensuring they have the legal right to upload, analyze, and process any files.
                    </p>
                    <p className="mb-4 text-gray-700 dark:text-gray-300">
                        Security researchers, developers, and analysts may upload applications they are authorized to analyze. We are not liable for any claims, damages, or legal actions arising from users uploading copyrighted, proprietary, or unauthorized material.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                        If you are a copyright holder and believe your work has been uploaded without authorization, please contact us at <a href="mailto:legal@revengi.in" className="text-blue-500 hover:underline">legal@revengi.in</a> with appropriate documentation.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
                    <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 rounded-lg px-6 py-1 mb-4">
                        <p className="text-red-700 dark:text-red-400 font-bold uppercase tracking-tighter text-sm">
                            Important Liability Disclaimer
                        </p>
                    </div>
                    <p className="mb-4 text-gray-700 dark:text-gray-300 uppercase text-xs sm:text-sm leading-relaxed">
                        TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL THE REVENGI ENTITIES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-3 text-gray-700 dark:text-gray-300">
                      <li>
                        <span className="font-semibold text-gray-900 dark:text-gray-100">Economic Loss:</span> Any loss of profits, revenue, data, or business opportunities.
                      </li>
                      <li>
                        <span className="font-semibold text-gray-900 dark:text-gray-100">Security Breaches:</span> Unauthorized access to or use of our Services.
                      </li>
                      <li>
                        <span className="font-semibold text-gray-900 dark:text-gray-100">Tool Misuse:</span> Damages resulting from the misuse of our tools for hacking, exploitation, or other malicious purposes.
                      </li>
                      <li>
                        <span className="font-semibold text-gray-900 dark:text-gray-100">Unauthorized Analysis:</span> Claims arising from the analysis of applications you were not authorized to process.
                      </li>
                      <li>
                        <span className="font-semibold text-gray-900 dark:text-gray-100">Third-Party Claims:</span> Any legal actions or damages brought against us by third parties related to your use of the Services.
                      </li>
                    </ul>
                    <div className="px-4 mb-4 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                      <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                        <span className="font-bold">Liability Cap:</span> To the fullest
                        extent permitted by law, RevEngi’s total aggregate liability for any
                        claim shall not exceed the total amount actually paid by you to
                        RevEngi for use of the Services in the last 3 months. If you have not paid any fees,
                        RevEngi shall have no monetary liability.
                      </p>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                        We expressly disclaim any liability for illegal activities conducted by users, including but not limited to unauthorized system access, intellectual property theft, or the development of malicious software.
                        </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Disclaimer of Warranties</h2>
                    <p className="mb-4 text-gray-700 dark:text-gray-300 font-bold">
                        THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" BASIS WITHOUT ANY WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700 dark:text-gray-300">
                        <li>Merchantability or fitness for a particular purpose.</li>
                        <li>Non-infringement of third-party rights.</li>
                        <li>Accuracy, reliability, or completeness of analysis results.</li>
                        <li>Uninterrupted or error-free operation.</li>
                        <li>Security against unauthorized access.</li>
                    </ul>
                    <p className="text-gray-700 dark:text-gray-300">
                        We do not offer any Service Level Agreements (SLAs), uptime guarantees, or support commitments for non-enterprise customers.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Indemnification</h2>
                    {/* The repeated line for "RevEngi Entities" has been removed from here */}
                    <p className="mb-4 text-gray-700 dark:text-gray-300">
                        You agree to indemnify and hold harmless the RevEngi Entities from and against any claims, liabilities, damages, losses, and expenses, including, without limitation, reasonable legal and accounting fees, arising out of or in any way connected with:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                        <li>Your use or misuse of the Services.</li>
                        <li>Your violation of these Terms.</li>
                        <li>Your violation of any applicable laws or regulations.</li>
                        <li>Your infringement of any third-party rights, including intellectual property rights.</li>
                        <li>Any claim that your uploaded content caused damage to a third party.</li>
                    </ul>
                    <p className="text-gray-700 dark:text-gray-300">
                        You agree to cooperate as fully as reasonably required in the defense of any claim.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Account Termination</h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        We reserve the right to suspend or terminate your account and access to the Services at any time, without prior notice or liability, for any reason, including but not limited to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                        <li>Violation of these Terms.</li>
                        <li>Suspected fraudulent, abusive, or illegal activity.</li>
                        <li>Upon request by law enforcement or government agencies.</li>
                        <li>Extended periods of inactivity.</li>
                        <li>Discontinuation of the Services (in whole or in part).</li>
                    </ul>
                    <p className="text-gray-700 dark:text-gray-300">
                        Upon termination, your right to use the Services will immediately cease. We may delete your account data in accordance with our {" "}
                        <Link href="/privacy" className="text-blue-500 hover:underline">
                            Privacy Policy
                        </Link>.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
                    <p className="mb-4 text-gray-700 dark:text-gray-300">
                        The Services, including all original content, features, and functionality, are the exclusive property of RevEngi and its licensors. These Services are protected by copyright, trademark, and other laws.
                    </p>
                    <p className="mb-4 text-gray-700 dark:text-gray-300">
                        <strong>Open Source Components:</strong> Certain components of our software are released under open-source licenses (e.g., MIT, Apache). Your use of those specific components is governed by the terms of their respective licenses. Nothing in these Terms limits your rights under those open-source licenses.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                        You retain ownership of any content you upload to the Services. However, by uploading content, you grant us a limited, non-exclusive license to process and analyze such content solely for the purpose of providing the Services.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                        <FileTextIcon className="w-6 h-6" />
                        Modifications to Terms
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        We reserve the right to modify these Terms at any time. We will notify you of material changes by:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700 dark:text-gray-300">
                        <li>Posting terms on this page</li>
                        <li>Updating the "Last Updated" date at the top of this policy</li>
                        <li>Sending notifications through the bot or email for significant changes</li>
                    </ul>
                    <p className="text-gray-700 dark:text-gray-300">
                        Your continued use of our Services after changes become effective constitutes
                        acceptance of the updated policy.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Governing Law and Dispute Resolution</h2>
                    <p className="mb-4 text-gray-700 dark:text-gray-300">
                        These Terms shall be governed by and construed in accordance with the <strong>laws of India</strong>, without regard to its conflict of law provisions. In the event of a dispute, the parties shall first attempt to resolve the matter through <strong>mutual discussions for a period of 30 days</strong> before initiating arbitration. Any disputes arising out of or in connection with these Terms shall be resolved through binding arbitration in accordance with the <strong>Arbitration and Conciliation Act, 1996</strong>. The seat and venue of arbitration shall be <strong>New Delhi, India</strong>. The language of the arbitration shall be English.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Severability</h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions will continue in full force and effect.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                    <p className="mb-4 text-gray-700 dark:text-gray-300">
                        If you have any questions about these Terms, please contact us at:
                    </p>
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg px-6 py-1">
                        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                            <li>
                                <strong>Email:</strong>{" "}
                                <a href="mailto:legal@revengi.in" className="text-blue-500 hover:underline">
                                    legal@revengi.in
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </main>
    );
}
