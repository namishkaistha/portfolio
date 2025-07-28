// src/components/molecules/PodCard.jsx
"use client";

import { useState } from "react";
import { FaSpotify } from "react-icons/fa";
import { useTheme } from "../providers/ThemeProvider";

export default function PodCard({ title, description, link }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const { isDark } = useTheme();

  return (
    //outer and inner containers for flipping, then title and description for each state
    <div
      onClick={() => setIsFlipped((f) => !f)}
      className="relative w-100 h-100 cursor-pointer select-none [perspective:1000px]"
    >
      <div
        className={`
      relative w-full h-full text-center transition-transform duration-500
      [transform-style:preserve-3d]
      ${isFlipped ? "[transform:rotateY(180deg)]" : ""}
    `}
      >
        <div
          className="absolute inset-0 border-2 border-gray-600 dark:border-gray-600 rounded-lg flex items-center justify-center [backface-visibility:hidden]"
          style={{
            backgroundColor: isDark ? "#1f2937" : "white",
            color: isDark ? "#f5f5dc" : "#2e5939",
          }}
        >
          <span className="text-2xl font-semibold font-rock-salt">{title}</span>
        </div>
        <div
          className="absolute inset-0 border-2 border-gray-300 dark:border-gray-600 rounded-lg p-4 flex items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]"
          style={{
            backgroundColor: isDark ? "#374151" : "#f3f4f6",
            color: isDark ? "#f5f5dc" : "#2e5939",
          }}
        >
          <p>{' "' + description + '" '}</p>
        </div>
      </div>

      <div className="vh-10 mt-2 mb-[200px] flex justify-center">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link to Spotify Interview"
          className="text-green-500 hover:text-green-400 text-2xl"
        >
          <FaSpotify />
        </a>
      </div>
    </div>
  );
}
