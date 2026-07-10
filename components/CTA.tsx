"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[150px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .7 }}
        viewport={{ once: true }}
        className="mx-auto max-w-6xl rounded-[40px] border border-white/10 bg-white/5 p-12 backdrop-blur-xl shadow-[0_0_60px_rgba(59,130,246,.12)]"
      >
        <div className="flex flex-col items-center text-center">

          <span className="mb-5 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm text-blue-400">
            Let's Build Something Amazing
          </span>

          <h2 className="max-w-3xl text-4xl font-bold md:text-6xl">
            Have an idea?

            <span className="block text-blue-500">
              Let's bring it to life.
            </span>
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
            Whether it's a business website, a full-stack application,
            or a scalable backend API, I'd love to collaborate and
            help transform your vision into reality.
          </p>

          <div className="mt-12 flex flex-wrap gap-5">

            <Link
              href="#contact"
              className="group flex items-center gap-3 rounded-xl bg-blue-600 px-8 py-4 font-semibold transition-all hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,.4)]"
            >
              Get In Touch

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="#projects"
              className="rounded-xl border border-white/10 px-8 py-4 transition hover:border-blue-500"
            >
              View Projects
            </Link>

          </div>

        </div>
      </motion.div>
    </section>
  );
}