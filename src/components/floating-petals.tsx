"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

const SHAPES = ["✿", "❀", "✦", "✧", "♡"];

type Petal = {
  id: number;
  shape: string;
  left: number;
  delay: number;
  duration: number;
  size: number;
  drift: number;
  rotate: number;
  opacity: number;
};

export function FloatingPetals({ count = 14 }: { count?: number }) {
  const petals = useMemo<Petal[]>(() => {
    return Array.from({ length: count }).map((_, i) => {
      const seed = (i * 9301 + 49297) % 233280;
      const r = (n: number) => ((seed * (n + 1)) % 1000) / 1000;
      return {
        id: i,
        shape: SHAPES[i % SHAPES.length],
        left: r(1) * 100,
        delay: r(2) * 6,
        duration: 9 + r(3) * 9,
        size: 14 + r(4) * 22,
        drift: -40 + r(5) * 80,
        rotate: r(6) * 360,
        opacity: 0.25 + r(7) * 0.45,
      };
    });
  }, [count]);

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden motion-reduce:hidden"
    >
      {petals.map((p) => (
        <motion.span
          key={p.id}
          initial={{ y: "-10%", x: 0, rotate: 0, opacity: 0 }}
          animate={{
            y: "115%",
            x: p.drift,
            rotate: p.rotate,
            opacity: [0, p.opacity, p.opacity, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 text-primary"
          style={{
            left: `${p.left}%`,
            fontSize: `${p.size}px`,
            filter: "drop-shadow(0 4px 8px rgba(244, 114, 182, 0.35))",
          }}
        >
          {p.shape}
        </motion.span>
      ))}
    </div>
  );
}
