"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Mensagem = {
  autora: string;
  hora: string;
  bolhas: string[];
  foto: string;
};

const conversas: Mensagem[] = [
  {
    autora: "Letícia ✿",
    hora: "ontem",
    foto: "/assets/avatar-1.jpg",
    bolhas: [
      "Meninaaaa, tô CHOCADA 😱",
      "Comprei pq vi no tiktok e jurava que era enrolação",
      "Em 3 semanas a virilha tá outra. Meu marido perguntou o que eu fiz kkk",
      "Já comprei mais 2 pra minha mãe e minha irmã 💕",
    ],
  },
  {
    autora: "Jé Carvalho",
    hora: "10:42",
    foto: "/assets/avatar-2.avif",
    bolhas: [
      "Oi gente, recebi hoje 🥺",
      "Cheirinho maravilhoso, textura é tipo de creme caro mesmo",
      "Vou testar 30 dias e volto aqui",
    ],
  },
  {
    autora: "Mari ❤",
    hora: "agora",
    foto: "/assets/avatar-3.avif",
    bolhas: [
      "AVISO PRA QUEM TÁ EM DÚVIDA",
      "Faz 60 dias que uso o Aurora Pink",
      "Axila que era escura há ANOS — clareou MESMO",
      "Tô usando vestido sem manga pela primeira vez desde menina 🥹",
    ],
  },
  {
    autora: "Bia Souza",
    hora: "13:21",
    foto: "/assets/avatar-4.avif",
    bolhas: [
      "Comprei pq ganhei no aniversário",
      "Achei que ia ser mais um creme qualquer",
      "Em 2 SEMANAS já vi diferença na parte interna da coxa",
      "Pode confiar viu, não é pegadinha 🥰",
    ],
  },
];

const TYPING_BEFORE = 0.45;
const BUBBLE_GAP = 0.55;

function TypingDots() {
  return (
    <div className="inline-flex items-center gap-1 bg-emerald-100 rounded-2xl rounded-bl-sm px-3 py-2 mb-1 shadow-sm">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-emerald-500/70"
          animate={{ y: [0, -3, 0], opacity: [0.4, 1, 0.4] }}
          transition={{
            duration: 0.9,
            repeat: Infinity,
            delay: i * 0.15,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function ConversaCard({ c, index }: { c: Mensagem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="bg-white rounded-3xl shadow-xl border border-border/40 overflow-hidden hover:shadow-2xl transition-shadow"
    >
      <div className="bg-emerald-600 text-white px-4 py-3 flex items-center gap-3">
        <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-white/30 flex-shrink-0">
          <Image
            src={c.foto}
            alt={c.autora}
            fill
            sizes="40px"
            className="object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-medium text-sm truncate">{c.autora}</p>
          <p className="text-[11px] text-emerald-100">online · {c.hora}</p>
        </div>
      </div>

      <div
        className="px-4 py-4 min-h-[220px]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(244, 114, 182, 0.08) 0px, transparent 40%), radial-gradient(circle at 80% 70%, rgba(244, 114, 182, 0.08) 0px, transparent 40%)",
          backgroundColor: "#f4ecde",
        }}
      >
        <div className="flex flex-col items-start">
          {c.bolhas.map((b, idx) => {
            const baseDelay = TYPING_BEFORE + idx * BUBBLE_GAP;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9, y: 8 }}
                animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{
                  delay: baseDelay,
                  type: "spring",
                  stiffness: 220,
                  damping: 18,
                }}
                className="relative inline-block max-w-[88%] bg-emerald-100 text-zinc-800 text-[13px] leading-snug rounded-2xl rounded-bl-sm px-3.5 py-2 mb-1 shadow-sm"
              >
                {b}
                <span className="ml-1 text-[10px] text-zinc-500 align-baseline">
                  ✓✓
                </span>
              </motion.div>
            );
          })}

          <motion.div
            initial={{ opacity: 0 }}
            animate={
              inView
                ? {
                    opacity: [0, 1, 1, 0],
                  }
                : {}
            }
            transition={{
              duration: 1.2,
              delay: TYPING_BEFORE + c.bolhas.length * BUBBLE_GAP,
              ease: "easeInOut",
            }}
            className="origin-bottom-left"
          >
            <TypingDots />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export function PrintsClientes() {
  return (
    <section className="relative pt-4 md:pt-6 pb-10 md:pb-14 bg-gradient-to-b from-pink-cream/30 via-secondary/30 to-pink-cream/40">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-10 max-w-2xl mx-auto"
        >
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">
            Prints de cliente
          </p>
          <h2 className="font-heading italic text-3xl md:text-5xl text-balance leading-tight">
            Mensagens que recebemos{" "}
            <span className="text-gradient-pink">todos os dias</span>
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Direto do nosso WhatsApp e DM do Instagram — sem montagem.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {conversas.map((c, i) => (
            <ConversaCard key={c.autora} c={c} index={i} />
          ))}
        </div>

        <p className="text-xs text-center text-muted-foreground mt-8 italic">
          *Mensagens reais editadas para preservar a identidade das clientes.
        </p>
      </div>
    </section>
  );
}
