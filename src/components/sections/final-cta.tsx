"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="py-10 md:py-14">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl bg-gradient-to-br from-primary via-rose-500 to-rose-600 p-10 md:p-16 text-white text-center overflow-hidden shadow-2xl"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-white/10 blur-3xl"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-white/10 blur-3xl"
          />
          <motion.div
            animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,white_0%,transparent_60%)] opacity-40"
            aria-hidden
          />

          <div className="relative">
            <p className="text-white/80 font-medium text-sm tracking-widest uppercase mb-3">
              É o seu momento
            </p>
            <h2 className="font-heading italic text-3xl md:text-5xl text-balance leading-tight">
              Hoje é o dia que você decide se cuidar 💕
            </h2>
            <p className="mt-5 text-white/90 text-pretty max-w-xl mx-auto text-base md:text-lg">
              Em 30 dias você pode estar com a pele que sempre quis. Garantia
              total — se não amar, devolvemos seu dinheiro.
            </p>
            <div className="mt-8 max-w-md mx-auto">
              <motion.div
                animate={{ scale: [1, 1.04, 1] }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Button
                  nativeButton={false}
                  size="lg"
                  className="w-full rounded-full bg-white text-primary hover:bg-white/95 h-14 px-6 text-base font-semibold tracking-wide shadow-2xl inline-flex items-center justify-center gap-3"
                  render={<a href="#pacotes" />}
                >
                  <span>CLAREAR MINHA PELE AGORA</span>
                  <span aria-hidden>→</span>
                </Button>
              </motion.div>
            </div>
            <p className="mt-5 text-xs text-white/70">
              🛡️ Garantia 30 dias · 🚚 Frete grátis no kit 3 meses · 📱 App Glow
              360 grátis
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
