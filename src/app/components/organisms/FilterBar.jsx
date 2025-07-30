"use client";

import { useState } from "react";
import FilterButton from "../atoms/FilterButton";

export default function FilterBar({ onFilterChange }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const filterCategories = [
    "All",
    "Full Stack",
    "ML",
    "Project Management",
    "Backend",
  ];

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    console.log(`Filter changed to: ${filter}`);
    // Call the parent callback with the new filter
    if (onFilterChange) {
      onFilterChange(filter);
    }
  };

  return (
    <div className="mb-8">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white whitespace-nowrap">
          Filter By:
        </h3>
        <div className="flex flex-wrap gap-2 sm:gap-4 justify-center">
          {filterCategories.map((category) => (
            <FilterButton
              key={category}
              label={category}
              isActive={activeFilter === category}
              onClick={() => handleFilterClick(category)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
