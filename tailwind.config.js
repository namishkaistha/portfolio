/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    "bg-white",
    "bg-gray-100",
    "bg-gray-300",
    "bg-gray-700",
    "bg-gray-800",
    "dark:bg-gray-700",
    "dark:bg-gray-800",
    "text-gray-200",
    "dark:text-gray-200",
    "border-gray-300",
    "border-gray-600",
    "dark:border-gray-600",
    "dark:border-gray-700",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
