"use client";

import { motion } from "framer-motion";
import { ComponentType } from "react";

interface ContactCardProps {
  icon: ComponentType<{
    size?: number;
    className?: string;
  }>;
  title: string;
  value: string;
  href: string;
}

export default function ContactCard({
  icon: Icon,
  title,
  value,
  href,
}: ContactCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.25 }}
    >
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/40 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(59,130,246,.18)]"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white">
          <Icon size={26} />
        </div>

        <div>
          <p className="text-sm text-zinc-400">{title}</p>

          <h4 className="mt-1 font-semibold text-white">
            {value}
          </h4>
        </div>
      </a>
    </motion.div>
  );
}