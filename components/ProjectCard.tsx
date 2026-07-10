"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Lock } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demo: string;
  github?: string | null;
  privateRepo?: boolean;
  reverse?: boolean;
}

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  demo,
  github,
  privateRepo = false,
  reverse = false,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={`grid items-center gap-14 lg:grid-cols-2 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Screenshot */}

      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
        className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_0_40px_rgba(59,130,246,.08)]"
      >
        <Image
          src={image}
          alt={title}
          width={900}
          height={600}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </motion.div>

      {/* Content */}

      <div className="space-y-6">
        <p className="text-blue-400 font-semibold uppercase tracking-widest">
          Featured Project
        </p>

        <h2 className="text-4xl font-black">{title}</h2>

        <p className="leading-8 text-zinc-400">
          {description}
        </p>

        {/* Tech */}

        <div className="flex flex-wrap gap-3">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}

        <div className="flex flex-wrap gap-4 pt-2">
          <a
            href={demo}
            target="_blank"
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500"
          >
            <ExternalLink size={18} />
            Live Demo
          </a>

          {github && (
            <a
              href={github}
              target="_blank"
              className="flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 transition hover:border-blue-500"
            >
              <FaGithub size={18} />
              GitHub
            </a>
          )}

          {privateRepo && (
            <div className="flex items-center gap-2 rounded-xl border border-yellow-500/30 bg-yellow-500/10 px-6 py-3 text-yellow-300">
              <Lock size={18} />
              Private Repository
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}