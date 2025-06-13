"use client";

import { Fragment, useState } from "react";
import { MenuButton, Transition, Menu, MenuItems, MenuItem } from "@headlessui/react";
import { ChevronDownIcon } from "lucide-react";
import { useToast } from "@/components/ToastProvider";
import LatestReleaseNotes from "@/components/ReleaseNotes";

const platforms = [
    {
        platform: "Windows",
        icon: "🪟",
        options: [
            { label: "Windows Installer", href: "https://github.com/RevEngiSquad/revengi-app/releases/latest/download/RevEngi-Windows-installer.exe" },
            { label: "Windows Zip", href: "https://github.com/RevEngiSquad/revengi-app/releases/latest/download/RevEngi-Windows.zip" },
        ],
    },
    {
        platform: "Linux",
        icon: "🐧",
        options: [
            { label: "AppImage", href: "https://github.com/RevEngiSquad/revengi-app/releases/latest/download/RevEngi-Linux.AppImage" },
            { label: "Deb", href: "https://github.com/RevEngiSquad/revengi-app/releases/latest/download/RevEngi-Linux.deb" },
            { label: "RPM", href: "https://github.com/RevEngiSquad/revengi-app/releases/latest/download/RevEngi-Linux.rpm" },
        ],
    },
    {
        platform: "Android",
        icon: "📱",
        options: [
            { label: "ARM64", href: "https://github.com/RevEngiSquad/revengi-app/releases/latest/download/RevEngi-Android-arm64.apk" },
            { label: "ARM32", href: "https://github.com/RevEngiSquad/revengi-app/releases/latest/download/RevEngi-Android-arm32.apk" },
            { label: "x64", href: "https://github.com/RevEngiSquad/revengi-app/releases/latest/download/RevEngi-Android-x64.apk" },
            { label: "Universal", href: "https://github.com/RevEngiSquad/revengi-app/releases/latest/download/RevEngi-Android-universal.apk" },
        ],
    },
];

export default function Downloads() {
    return (
        <main className="container mx-auto px-4 py-10">
            <h1 className="text-4xl font-bold mb-10 text-center">Download RevEngi</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {platforms.map((item) => (
                    <DownloadDropdown key={item.platform} {...item} />
                ))}
            </div>
            <LatestReleaseNotes />
        </main>
    );
}

function DownloadDropdown({
    platform,
    icon,
    options,
}: {
    platform: string;
    icon: string;
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
        <div className="border rounded-xl p-6 text-center shadow-sm hover:shadow-md transition">
            <div className="text-5xl mb-4">{icon}</div>
            <h2 className="text-xl font-semibold mb-4">RevEngi for {platform}</h2>
            <Menu as="div" className="relative inline-block w-full text-left">
                <div className="flex">
                    <button
                        onClick={() => handleDownload(selected)}
                        className="flex-1 bg-black text-white py-2 px-4 rounded-l-lg text-sm font-medium hover:bg-gray-800 transition text-center"
                    >
                        {selected.label}
                    </button>
                    <MenuButton className="bg-black text-white px-3 rounded-r-lg hover:bg-gray-800 transition">
                        <ChevronDownIcon className="w-4 h-4" />
                    </MenuButton>
                </div>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <MenuItems className="absolute z-10 mt-2 w-full rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                            {options.map((opt) => (
                                <MenuItem key={opt.label}>
                                    {({ active }) => (
                                        <button
                                            onClick={() => handleDownload(opt)}
                                            className={`${active ? "bg-gray-100" : ""
                                                } block w-full text-left px-4 py-2 text-sm text-gray-700`}
                                        >
                                            {opt.label}
                                        </button>
                                    )}
                                </MenuItem>
                            ))}
                        </div>
                    </MenuItems>
                </Transition>
            </Menu>
        </div>
    );
}

