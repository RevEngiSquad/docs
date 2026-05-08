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
    <main className="bg-background px-4 pt-24 pb-16 text-foreground sm:px-6 lg:px-8">
      <section className="mx-auto max-w-5xl">
        <div className="mb-12">
          <span className="inline-block border border-border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            Downloads
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Install RevEngi on your platform.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
            Choose the latest build for desktop or mobile. Each package links directly to the current release artifact.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-2 xl:grid-cols-4">
          {platforms.map((item) => (
            <DownloadDropdown key={item.platform} {...item} />
          ))}
        </div>

        <div className="mt-12 border border-border bg-background p-5 sm:p-6">
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
    <div className="bg-background p-6 transition-color hover:bg-background/80">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground/50">Platform</p>
          <h2 className="mt-1.5 text-xl font-semibold text-foreground">{platform}</h2>
        </div>
        <div className="flex h-10 w-10 items-center justify-center border border-border text-foreground/60">
          <Icon className="h-4 w-4" />
        </div>
      </div>

      <p className="mb-5 text-sm leading-6 text-muted-foreground">
        Latest {platform} build from the release channel.
      </p>

      <Menu as="div" className="relative block w-full text-left">
        <div className="flex w-full">
          <button
            onClick={() => handleDownload(selected)}
            className="flex-1 bg-foreground px-4 py-2.5 text-left text-sm font-medium text-background transition hover:bg-foreground/90"
          >
            {selected.label}
          </button>
          <MenuButton className="bg-foreground px-3 text-background transition hover:bg-foreground/90">
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
          <MenuItems className="absolute z-10 mt-1 w-full border border-border bg-popover p-0.5 shadow-lg focus:outline-none">
            {options.map((opt) => (
              <MenuItem key={opt.label}>
                {({ focus }) => (
                  <button
                    onClick={() => handleDownload(opt)}
                    className={`${focus ? "bg-accent text-foreground" : "text-muted-foreground"} block w-full px-4 py-2.5 text-left text-sm transition-colors`}
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
