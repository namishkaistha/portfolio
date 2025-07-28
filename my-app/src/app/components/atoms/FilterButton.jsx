import PropTypes from "prop-types";

export default function FilterButton({ label, isActive = false, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 text-sm font-medium transition-all duration-200 border-2 ${
        isActive
          ? "bg-gray-800 dark:bg-gray-700 text-white border-gray-800 dark:border-gray-700"
          : "bg-transparent text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-500"
      }`}
    >
      {label}
    </button>
  );
}

FilterButton.propTypes = {
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
};
