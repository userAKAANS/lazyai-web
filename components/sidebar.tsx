"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-60 h-screen bg-black border-r border-neutral-900 p-4 text-neutral-300">
      <h2 className="text-lg font-semibold mb-4">LazyAI</h2>

      <div className="flex flex-col gap-3">
        <Link href="/chat" className="hover:text-white">New Chat</Link>
        <Link href="/" className="hover:text-white">Home</Link>
      </div>
    </aside>
  );
}
