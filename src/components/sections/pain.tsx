"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const beneficios = [
  {
    titulo: "Clareia manchas e uniformiza o tom da pele",
    desc: "Ação da Niacinamida e Vitamina C, que devolvem o brilho natural e suavizam imperfeições.",
  },
  {
    titulo: "Mantém a pele profundamente hidratada e macia",
    desc: "Graças ao Ácido Hialurônico e Pantenol, que fortalecem a barreira cutânea.",
  },
  {
    titulo: "Estimula a regeneração celular e previne o envelhecimento precoce",
    desc: "Com Extrato de Rosa Mosqueta, rico em ácidos graxos e antioxidantes.",
  },
  {
    titulo: "Cria uma camada protetora e toque aveludado",
    desc: "Combinação de Glicerina, Cera de Abelha e álcoois graxos que protegem contra o ressecamento.",
  },
];

function CheckIcon() {
  return (
    <span
      aria-hidden
      className="relative flex-shrink-0 mt-0.5 inline-flex items-center justify-center w-7 h-7 rounded-full border-2 border-primary text-primary"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </span>
  );
}

export function Pain() {
  return (
    <section className="relative py-10 md:py-14 bg-gradient-to-b from-pink-cream/30 via-secondary/20 to-pink-cream/30">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/3 -right-32 w-[420px] h-[420px] rounded-full blur-3xl bg-primary/10" />
      </div>

      <div className="mx-auto max-w-6xl px-4 md:px-8 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="space-y-7"
        >
          <h2 className="font-heading text-3xl md:text-5xl leading-tight text-balance text-foreground">
            Benefícios <span className="text-gradient-pink">Principais:</span>
          </h2>

          <ul className="space-y-6">
            {beneficios.map((b, i) => (
              <motion.li
                key={b.titulo}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-4"
              >
                <CheckIcon />
                <div className="space-y-1.5">
                  <p className="font-semibold text-foreground leading-snug">
                    {b.titulo}
                  </p>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-transparent blur-2xl" />
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/60 bg-pink-cream"
          >
            <Image
              src="/assets/beneficios.png"
              alt="Mulher com toalha na cabeça segurando o pote Aurora Pink"
              width={520}
              height={680}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
