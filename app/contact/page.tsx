import Link from "next/link";
import { Button } from "@/components/ui/button";
import { EnvelopeClosedIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { LiaTelegram } from "react-icons/lia";

export default function ContactPage() {
    return (
        <main className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
            <div className="max-w-2xl mx-auto space-y-8">
                <div className="grid gap-4 md:grid-cols-2">
                    <ContactCard
                        icon={<LiaTelegram className="w-8 h-8" />}
                        title="Telegram Support"
                        description="Get instant support through our Telegram support group or contact us directly"
                        buttons={[
                            { href: "https://t.me/RevEngiSupport", buttonText: "Join Group" },
                            { href: "https://t.me/RevEngiSupportBot", buttonText: "Contact Us" },
                        ]}
                    />
                    <ContactCard
                        icon={<EnvelopeClosedIcon className="w-8 h-8" />}
                        title="Email Support"
                        description="Send us an email for technical support"
                        buttons={[{ href: "mailto:support@revengi.in", buttonText: "Send Email" }]}
                    />
                    <ContactCard
                        icon={<GitHubLogoIcon className="w-8 h-8" />}
                        title="GitHub"
                        description="Report issues or contribute to our projects"
                        buttons={[{ href: "https://github.com/revengi", buttonText: "View GitHub" }]}
                    />
                </div>

                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 mt-8">
                    <h2 className="text-xl font-semibold mb-4">API Support</h2>
                    <p className="mb-4">
                        For API-specific queries or support, please email{" "}
                        <a
                            href="mailto:api@revengi.in"
                            className="text-blue-500 hover:underline"
                        >
                            api@revengi.in
                        </a>{" "}
                        or check our{" "}
                        <Link href="/docs/api" className="text-blue-500 hover:underline">
                            API documentation
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </main>
    );
}

function ContactCard({
    icon,
    title,
    description,
    buttons,
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
    buttons: { href: string; buttonText: string }[];
}) {
    return (
        <div className="border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
                {icon}
                <h2 className="text-xl font-semibold">{title}</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
            <div className="grid grid-cols-2 gap-4">
                {buttons.map((button, index) => (
                    <Button key={index} asChild className="w-full">
                        <Link href={button.href}>{button.buttonText}</Link>
                    </Button>
                ))}
            </div>
        </div>
    );
}
