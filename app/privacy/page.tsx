import Link from "next/link";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { ShieldCheckIcon } from "lucide-react";

export default function PrivacyPolicyPage() {
    return (
        <main className="container mx-auto px-4 py-12 max-w-4xl">
            <div className="mb-8">
                <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
                <p className="text-gray-600 dark:text-gray-400">
                    Last Updated: October 2025
                </p>
            </div>

            <div className="prose dark:prose-invert max-w-none">
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                        <InfoCircledIcon className="w-6 h-6" />
                        Introduction
                    </h2>
                    <p className="mb-4 text-gray-700 dark:text-gray-300">
                        Welcome to RevEngi. This Privacy Policy explains how we collect, use, disclose, 
                        and safeguard your information when you use our Telegram bot (
                        <Link href="https://t.me/RevEngiBot" className="text-blue-500 hover:underline">
                            @RevEngiBot
                        </Link>
                        ), API services, and related services (collectively, "Services").
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                        By using our Services, you agree to the collection and use of information in 
                        accordance with this policy. If you do not agree with our policies and practices, 
                        please do not use our Services.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
                    
                    <h3 className="text-xl font-semibold mb-3 mt-6">1. Information You Provide</h3>
                    <p className="mb-4 text-gray-700 dark:text-gray-300">
                        When you use our Services, we may collect the following information:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700 dark:text-gray-300">
                        <li>
                            <strong>Telegram User Information:</strong> Your Telegram user ID, username, 
                            and profile information as provided by Telegram's API
                        </li>
                        <li>
                            <strong>Files and Content:</strong> APK files, DEX files, Smali files, Java files, 
                            and other files you upload for processing (which are automatically deleted after processing)
                        </li>
                        <li>
                            <strong>Commands and Queries:</strong> Bot commands you send and AI assistant queries (temporarily until chat session ends)
                        </li>
                        {/*Currently we do not collect any data through API requests until stable release*/}
                        {/*<li>
                            <strong>API Usage Data:</strong> API keys, request parameters, and usage statistics 
                            if you use our API services
                        </li>*/}
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 mt-6">2. Automatically Collected Information</h3>
                    <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700 dark:text-gray-300">
                        <li>
                            <strong>Usage Data:</strong> Information about how you interact with our Services, 
                            including command frequency, processing times, and feature usage
                        </li>
                        <li>
                            <strong>Error Logs:</strong> System errors to improve 
                            service quality
                        </li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
                    <p className="mb-4 text-gray-700 dark:text-gray-300">
                        We use the collected information for the following purposes:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700 dark:text-gray-300">
                        <li>
                            <strong>Service Delivery:</strong> To process your files, execute commands, 
                            and provide the core functionality of RevEngi
                        </li>
                        <li>
                            <strong>Service Improvement:</strong> To analyze usage patterns, fix bugs, 
                            and enhance features
                        </li>
                        <li>
                            <strong>Communication:</strong> To send important updates, respond to support 
                            requests, and provide customer service
                        </li>
                        <li>
                            <strong>Security:</strong> To detect and prevent fraud, abuse, and unauthorized access
                        </li>
                        <li>
                            <strong>Compliance:</strong> To comply with legal obligations and enforce our terms
                        </li>
                        <li>
                            <strong>Analytics:</strong> To understand how users interact with our Services 
                            and improve user experience
                        </li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Data Storage and Retention</h2>
                    <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-4">
                        <p className="text-gray-700 dark:text-gray-300 flex items-start gap-2">
                            <ShieldCheckIcon className="w-5 h-5 mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400" />
                            <span>
                                <strong>File Processing:</strong> Files uploaded for processing (APK, DEX, Smali, etc.) 
                                are temporarily stored on our servers during processing and are automatically deleted 
                                after processing is complete or within 24 hours, whichever comes first.
                            </span>
                        </p>
                    </div>
                    <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700 dark:text-gray-300">
                        <li>
                            <strong>User Data:</strong> User information and usage statistics are retained 
                            for as long as necessary to provide our Services
                        </li>
                        <li>
                            <strong>Logs:</strong> Server logs and error reports are retained for up to 90 days 
                            for security and debugging purposes
                        </li>
                        <li>
                            <strong>API Keys:</strong> API authentication tokens are stored securely and 
                            retained until you revoke them or delete your account
                        </li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Information Sharing and Disclosure</h2>
                    <p className="mb-4 text-gray-700 dark:text-gray-300">
                        We do not collect, sell, trade, or rent your personal information to third parties. 
                        We may share your information only in the following circumstances:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700 dark:text-gray-300">
                        <li>
                            <strong>Service Providers:</strong> With trusted third-party service providers 
                            who assist in operating our Services (e.g., cloud hosting providers, AI APIs)
                        </li>
                        <li>
                            <strong>Legal Requirements:</strong> When required by law, court order, or 
                            government request
                        </li>
                        <li>
                            <strong>Protection of Rights:</strong> To protect the rights, property, or safety 
                            of RevEngi, our users, or the public
                        </li>
                        <li>
                            <strong>Business Transfers:</strong> In connection with a merger, acquisition, 
                            or sale of assets
                        </li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
                    <p className="mb-4 text-gray-700 dark:text-gray-300">
                        Our Services may integrate with or use third-party services:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700 dark:text-gray-300">
                        <li>
                            <strong>Telegram:</strong> Our bot operates on the Telegram platform and is 
                            subject to Telegram's privacy policy
                        </li>
                        <li>
                            <strong>AI Services:</strong> AI features may use third-party AI APIs 
                            (e.g., Google Gemini) which have their own privacy policies
                        </li>
                        <li>
                          <strong>Vercel:</strong> Our websites are hosted on Vercel and is subject to Vercel's privacy policy
                        </li>
                    </ul>
                    <p className="text-gray-700 dark:text-gray-300">
                        We are not responsible for the privacy practices of these third-party services. 
                        We encourage you to review their privacy policies.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
                    <p className="mb-4 text-gray-700 dark:text-gray-300">
                        We implement appropriate technical and organizational security measures to protect 
                        your information:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700 dark:text-gray-300">
                        <li>Encryption of data in transit using HTTPS/TLS</li>
                        <li>Secure storage of API keys and passwords</li>
                        <li>Regular security audits and updates</li>
                        <li>Access controls and authentication mechanisms</li>
                        <li>Automatic deletion of temporary files</li>
                    </ul>
                    <p className="text-gray-700 dark:text-gray-300">
                        However, no method of transmission over the internet or electronic storage is 100% secure. 
                        While we strive to protect your information, we cannot guarantee absolute security.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Your Rights and Choices</h2>
                    <p className="mb-4 text-gray-700 dark:text-gray-300">
                        You have the following rights regarding your information:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700 dark:text-gray-300">
                        <li>
                            <strong>Access:</strong> Request information about the data we hold about you
                        </li>
                        <li>
                            <strong>Correction:</strong> Request correction of inaccurate information
                        </li>
                        <li>
                            <strong>Deletion:</strong> Request deletion of your data (subject to legal obligations)
                        </li>
                        <li>
                            <strong>Opt-Out:</strong> Stop using our Services at any time
                        </li>
                        <li>
                            <strong>API Access:</strong> Revoke API keys and access tokens
                        </li>
                    </ul>
                    <p className="text-gray-700 dark:text-gray-300">
                        To exercise these rights, please contact us at{" "}
                        <a href="mailto:support@revengi.in" className="text-blue-500 hover:underline">
                            support@revengi.in
                        </a>
                        .
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        Our Services are not intended for children under 13 years of age. We do not 
                        knowingly collect personal information from children under 13. If you believe 
                        we have collected information from a child under 13, please contact us immediately.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">International Data Transfers</h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        Your information may be transferred to and processed in countries other than your 
                        country of residence. These countries may have different data protection laws. 
                        By using our Services, you consent to such transfers.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
                    <p className="mb-4 text-gray-700 dark:text-gray-300">
                        We may update this Privacy Policy from time to time. We will notify you of any 
                        changes by:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700 dark:text-gray-300">
                        <li>Updating the "Last Updated" date at the top of this policy</li>
                        <li>Posting announcements on our Telegram channels</li>
                        <li>Sending notifications through the bot (for significant changes)</li>
                    </ul>
                    <p className="text-gray-700 dark:text-gray-300">
                        Your continued use of our Services after changes become effective constitutes 
                        acceptance of the updated policy.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                    <p className="mb-4 text-gray-700 dark:text-gray-300">
                        If you have questions or concerns about this Privacy Policy or our data practices, 
                        please contact us:
                    </p>
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
                        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                            <li>
                                <strong>Email:</strong>{" "}
                                <a href="mailto:support@revengi.in" className="text-blue-500 hover:underline">
                                    support@revengi.in
                                </a>
                            </li>
                            <li>
                                <strong>Telegram Bot:</strong>{" "}
                                <a href="https://t.me/RevEngiSupportBot" className="text-blue-500 hover:underline">
                                    @RevEngiSupportBot
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>

                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                        By using RevEngi Services, you acknowledge that you have read and understood this 
                        Privacy Policy and agree to its terms.
                    </p>
                </div>
            </div>
        </main>
    );
}