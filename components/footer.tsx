import Link from "next/link";
import { LuGithub, LuLinkedin } from "react-icons/lu";
import { LiaTelegramPlane } from "react-icons/lia";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

export function Footer() {
  return (
    <footer className="w-full border-t border-border/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div
            className="grid grid-cols-1 gap-10
                       justify-items-start text-left
                       md:grid-cols-2 md:justify-items-stretch
                       lg:grid-cols-5"
          >
            <div className="space-y-4 md:col-span-2 lg:col-span-1">
              <div className="flex items-center shrink-0 gap-2.5">
                <img src="/icon.jpg" alt="RevEngi Logo" width="36" height="36" className="rounded-lg" />
                <span className="font-mono font-bold tracking-tight whitespace-nowrap text-xl">
                  <span className="text-black dark:text-white">RevEngi</span>
                  <span className="text-blue-500 dark:text-blue-400 ml-[0.3em]">[BOT]</span>
                </span>
              </div>
              <p className="text-sm text-muted-foreground font-mono leading-relaxed">
                Revolutionizing reverse engineering workflow.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-mono text-sm font-semibold text-foreground">
              <MdOutlineKeyboardDoubleArrowRight className="inline mr-1 text-blue-500" />Product
            </h3>
            <ul className="space-y-2.5 text-sm font-mono">
              <li>
                <Link className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group" href="/downloads">
                  <span className="text-muted-foreground/50 group-hover:text-blue-500/70 transition-colors">//</span>Desktop Apps
                </Link>
              </li>
              <li>
                <Link className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group" href="/docs/api">
                  <span className="text-muted-foreground/50 group-hover:text-blue-500/70 transition-colors">//</span>API Docs
                </Link>
              </li>
              <li>
                <Link className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group" href="https://app.revengi.in">
                  <span className="text-muted-foreground/50 group-hover:text-blue-500/70 transition-colors">//</span>Web App
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-mono text-sm font-semibold text-foreground">
                <MdOutlineKeyboardDoubleArrowRight className="inline mr-1 text-blue-500" />Company
            </h3>
            <ul className="space-y-2.5 text-sm font-mono">
              <li>
                <Link className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group" href="/contact">
                  <span className="text-muted-foreground/50 group-hover:text-blue-500/70 transition-colors">//</span>Contact
                </Link>
              </li>
              <li>
                <Link className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group" href="https://status.revengi.in" target="_blank" rel="noopener noreferrer">
                  <span className="text-muted-foreground/50 group-hover:text-blue-500/70 transition-colors">//</span>Status
                </Link>
              </li>
              <li>
                <Link className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group" href="/donate">
                  <span className="text-muted-foreground/50 group-hover:text-blue-500/70 transition-colors">//</span>Donate
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-mono text-sm font-semibold text-foreground">
                <MdOutlineKeyboardDoubleArrowRight className="inline mr-1 text-blue-500" />Legal
            </h3>
            <ul className="space-y-2.5 text-sm font-mono">
              <li>
                <Link className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group" href="/terms">
                  <span className="text-muted-foreground/50 group-hover:text-blue-500/70 transition-colors">//</span>Terms
                </Link>
              </li>
              <li>
                <Link className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group" href="/privacy">
                  <span className="text-muted-foreground/50 group-hover:text-blue-500/70 transition-colors">//</span>Privacy
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3
              className="font-mono text-sm font-semibold text-foreground
                         text-left md:text-center"
            >
                <MdOutlineKeyboardDoubleArrowRight className="inline mr-1 text-blue-500" />Connect
            </h3>

            <div
              className="flex items-center gap-4
                         justify-start md:justify-center"
            >
              <a
                href="https://t.me/RevEngi"
                target="_blank"
                rel="noopener noreferrer"
                title="Telegram"
                className="group flex h-10 w-10 items-center justify-center rounded-lg
                           border border-border/50 bg-background/50
                           text-muted-foreground transition-all
                           hover:text-blue-500 hover:border-blue-500/30
                           hover:shadow-md hover:shadow-blue-500/10"
              >
                  <LiaTelegramPlane />
              </a>

              <a
                href="https://github.com/RevEngiSquad"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="group flex h-10 w-10 items-center justify-center rounded-lg
                           border border-border/50 bg-background/50
                           text-muted-foreground transition-all
                           hover:text-blue-500 hover:border-blue-500/30
                           hover:shadow-md hover:shadow-blue-500/10"
              >
                <LuGithub className="h-5 w-5" />
              </a>

              <a
                href="https://linkedin.com/company/revengi"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="group flex h-10 w-10 items-center justify-center rounded-lg
                           border border-border/50 bg-background/50
                           text-muted-foreground transition-all
                           hover:text-blue-500 hover:border-blue-500/30
                           hover:shadow-md hover:shadow-blue-500/10"
              >
                <LuLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="my-8 h-px bg-border/50"></div>
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground font-mono md:flex-row">
          <p className="text-xs">© {new Date().getFullYear()} RevEngi. All Rights Reserved.</p>
          <p className="text-xs text-muted-foreground/70">
            <span className="text-blue-500/50">// </span>Built for reverse engineers
          </p>
        </div>
      </div>
    </footer>
  );
}
