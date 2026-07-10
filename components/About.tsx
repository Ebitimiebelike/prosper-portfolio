"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Code2,
  Briefcase,
  GraduationCap,
} from "lucide-react";

const stats = [
  {
    icon: Briefcase,
    title: "Experience",
    value: "Frontend & Backend Developer",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Lagos, Nigeria",
  },
  {
    icon: GraduationCap,
    title: "Learning",
    value: "Software Engineering",
  },
  {
    icon: Code2,
    title: "Focus",
    value: "Building Modern Web Apps",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 px-6"
    >
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="mb-4 text-blue-400 font-semibold uppercase tracking-[0.3em]">
            About Me
          </p>

          <h2 className="text-4xl md:text-6xl font-black">
            Passion meets
            <span className="text-blue-500"> Purpose.</span>
          </h2>
        </motion.div>

        <div className="grid gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-zinc-300 leading-8 text-lg">

              I'm Prosper Ebelike, a developer passionate about
              creating fast, scalable and visually appealing web
              applications.

            </p>

            <p className="text-zinc-400 leading-8">

              My focus is building responsive interfaces,
              scalable backend systems and solving real-world
              business problems using modern technologies like
              Next.js, React, Java, Go and Node.js.

            </p>

            <p className="text-zinc-400 leading-8">

              I'm constantly learning, improving my craft and
              challenging myself by building projects that push
              my technical abilities while delivering real value.

            </p>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2"
          >

            {stats.map((item, index) => {

              const Icon = item.icon;

              return (

                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * .15,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                  }}
                  className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-[0_0_30px_rgba(59,130,246,.08)]"
                >

                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/20">

                    <Icon
                      className="text-blue-400"
                      size={28}
                    />

                  </div>

                  <p className="text-zinc-500 text-sm">
                    {item.title}
                  </p>

                  <h3 className="mt-2 font-semibold text-lg">
                    {item.value}
                  </h3>

                </motion.div>

              );

            })}

          </motion.div>

        </div>
      </div>
    </section>
  );
}