// src/app/layout.js
import { Rock_Salt } from "next/font/google"
import "./globals.css"

// relative imports into your app/components folder:
import ThemeProvider  from './components/providers/ThemeProvider'
import Header          from './components/organisms/Header'

const rock = Rock_Salt({
  variable: "--font-rock-salt",
  subsets: ["latin"],
  weight: ["400"],
})

export const metadata = {
  title: "Namish's Portfolio",
  description: "CS 303 – and for life",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* apply your Rock Salt font here */}
      <body className={rock.className}>
        {/* wrap everything in your ThemeProvider */}
        <ThemeProvider>
          {/* now you have a Header with nav + theme toggle up top */}
          <Header />
          {/* main app content */}
          <main className="min-h-screen">
            {children}
          </main>
          </ThemeProvider>
      </body>
    </html>
  )
}
