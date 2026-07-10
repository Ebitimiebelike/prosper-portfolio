"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
   const sections = document.querySelectorAll<HTMLElement>("section[id]");

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      let current = "";

      sections.forEach((section) => {
        const top = section.offsetTop - 120;
        const height = section.clientHeight;

        if (
          window.scrollY >= top &&
          window.scrollY < top + height
        ) {
          current = section.id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-black/60 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <Link
          href="/"
          className="text-3xl font-black"
        >
          Prosper
        </Link>

        <nav className="hidden gap-10 md:flex">

          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative transition

${
active===link.href.replace("#","")
?"text-blue-400"
:"text-zinc-400 hover:text-white"
}`}
            >
              {link.name}

              {active === link.href.replace("#", "") && (
                <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-blue-500" />
              )}
            </Link>
          ))}

        </nav>

       <div className="flex items-center gap-4">
  <ThemeToggle />

  <a
    href="#contact"
    className="rounded-xl bg-blue-600 px-5 py-3 font-semibold transition hover:bg-blue-500"
  >
    Hire Me
  </a>
</div>
      </div>
    </header>
  );
}