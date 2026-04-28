"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    tempo: "7 dias",
    titulo: "Pele macia e hidratada",
    desc: "Textura aveludada perceptível. Hidratação profunda já trabalhando na barreira cutânea.",
  },
  {
    tempo: "15 dias",
    titulo: "Primeiros sinais de clareamento",
    desc: "A niacinamida começa a regular a melanina. Você vê o tom mais uniforme.",
  },
  {
    tempo: "30 dias",
    titulo: "Clareamento perceptível",
    desc: "Tom uniforme, manchas visivelmente mais claras. É aqui que a maioria começa a contar pras amigas.",
  },
  {
    tempo: "60 a 90 dias",
    titulo: "Transformação completa",
    desc: "Resultado pleno + manutenção. Pele uniforme, macia, e a confiança de volta.",
  },
];

export function Results() {
  return (
    <section
      id="resultados"
      className="relative py-12 md:py-16 bg-gradient-to-b from-background via-pink-cream/40 to-background"
    >
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">
            Sua jornada
          </p>
          <h2 className="font-heading text-3xl md:text-5xl text-balance leading-tight">
            Resultados que você{" "}
            <span className="text-gradient-pink">consegue ver</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-pretty max-w-2xl mx-auto">
            Cada etapa do tratamento entrega algo concreto. Sem promessa vazia.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary/20 to-transparent md:-translate-x-1/2" />

          <div className="space-y-10">
            {timeline.map((t, i) => (
              <motion.div
                key={t.tempo}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex md:items-center gap-6 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-background -translate-x-1/2 mt-2 md:mt-0" />
                <div className="md:w-1/2 pl-12 md:pl-0 md:px-8">
                  <div className="bg-card border border-border/60 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                    <span className="inline-block bg-secondary text-secondary-foreground text-xs font-medium px-3 py-1 rounded-full mb-3">
                      {t.tempo}
                    </span>
                    <h3 className="font-heading text-xl mb-2">{t.titulo}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t.desc}
                    </p>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>

        <p className="text-xs text-center text-muted-foreground mt-10 italic">
          *Resultados podem variar de pessoa para pessoa.
        </p>
      </div>
    </section>
  );
}
