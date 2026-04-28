"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: "⏰",
    titulo: "Lembretes inteligentes",
    desc: "Pra você não esquecer do ritual de 2 minutos.",
  },
  {
    icon: "📸",
    titulo: "Evolução com fotos",
    desc: "Registre antes/depois e veja a transformação.",
  },
  {
    icon: "🏆",
    titulo: "Sistema de pontos e desafios",
    desc: "Gamificação que vicia (no bom sentido) — premiações pra quem mantém consistência.",
  },
  {
    icon: "🎓",
    titulo: "17 aulas exclusivas",
    desc: "Módulo Pele Radiante pra você dominar skincare.",
  },
  {
    icon: "👯",
    titulo: "Comunidade VIP",
    desc: "Mulheres reais se apoiando no processo.",
  },
];

export function AppGlow() {
  return (
    <section
      id="app"
      className="relative py-10 md:py-14 overflow-hidden bg-gradient-to-b from-pink-cream/30 via-secondary/30 to-rose-100/60"
    >
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full blur-3xl bg-primary/10" />
        <div className="absolute bottom-0 -left-32 w-[400px] h-[400px] rounded-full blur-3xl bg-secondary/60" />
      </div>

      <div className="mx-auto max-w-6xl px-4 md:px-8 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative order-2 md:order-1"
        >
          <motion.div
            animate={{ scale: [1, 1.06, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -inset-6 rounded-[2.4rem] bg-gradient-to-br from-primary/30 via-rose-300/20 to-transparent blur-3xl"
          />
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/60 bg-pink-cream"
          >
            <Image
              src="/assets/app-glow.png"
              alt="Mulher segurando celular com o app Glow 360 aberto"
              width={620}
              height={930}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="order-1 md:order-2 space-y-6"
        >
          <Badge className="rounded-full bg-primary text-primary-foreground border-0 px-4 py-1.5">
            🎁 Bônus exclusivo · grátis e vitalício
          </Badge>
          <h2 className="font-heading text-3xl md:text-5xl leading-tight text-balance">
            Conectado ao{" "}
            <span className="text-gradient-pink">App Glow 360</span>
          </h2>
          <p className="text-muted-foreground text-pretty">
            O Aurora Pink vem com o primeiro app de autocuidado gamificado do
            Brasil. <span className="line-through">R$ 47/mês</span>{" "}
            <strong className="text-foreground">
              — grátis pra sempre na sua compra.
            </strong>{" "}
            Disciplina, confiança, consistência e resultado em um só lugar.
          </p>

          <ul className="grid sm:grid-cols-2 gap-4 pt-2">
            {features.map((f, i) => (
              <motion.li
                key={f.titulo}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex gap-3 items-start"
              >
                <span aria-hidden className="text-xl flex-shrink-0 mt-0.5">
                  {f.icon}
                </span>
                <div>
                  <p className="font-semibold text-sm leading-snug">
                    {f.titulo}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                    {f.desc}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>

          <div className="pt-4">
            <Button
              nativeButton={false}
              size="lg"
              className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl glow-pink h-13 px-8 text-base font-semibold tracking-wide"
              render={<a href="#pacotes" />}
            >
              QUERO O AURORA PINK + APP →
            </Button>
            <p className="text-xs text-muted-foreground mt-3">
              ✓ Acesso vitalício · ✓ Atualizações grátis · ✓ Sem mensalidade
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
