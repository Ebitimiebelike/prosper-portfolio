"use client";

export default function AnimatedGrid() {
  return (
    <>
      <div className="fixed inset-0 -z-50 bg-[#050816]" />

      <div
        className="fixed inset-0 -z-40 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)
          `,
          backgroundSize: "45px 45px",
        }}
      />

      <div className="fixed left-0 top-0 -z-30 h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-[180px]" />

      <div className="fixed right-0 bottom-0 -z-30 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[180px]" />
    </>
  );
}