import Link from "next/link";
import { LuGithub, LuLinkedin } from "react-icons/lu";
import { LiaTelegramPlane } from "react-icons/lia";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

export function Footer() {
  return (
    <footer className="relative z-10 w-full border-t border-border bg-background text-foreground">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 md:py-16">
        <div className="grid grid-cols-1 gap-10 justify-items-start text-left md:grid-cols-2 md:justify-items-stretch lg:grid-cols-5">
          <div className="space-y-4 md:col-span-2 lg:col-span-1">
            <div className="flex shrink-0 items-center gap-2.5">
              <img
                src="/icon.jpg"
                alt="RevEngi Logo"
                width="36"
                height="36"
                className="rounded-lg border border-border"
              />
              <span className="whitespace-nowrap font-mono text-xl font-bold tracking-tight text-foreground">
                <span>RevEngi</span>
                <span className="ml-[0.3em] text-muted-foreground">[BOT]</span>
              </span>
            </div>
            <p className="font-mono text-sm leading-relaxed text-muted-foreground">
              Revolutionizing reverse engineering workflow.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-mono text-sm font-semibold text-foreground">
              <MdOutlineKeyboardDoubleArrowRight className="mr-1 inline text-muted-foreground/70" />Product
            </h3>
            <ul className="space-y-2.5 font-mono text-sm">
              <li>
                <Link className="group inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground" href="/downloads">
                  <span className="text-muted-foreground/50 transition-colors group-hover:text-muted-foreground/70">//</span>Desktop Apps
                </Link>
              </li>
              <li>
                <Link className="group inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground" href="/docs/api">
                  <span className="text-muted-foreground/50 transition-colors group-hover:text-muted-foreground/70">//</span>API Docs
                </Link>
              </li>
              <li>
                <Link className="group inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground" href="https://app.revengi.in">
                  <span className="text-muted-foreground/50 transition-colors group-hover:text-muted-foreground/70">//</span>Web App
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-mono text-sm font-semibold text-foreground">
              <MdOutlineKeyboardDoubleArrowRight className="mr-1 inline text-muted-foreground/70" />Company
            </h3>
            <ul className="space-y-2.5 font-mono text-sm">
              <li>
                <Link className="group inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground" href="/contact">
                  <span className="text-muted-foreground/50 transition-colors group-hover:text-muted-foreground/70">//</span>Contact
                </Link>
              </li>
              <li>
                <Link
                  className="group inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
                  href="https://status.revengi.in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-muted-foreground/50 transition-colors group-hover:text-muted-foreground/70">//</span>Status
                </Link>
              </li>
              <li>
                <Link className="group inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground" href="/donate">
                  <span className="text-muted-foreground/50 transition-colors group-hover:text-muted-foreground/70">//</span>Donate
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-mono text-sm font-semibold text-foreground">
              <MdOutlineKeyboardDoubleArrowRight className="mr-1 inline text-muted-foreground/70" />Legal
            </h3>
            <ul className="space-y-2.5 font-mono text-sm">
              <li>
                <Link className="group inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground" href="/terms">
                  <span className="text-muted-foreground/50 transition-colors group-hover:text-muted-foreground/70">//</span>Terms
                </Link>
              </li>
              <li>
                <Link className="group inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground" href="/privacy">
                  <span className="text-muted-foreground/50 transition-colors group-hover:text-muted-foreground/70">//</span>Privacy
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-left font-mono text-sm font-semibold text-foreground md:text-center">
              <MdOutlineKeyboardDoubleArrowRight className="mr-1 inline text-muted-foreground/70" />Connect
            </h3>

            <div className="flex items-center justify-start gap-4 md:justify-center">
              <a
                href="https://t.me/RevEngi"
                target="_blank"
                rel="noopener noreferrer"
                title="Telegram"
                className="group flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-muted/50 text-muted-foreground transition-all hover:border-foreground/20 hover:bg-muted hover:text-foreground"
              >
                <LiaTelegramPlane />
              </a>

              <a
                href="https://github.com/RevEngiSquad"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="group flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-muted/50 text-muted-foreground transition-all hover:border-foreground/20 hover:bg-muted hover:text-foreground"
              >
                <LuGithub className="h-5 w-5" />
              </a>

              <a
                href="https://linkedin.com/company/revengi"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="group flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-muted/50 text-muted-foreground transition-all hover:border-foreground/20 hover:bg-muted hover:text-foreground"
              >
                <LuLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="my-8 h-px bg-border"></div>

        <div className="flex flex-col items-center justify-between gap-4 font-mono text-sm text-muted-foreground md:flex-row">
          <p className="text-xs">© {new Date().getFullYear()} RevEngi. All Rights Reserved.</p>
          <p className="text-xs text-muted-foreground/70">
            <span className="text-muted-foreground/50">// </span>Built for reverse engineers
          </p>
        </div>
      </div>
    </footer>
  );
}
