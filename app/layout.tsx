import "./globals.css";
import type { Metadata } from "next";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://timidbdev.vercel.app"),

  title: "Prosper Ebelike | Full Stack Developer",

  description:
    "Frontend & Backend Developer specializing in Next.js, React, Java, Spring Boot and Go.",

  openGraph: {
    title: "Prosper Ebelike",
    description:
      "Frontend & Backend Developer Portfolio",
    url: "https://timidbdev.vercel.app",
    siteName: "Prosper Portfolio",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
  <body>
    <ThemeProvider>
      {children}
    </ThemeProvider>
  </body>
</html>
  );}
