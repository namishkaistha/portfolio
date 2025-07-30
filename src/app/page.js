"use client";

import HoverCard from "./components/molecules/HoverCard";
import ThemeToggle from "./components/atoms/ThemeToggle";

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col items-center justify-start px-4 sm:px-8">
      <h1 className="mt-[10vh] sm:mt-[15vh] text-4xl sm:text-5xl lg:text-6xl font-medium text-center">
        Hi, I&apos;m Namish
      </h1>

      <h2 className="mt-[3vh] sm:mt-[5vh] text-xl sm:text-2xl lg:text-3xl font-medium text-center">
        I tell stories
      </h2>

      <div className="mt-12 sm:mt-16 lg:mt-20 flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-12">
        <HoverCard href="/creative" title="Creative" />
        <HoverCard href="/programming" title="Projects" />
      </div>

      <div className="mt-12 sm:mt-16 lg:mt-20 flex justify-center">
        <HoverCard href="/about" title="About Me" />
      </div>
    </div>
  );
}
