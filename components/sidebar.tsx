"use client";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 bg-black border-r border-neutral-800 h-screen p-4 flex flex-col">
      <Link href="/chat">
        <button className="w-full bg-neutral-900 p-3 rounded-lg text-left">
          + New Chat
        </button>
      </Link>

      <div className="mt-6 text-neutral-400 text-sm">LazyAI</div>
      <div className="flex-1 mt-4 text-neutral-500">
        <p>No conversations yet.</p>
      </div>

      <div className="mt-auto">
        <button className="w-full p-3 rounded-lg bg-neutral-900 text-left">
          Settings
        </button>
      </div>
    </div>
  );
}
