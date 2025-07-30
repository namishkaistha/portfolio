// src/app/components/molecules/ProjectCard.jsx
import PropTypes from "prop-types";
import Title from "../atoms/Title";
import Tech from "../atoms/Tech";
import Description from "../atoms/Description";

export default function ProjectCard({
  title,
  tech,
  description,
  accomplishments,
  githubUrl,
  category,
}) {
  const CardContent = ({ isClickable = false }) => (
    <div
      className={`p-6 card-white dark:card-gray-800 rounded-lg border w-full max-w-4xl mx-auto shadow-lg ${
        isClickable
          ? "transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:border-gray-400 dark:hover:border-gray-500"
          : ""
      }`}
    >
      {/* Title and Description - Full width for better text flow */}
      <div className="mb-6">
        <div className="text-2xl inline-flex items-center space-x-2 mb-3 dark:text-white">
          <Title title={title} />
        </div>

        <div className="font-bold text-base text-gray-500 dark:text-gray-400 leading-relaxed">
          <Description description={description} />
        </div>
      </div>

      {/* Achievements - Full width with better text wrapping */}
      {accomplishments && (
        <div className="mb-6">
          <h4 className="font-roboto font-semibold mb-3 text-gray-800 dark:text-white">
            Achievements
          </h4>
          <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2 leading-relaxed">
            {accomplishments.map((accomplishment, index) => (
              <li key={index} className="flex items-start">
                <span className="text-gray-400 mr-3 mt-1 flex-shrink-0">•</span>
                <span className="flex-1">{accomplishment}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Tech tags at the bottom */}
      {tech && (
        <div className="mt-6 pt-4 border-t border-gray-600">
          <h4 className="font-roboto font-bold mb-3 text-gray-800 dark:text-white">
            Technologies
          </h4>
          <div className="flex flex-wrap gap-3">
            {Array.isArray(tech) ? (
              tech.map((techItem, index) => (
                <button
                  key={index}
                  className="px-4 py-2 bg-gray-700 dark:bg-gray-600 text-gray-300 rounded-full text-sm hover:bg-gray-600 dark:hover:bg-gray-500 transition-colors font-medium"
                  disabled
                >
                  {techItem}
                </button>
              ))
            ) : (
              <button
                className="px-4 py-2 bg-gray-700 dark:bg-gray-600 text-gray-300 rounded-full text-sm hover:bg-gray-600 dark:hover:bg-gray-500 transition-colors font-medium"
                disabled
              >
                {tech}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );

  // If GitHub URL is provided, make the entire card clickable
  if (githubUrl) {
    return (
      <div className="w-full flex justify-center">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block cursor-pointer w-full max-w-4xl"
        >
          <CardContent isClickable={true} />
        </a>
      </div>
    );
  }

  // Otherwise, just render the card content without hover effects
  return <CardContent isClickable={false} />;
}

ProjectCard.propTypes = {
  title: PropTypes.node.isRequired,
  tech: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  description: PropTypes.node.isRequired,
  accomplishments: PropTypes.arrayOf(PropTypes.string),
  githubUrl: PropTypes.string,
  category: PropTypes.string,
};
