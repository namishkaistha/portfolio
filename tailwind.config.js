/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    'bg-white',
    'bg-gray-100',
    'bg-gray-300',
    'bg-gray-700',
    'bg-gray-800',
    'dark:bg-gray-700',
    'dark:bg-gray-800',
    'text-gray-200',
    'dark:text-gray-200',
    'border-gray-300',
    'border-gray-600',
    'dark:border-gray-600',
    'dark:border-gray-700'
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'card-white': "white",
        'card-gray-100': "#f3f4f6",
        'card-gray-300': "#d1d5db",
        'card-gray-700': "#374151",
        'card-gray-800': "#1f2937",
        'dark:card-white': "#1f2937",
        'dark:card-gray-100': "#374151",
        'dark:card-gray-300': "#374151",
        'dark:card-gray-700': "#374151",
        'dark:card-gray-800': "#1f2937",
      },
    },
  },
  plugins: [],
};
