"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

type FlipUnitProps = {
  value: number;
};

/** One split-flap card (e.g. "05"). Top half mechanically flips down to reveal a new value. */
export function FlipUnit({ value }: FlipUnitProps) {
  const [prevValue, setPrevValue] = useState(value);

  useEffect(() => {
    if (value === prevValue) return;
    const id = setTimeout(() => setPrevValue(value), 380);
    return () => clearTimeout(id);
  }, [value, prevValue]);

  const current = pad(value);
  const previous = pad(prevValue);

  return (
    <div className="flip-card">
      <div className="flip-half flip-half-top flip-half-back">
        <span>{current}</span>
      </div>
      <div className="flip-half flip-half-bottom">
        <span>{current}</span>
      </div>
      {previous !== current && (
        <motion.div
          key={current}
          className="flip-half flip-half-top flip-half-front"
          initial={{ rotateX: 0 }}
          animate={{ rotateX: -90 }}
          transition={{ duration: 0.38, ease: [0.45, 0, 0.55, 1] }}
        >
          <span>{previous}</span>
        </motion.div>
      )}
    </div>
  );
}
