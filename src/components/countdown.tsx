"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "aurora-pink-offer-end";
const DURATION_MS = 1000 * 60 * 60 * 6; // 6 horas

function getEndTime(): number {
  if (typeof window === "undefined") return Date.now() + DURATION_MS;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored) {
    const n = Number(stored);
    if (!Number.isNaN(n) && n > Date.now()) return n;
  }
  const end = Date.now() + DURATION_MS;
  window.localStorage.setItem(STORAGE_KEY, String(end));
  return end;
}

function format(ms: number) {
  if (ms < 0) ms = 0;
  const totalSec = Math.floor(ms / 1000);
  const h = Math.floor(totalSec / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  const s = totalSec % 60;
  return {
    h: String(h).padStart(2, "0"),
    m: String(m).padStart(2, "0"),
    s: String(s).padStart(2, "0"),
  };
}

export function Countdown({
  size = "md",
  className,
}: {
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const [remaining, setRemaining] = useState<number | null>(null);

  useEffect(() => {
    const end = getEndTime();
    const tick = () => setRemaining(end - Date.now());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const t =
    remaining == null ? { h: "--", m: "--", s: "--" } : format(remaining);

  const cellSize =
    size === "sm"
      ? "min-w-[2rem] px-1.5 py-1 text-base"
      : size === "lg"
        ? "min-w-[3.5rem] px-3 py-2 text-2xl md:text-3xl"
        : "min-w-[2.5rem] px-2 py-1.5 text-lg md:text-xl";

  const labelSize =
    size === "sm"
      ? "text-[9px]"
      : size === "lg"
        ? "text-[11px]"
        : "text-[10px]";

  return (
    <div
      className={`inline-flex items-center gap-1.5 font-medium tabular-nums ${className || ""}`}
    >
      {(
        [
          { v: t.h, l: "horas" },
          { v: t.m, l: "min" },
          { v: t.s, l: "seg" },
        ] as const
      ).map((c, i) => (
        <span key={c.l} className="inline-flex items-center">
          <span className="relative inline-flex flex-col items-center bg-white/15 backdrop-blur-sm border border-white/30 rounded-md">
            <span className={`font-heading font-bold leading-none ${cellSize}`}>
              {c.v}
            </span>
            <span
              className={`uppercase tracking-widest opacity-75 leading-none pb-1 ${labelSize}`}
            >
              {c.l}
            </span>
          </span>
          {i < 2 && <span className="mx-0.5 opacity-60">:</span>}
        </span>
      ))}
    </div>
  );
}
