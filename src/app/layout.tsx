import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TBD — Amirdrassil",
  description: "Boss notes and things.",
};

const wowheadScript = `var wowhead_tooltips = {"colorLinks": false, "iconizeLinks": true, "renameLinks": false }`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          id="wowhead"
          dangerouslySetInnerHTML={{ __html: wowheadScript }}
        />
        <Script
          strategy="lazyOnload"
          src="https://wow.zamimg.com/js/tooltips.js"
        />
      </head>
      <body className={`${fontSans.variable} font-sans bg-black text-slate-50`}>
        <div className="container mx-auto max-w-[65rem] px-8 mb-[90px]">
          {children}
        </div>
      </body>
    </html>
  );
}
