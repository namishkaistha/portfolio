'use client'

import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false)

  // Sync with localStorage on initial load
  useEffect(() => {
    const savedMode = localStorage.getItem('displayMode') || 'light'
    const isDark = savedMode === 'dark'
    setDarkMode(isDark)
    document.documentElement.classList.toggle('dark', isDark)
  }, [])

  // Whenever darkMode changes, update both DOM and localStorage
  const toggleTheme = () => {
    const newMode = darkMode ? 'light' : 'dark'
    setDarkMode(!darkMode)
    localStorage.setItem('displayMode', newMode)
    document.documentElement.classList.toggle('dark', newMode === 'dark')
  }

  return (
    <button onClick={toggleTheme} className="text-2xl mt-10">
      {darkMode ? '🌙' : '☀️'}
    </button>
  )
}
