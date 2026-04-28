"use client";

import { motion } from "framer-motion";
import { Counter } from "@/components/counter";

const depoimentos = [
  {
    nome: "Bruna Silva",
    iniciais: "BS",
    texto:
      "Depois de 1 término, minha autoestima já estava baixa. A virilha tinha as axilas escuras que me impediam de usar regata. Com 2 semanas de Aurora, a pele ficou lisa. Hoje uso o que quero e me sinto desejada de novo.",
    cor: "from-rose-200 to-pink-200",
  },
  {
    nome: "Ana Beatriz",
    iniciais: "AB",
    texto:
      "As manchas na minha virilha escureciam muito ao longo dos anos. Achava que era só assédio, mas minha filha insistiu pra eu testar o Aurora Pink. Hoje sou cliente pra prova e eu acho ela. Me virei muito mais confiante.",
    cor: "from-pink-200 to-rose-300",
  },
  {
    nome: "Júlia Costa",
    iniciais: "JC",
    texto:
      "Minha endocrina avisou que o ovário policístico ia mexer com minha pele. Tinha dermatologista cheia e o que sugeriu sempre custava 6h. Aurora Pink mudou. Em 4 semanas já vejo resultado.",
    cor: "from-rose-300 to-pink-200",
  },
];

function StarRow({ delay = 0 }: { delay?: number }) {
  return (
    <span
      className="text-amber-500 inline-flex gap-0.5"
      aria-label="5 estrelas"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, scale: 0.4, rotate: -20 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: delay + i * 0.08,
            type: "spring",
            stiffness: 280,
            damping: 14,
          }}
          aria-hidden
        >
          ★
        </motion.span>
      ))}
    </span>
  );
}

export function Testimonials() {
  return (
    <section className="relative py-12 md:py-16 bg-gradient-to-b from-background via-pink-cream/40 to-background">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-14 max-w-2xl mx-auto"
        >
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">
            Mais de <Counter to={3127} className="font-bold tabular-nums" />{" "}
            mulheres aprovaram
          </p>
          <h2 className="font-heading italic text-3xl md:text-5xl text-balance leading-tight">
            Veja o que nossas clientes{" "}
            <span className="text-gradient-pink">dizem</span>
          </h2>
          <div className="mt-5 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <StarRow delay={0.2} />
            <span>
              <Counter
                to={4.8}
                format={(v) => v.toFixed(1).replace(".", ",")}
                className="font-bold text-foreground"
              />
              /5 baseado em mais de{" "}
              <Counter to={1200} className="font-semibold tabular-nums" />{" "}
              avaliações verificadas
            </span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {depoimentos.map((d, i) => (
            <motion.div
              key={d.nome}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="relative bg-card border border-border/60 rounded-3xl p-6 md:p-7 shadow-sm hover:shadow-xl transition-shadow"
            >
              <motion.div
                className={`absolute -top-3 -right-3 w-16 h-16 rounded-full bg-gradient-to-br ${d.cor} opacity-50 blur-xl`}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 4,
                  delay: i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="relative flex items-center gap-3 mb-4">
                <motion.div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${d.cor} flex items-center justify-center font-heading text-lg text-foreground/80 shadow-inner`}
                  whileHover={{ rotate: 8, scale: 1.06 }}
                  aria-hidden
                >
                  {d.iniciais}
                </motion.div>
                <div>
                  <p className="font-medium text-sm">{d.nome}</p>
                  <StarRow delay={i * 0.12 + 0.2} />
                </div>
              </div>
              <p className="relative text-sm leading-relaxed text-foreground/90 italic">
                &ldquo;{d.texto}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
