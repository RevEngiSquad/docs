import Link from "next/link";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { Button } from "@/components/ui/button";
import { ny } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import reviews from "@/app/(home)/reviews";
import type { Metadata } from "next";
import sponsors from '../sponsors.json';
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "RevEngi",
  description: "A Telegram bot for reverse engineers and developers.",
  icons: {
    icon: "/icon.jpg",
  },
};

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

interface Sponsor {
  name: string;
  icon: string;
}

export default async function HomePage() {
  return (
    <main className="flex min-h-screen flex-col text-center px-4 sm:px-6">
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
        <div
          className="
            max-w-2xl mx-auto mb-10
            rounded-xl border border-border/40
            bg-background/60 backdrop-blur
            p-5 text-left
            transition-all
            hover:bg-accent/30 hover:scale-105 hover:shadow-lg
          "
        >
          <h2 className="font-mono text-sm font-semibold text-foreground flex items-center gap-2">
            <span className="text-blue-500">//</span> REST API
          </h2>

          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            Programmatic access to RevEngi tools including Flutter analysis,
            JNI inspection, and more — ready to integrate into your own workflows.
          </p>

          <div className="mt-3">
            <Button asChild variant="link" className="px-0">
              <Link href="/docs/api">
                View API Documentation →
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <Link
        href="https://t.me/RevEngiBot"
        className="flex justify-center items-center gap-2 w-fit mx-auto mb-10"
      >
        <RainbowButton>Try the Bot</RainbowButton>
      </Link>
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

      <section className="py-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">
          Our <span className="text-blue-400">Sponsors</span>
        </h2>
        <div className="relative max-w-5xl mx-auto">
            <div className="
              grid
              grid-cols-2
              sm:grid-cols-3
              md:grid-cols-[repeat(auto-fit,minmax(180px,1fr))]
              gap-4 sm:gap-6
              justify-center
            ">
            {sponsors.map((sponsor: Sponsor, index: number) => (
                <div
                  key={`${sponsor.name}-${index}`}
                  className={ny(
                    "group relative flex flex-col items-center p-4 rounded-xl",
                    "border border-border/40",
                    "bg-background/60 backdrop-blur",
                    "transition-all duration-300",
                    "hover:bg-accent/30 hover:scale-105 hover:shadow-lg"
                  )}
                >
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 mb-3">
                    <img
                      src={sponsor.icon}
                      alt={`${sponsor.name} logo`}
                      className="
                        w-full h-full object-contain rounded-full
                        border border-border/50
                        transition-all duration-300
                        group-hover:shadow-[0_10px_24px_rgba(255,255,255,0.25)]
                        dark:group-hover:shadow-[0_10px_24px_rgba(255,255,255,0.12)]
                      "
                    />
                  </div>

                  <h3
                    className="
                      text-sm sm:text-base font-semibold
                      text-foreground/80
                      transition-all duration-300
                      group-hover:drop-shadow-[0_2px_6px_rgba(255,255,255,0.35)]
                      dark:group-hover:drop-shadow-[0_2px_6px_rgba(255,255,255,0.2)]
                    "
                  >
                    {sponsor.name}
                  </h3>
                </div>
            ))}

            <Link
              href="/donate"
              className={ny(
                "group relative flex flex-col items-center justify-center p-4 rounded-xl",
                "border border-dashed border-border/50",
                "bg-background/40 backdrop-blur",
                "transition-all duration-300",
                "hover:bg-accent/30 hover:scale-105 hover:shadow-lg"
              )}
            >
              {/* Plus icon */}
              <div
                className="
                  flex items-center justify-center
                  w-16 h-16 sm:w-20 sm:h-20 mb-3
                  rounded-full border border-border/50
                  text-2xl font-light
                  text-muted-foreground
                  transition-all duration-300
                  group-hover:text-foreground
                  group-hover:shadow-[0_10px_24px_rgba(255,255,255,0.25)]
                  dark:group-hover:shadow-[0_10px_24px_rgba(255,255,255,0.12)]
                "
              >
                +
              </div>

              <h3
                className="
                  text-sm sm:text-base font-semibold
                  text-muted-foreground
                  transition-all duration-300
                  group-hover:text-foreground
                  group-hover:drop-shadow-[0_2px_6px_rgba(255,255,255,0.35)]
                  dark:group-hover:drop-shadow-[0_2px_6px_rgba(255,255,255,0.2)]
                "
              >
                Become a Sponsor
              </h3>
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <a
        href="/donate"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-50 bottom-6 right-6 flex items-center gap-2 px-5 py-3 rounded-full bg-pink-500 text-white shadow-lg hover:bg-pink-600 transition-all animate-pulse ring-2 ring-pink-300 dark:ring-pink-800 group"
        aria-label="Donate to RevEngiBot"
        style={{ boxShadow: '0 4px 24px 0 rgba(236, 72, 153, 0.25)' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white drop-shadow">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.25 9.75c3 3.5 4.75 4.5 4.75 4.5s1.75-1 4.75-4.5 1-7-1.5-7-3.25 3-3.25 3-.75-3-3.25-3-4.5 3.5-1.5 7z" />
        </svg>
        <span className="font-semibold text-base tracking-wide group-hover:scale-105 transition-transform">Donate</span>
      </a>
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
        <img className="rounded-full" width="32" height="32" alt={`${name} logo`} src={img} />
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
