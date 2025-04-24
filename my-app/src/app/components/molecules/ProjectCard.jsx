// src/app/components/molecules/ProjectCard.jsx
import Title from "../atoms/Title";
import Tech from "../atoms/Tech";
import Description from "../atoms/Description";

export default function ProjectCard({ title, tech, description }) {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border w-150 h-50 mx-auto">
      <div className="inline-flex items-center space-x-2 mb-2 dark:text-white">
        <Title title={title} />
        <span>|</span>
        <Tech tech={tech} />
      </div>
      <div className="text-sm text-gray-700 dark:text-gray-300">
        <Description description={description} />
      </div>
    </div>
  );
}
