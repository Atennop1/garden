import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";

import Script from "next/script";

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "atennop",
  description: "atennop's bio and info",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <head>
        <Script id="theme-script" strategy="beforeInteractive">
          {`
            (function() {
              var savedTheme = localStorage.getItem('theme');
              var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              var theme = savedTheme : systemDark ? 'dark' : 'light';
              if (theme === 'dark') document.documentElement.classList.add('dark');
            })()
          `}
        </Script>
      </head>
      <body
          className={`${firaCode.variable} antialiased`}
      >
      {children}
      <SpeedInsights />
      <Analytics />
      </body>
      </html>
  );
}
