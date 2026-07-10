"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  Download,
  FileText,
  CheckCircle2,
} from "lucide-react";

interface ResumeModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ResumeModal({
  open,
  onClose,
}: ResumeModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[9998] bg-black/70 backdrop-blur-sm"
          />

          {/* Modal */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              y: 30,
            }}
            transition={{ duration: .25 }}
            className="fixed left-1/2 top-1/2 z-[9999] w-[92%] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-white/10 bg-zinc-950/95 p-8 shadow-[0_0_70px_rgba(59,130,246,.18)] backdrop-blur-2xl"
          >
            <button
              onClick={onClose}
              className="absolute right-5 top-5 text-zinc-400 hover:text-white"
            >
              <X />
            </button>

            <div className="mb-6 flex items-center gap-3">

              <div className="rounded-2xl bg-blue-500/20 p-3">

                <FileText className="text-blue-400" />

              </div>

              <div>

                <h2 className="text-2xl font-bold">

                  Resume

                </h2>

                <p className="text-sm text-zinc-400">

                  Latest Update • July 2026

                </p>

              </div>

            </div>

            <div className="space-y-3">

              {[
                "Frontend & Backend Developer",
                "Next.js",
                "Java",
                "Spring Boot",
                "Go",
                "TypeScript",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={18}
                    className="text-blue-400"
                  />

                  <span>{item}</span>

                </div>
              ))}

            </div>

            <a
              href="/resume/Prosper-Ebelike-Resume.pdf"
              download
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-semibold transition hover:bg-blue-500"
            >
              <Download size={18} />

              Download Resume

            </a>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}