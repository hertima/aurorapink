"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type Caso = {
  src: string;
  nome: string;
  regiao: string;
  tempo: string;
};

const casos: Caso[] = [
  {
    src: "/assets/ba-3.png",
    nome: "Letícia, 31 anos",
    regiao: "Manchas no rosto",
    tempo: "4 meses",
  },
  {
    src: "/assets/ba-4.png",
    nome: "Marina, 27 anos",
    regiao: "Melasma",
    tempo: "2 meses",
  },
  {
    src: "/assets/ba-2.png",
    nome: "Jé, 34 anos",
    regiao: "Axilas escurecidas",
    tempo: "3 meses",
  },
  {
    src: "/assets/ba-1.png",
    nome: "Camila, 29 anos",
    regiao: "Parte interna da coxa",
    tempo: "4 meses",
  },
];

export function AntesDepois() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const scrollToIndex = useCallback((i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const total = casos.length;
    const safe = ((i % total) + total) % total;
    const card = el.children[safe] as HTMLElement | undefined;
    if (!card) return;
    el.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
    setIndex(safe);
  }, []);

  const next = useCallback(
    () => scrollToIndex(index + 1),
    [index, scrollToIndex],
  );
  const prev = useCallback(
    () => scrollToIndex(index - 1),
    [index, scrollToIndex],
  );

  // Auto-rotate
  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next, paused]);

  // Sync index when user scrolls manually
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const card = el.firstElementChild as HTMLElement | null;
        if (!card) return;
        const cardWidth = card.offsetWidth + 16;
        const i = Math.round(el.scrollLeft / cardWidth);
        setIndex(((i % casos.length) + casos.length) % casos.length);
      });
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      id="resultados"
      className="relative py-10 md:py-14 bg-gradient-to-b from-pink-cream/30 via-secondary/20 to-pink-cream/30 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 -left-40 w-[480px] h-[480px] rounded-full blur-3xl bg-primary/15"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.45, 0.25] }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
          className="absolute bottom-0 -right-40 w-[460px] h-[460px] rounded-full blur-3xl bg-rose-300/40"
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14 max-w-3xl mx-auto"
        >
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-balance leading-tight text-primary">
            Mais de 3.127 mulheres aprovaram o{" "}
            <span className="whitespace-nowrap">Aurora Pink!</span>
          </h2>
          <p className="mt-5 inline-flex items-center gap-2 text-sm md:text-base text-muted-foreground">
            <span className="text-amber-500 text-lg leading-none" aria-hidden>
              ★
            </span>
            <span>
              <strong className="text-foreground">4,8</strong>/5 baseado em mais
              de <strong className="text-foreground">1.200</strong> avaliações
              verificadas
            </span>
          </p>
        </motion.div>

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <button
            type="button"
            onClick={prev}
            aria-label="Anterior"
            className="absolute left-1 md:-left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-12 md:h-12 rounded-full border-2 border-primary bg-white text-primary hover:bg-primary hover:text-white shadow-lg transition-colors flex items-center justify-center"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Próximo"
            className="absolute right-1 md:-right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-12 md:h-12 rounded-full border-2 border-primary bg-white text-primary hover:bg-primary hover:text-white shadow-lg transition-colors flex items-center justify-center"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
          </button>

          <div className="overflow-hidden mx-2 md:mx-12 rounded-3xl">
            <div
              ref={trackRef}
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {casos.map((c, i) => (
                <motion.figure
                  key={c.nome}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="snap-start flex-shrink-0 w-full md:w-[calc(50%-0.5rem)]"
                >
                  <div className="relative aspect-[3/2] rounded-3xl overflow-hidden shadow-xl border-2 border-white bg-pink-cream">
                    <Image
                      src={c.src}
                      alt={`Antes e depois de ${c.nome}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-4 px-1 flex items-center justify-between gap-3 flex-wrap">
                    <div className="text-left">
                      <p className="font-medium text-sm md:text-base">
                        {c.nome}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {c.regiao}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-widest bg-primary/10 text-primary px-2.5 py-1 rounded-full whitespace-nowrap">
                      ⏱ {c.tempo}
                    </span>
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </div>

          <style>{`
            section#resultados [class*="overflow-x-auto"]::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {casos.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollToIndex(i)}
              aria-label={`Ir para caso ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === index
                  ? "w-8 bg-primary"
                  : "w-2 bg-primary/30 hover:bg-primary/50"
              }`}
            />
          ))}
        </div>

        <p className="text-xs text-center text-muted-foreground mt-8 italic max-w-xl mx-auto">
          *Resultados podem variar de pessoa para pessoa. Imagens autênticas,
          identidades preservadas com autorização.
        </p>

        <div className="text-center mt-10">
          <Button
            nativeButton={false}
            size="lg"
            className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl glow-pink h-14 px-8 text-base font-semibold tracking-wide"
            render={<a href="#pacotes" />}
          >
            QUERO ESSE RESULTADO →
          </Button>
        </div>
      </div>
    </section>
  );
}
