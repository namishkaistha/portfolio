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
    // Add custom card classes to prevent purging
    "card-white",
    "card-gray-100",
    "card-gray-300",
    "card-gray-700",
    "card-gray-800",
    "dark:card-white",
    "dark:card-gray-100",
    "dark:card-gray-300",
    "dark:card-gray-700",
    "dark:card-gray-800",
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
