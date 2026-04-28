"use client";

import { motion } from "framer-motion";

export function Guarantee() {
  return (
    <section className="pt-4 md:pt-6 pb-10 md:pb-14 bg-gradient-to-b from-pink-cream/40 to-pink-cream/20">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative bg-card border border-primary/20 rounded-3xl p-8 md:p-12 overflow-hidden shadow-xl"
        >
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />

          <div className="absolute top-4 right-4 md:top-6 md:right-6 z-10">
            <div className="relative w-32 h-32 md:w-44 md:h-44">
              <div className="absolute inset-0 rounded-full bg-primary text-primary-foreground flex flex-col items-center justify-center shadow-2xl ring-4 ring-white/50">
                <span className="text-xs md:text-sm font-bold uppercase tracking-widest leading-tight">
                  Garantia
                </span>
                <span className="font-heading text-3xl md:text-5xl font-bold leading-none my-1">
                  30
                </span>
                <span className="text-xs md:text-sm font-bold uppercase tracking-widest">
                  dias
                </span>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-2 rounded-full border-2 border-dashed border-primary/50"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full border border-dashed border-primary/30"
              />
            </div>
          </div>

          <div className="relative max-w-xl pr-0 md:pr-48">
            <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">
              Garantia &ldquo;Pele de Seda&rdquo;
            </p>
            <h2 className="font-heading italic text-3xl md:text-5xl text-balance leading-tight">
              30 dias para testar.{" "}
              <span className="text-gradient-pink">Risco zero.</span>
            </h2>
            <p className="mt-5 text-muted-foreground text-pretty text-base md:text-lg">
              Use o Aurora Pink + App Glow 360 por 30 dias. Se você não sentir a
              pele mais macia e não ver início de clareamento,{" "}
              <strong className="text-foreground">
                devolvemos 100% do seu dinheiro
              </strong>
              . Sem perguntas, sem burocracia.
            </p>
          </div>

          <div className="relative mt-8 pt-6 border-t border-border/50">
            <p className="text-[11px] uppercase tracking-widest text-muted-foreground mb-3 flex items-center gap-2">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-4 h-4 text-emerald-600"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span>Pagamento 100% seguro · ambiente criptografado SSL</span>
            </p>
            <div className="flex items-center gap-2 md:gap-3 flex-wrap">
              <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2 shadow-sm">
                <svg viewBox="0 0 32 32" className="w-5 h-5" aria-label="Pix">
                  <g fill="#32BCAD">
                    <path d="M22.7 17.4l-4.3 4.3a3.4 3.4 0 0 1-4.8 0l-4.3-4.3 1.5-1.5 4.3 4.3a1.3 1.3 0 0 0 1.8 0l4.3-4.3 1.5 1.5z" />
                    <path d="M9.3 14.6l4.3-4.3a3.4 3.4 0 0 1 4.8 0l4.3 4.3-1.5 1.5-4.3-4.3a1.3 1.3 0 0 0-1.8 0L10.8 16l-1.5-1.4z" />
                    <path d="M5.5 14.5l8.6-8.6 1.5 1.5L7 16l-1.5-1.5zM16.5 24.6L25 16l1.5 1.5-8.6 8.6-1.4-1.5z" />
                  </g>
                </svg>
                <span className="text-xs font-bold text-emerald-800">Pix</span>
              </div>
              <div className="inline-flex items-center justify-center bg-[#1A1F71] rounded-lg px-3 py-2 shadow-sm min-w-[58px]">
                <span className="text-white font-bold italic text-sm tracking-wider">
                  VISA
                </span>
              </div>
              <div className="inline-flex items-center gap-1.5 bg-white border border-zinc-200 rounded-lg px-3 py-2 shadow-sm">
                <span className="relative inline-flex items-center w-9 h-5">
                  <span className="absolute left-0 w-5 h-5 rounded-full bg-[#EB001B]" />
                  <span className="absolute right-0 w-5 h-5 rounded-full bg-[#F79E1B] mix-blend-multiply" />
                </span>
                <span className="text-[11px] font-semibold text-zinc-700">
                  Mastercard
                </span>
              </div>
              <div className="inline-flex items-center justify-center bg-zinc-900 rounded-lg px-3 py-2 shadow-sm">
                <span className="text-white font-bold text-sm tracking-tight">
                  elo
                </span>
              </div>
              <div className="inline-flex items-center gap-1.5 bg-white border border-zinc-200 rounded-lg px-3 py-2 shadow-sm">
                <span className="text-[11px] font-bold text-zinc-700 uppercase tracking-wide">
                  12x
                </span>
                <span className="text-[10px] text-muted-foreground">
                  sem juros
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
              {[
                { i: "🔒", t: "SSL", s: "criptografado" },
                { i: "🛡️", t: "Coinzz", s: "compra segura" },
                { i: "📦", t: "24h", s: "postagem" },
                { i: "🔄", t: "30 dias", s: "garantia total" },
              ].map((b) => (
                <div
                  key={b.t}
                  className="rounded-xl bg-white/70 backdrop-blur-sm border border-border/40 p-3 text-center shadow-sm"
                >
                  <div className="text-lg leading-none mb-1">{b.i}</div>
                  <p className="text-[11px] font-semibold leading-tight">
                    {b.t}
                  </p>
                  <p className="text-[10px] text-muted-foreground leading-tight">
                    {b.s}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
