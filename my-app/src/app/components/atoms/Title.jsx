import PropTypes from "prop-types";

export default function Title({ title }) {
  return (
    <div className="flex flex-col md:flex-row items-center max-w-4xl mx-auto gap-8">
      {title}
    </div>
  );
}

Title.propTypes = {
  title: PropTypes.node.isRequired,
};
