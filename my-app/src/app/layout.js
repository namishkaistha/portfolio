import { Rock_Salt } from "next/font/google";
import "./globals.css";

const rock = Rock_Salt({
  variable: "--font-rock-salt",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Namish's Portfolio",
  description: "CS 303 -- and for life ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rock.className}>
        {children}
        </body>
    </html>
  );
}
