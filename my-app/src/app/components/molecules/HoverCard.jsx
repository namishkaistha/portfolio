// src/components/molecules/HoverCard.jsx
'use client'
import Link from 'next/link'

export default function HoverCard({ href, title }) {
  return (
    <Link
      href={href}
      className="group relative inline-block px-4 py-2"
    >
      {/* The visible title */}
      <span className="relative z-10 text-2xl font-semibold">
        {title}
      </span>

      {/* The box that fades in on hover */}
      <span
        className="
          absolute inset-0
          border-2 border-gray-500 rounded-md
          opacity-0 group-hover:opacity-100
          transition-opacity
        "
      />
    </Link>
  )
}
