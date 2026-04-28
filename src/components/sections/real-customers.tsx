"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Cliente = {
  src: string;
  nome: string;
  legenda: string;
  tempo: string;
};

const clientes: Cliente[] = [
  {
    src: "/assets/cliente-1.png",
    nome: "Renata",
    legenda: "Tô amando o cheirinho ✨",
    tempo: "30 dias",
  },
  {
    src: "/assets/cliente-2.jpg",
    nome: "Patrícia",
    legenda: "Já comprei mais 2 pra dar de presente",
    tempo: "60 dias",
  },
  {
    src: "/assets/cliente-3.jpg",
    nome: "Mariana",
    legenda: "Em 2 semanas eu já vi diferença",
    tempo: "15 dias",
  },
  {
    src: "/assets/cliente-4.jpg",
    nome: "Júlia",
    legenda: "Pele renovada de verdade 💕",
    tempo: "45 dias",
  },
  {
    src: "/assets/cliente-5.jpg",
    nome: "Bia",
    legenda: "Vai ser parte da minha rotina pra sempre",
    tempo: "90 dias",
  },
  {
    src: "/assets/cliente-6.jpg",
    nome: "Carol",
    legenda: "Recomendo demais 🥰",
    tempo: "30 dias",
  },
];

function CartaoCliente({ c }: { c: Cliente }) {
  return (
    <div className="relative shrink-0 aspect-[9/16] w-56 md:w-64 rounded-3xl overflow-hidden shadow-xl border-2 border-white bg-pink-200 group/card hover:scale-[1.04] transition-transform">
      <Image
        src={c.src}
        alt={`${c.nome} usando Aurora Pink`}
        fill
        sizes="(max-width: 768px) 224px, 256px"
        className="object-cover"
      />
      <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/85 via-black/45 to-transparent text-white">
        <div className="flex items-center justify-between gap-2 mb-1.5">
          <p className="font-medium text-sm">{c.nome}</p>
          <span className="text-[10px] uppercase tracking-widest bg-white/25 backdrop-blur-sm px-2 py-0.5 rounded-full whitespace-nowrap">
            {c.tempo}
          </span>
        </div>
        <p className="text-xs opacity-95 leading-snug">
          &ldquo;{c.legenda}&rdquo;
        </p>
      </div>
    </div>
  );
}

export function RealCustomers() {
  const track = [...clientes, ...clientes];

  return (
    <section className="relative py-10 md:py-14 bg-gradient-to-br from-zinc-950 via-rose-950 to-zinc-950 overflow-hidden text-white">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.5, 0.25] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 -left-32 w-[420px] h-[420px] rounded-full blur-3xl bg-primary/40"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.45, 0.2] }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
          className="absolute top-1/2 -right-32 w-[420px] h-[420px] rounded-full blur-3xl bg-rose-500/40"
        />
      </div>

      <div className="mx-auto max-w-3xl px-4 md:px-8 mb-10 md:mb-14 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-rose-300 font-medium text-xs md:text-sm tracking-[0.25em] uppercase mb-4">
            Faces reais · Resultados reais
          </p>
          <h2 className="font-heading text-3xl md:text-5xl text-balance leading-tight text-white">
            Mulheres que já{" "}
            <span className="text-gradient-pink">mudaram a pele</span> com
            Aurora Pink
          </h2>
          <p className="mt-5 text-sm md:text-base text-white/70 max-w-xl mx-auto leading-relaxed">
            Selecionamos algumas histórias de clientes que toparam mostrar o
            antes/depois e quanto tempo levaram pra ver a diferença.
          </p>
        </motion.div>
      </div>

      <div className="relative group/track">
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />

        <div
          className="flex gap-4 md:gap-5 w-max animate-[customer-scroll_50s_linear_infinite] group-hover/track:[animation-play-state:paused]"
          style={{ paddingLeft: "1rem" }}
        >
          {track.map((c, i) => (
            <CartaoCliente key={i} c={c} />
          ))}
        </div>

        <style>{`
          @keyframes customer-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </div>

      <p className="text-center text-xs text-white/55 mt-8 italic">
        *Identidades preservadas — primeiro nome usado com autorização das
        clientes.
      </p>
    </section>
  );
}
