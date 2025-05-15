import Link from "next/link";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { Button } from "@/components/ui/button";
import { ny } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import reviews from "@/app/(home)/reviews";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RevEngi",
  description: "A Telegram bot for reverse engineers and developers.",
  icons: {
    icon: "/icon.jpg",
  },
};

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

export default function HomePage() {
  return (
    <main className="flex h-screen flex-col text-center px-4 sm:px-6">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">
          <span className="text-blue-400">RevEngi</span>
          <span className="text-2xl sm:text-3xl font-bold mb-6"> [BOT]</span>
        </h1>
        <p className="text-base sm:text-lg max-w-2xl mx-auto mb-8">
          Revolutionizing the workflow for reverse engineers and developers.
          Explore powerful tools like Blutter, Smali Grammar, Java-Smali
          converters, Regex Maker, APK Info, and more. All at your fingertips
          through our easy-to-use Telegram bot or REST API.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 max-w-2xl mx-auto mb-8">
          <h2 className="text-xl font-semibold mb-2">🚀 REST API Available</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Integrate our powerful tools directly into your applications.
            Access Flutter analysis, JNI analysis, and more through our REST API.
          </p>
          <Button asChild variant="link" className="mt-2">
            <Link href="/docs/api">View API Documentation →</Link>
          </Button>
        </div>
      </div>
      <Link
        href="https://t.me/RevEngiBot"
        className="flex justify-center items-center gap-2 w-fit mx-auto mb-10"
      >
        <RainbowButton>Try the Bot</RainbowButton>
      </Link>
      {/* <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
        <Btns text="Features" href="/docs#full-feature-list" />
        <Btns text="Explore Docs" href="/docs" />
      </div> */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
        <Btns text="Open Web App" href="https://app.revengi.in" />
        <Btns text="Download Apps" href="/downloads" />
      </div>
      <div className="md:hidden">
        <MarqueeDemoVertical />
      </div>
      <div className="hidden md:block">
        <MarqueeDemo />
      </div>

      <footer className="mt-16">
        <div className="flex justify-center gap-4 mb-4">
          <Link href="/contact" className="text-gray-400 hover:text-gray-300">Contact Us</Link>
          <Link href="/docs" className="text-gray-400 hover:text-gray-300">Docs</Link>
          <Link href="/downloads" className="text-gray-400 hover:text-gray-300">Downloads</Link>
        </div>
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} RevEngi. All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}

function Btns({ text, href }: { text: string; href: string }) {
  return (
    <Button className="md:px-6" asChild variant="secondary">
      <Link href={href}>{text}</Link>
    </Button>
  );
}

function ReviewCard({
  img,
  name,
  username,
  body,
  vertical,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
  vertical?: boolean;
}) {
  const className = ny(
    `relative cursor-pointer overflow-hidden rounded-xl border p-4`,
    // light styles
    "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
    // dark styles
    "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
    vertical ? "h-40 w-36" : "w-64"
  );

  return (
    <figure className={className}>
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
}

function MarqueeDemoVertical() {
  return (
    <div className="bg-background relative flex h-96 flex-row items-center justify-center overflow-hidden rounded-lg border sm:px-20 md:shadow-xl">
      <Marquee pauseOnHover vertical className="[--duration:20s]">
        {firstRow.map((review, index) => (
          <ReviewCard key={`${review.username}-${index}`} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
        {secondRow.map((review, index) => (
          <ReviewCard key={`${review.username}-${index}`} {...review} />
        ))}
      </Marquee>
      <div className="dark:from-background pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white"></div>
      <div className="dark:from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white"></div>
    </div>
  );
}

function MarqueeDemo() {
  return (
    <div className="bg-background relative flex size-full flex-col items-center justify-center overflow-hidden rounded-lg border py-20 md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="dark:from-background pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white"></div>
      <div className="dark:from-background pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white"></div>
    </div>
  );
}
