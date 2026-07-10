"use client";

import { ArrowUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {

    const onScroll = () => {

      setVisible(window.scrollY > 500);

    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);

  }, []);

  return (

    <AnimatePresence>

      {visible && (

        <motion.button
          initial={{
            opacity: 0,
            scale: .5,
            y: 20,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: .5,
            y: 20,
          }}
          whileHover={{
            scale: 1.1,
            rotate: -10,
          }}
          whileTap={{
            scale: .9,
          }}
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="fixed bottom-8 right-8 z-50 rounded-full bg-blue-600 p-4 shadow-[0_0_40px_rgba(59,130,246,.45)] transition hover:bg-blue-500"
        >

          <ArrowUp />

        </motion.button>

      )}

    </AnimatePresence>

  );
}