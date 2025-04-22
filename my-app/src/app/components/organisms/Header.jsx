// src/app/components/organisms/Header.jsx
import Link from 'next/link'
import ThemeToggle from '../molecules/ThemeToggle'

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-900">
      <nav className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/creative">Creative</Link>
        <Link href="/programming">Programming</Link>
      </nav>
      {/* <ThemeToggle /> */}
    </header>
  );
}
