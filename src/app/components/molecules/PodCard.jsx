// src/components/molecules/PodCard.jsx
"use client";

import { useState } from "react";
import { FaSpotify } from "react-icons/fa";

export default function PodCard({ title, description, link }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    //outer and inner containers for flipping, then title and description for each state
    <div
      onClick={() => setIsFlipped((f) => !f)}
      className="relative w-full sm:w-100 h-80 sm:h-100 cursor-pointer select-none [perspective:1000px]"
    >
      <div
        className={`
      relative w-full h-full text-center transition-transform duration-500
      [transform-style:preserve-3d]
      ${isFlipped ? "[transform:rotateY(180deg)]" : ""}
    `}
      >
        <div className="absolute inset-0 bg-white dark:bg-gray-800 border-2 border-gray-600 dark:border-gray-600 rounded-lg flex items-center justify-center [backface-visibility:hidden] p-4">
          <span className="text-lg sm:text-2xl font-semibold font-rock-salt leading-tight">
            {title}
          </span>
        </div>
        <div className="absolute inset-0 bg-gray-100 dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 rounded-lg p-4 flex items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <p className="text-sm sm:text-base leading-relaxed">
            {' "' + description + '" '}
          </p>
        </div>
      </div>

      <div className="mt-2 mb-8 sm:mb-[200px] flex justify-center">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link to Spotify Interview"
          className="text-green-500 hover:text-green-400 text-xl sm:text-2xl"
        >
          <FaSpotify />
        </a>
      </div>
    </div>
  );
}
