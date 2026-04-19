import Link from "next/link";
import { LuGithub, LuLinkedin } from "react-icons/lu";
import { LiaTelegramPlane } from "react-icons/lia";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

export function Footer() {
  return (
    <footer className="relative z-10 w-full border-t border-white/10 bg-[#050505] text-white">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 md:py-16">
        <div className="grid grid-cols-1 gap-10 justify-items-start text-left md:grid-cols-2 md:justify-items-stretch lg:grid-cols-5">
          <div className="space-y-4 md:col-span-2 lg:col-span-1">
            <div className="flex shrink-0 items-center gap-2.5">
              <img
                src="/icon.jpg"
                alt="RevEngi Logo"
                width="36"
                height="36"
                className="rounded-lg border border-white/10"
              />
              <span className="whitespace-nowrap font-mono text-xl font-bold tracking-tight text-white">
                <span>RevEngi</span>
                <span className="ml-[0.3em] text-white/65">[BOT]</span>
              </span>
            </div>
            <p className="font-mono text-sm leading-relaxed text-white/60">
              Revolutionizing reverse engineering workflow.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-mono text-sm font-semibold text-white">
              <MdOutlineKeyboardDoubleArrowRight className="mr-1 inline text-white/45" />Product
            </h3>
            <ul className="space-y-2.5 font-mono text-sm">
              <li>
                <Link className="group inline-flex items-center gap-1 text-white/60 transition-colors hover:text-white" href="/downloads">
                  <span className="text-white/30 transition-colors group-hover:text-white/55">//</span>Desktop Apps
                </Link>
              </li>
              <li>
                <Link className="group inline-flex items-center gap-1 text-white/60 transition-colors hover:text-white" href="/docs/api">
                  <span className="text-white/30 transition-colors group-hover:text-white/55">//</span>API Docs
                </Link>
              </li>
              <li>
                <Link className="group inline-flex items-center gap-1 text-white/60 transition-colors hover:text-white" href="https://app.revengi.in">
                  <span className="text-white/30 transition-colors group-hover:text-white/55">//</span>Web App
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-mono text-sm font-semibold text-white">
              <MdOutlineKeyboardDoubleArrowRight className="mr-1 inline text-white/45" />Company
            </h3>
            <ul className="space-y-2.5 font-mono text-sm">
              <li>
                <Link className="group inline-flex items-center gap-1 text-white/60 transition-colors hover:text-white" href="/contact">
                  <span className="text-white/30 transition-colors group-hover:text-white/55">//</span>Contact
                </Link>
              </li>
              <li>
                <Link
                  className="group inline-flex items-center gap-1 text-white/60 transition-colors hover:text-white"
                  href="https://status.revengi.in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-white/30 transition-colors group-hover:text-white/55">//</span>Status
                </Link>
              </li>
              <li>
                <Link className="group inline-flex items-center gap-1 text-white/60 transition-colors hover:text-white" href="/donate">
                  <span className="text-white/30 transition-colors group-hover:text-white/55">//</span>Donate
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-mono text-sm font-semibold text-white">
              <MdOutlineKeyboardDoubleArrowRight className="mr-1 inline text-white/45" />Legal
            </h3>
            <ul className="space-y-2.5 font-mono text-sm">
              <li>
                <Link className="group inline-flex items-center gap-1 text-white/60 transition-colors hover:text-white" href="/terms">
                  <span className="text-white/30 transition-colors group-hover:text-white/55">//</span>Terms
                </Link>
              </li>
              <li>
                <Link className="group inline-flex items-center gap-1 text-white/60 transition-colors hover:text-white" href="/privacy">
                  <span className="text-white/30 transition-colors group-hover:text-white/55">//</span>Privacy
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-left font-mono text-sm font-semibold text-white md:text-center">
              <MdOutlineKeyboardDoubleArrowRight className="mr-1 inline text-white/45" />Connect
            </h3>

            <div className="flex items-center justify-start gap-4 md:justify-center">
              <a
                href="https://t.me/RevEngi"
                target="_blank"
                rel="noopener noreferrer"
                title="Telegram"
                className="group flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-white/60 transition-all hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
              >
                <LiaTelegramPlane />
              </a>

              <a
                href="https://github.com/RevEngiSquad"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="group flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-white/60 transition-all hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
              >
                <LuGithub className="h-5 w-5" />
              </a>

              <a
                href="https://linkedin.com/company/revengi"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="group flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-white/60 transition-all hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
              >
                <LuLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="my-8 h-px bg-white/10"></div>

        <div className="flex flex-col items-center justify-between gap-4 font-mono text-sm text-white/55 md:flex-row">
          <p className="text-xs">© {new Date().getFullYear()} RevEngi. All Rights Reserved.</p>
          <p className="text-xs text-white/45">
            <span className="text-white/30">// </span>Built for reverse engineers
          </p>
        </div>
      </div>
    </footer>
  );
}
