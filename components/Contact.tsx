"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import ContactCard from "./ContactCard";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaLocationDot,
} from "react-icons/fa6";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32"
    >
      {/* Glow */}

      <div className="absolute inset-0 -z-10">

        <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-blue-500/10 blur-[150px]" />

      </div>

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mx-auto max-w-3xl text-center"
        >

          <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">

            Contact

          </span>

          <h2 className="mt-6 text-5xl font-bold">

            Let's Work Together

          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">

            Have a project, internship opportunity or freelance work?

            I'd love to hear from you.

          </p>

        </motion.div>

        <div className="mt-20 grid gap-14 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div

            initial={{
              opacity:0,
              x:-60
            }}

            whileInView={{
              opacity:1,
              x:0
            }}

            viewport={{
              once:true
            }}

            transition={{
              duration:.7
            }}

            className="space-y-6"

          >

            <ContactCard
              icon={FaEnvelope}
              title="Email"
              value="ebelikeebitimi6678@gmail.com"
              href="mailto:ebelikeebitimi6678@gmail.com"
            />

            <ContactCard
              icon={FaGithub}
              title="GitHub"
              value="github.com/Ebitimiebelike"
              href="https://github.com/Ebitimiebelike"
            />

            <ContactCard
              icon={FaLinkedin}
              title="LinkedIn"
              value="Prosper Ebelike"
              href="https://linkedin.com/in/ebitimiebelike-23469836a"
            />

            <ContactCard
              icon={FaLocationDot}
              title="Location"
              value="Lagos, Nigeria"
              href="#"
            />

          </motion.div>

          {/* FORM */}

          <motion.form

            initial={{
              opacity:0,
              x:60
            }}

            whileInView={{
              opacity:1,
              x:0
            }}

            viewport={{
              once:true
            }}

            transition={{
              duration:.7
            }}

            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"

          >

            <div className="grid gap-6">

              <div>

                <label className="mb-2 block text-sm">

                  Full Name

                </label>

                <input
                  type="text"
                  placeholder="Peter Drury"
                  className="w-full rounded-xl border border-white/10 bg-transparent px-5 py-4 outline-none transition focus:border-blue-500"
                />

              </div>

              <div>

                <label className="mb-2 block text-sm">

                  Email

                </label>

                <input
                  type="email"
                  placeholder="timi@email.com"
                  className="w-full rounded-xl border border-white/10 bg-transparent px-5 py-4 outline-none transition focus:border-blue-500"
                />

              </div>

              <div>

                <label className="mb-2 block text-sm">

                  Subject

                </label>

                <input
                  type="text"
                  placeholder="Let's build something..."
                  className="w-full rounded-xl border border-white/10 bg-transparent px-5 py-4 outline-none transition focus:border-blue-500"
                />

              </div>

              <div>

                <label className="mb-2 block text-sm">

                  Message

                </label>

                <textarea
                  rows={6}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-transparent px-5 py-4 outline-none transition focus:border-blue-500"
                />

              </div>

              <motion.button

                whileHover={{
                  scale:1.03
                }}

                whileTap={{
                  scale:.96
                }}

                className="flex items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 font-semibold transition hover:bg-blue-500"

              >

                Send Message

                <Send size={18}/>

              </motion.button>

            </div>

          </motion.form>

        </div>

      </div>

    </section>
  );
}