"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Mail,
  ArrowRight,
} from "lucide-react";
import Counter from "./Counter";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { useState } from "react";
import ResumeModal from "./ResumeModal";

const tech = [
  {
    name: "Next.js",
    className: "top-6 left-10",
  },
  {
    name: "React",
    className: "top-24 -left-10",
  },
  {
    name: "Go",
    className: "bottom-24 -left-6",
  },
  {
    name: "Java",
    className: "bottom-8 left-20",
  },
  {
    name: "TypeScript",
    className: "top-16 -right-8",
  },
  {
    name: "Spring Boot",
    className: "bottom-12 -right-12",
  },
];

export default function Hero() {

    const [open, setOpen] = useState(false);

  return (
    <section className="relative overflow-hidden">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-20 top-40 h-[350px] w-[350px] rounded-full bg-blue-600/20 blur-[120px]" />

        <div className="absolute right-10 bottom-20 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[120px]" />

      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center justify-between gap-20 px-6 pt-32 lg:flex-row">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          className="max-w-2xl"
        >

          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">

            Full-Stack Developer

          </span>

          <h1 className="mt-8 text-4xl
md:text-5xl text-5xl font-black leading-tight md:text-5xl
md:text-6xl
lg:text-7xl">

            Full-Stack Developer crafting

            <span className="text-blue-500">

              {" "}fast, scalable &
beautiful{" "}

            </span>

            digital products.

          </h1>

          <p className="mt-8 text-xl leading-9 text-zinc-400">

            Hi, I'm Prosper Ebelike.

            I build scalable, responsive and user-focused
            applications using Next.js, React, Java and Go.

          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <a
              href="#projects"
              className="rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-500"
            >
              View Projects
            </a>

           <button
  onClick={() => setOpen(true)}
  className="flex items-center gap-2 rounded-xl border border-white/20 px-8 py-4 transition hover:border-blue-500"
>
  Resume
  <ArrowRight size={18} />
</button>

          </div>

          <div className="mt-10 flex gap-6">

            <a href="https://github.com/Ebitimiebelike" target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} />
            </a>

            <a href="https://linkedin.com/in/ebitimiebelike-23469836a" target="_blank" rel="noopener noreferrer">

              <FaLinkedin size={24} />

            </a>

            <a href="mailto:ebelikeebitimi6678@gmail.com">

              <Mail size={24} />
            </a>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div

          initial={{
            opacity:0,
            scale:.8
          }}

          animate={{
            opacity:1,
            scale:1
          }}

          transition={{
            duration:1
          }}

          className="relative"

        >

          <motion.div

            animate={{
              y:[0,-10,0]
            }}

            transition={{
              repeat:Infinity,
              duration:4
            }}

            className="relative"

          >

            <div className="absolute inset-0 rounded-full bg-blue-500 blur-[100px] opacity-30"/>

            <div className="relative w-[280px]
h-[280px]

md:w-[380px]
md:h-[380px]

lg:w-[430px]
lg:h-[430px] overflow-hidden rounded-full border-4 border-blue-500 shadow-[0_0_60px_rgba(59,130,246,.45)]">

              <Image

                src="/images/profile.png"

                alt="Prosper"

                fill

                className="object-cover"

              />

            </div>

            {

tech.map((item)=>(

<motion.div

key={item.name}

animate={{

y:[0,-8,0]

}}

transition={{

repeat:Infinity,

duration:3+Math.random()

}}

className={`absolute ${item.className} rounded-full border border-white/10 bg-black/60 px-5 py-2 backdrop-blur-xl`}

>

{item.name}

</motion.div>

))

}

          </motion.div>

        </motion.div>

      </div>

      <div className="mt-16 grid grid-cols-3 gap-10">

<Counter end={4} label="Featured Projects" />
<Counter end={2} label="Years Learning" />
<Counter end={15} label="Technologies" />
</div>
    <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-400">
  Press
  <kbd className="rounded bg-zinc-800 px-2 py-1 text-xs">Ctrl</kbd>
  +
  <kbd className="rounded bg-zinc-800 px-2 py-1 text-xs">K</kbd>
  for quick navigation
</div>

<ResumeModal
  open={open}
  onClose={() => setOpen(false)}
/>
    </section>

  );

}