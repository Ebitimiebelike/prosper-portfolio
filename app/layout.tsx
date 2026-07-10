import "./globals.css";
import type { Metadata } from "next";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata = {
  title: "Prosper Ebelike | Full-Stack Developer",
  description:
    "Frontend & Backend Developer specializing in Next.js, React, Java, Spring Boot, Go, and modern web applications.",
  keywords: [
    "Prosper Ebelike",
    "Frontend Developer",
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Spring Boot",
    "Go",
  ],
  authors: [{ name: "Prosper Ebelike" }],
  creator: "Prosper Ebelike",
  openGraph: {
    title: "Prosper Ebelike Portfolio",
    description: "Modern Full-Stack Developer Portfolio",
    images: ["/images/og-image.png"],
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
