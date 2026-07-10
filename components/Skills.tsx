"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-32 px-6"
    >
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <p className="uppercase tracking-[0.35em] text-blue-400 font-semibold">
            Tech Stack
          </p>

          <h2 className="mt-4 text-5xl font-black">
            Technologies I Work With
          </h2>

          <p className="mt-6 text-zinc-400 max-w-2xl mx-auto">
            I enjoy building modern, scalable and responsive
            web applications using technologies across the
            frontend and backend ecosystem.
          </p>
        </motion.div>

        <div className="space-y-12">

          {skills.map((group, index) => (

            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
            >

              <h3 className="text-2xl font-bold mb-8">
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-4">

                {group.items.map((skill) => (

                  <motion.div
                    key={skill}
                    whileHover={{
                      y: -6,
                      scale: 1.06,
                    }}
                    whileTap={{
                      scale: .95,
                    }}
                    className="cursor-default rounded-xl border border-blue-500/20 bg-blue-500/10 px-6 py-3 text-sm font-medium shadow-[0_0_20px_rgba(59,130,246,.08)] transition-all hover:border-blue-500 hover:bg-blue-500/20"
                  >
                    {skill}
                  </motion.div>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}