// src/components/molecules/PodCard.jsx
"use client";

import { useState, useEffect } from "react";
import { FaSpotify } from "react-icons/fa";
import { useTheme } from "../providers/ThemeProvider";

export default function PodCard({ title, description, link }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const { isDark } = useTheme();

  useEffect(() => {
    console.log("isDark", isDark);
  }, [isDark]);

  return (
    //outer and inner containers for flipping, then title and description for each state
    <div
      onClick={() => setIsFlipped((f) => !f)}
      className="relative w-full h-64 sm:h-80 lg:h-96 cursor-pointer select-none [perspective:1000px] mb-16 sm:mb-20"
    >
      <div
        className={`
      relative w-full h-full text-center transition-transform duration-500
      [transform-style:preserve-3d]
      ${isFlipped ? "[transform:rotateY(180deg)]" : ""}
    `}
      >
        <div
          className="absolute inset-0 border-2 border-gray-600 dark:border-gray-600 rounded-lg flex items-center justify-center p-4 [backface-visibility:hidden]"
          style={{
            backgroundColor: isDark ? "#374151" : "#f3f4f6",
            color: isDark ? "#f5f5dc" : "#2e5939",
          }}
        >
          <span className="text-lg sm:text-xl lg:text-2xl font-semibold font-rock-salt leading-tight">
            {title}
          </span>
        </div>
        <div
          className="absolute inset-0 border-2 border-gray-600 dark:border-gray-600 rounded-lg p-4 flex items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]"
          style={{
            backgroundColor: isDark ? "#374151" : "#f3f4f6",
            color: isDark ? "#f5f5dc" : "#2e5939",
          }}
        >
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed px-2">
            {' "' + description + '" '}
          </p>
        </div>
      </div>

      <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link to Spotify Interview"
          className="text-green-500 hover:text-green-400 text-xl sm:text-2xl transition-colors duration-200"
        >
          <FaSpotify />
        </a>
      </div>
    </div>
  );
}
