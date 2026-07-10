"use client";

import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

export default function Stars() {
  return (
    <Particles
      id="stars"
      onInit={async (engine: Engine) => {
        await loadSlim(engine);
      }}
      options={{
        fullScreen: {
          enable: false,
        },

        particles: {
          number: {
            value: 40,
          },

          move: {
            enable: true,
            speed: 0.3,
          },

          opacity: {
            value: 0.3,
          },

          size: {
            value: 2,
          },

          color: {
            value: "#3B82F6",
          },
        },
      }}
      className="absolute inset-0 -z-20"
    />
  );
}