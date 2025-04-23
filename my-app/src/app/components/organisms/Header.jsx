'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from '../molecules/ThemeToggle'

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="w-full flex items-center justify-between px-6 py-4 bg-white dark:bg-black dark:text-white">
      {/* always render this element, but hide its contents on "/" */}
      <nav className={`flex gap-6 ${pathname === '/' ? 'invisible' : ''}`}>
        <Link href="/">Home</Link>
        <Link href="/creative">Creative</Link>
        <Link href="/programming">Projects</Link>
        <Link href="/about">About</Link>
      </nav>

      {/* this is always here and always on the right */}
      <div className="px-2 py-4">
        <ThemeToggle />
      </div>
    </header>
  )
}
