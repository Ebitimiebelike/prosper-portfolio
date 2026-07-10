"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>

      {loading && (

        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: .8,
            },
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050816]"
        >
          <motion.div
            initial={{ scale: .7 }}
            animate={{
              scale: 1,
            }}
            transition={{
              duration: .6,
            }}
            className="relative"
          >
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "linear",
              }}
              className="absolute -inset-8 rounded-full border border-blue-500/30"
            />

            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "linear",
              }}
              className="absolute -inset-14 rounded-full border border-cyan-400/20"
            />

            <h1 className="bg-gradient-to-r from-white to-blue-400 bg-clip-text text-6xl font-black text-transparent">
              Prosper
            </h1>

            <motion.p
              animate={{
                opacity: [.3, 1, .3],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
              }}
              className="mt-4 text-center text-zinc-400"
            >
              Building modern experiences...
            </motion.p>
          </motion.div>
        </motion.div>

      )}

    </AnimatePresence>
  );
}