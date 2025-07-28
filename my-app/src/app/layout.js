// src/app/layout.js
import { Rock_Salt, Roboto } from "next/font/google";
import "./globals.css";

// relative imports into your app/components folder:
import ThemeProvider from "./components/providers/ThemeProvider";
import Header from "./components/organisms/Header";

const rock = Rock_Salt({
  variable: "--font-rock-salt",
  subsets: ["latin"],
  weight: ["400"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Namish's Portfolio",
  description: "CS 303 – and for life",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('displayMode');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {
                  // Fallback to light mode if localStorage is not available
                  document.documentElement.classList.remove('dark');
                }
              })();
            `,
          }}
        />
      </head>
      {/* apply your Rock Salt font here */}
      <body className={`${rock.variable} ${roboto.variable}`}>
        {/* wrap everything in your ThemeProvider */}
        <ThemeProvider>
          {/* now you have a Header with nav + theme toggle up top */}
          <Header />
          {/* main app content */}
          <main className="min-h-screen">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
