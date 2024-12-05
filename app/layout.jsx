import localFont from "next/font/local";
import Header from "../components/Header";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Assignment 7 - LWS XStream",
  description: "Generated by create next app; github.com/muhamash",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-color-bg text-white font-exo `}
      >
        <div className="container mx-auto px-4 py-4">
          <Header/>
          {children}
        </div>
      </body>
    </html>
  );
}
