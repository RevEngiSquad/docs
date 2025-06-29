"use client";

import { useEffect, useState } from "react";

export default function LatestReleaseNotes() {
  const [release, setRelease] = useState<{
    name: string;
    body: string;
    assets: { name: string; digest: string }[];
  } | null>(null);
  const [copied, setCopied] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/repos/RevEngiSquad/revengi-app/releases/latest")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`GitHub API error: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setRelease({
          name: data.name,
          body: data.body,
          assets: Array.isArray(data.assets)
            ? data.assets.map((a: any) => ({
              name: a.name,
              digest: typeof a.digest === "string" ? a.digest : "-",
            }))
            : [],
        });
      })
      .catch((err) => {
        console.error("Failed to fetch release notes:", err);
        setError("Unable to load release notes at this time.");
      });
  }, []);

  const handleCopy = (name: string, text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(name);
        setTimeout(() => setCopied(null), 2000);
      })
      .catch(() => alert("Copy failed. Try manually."));
  };

  const highlightKeywords = (text: string) => {
    const keywords = ["TIP", "NOTE"];
    const combinedRegex = /(`[^`]+`)|(\*\*[^*]+\*\*)|(\*[^*]+\*)|\b(TIP|NOTE)\b/g;

    return text.split(combinedRegex).map((part, index) => {
      if (!part) return null;

      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={index} className="font-bold">
            {part.slice(2, -2)}
          </strong>
        );
      }

      if (part.startsWith("*") && part.endsWith("*")) {
        return (
          <em key={index} className="italic">
            {part.slice(1, -1)}
          </em>
        );
      }

      if (part.startsWith("`") && part.endsWith("`")) {
        return (
          <code
            key={index}
            className="font-mono bg-gray-800 text-white px-1 py-0.5 rounded text-sm"
          >
            {part.slice(1, -1)}
          </code>
        );
      }

      if (keywords.includes(part)) {
        return (
          <span key={index} className="font-bold text-yellow-400">
            {part}
          </span>
        );
      }

      return <span key={index}>{part}</span>;
    });
  };


  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!release) {
    return <p className="text-gray-500">Loading release notes...</p>;
  }

  return (
    <section className="mt-12 max-w-3xl mx-auto rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-4">{release.name}</h2>
      <div className="prose prose-sm max-w-none">
        <pre className="whitespace-pre-wrap">
          {highlightKeywords(release.body)}
        </pre>
      </div>
      {release.assets.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">SHA-256 Checksums</h3>
          <ul className="text-xs font-mono rounded p-4 bg-black text-green-400 border border-green-700">
            {release.assets.map((asset) => {
              const digestWithoutPrefix = asset.digest.replace("sha256:", "");
              return (
                <li key={asset.name} className="mb-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <span>
                      <span className="text-white">{asset.name}:</span>{" "}
                      <span className="break-all">{digestWithoutPrefix}</span>
                    </span>
                    <button
                      onClick={() => handleCopy(asset.name, digestWithoutPrefix)}
                      className="bg-green-800 hover:bg-green-600 text-white font-bold px-2 py-1 rounded border border-green-500 font-mono text-xs tracking-wider transition"
                    >
                      {copied === asset.name ? "COPIED" : "COPY"}
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </section>
  );
}