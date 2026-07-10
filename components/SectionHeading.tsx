"use client";

import { motion } from "framer-motion";

interface Props {
  badge: string;
  title: string;
  description: string;
}

export default function SectionHeading({
  badge,
  title,
  description,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mx-auto mb-20 max-w-3xl text-center"
    >
      <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm text-blue-300">
        {badge}
      </span>

      <h2 className="mt-8 text-5xl font-black">
        {title}
      </h2>

      <p className="mt-6 text-zinc-400 leading-8">
        {description}
      </p>
    </motion.div>
  );
}