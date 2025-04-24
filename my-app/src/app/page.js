"use client";

import HoverCard from "./components/molecules/HoverCard";
import ThemeToggle from "./components/atoms/ThemeToggle";

export default function Home() {
  return (
    <div className="dark:bg-black bg-white text-black dark:text-white min-h-screen flex flex-col items-center justify-start">
      {/* Optional: Toggle button to switch themes (you'd define this logic in ThemeToggle component) */}

      <h1 className="mt-[15vh] text-6xl font-medium">Hi, I&apos;m Namish</h1>

      <h2 className="mt-[5vh] text-3xl font-medium">I tell stories</h2>

      <div className="mt-20 flex gap-12">
        <HoverCard href="/creative" title="Creative" />
        <HoverCard href="/programming" title="Projects" />
      </div>

      <div className="mt-20 flex gap-12">
        <HoverCard href="/about" title="About Me" />
      </div>
    </div>
  );
}
