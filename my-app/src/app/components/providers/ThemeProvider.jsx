'use client'

import { useEffect } from 'react'

export default function ThemeProvider({ children }) {
  useEffect(() => {
    const savedMode = localStorage.getItem('displayMode') || 'light'
    const root = document.documentElement
    if (savedMode === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [])

  return <>{children}</>
}
