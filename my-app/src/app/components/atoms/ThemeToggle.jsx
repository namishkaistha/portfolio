"use client";

import SunIcon from "./SunIcon";
import MoonIcon from "./MoonIcon";
import { useTheme } from "../providers/ThemeProvider";

export default function ThemeToggle() {
  const { isDark, toggleTheme, isInitialized } = useTheme();

  // Don't render until theme is initialized to prevent hydration mismatch
  if (!isInitialized) {
    return (
      <button className="text-2xl cursor-pointer opacity-50">
        <SunIcon />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="text-2xl cursor-pointer hover:opacity-80 transition-opacity"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {isDark ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}
