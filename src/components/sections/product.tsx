"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const acontece = [
  {
    titulo: "REGULA",
    desc: "o ciclo de pigmentação desregulado (causa hormonal).",
  },
  {
    titulo: "CLAREIA",
    desc: "de forma uniforme, segura e progressiva.",
  },
  {
    titulo: "REDIRECIONA",
    desc: "os ativos como um GPS para os 4D do problema.",
  },
  {
    titulo: "POTENCIALIZA",
    desc: "a absorção em 200% com o momento exato de aplicação.",
  },
  {
    titulo: "PROTEGE",
    desc: "pelos sensíveis com protocolo zero irritação.",
  },
  {
    titulo: "QUEBRA",
    desc: "o ciclo de fixação dos tratamentos de 7 dias.",
  },
  {
    titulo: "ECONOMIZA",
    desc: "milhares de reais em tratamentos dermatológicos.",
  },
  {
    titulo: "DEVOLVE",
    desc: "a liberdade de vestir o que quiser sem planejamento mental.",
  },
];

export function Product() {
  return (
    <section
      id="produto"
      className="relative py-10 md:py-14 bg-gradient-to-br from-primary via-rose-500 to-rose-600 text-white overflow-hidden"
    >
      <div className="absolute inset-0 -z-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 md:px-8 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-3xl bg-white/15 blur-2xl" />
          <div className="relative aspect-square rounded-3xl overflow-hidden bg-white/20 backdrop-blur-sm border border-white/40 shadow-2xl">
            <Image
              src="/assets/produto.png"
              alt="Pote Aurora Pink"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <h2 className="font-heading italic text-3xl md:text-5xl leading-tight text-balance">
            O que acontece quando você usa o{" "}
            <span className="underline decoration-white/60 underline-offset-4">
              Aurora Pink
            </span>
            :
          </h2>

          <ul className="grid sm:grid-cols-1 gap-2.5 pt-2">
            {acontece.map((b) => (
              <li
                key={b.titulo}
                className="flex gap-3 text-sm md:text-[0.95rem] leading-relaxed"
              >
                <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-white text-primary inline-flex items-center justify-center text-xs font-bold">
                  ✓
                </span>
                <span>
                  <strong className="font-semibold">{b.titulo}</strong>{" "}
                  <span className="text-white/90">{b.desc}</span>
                </span>
              </li>
            ))}
          </ul>

          <div className="pt-4">
            <Button
              nativeButton={false}
              size="lg"
              className="rounded-full bg-white text-primary hover:bg-white/95 h-14 px-8 text-base font-semibold tracking-wide shadow-xl"
              render={<a href="#pacotes" />}
            >
              CLAREAR MINHA PELE AGORA →
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
