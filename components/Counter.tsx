"use client";

import CountUp from "react-countup";

interface Props {
  end: number;
  label: string;
}

export default function Counter({
  end,
  label,
}: Props) {
  return (
    <div className="text-center">

      <h2 className="text-4xl font-black text-blue-400">

        <CountUp
          end={end}
          duration={2}
        />

        +

      </h2>

      <p className="mt-2 text-zinc-400">

        {label}

      </p>

    </div>
  );
}