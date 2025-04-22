// src/components/atoms/Button.jsx
export default function Button({ onClick, children, className = '' }) {
    return (
      <button
        onClick={onClick}
        className={
          'px-3 py-2 rounded focus:outline-none focus:ring ' +
          className
        }
      >
        {children}
      </button>
    );
  }
  