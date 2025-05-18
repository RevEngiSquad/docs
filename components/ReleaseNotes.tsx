"use client";

import { useEffect, useState } from "react";

export default function LatestReleaseNotes() {
  const [release, setRelease] = useState<{ name: string; body: string } | null>(null);
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
        setRelease({ name: data.name, body: data.body });
      })
      .catch((err) => {
        console.error("Failed to fetch release notes:", err);
        setError("Unable to load release notes at this time.");
      });
  }, []);

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
        <pre className="whitespace-pre-wrap">{release.body}</pre>
      </div>
    </section>
  );
}

