"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  ArrowUpRight,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const socials = [
  {
    icon: FaGithub,
    href: "https://github.com/Ebitimiebelike",
  },

  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/ebitimiebelike-23469836a",
  },

  {
    icon: Mail,
    href: "mailto:ebelikeebitimi6678@gmail.com",
  },
];

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/10">

      {/* Glow */}

      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-14 lg:grid-cols-3">

          {/* Brand */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >

            <h2 className="text-4xl font-black">

              Prosper.

            </h2>

            <p className="mt-6 max-w-sm leading-8 text-zinc-400">

              FullStack Developer passionate about
              building scalable, responsive and modern web
              applications.

            </p>

          </motion.div>

          {/* Navigation */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: .15 }}
            viewport={{ once: true }}
          >

            <h3 className="mb-6 text-lg font-semibold">

              Navigation

            </h3>

            <div className="space-y-4">

              <Link href="#about" className="block text-zinc-400 hover:text-blue-400">

                About

              </Link>

              <Link href="#skills" className="block text-zinc-400 hover:text-blue-400">

                Skills

              </Link>

              <Link href="#projects" className="block text-zinc-400 hover:text-blue-400">

                Projects

              </Link>

              <Link href="#contact" className="block text-zinc-400 hover:text-blue-400">

                Contact

              </Link>

            </div>

          </motion.div>

          {/* Social */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: .25 }}
            viewport={{ once: true }}
          >

            <h3 className="mb-6 text-lg font-semibold">

              Connect

            </h3>

            <div className="flex gap-5">

              {socials.map((item) => {

                const Icon = item.icon;

                return (

                  <motion.a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    whileHover={{
                      y: -6,
                    }}
                    className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl transition hover:border-blue-500 hover:bg-blue-500"
                  >

                    <Icon size={22} />

                  </motion.a>

                );

              })}

            </div>

            <a
              href="mailto:ebelikeebitimi6678@gmail.com"
              className="mt-10 inline-flex items-center gap-2 text-blue-400 hover:text-blue-300"
            >

              Let's Talk

              <ArrowUpRight size={18} />

            </a>

          </motion.div>

        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-zinc-500">

          © {new Date().getFullYear()} Prosper Ebelike.
          Crafted with Next.js & Tailwind CSS.

        </div>

      </div>

    </footer>
  );
}