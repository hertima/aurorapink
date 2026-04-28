"use client";

import { motion } from "framer-motion";

const ativos = [
  {
    nome: "Niacinamida",
    sigla: "Vitamina B3",
    desc: "Regula a produção de melanina, clareia manchas e uniformiza o tom da pele.",
  },
  {
    nome: "Ácido Hialurônico",
    sigla: "",
    desc: "Hidratação profunda que reconstrói a barreira cutânea e deixa a pele aveludada.",
  },
  {
    nome: "Rosa Mosqueta",
    sigla: "",
    desc: "Estimula a renovação celular e clareamento natural da pele.",
  },
  {
    nome: "Pantenol",
    sigla: "Vitamina B5",
    desc: "Acalma, hidrata e previne irritação em peles sensíveis.",
  },
  {
    nome: "Vitamina C",
    sigla: "Estável",
    desc: "Antioxidante que potencializa o clareamento e devolve o brilho natural.",
  },
];

export function Ingredients() {
  return (
    <section className="relative py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">
            Fórmula premium
          </p>
          <h2 className="font-heading text-3xl md:text-5xl text-balance leading-tight">
            5 ativos que{" "}
            <span className="text-gradient-pink">trabalham juntos</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-pretty max-w-2xl mx-auto">
            Sem ácidos agressivos, sem hidroquinona. Uma sinergia de
            ingredientes seguros que entregam resultado real.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ativos.map((a, i) => (
            <motion.div
              key={a.nome}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative bg-card border border-border/60 rounded-2xl p-6 hover:shadow-xl transition-all overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-primary/10 blur-2xl -translate-y-8 translate-x-8" />
              <div className="relative">
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="font-heading text-2xl text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="h-px flex-1 bg-border" />
                </div>
                <h3 className="font-heading text-xl mb-1">{a.nome}</h3>
                {a.sigla && (
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
                    {a.sigla}
                  </p>
                )}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {a.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
