"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Marquee from "@/components/ui/marquee";
import reviews from "@/app/(home)/reviews";
import sponsors from '../sponsors.json';
import { Footer } from "@/components/footer";
import { FiPlus, FiArrowRight, FiZap, FiCode, FiShield, FiTerminal } from "react-icons/fi";
import { BiDonateHeart } from "react-icons/bi";
import { motion } from "framer-motion";

interface Sponsor {
  name: string;
  icon: string;
}

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function HomePage() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-x-hidden bg-background text-foreground selection:bg-foreground/20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center px-4 pt-24 pb-16 sm:px-6 lg:pt-32"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="rounded-md border border-border bg-muted/50 px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground backdrop-blur-md">
            Reverse Engineering Toolkit
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="max-w-5xl text-center text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl"
        >
          <span className="text-foreground">
            RevEngi
          </span>{" "}
          <span className="inline-flex items-center gap-2 rounded-md border border-border bg-muted px-4 py-1 align-middle text-3xl font-black tracking-tighter sm:text-5xl lg:text-6xl">
            BOT
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-8 max-w-2xl text-center text-lg leading-relaxed text-muted-foreground sm:text-xl"
        >
          Revolutionizing the workflow for reverse engineers and developers.
          Powerful tools for Blutter, Smali, Java conversion, and APK analysis—all
          at your fingertips.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
          <Button
            asChild
            className="h-14 rounded-md border border-border bg-foreground px-8 text-lg font-semibold text-background hover:bg-foreground/90"
          >
            <Link href="https://t.me/RevEngiBot">Launch on Telegram</Link>
          </Button>
          <div className="flex gap-4">
            <Button
              asChild
              variant="outline"
              className="h-14 rounded-md border-border bg-muted px-8 text-foreground hover:bg-muted/80"
            >
              <Link href="https://app.revengi.in">Web App</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-14 rounded-md border-border bg-muted px-8 text-foreground hover:bg-muted/80"
            >
              <Link href="/downloads">Download</Link>
            </Button>
          </div>
        </motion.div>

        <div className="mt-32 grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-12 md:grid-rows-2">
          <motion.div
            variants={itemVariants}
            className="group relative md:col-span-8 md:row-span-1"
          >
            <div className="absolute inset-0 rounded-xl border border-border bg-muted/50 transition-all duration-500 group-hover:bg-muted/80" />
            <div className="relative h-full overflow-hidden rounded-[calc(0.75rem-1px)] p-8">
              <div className="flex h-full flex-col justify-between">
                <div>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md border border-border bg-muted text-foreground/80">
                    <FiZap size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">Blutter Analysis</h3>
                  <p className="mt-2 max-w-md text-muted-foreground">
                    Industry-leading Flutter APK and .so file analysis. Extract information from Dart AOT payloads with precision.
                  </p>
                </div>
                <div className="mt-8">
                  <Button asChild variant="link" className="px-0 text-foreground">
                    <Link href="/docs/commands/#blutter" className="flex items-center gap-2">
                      Learn more <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="group relative md:col-span-4 md:row-span-1"
          >
            <div className="absolute inset-0 rounded-xl border border-border bg-muted/50 transition-all duration-500 group-hover:bg-muted/80" />
            <div className="relative h-full overflow-hidden rounded-[calc(0.75rem-1px)] p-8">
              <div className="flex h-full flex-col">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md border border-border bg-muted text-foreground/80">
                  <FiTerminal size={24} />
                </div>
                <h3 className="text-2xl font-bold">REST API</h3>
                <p className="mt-2 text-muted-foreground">
                  Integrate RevEngi tools directly into your custom automated workflows.
                </p>
                <div className="mt-auto pt-6">
                  <Button asChild variant="link" className="px-0 text-foreground">
                    <Link href="/docs/api">View Docs →</Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="group relative md:col-span-4 md:row-span-1"
          >
            <div className="absolute inset-0 rounded-xl border border-border bg-muted/50 transition-all duration-500 group-hover:bg-muted/80" />
            <div className="relative h-full overflow-hidden rounded-[calc(0.75rem-1px)] p-8">
              <div className="flex h-full flex-col">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md border border-border bg-muted text-foreground/80">
                  <FiCode size={24} />
                </div>
                <h3 className="text-2xl font-bold">Code Conversion</h3>
                <p className="mt-2 text-muted-foreground">
                  Seamlessly convert between Smali, Java, and Assembly with intelligent grammar support.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="group relative md:col-span-8 md:row-span-1"
          >
            <div className="absolute inset-0 rounded-xl border border-border bg-muted/50 transition-all duration-500 group-hover:bg-muted/80" />
            <div className="relative h-full overflow-hidden rounded-[calc(0.75rem-1px)] p-8">
              <div className="flex items-start justify-between">
                <div className="max-w-md">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md border border-border bg-muted text-foreground/80">
                    <FiShield size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">Security & Forensics</h3>
                  <p className="mt-2 text-muted-foreground">
                    Advanced APK scanning, protection detection, and JNI inspection tools for deep forensics analysis.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.section variants={itemVariants} className="mt-40 w-full overflow-hidden">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold sm:text-5xl">Community Voice</h2>
            <p className="mt-4 text-muted-foreground">Trusted by thousands of researchers worldwide.</p>
          </div>

          <div className="relative">
            <Marquee pauseOnHover className="[--duration:40s]">
              {firstRow.map((review, i) => (
                <ReviewCard key={`r1-${i}`} {...review} />
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="mt-6 [--duration:40s]">
              {secondRow.map((review, i) => (
                <ReviewCard key={`r2-${i}`} {...review} />
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background to-transparent" />
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="mt-40 w-full max-w-5xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold sm:text-5xl">Our Backers</h2>
            <p className="mt-4 text-muted-foreground">Powering the future of open-source reverse engineering.</p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {sponsors.map((sponsor: Sponsor, index: number) => (
              <div
                key={`${sponsor.name}-${index}`}
                className="group relative flex flex-col items-center justify-center rounded-xl border border-border bg-muted/50 p-6 transition-all duration-300 hover:bg-muted"
              >
                <div className="relative mb-4 h-16 w-16 overflow-hidden rounded-lg border border-border">
                  <img
                    src={sponsor.icon}
                    alt={sponsor.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <span className="text-center text-sm font-medium text-muted-foreground group-hover:text-foreground">
                  {sponsor.name}
                </span>
              </div>
            ))}
            <Link
              href="/donate"
              className="group relative flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-muted/50 p-6 transition-all duration-300 hover:border-foreground/40 hover:bg-muted"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg border border-border bg-muted transition-transform duration-500 group-hover:rotate-90">
                <FiPlus size={24} className="text-muted-foreground group-hover:text-foreground" />
              </div>
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground">
                Be a Sponsor
              </span>
            </Link>
          </div>
        </motion.section>
      </motion.div>

      <Footer />

      <a
        href="/donate"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-6 bottom-6 z-50 flex items-center gap-2 rounded-md border border-border bg-muted/80 px-6 py-3 text-foreground shadow-lg backdrop-blur transition-all hover:scale-105 hover:bg-muted active:scale-95 sm:right-10 sm:bottom-10"
      >
        <BiDonateHeart size={20} />
        <span className="font-bold tracking-wide">Support Project</span>
      </a>
    </main>
  );
}

function ReviewCard({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) {
  return (
    <figure className="relative w-80 cursor-default overflow-hidden rounded-xl border border-border bg-muted/50 p-6 transition-all duration-300 hover:bg-muted">
      <div className="flex flex-row items-center gap-3">
        <img className="rounded-md border border-border" width="40" height="40" alt={name} src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-bold text-foreground">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-muted-foreground">{username}</p>
        </div>
      </div>
      <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">
        {body}
      </blockquote>
    </figure>
  );
}
