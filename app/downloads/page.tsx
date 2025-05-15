import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Downloads() {
    return (
        <main className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-center">Download RevEngi</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <DownloadCard
                    platform="Windows"
                    icon="🪟"
                    href="https://github.com/RevEngiSquad/revengi-app/releases/latest/download/RevEngi-Windows.exe"
                />
                <DownloadCard
                    platform="Linux"
                    icon="🐧"
                    href="https://github.com/RevEngiSquad/revengi-app/releases/latest/download/RevEngi-Linux.AppImage"
                />
                <DownloadCard
                    platform="Android"
                    icon="📱"
                    href="https://github.com/RevEngiSquad/revengi-app/releases/latest/download/RevEngi-Android.apk"
                />
            </div>
        </main>
    );
}

function DownloadCard({ platform, icon, href }: { platform: string; icon: string; href: string }) {
    return (
        <div className="border rounded-lg p-6 text-center">
            <div className="text-4xl mb-4">{icon}</div>
            <h2 className="text-xl font-semibold mb-4">RevEngi for {platform}</h2>
            <Button asChild variant="default" className="w-full">
                <Link href={href}>Download</Link>
            </Button>
        </div>
    );
}