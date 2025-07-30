// src/components/molecules/HoverCard.jsx

//render on client side for hover effect
// "use client";
import Link from "next/link";

//props --> where the link should go, and the title of the card
export default function HoverCard({ href, title }) {
  return (
    //href -> leads to a link
    //group --> allows you to apply hover styles
    //relative --> absolute children will be positioned relative to the containers
    //inline-block --> makes element behave like an inline comment, but with padding
    // px-4, py-2: padding horizontal and vertically
    <Link
      href={href}
      className="group relative inline-block px-3 sm:px-4 py-6 sm:py-8 lg:py-12"
    >
      <span className="relative z-10 text-lg sm:text-xl lg:text-2xl font-semibold font-rock-salt">
        {title}
      </span>

      <span
        className="
          absolute inset-0
          border-2 border-gray-500 rounded-md
          opacity-0 group-hover:opacity-100
          transition-opacity
        "
      />
    </Link>
  );
}
