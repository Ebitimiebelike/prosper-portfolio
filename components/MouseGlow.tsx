"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function MouseGlow() {
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  const x = useSpring(mouseX, {
    stiffness: 60,
    damping: 25,
  });

  const y = useSpring(mouseY, {
    stiffness: 60,
    damping: 25,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 200);
      mouseY.set(e.clientY - 200);
    };

    window.addEventListener("mousemove", move);

    return () =>
      window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      style={{
        left: x,
        top: y,
      }}
      className="pointer-events-none fixed z-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[130px]"
    />
  );
}