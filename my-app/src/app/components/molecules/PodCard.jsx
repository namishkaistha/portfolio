// src/components/molecules/PodCard.jsx
"use client";

import { useState } from "react";

export default function PodCard({ title, description, link }) {
  const [isFlipped, setIsFlipped] = useState(false);

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
        <div className="absolute inset-0 bg-white dark:bg-gray-800 border-2 border-gray-600 dark:border-gray-600 rounded-lg flex items-center justify-center [backface-visibility:hidden]">
          <span className="text-2xl font-semibold">{title}</span>
        </div>
        <div className="absolute inset-0 bg-gray-100 dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 rounded-lg p-4 flex items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <p className="text-gray-800 dark:text-gray-200">{description}</p>
        </div>
      </div>

      <div className="vh-10">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200"
        >
          Link to Interview{" "}
        </a>
      </div>
    </div>
  );
}
