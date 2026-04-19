"use client";

import { Fragment, useState } from "react";
import { MenuButton, Transition, Menu, MenuItems, MenuItem } from "@headlessui/react";
import { ChevronDownIcon } from "lucide-react";
import { FaWindows, FaLinux, FaAndroid, FaApple } from "react-icons/fa6";
import { useToast } from "@/components/ToastProvider";
import LatestReleaseNotes from "@/components/ReleaseNotes";

const platforms = [
  {
    platform: "Windows",
    icon: FaWindows,
    options: [
      { label: "Windows Installer", href: "https://github.com/RevEngiSquad/revengi-app/releases/latest/download/RevEngi-Windows-installer.exe" },
      { label: "Portable Zip", href: "https://github.com/RevEngiSquad/revengi-app/releases/latest/download/RevEngi-Windows.zip" },
    ],
  },
  {
    platform: "Linux",
    icon: FaLinux,
    options: [
      { label: "AppImage", href: "https://github.com/RevEngiSquad/revengi-app/releases/latest/download/RevEngi-Linux.AppImage" },
      { label: "Deb", href: "https://github.com/RevEngiSquad/revengi-app/releases/latest/download/RevEngi-Linux.deb" },
      { label: "RPM", href: "https://github.com/RevEngiSquad/revengi-app/releases/latest/download/RevEngi-Linux.rpm" },
    ],
  },
  {
    platform: "Android",
    icon: FaAndroid,
    options: [
      { label: "ARM64", href: "https://github.com/RevEngiSquad/revengi-app/releases/latest/download/RevEngi-Android-arm64.apk" },
      { label: "ARM32", href: "https://github.com/RevEngiSquad/revengi-app/releases/latest/download/RevEngi-Android-arm32.apk" },
      { label: "x64", href: "https://github.com/RevEngiSquad/revengi-app/releases/latest/download/RevEngi-Android-x64.apk" },
      { label: "Universal", href: "https://github.com/RevEngiSquad/revengi-app/releases/latest/download/RevEngi-Android-universal.apk" },
    ],
  },
  {
    platform: "iOS",
    icon: FaApple,
    options: [
      { label: "IPA", href: "https://github.com/RevEngiSquad/revengi-app/releases/download/v1.2.5/RevEngi-iOS.ipa" },
    ],
  },
];

export default function Downloads() {
  return (
    <main className="min-h-screen bg-background px-4 pt-28 pb-16 text-foreground sm:px-6 lg:px-8">
      <section className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-3xl">
          <div className="mb-5 inline-flex rounded-md border border-border bg-muted/50 px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Downloads
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Install RevEngi on your platform.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Choose the latest build for desktop or mobile. Each package links directly to the current release artifact.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {platforms.map((item) => (
            <DownloadDropdown key={item.platform} {...item} />
          ))}
        </div>

        <div className="mt-16 rounded-xl border border-border bg-muted/50 p-6 sm:p-8">
          <LatestReleaseNotes />
        </div>
      </section>
    </main>
  );
}

function DownloadDropdown({
  platform,
  icon: Icon,
  options,
}: {
  platform: string;
  icon: React.ComponentType<{ className?: string }>;
  options: { label: string; href: string }[];
}) {
  const [selected, setSelected] = useState(options[0]);
  const toast = useToast();

  const handleDownload = (opt: { label: string; href: string }) => {
    setSelected(opt);
    toast(`Your ${opt.label} download is starting...`);
    window.location.href = opt.href;
  };

  return (
    <div className="rounded-xl border border-border bg-muted/50 p-6 transition-colors hover:bg-muted">
      <div className="mb-5 flex items-center justify-between border-b border-border pb-5">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground/60">Platform</p>
          <h2 className="mt-2 text-2xl font-semibold text-foreground">{platform}</h2>
        </div>
        <div className="flex h-11 w-11 items-center justify-center border border-border bg-muted text-foreground/75">
          <Icon className="h-5 w-5" />
        </div>
      </div>

      <p className="mb-6 text-sm leading-6 text-muted-foreground">
        Download the latest {platform} package from the RevEngi release channel.
      </p>

      <Menu as="div" className="relative block w-full text-left">
        <div className="flex w-full">
          <button
            onClick={() => handleDownload(selected)}
            className="flex-1 rounded-l-md border border-border bg-foreground px-4 py-3 text-left text-sm font-medium text-background transition hover:bg-foreground/90"
          >
            {selected.label}
          </button>
          <MenuButton className="rounded-r-md border border-l-0 border-border bg-foreground px-3 text-background transition hover:bg-foreground/90">
            <ChevronDownIcon className="h-4 w-4" />
          </MenuButton>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 -translate-y-1"
          enterTo="transform opacity-100 translate-y-0"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 translate-y-0"
          leaveTo="transform opacity-0 -translate-y-1"
        >
          <MenuItems className="absolute z-10 mt-2 w-full border border-border bg-popover p-1 shadow-2xl focus:outline-none">
            {options.map((opt) => (
              <MenuItem key={opt.label}>
                {({ focus }) => (
                  <button
                    onClick={() => handleDownload(opt)}
                    className={`${focus ? "bg-accent text-foreground" : "text-muted-foreground"} block w-full px-4 py-3 text-left text-sm transition-colors`}
                  >
                    {opt.label}
                  </button>
                )}
              </MenuItem>
            ))}
          </MenuItems>
        </Transition>
      </Menu>
    </div>
  );
}
