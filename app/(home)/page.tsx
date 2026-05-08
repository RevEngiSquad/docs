"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Marquee from "@/components/ui/marquee";
import reviews from "@/app/(home)/reviews";
import sponsors from "../sponsors.json";
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

const ease = [0.16, 1, 0.3, 1] as const;

function FlowDiagram() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const W = 360;
  const H = 440;
  const cx = W / 2;
  const nodeW = 130;
  const nodeH = 40;
  const positions = {
    upload:     { x: cx, y: 30 },
    extraction: { x: cx, y: 130 },
    analysis:   { x: cx - 85, y: 260 },
    patching:   { x: cx + 85, y: 260 },
    output:     { x: cx, y: 390 },
  };

  const nodeClass = (isActive: boolean) =>
    `transition-colors duration-500 ${isActive ? "fill-foreground/[0.04] stroke-foreground/20" : "fill-background stroke-border"}`;
  const textClass = (isActive: boolean) =>
    `text-[12px] font-semibold transition-colors duration-500 ${isActive ? "fill-foreground" : "fill-foreground/50"}`;
  const lineColor = (lit: boolean) =>
    lit ? "stroke-foreground/20" : "stroke-border";

  const p = positions;

  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} className="overflow-visible">
      <motion.line
        x1={p.upload.x} y1={p.upload.y + nodeH / 2}
        x2={p.extraction.x} y2={p.extraction.y - nodeH / 2}
        className={lineColor(active > 0)}
        strokeWidth={1}
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ duration: 0.4, delay: 0.1, ease }}
      />
      <motion.path
        d={`M ${p.extraction.x} ${p.extraction.y + nodeH / 2} L ${p.extraction.x} ${p.extraction.y + nodeH / 2 + 16} L ${p.analysis.x} ${p.analysis.y - nodeH / 2 - 16} L ${p.analysis.x} ${p.analysis.y - nodeH / 2}`}
        fill="none" className={lineColor(active > 1)} strokeWidth={1}
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 0.25, ease }}
      />
      <motion.path
        d={`M ${p.extraction.x} ${p.extraction.y + nodeH / 2} L ${p.extraction.x} ${p.extraction.y + nodeH / 2 + 16} L ${p.patching.x} ${p.patching.y - nodeH / 2 - 16} L ${p.patching.x} ${p.patching.y - nodeH / 2}`}
        fill="none" className={lineColor(active > 1)} strokeWidth={1}
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 0.3, ease }}
      />
      <motion.path
        d={`M ${p.analysis.x} ${p.analysis.y + nodeH / 2} L ${p.analysis.x} ${p.analysis.y + nodeH / 2 + 16} L ${p.output.x} ${p.output.y - nodeH / 2 - 16} L ${p.output.x} ${p.output.y - nodeH / 2}`}
        fill="none" className={lineColor(active > 2)} strokeWidth={1}
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 0.5, ease }}
      />
      <motion.path
        d={`M ${p.patching.x} ${p.patching.y + nodeH / 2} L ${p.patching.x} ${p.patching.y + nodeH / 2 + 16} L ${p.output.x} ${p.output.y - nodeH / 2 - 16} L ${p.output.x} ${p.output.y - nodeH / 2}`}
        fill="none" className={lineColor(active > 2)} strokeWidth={1}
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 0.55, ease }}
      />

      {([
        { key: "upload", label: "APK Upload", pos: p.upload, step: 0, delay: 0 },
        { key: "extraction", label: "Extraction", pos: p.extraction, step: 1, delay: 0.1 },
        { key: "analysis", label: "Analysis", pos: p.analysis, step: 2, delay: 0.3 },
        { key: "patching", label: "Patching", pos: p.patching, step: 2, delay: 0.35 },
        { key: "output", label: "Output", pos: p.output, step: 3, delay: 0.6 },
      ] as const).map((n) => (
        <motion.g
          key={n.key}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: n.delay, ease }}
        >
          <rect
            x={n.pos.x - nodeW / 2}
            y={n.pos.y - nodeH / 2}
            width={nodeW}
            height={nodeH}
            className={nodeClass(active === n.step)}
            strokeWidth={1}
          />
          <text
            x={n.pos.x}
            y={n.pos.y + 1}
            textAnchor="middle"
            dominantBaseline="central"
            className={textClass(active === n.step)}
          >
            {n.label}
          </text>
        </motion.g>
      ))}
    </svg>
  );
}

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
};

const fade = {
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease },
  },
};

const features = [
  {
    icon: <FiZap size={20} strokeWidth={1.5} />,
    title: "Blutter Analysis",
    desc: "Flutter APK and .so file analysis. Extract Dart AOT snapshot data, function signatures, and class hierarchies.",
    href: "/docs/commands/#blutter",
  },
  {
    icon: <FiCode size={20} strokeWidth={1.5} />,
    title: "Code Conversion",
    desc: "Convert between Smali, Java, and Assembly with intelligent grammar-aware transformations.",
  },
  {
    icon: <FiTerminal size={20} strokeWidth={1.5} />,
    title: "REST API",
    desc: "Full programmatic access to every RevEngi capability. Integrate directly into automated pipelines.",
    href: "/docs/api",
  },
  {
    icon: <FiShield size={20} strokeWidth={1.5} />,
    title: "Security & Forensics",
    desc: "Deep APK scanning, protection detection, obfuscation analysis, and JNI inspection.",
    href: "/docs/commands",
  },
];


export default function HomePage() {
  return (
    <main className="relative flex min-h-[100dvh] flex-col overflow-x-hidden bg-background text-foreground">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col"
      >
        <section className="relative mx-auto w-full max-w-5xl px-4 pt-28 pb-20 sm:px-6 lg:pt-40 lg:pb-28">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(hsl(var(--foreground) / 0.05) 1px, transparent 1px),
                                linear-gradient(90deg, hsl(var(--foreground) / 0.05) 1px, transparent 1px)`,
              backgroundSize: "48px 48px",
              maskImage: "radial-gradient(ellipse 50% 70% at 70% 50%, black, transparent)",
              WebkitMaskImage: "radial-gradient(ellipse 50% 70% at 70% 50%, black, transparent)",
            }}
          />

          <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <motion.div variants={fade}>
                <span className="inline-block border border-border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Reverse Engineering Toolkit
                </span>
              </motion.div>

              <motion.h1
                variants={fade}
                className="mt-8 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl lg:leading-[1.08]"
              >
                RevEngi{" "}
                <span className="text-muted-foreground">
                  BOT
                </span>
              </motion.h1>

              <motion.p
                variants={fade}
                className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg"
              >
                Revolutionizing the workflow for reverse engineers and developers.
                Powerful tools for Blutter, Smali, Java conversion, and APK analysis — all
                at your fingertips.
              </motion.p>

              <motion.div variants={fade} className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="https://t.me/RevEngiBot"
                  className="group inline-flex h-11 items-center gap-2 bg-foreground px-6 text-sm font-medium text-background transition-colors duration-200 hover:bg-foreground/85 active:bg-foreground/75"
                >
                  Open in Telegram
                  <FiArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="https://app.revengi.in"
                  className="bg-background inline-flex h-11 items-center border border-border px-6 text-sm font-medium text-foreground transition-colors duration-200 hover:bg-muted/40"
                >
                  Web App
                </Link>
                <Link
                  href="/downloads"
                  className="bg-background inline-flex h-11 items-center border border-border px-6 text-sm font-medium text-foreground transition-colors duration-200 hover:bg-muted/40"
                >
                  Download
                </Link>
              </motion.div>
            </div>

            <motion.div
              variants={fade}
              className="hidden lg:flex lg:items-end lg:justify-center lg:pt-16"
            >
              <FlowDiagram />
            </motion.div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-5xl px-4 py-24 sm:px-6 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="mb-14"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Capabilities</h2>
            <p className="mt-3 max-w-lg text-muted-foreground">Precision tools for every layer of Android reverse engineering.</p>
          </motion.div>

          <div className="grid grid-cols-1 gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06, ease }}
                className="group relative bg-background p-8 transition-colors duration-200 hover:bg-background/80 lg:p-10"
              >
                <div className="mb-4 flex h-9 w-9 items-center justify-center border border-border text-foreground/70">
                  {f.icon}
                </div>
                <h3 className="text-lg font-semibold tracking-tight">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                {f.href && (
                  <Link
                    href={f.href}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground/70 transition-colors duration-200 hover:text-foreground"
                  >
                    Learn more
                    <FiArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        <section className="w-full overflow-hidden py-24 lg:py-32">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="mb-14"
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Community</h2>
              <p className="mt-3 text-muted-foreground">Trusted by thousands of researchers worldwide.</p>
            </motion.div>
          </div>

          <div className="relative">
            <Marquee pauseOnHover className="[--duration:50s]">
              {firstRow.map((review, i) => (
                <ReviewCard key={`r1-${i}`} {...review} />
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="mt-3 [--duration:50s]">
              {secondRow.map((review, i) => (
                <ReviewCard key={`r2-${i}`} {...review} />
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
          </div>
        </section>

        {/* === BACKERS === */}
        <section className="mx-auto w-full max-w-5xl px-4 py-24 sm:px-6 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="mb-14"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Backers</h2>
            <p className="mt-3 text-muted-foreground">Powering the future of open-source reverse engineering.</p>
          </motion.div>

          <div className="grid grid-cols-2 gap-px overflow-hidden border border-border bg-border sm:grid-cols-3 md:grid-cols-4">
            {sponsors.map((sponsor: Sponsor, index: number) => (
              <motion.div
                key={`${sponsor.name}-${index}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06, ease }}
                className="group flex flex-col items-center justify-center bg-background px-6 py-8 transition-colors duration-200 hover:bg-background/80"
              >
                <div className="relative mb-3 h-12 w-12 overflow-hidden border border-border">
                  <img
                    src={sponsor.icon}
                    alt={sponsor.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="text-sm font-medium text-muted-foreground transition-colors duration-200 group-hover:text-foreground">
                  {sponsor.name}
                </span>
              </motion.div>
            ))}
            <Link
              href="/donate"
              className="group flex flex-col items-center justify-center bg-background px-6 py-8 transition-colors duration-200 hover:bg-background/80"
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center border border-dashed border-border transition-transform duration-300 group-hover:rotate-90">
                <FiPlus size={18} className="text-muted-foreground group-hover:text-foreground" strokeWidth={1.5} />
              </div>
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground">
                Be a Sponsor
              </span>
            </Link>
          </div>
        </section>

        <section className="border-t border-border">
          <div className="mx-auto max-w-5xl px-4 py-24 text-center sm:px-6 lg:py-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
                Start reverse engineering in seconds
              </h2>
              <p className="mx-auto mt-5 max-w-md text-muted-foreground">
                Powerful tools for Blutter, Smali, Java conversion, and APK analysis — all at your fingertips.
              </p>
              <div className="mt-10 flex items-center justify-center gap-3">
                <Link
                  href="https://t.me/RevEngiBot"
                  className="group inline-flex h-11 items-center gap-2 bg-foreground px-6 text-sm font-medium text-background transition-colors duration-200 hover:bg-foreground/85"
                >
                  Get Started
                  <FiArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/docs"
                  className="inline-flex h-11 items-center border border-border px-6 text-sm font-medium text-foreground transition-colors duration-200 hover:bg-muted/40"
                >
                  Read the Docs
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </motion.div>

      <Footer />

      <a
        href="/donate"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-6 bottom-6 z-40 inline-flex items-center gap-2 border border-border bg-background/90 px-4 py-2.5 text-sm font-medium text-foreground backdrop-blur-sm transition-colors duration-200 hover:bg-muted/40 sm:right-10 sm:bottom-10"
      >
        <BiDonateHeart size={16} />
        Support Project
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
    <figure className="w-80 cursor-default border border-border bg-background p-5 transition-colors duration-200 hover:bg-muted/40">
      <div className="flex items-center gap-3">
        <img className="h-9 w-9 border border-border" alt={name} src={img} />
        <div>
          <figcaption className="text-sm font-semibold">{name}</figcaption>
          <p className="text-xs text-muted-foreground">{username}</p>
        </div>
      </div>
      <blockquote className="mt-3 text-[13px] leading-relaxed text-muted-foreground">
        {body}
      </blockquote>
    </figure>
  );
}
