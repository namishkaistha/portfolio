"use client";

import { createContext, useContext, useEffect, useState, useMemo } from "react";
import PropTypes from "prop-types";
import { THEME } from "../../lib/constants";

// Create the theme context
const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(THEME.MODES.LIGHT);
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize theme from localStorage on mount
  useEffect(() => {
    const getInitialTheme = () => {
      try {
        // Check localStorage first
        const savedTheme = localStorage.getItem(THEME.STORAGE_KEY);

        if (savedTheme && Object.values(THEME.MODES).includes(savedTheme)) {
          return savedTheme;
        }

        // Fallback to system preference
        if (typeof window !== "undefined" && window.matchMedia) {
          const prefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)"
          ).matches;
          return prefersDark ? THEME.MODES.DARK : THEME.MODES.LIGHT;
        }

        // Final fallback to light mode
        return THEME.MODES.LIGHT;
      } catch (e) {
        console.warn("Error reading theme from localStorage:", e);
        return THEME.MODES.LIGHT;
      }
    };

    const initialTheme = getInitialTheme();
    setTheme(initialTheme);
    applyThemeToDOM(initialTheme);
    setIsInitialized(true);
  }, []);

  // Apply theme to DOM (centralized DOM manipulation)
  const applyThemeToDOM = (newTheme) => {
    if (typeof document === "undefined") return;

    const root = document.documentElement;

    if (newTheme === THEME.MODES.DARK) {
      root.classList.add(THEME.CSS_CLASS);
    } else {
      root.classList.remove(THEME.CSS_CLASS);
    }
  };

  // Toggle theme function (centralized state management)
  const toggleTheme = () => {
    const newTheme =
      theme === THEME.MODES.DARK ? THEME.MODES.LIGHT : THEME.MODES.DARK;
    setTheme(newTheme);
    try {
      localStorage.setItem(THEME.STORAGE_KEY, newTheme);
    } catch (e) {
      console.warn("Error saving theme to localStorage:", e);
    }
    applyThemeToDOM(newTheme);
  };

  // Set specific theme function
  const setSpecificTheme = (newTheme) => {
    if (!Object.values(THEME.MODES).includes(newTheme)) {
      console.warn(`Invalid theme: ${newTheme}. Using default.`);
      return;
    }
    setTheme(newTheme);
    try {
      localStorage.setItem(THEME.STORAGE_KEY, newTheme);
    } catch (e) {
      console.warn("Error saving theme to localStorage:", e);
    }
    applyThemeToDOM(newTheme);
  };

  const value = useMemo(
    () => ({
      theme,
      isDark: theme === THEME.MODES.DARK,
      isLight: theme === THEME.MODES.LIGHT,
      toggleTheme,
      setTheme: setSpecificTheme,
      isInitialized,
      THEME_MODES: THEME.MODES,
    }),
    [theme, isInitialized]
  );

  if (!isInitialized) {
    return null;
  }

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

// Custom hook for using theme context
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

// Add PropTypes validation
ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Export context for advanced use cases
export { ThemeContext };
