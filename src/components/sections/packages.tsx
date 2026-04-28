"use client";

import Image from "next/image";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PACOTES, precoBRL, descontoPct, type Pacote } from "@/lib/checkouts";
import { Countdown } from "@/components/countdown";

function TiltCard({ p, index }: { p: Pacote; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 220, damping: 22 });
  const sry = useSpring(ry, { stiffness: 220, damping: 22 });
  const transform = useMotionTemplate`perspective(900px) rotateX(${srx}deg) rotateY(${sry}deg)`;

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ry.set(px * 8);
    rx.set(-py * 8);
  };
  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  const desconto = descontoPct(p);
  const economia = p.precoCheio - p.preco;
  const estoquePct = Math.min(100, Math.max(8, (p.estoque / 25) * 100));

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transform }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative rounded-3xl p-6 md:p-7 flex flex-col bg-white shadow-xl border-2 transition-shadow [transform-style:preserve-3d] ${
        p.destaque
          ? "border-primary md:scale-[1.04] shadow-2xl glow-pink"
          : "border-transparent hover:border-primary/40 hover:shadow-2xl"
      }`}
    >
      {p.badge && (
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
          className="absolute -top-3 left-1/2 -translate-x-1/2 z-10"
          style={{ transform: "translateZ(40px)" }}
        >
          <Badge
            className={`rounded-full px-4 py-1 text-[11px] font-bold tracking-wider border-0 shadow-md ${
              p.destaque
                ? "bg-emerald-500 text-white"
                : "bg-primary text-primary-foreground"
            }`}
          >
            {p.destaque ? "★ " : ""}
            {p.badge}
            {p.destaque && (
              <motion.span
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="ml-1"
                aria-hidden
              >
                ★
              </motion.span>
            )}
          </Badge>
        </motion.div>
      )}

      <div className="absolute top-4 right-4 z-10">
        <span
          className="inline-flex items-center justify-center text-[11px] font-bold bg-primary text-primary-foreground rounded-full w-12 h-12 shadow-md"
          style={{ transform: "translateZ(30px)" }}
        >
          -{desconto}%
        </span>
      </div>

      <div className="text-center pb-2 pt-1">
        <h3 className="font-heading text-2xl md:text-[1.7rem] leading-tight">
          {p.titulo}
        </h3>
        {p.copy && (
          <p className="text-xs text-muted-foreground mt-1.5 leading-snug px-2">
            {p.copy}
          </p>
        )}
      </div>

      <div className="relative mx-auto w-full aspect-[4/3] max-w-[260px] mb-3">
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{
            duration: 3.5,
            delay: index * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Image
            src={p.imagem}
            alt={`${p.unidades} pote${p.unidades > 1 ? "s" : ""} de Aurora Pink`}
            fill
            sizes="280px"
            className="object-contain drop-shadow-2xl"
          />
        </motion.div>
      </div>

      <div className="relative text-center mt-1">
        <div className="relative rounded-2xl bg-gradient-to-br from-pink-cream via-secondary/40 to-pink-cream border-2 border-primary/20 p-4 shadow-inner overflow-hidden">
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut",
            }}
            aria-hidden
            className="absolute top-0 -inset-y-2 w-1/3 -skew-x-12 bg-white/40 blur-md"
          />
          <p className="relative text-[11px] uppercase tracking-widest text-muted-foreground">
            De{" "}
            <span className="line-through decoration-rose-500/80 decoration-2">
              {precoBRL(p.precoCheio)}
            </span>{" "}
            por apenas
          </p>
          <motion.p
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.1 + 0.4,
              type: "spring",
              stiffness: 220,
            }}
            className="relative font-heading text-4xl md:text-5xl font-extrabold text-primary mt-1 leading-none"
            style={{
              textShadow: "0 6px 20px rgba(244, 114, 182, 0.35)",
            }}
          >
            {precoBRL(p.preco)}
          </motion.p>
          <p className="relative text-xs text-muted-foreground mt-2">
            ou {p.parcelas}x de{" "}
            <span className="font-bold text-foreground">
              {precoBRL(p.precoParcela)}
            </span>{" "}
            sem juros
          </p>
          <p className="relative text-[11px] text-emerald-700 font-bold mt-1.5 inline-flex items-center gap-1">
            <span aria-hidden>💰</span> Você economiza {precoBRL(economia)}
          </p>
        </div>

        <ul className="text-xs text-foreground/80 mt-4 space-y-1.5 text-left">
          <li className="flex gap-2">
            <span className="text-primary">✓</span>
            <span>
              {p.unidades} Creme{p.unidades > 1 ? "s" : ""} Aurora Pink (1150g
              cada)
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary">✓</span>
            <span>
              <strong className="text-emerald-700">
                Frete GRÁTIS pro Brasil inteiro
              </strong>
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary">✓</span>
            <span>App Glow 360 grátis e vitalício</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary">✓</span>
            <span>Garantia de 30 dias — risco zero</span>
          </li>
        </ul>

        <div className="mt-4 px-1">
          <div className="flex items-center justify-between text-[11px] text-muted-foreground mb-1">
            <span className="font-medium text-rose-600">
              ⚠ Restam {p.estoque} kits em estoque
            </span>
          </div>
          <div className="h-1.5 w-full rounded-full bg-rose-100 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${estoquePct}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: index * 0.1 + 0.5 }}
              className="h-full bg-gradient-to-r from-rose-500 to-primary"
            />
          </div>
        </div>
      </div>

      <Button
        nativeButton={false}
        size="lg"
        className={`mt-5 rounded-full font-bold tracking-wide h-13 ${
          p.destaque
            ? "bg-primary text-primary-foreground hover:bg-primary/90"
            : "bg-rose-500 text-white hover:bg-rose-500/90"
        }`}
        render={
          <a href={p.checkout} target="_blank" rel="noopener noreferrer" />
        }
      >
        🛒 EU QUERO ESSE
      </Button>

      <div className="mt-3 flex items-center justify-center gap-3 text-[10px] text-muted-foreground">
        <span>🔒 Compra segura</span>
        <span>·</span>
        <span>📦 Postagem 24h</span>
      </div>
    </motion.div>
  );
}

export function Packages() {
  return (
    <section
      id="pacotes"
      className="relative py-16 md:py-24 bg-gradient-to-b from-rose-100 via-rose-50 to-rose-100"
    >
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 -left-32 w-[400px] h-[400px] rounded-full blur-3xl bg-primary/15"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{
            duration: 8,
            delay: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full blur-3xl bg-primary/20"
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="relative mb-10 md:mb-12"
        >
          <div className="rounded-3xl bg-gradient-to-r from-primary via-rose-500 to-rose-600 text-white p-5 md:p-7 text-center shadow-2xl overflow-hidden">
            <motion.div
              animate={{ x: ["-100%", "100%"] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
              aria-hidden
              className="absolute top-0 -inset-y-2 w-1/3 -skew-x-12 bg-white/15 blur-md"
            />
            <p className="text-[11px] md:text-xs font-semibold tracking-widest uppercase mb-2 opacity-90">
              ⚡ Promoção relâmpago — termina em
            </p>
            <Countdown size="lg" className="text-white" />
            <p className="text-[11px] md:text-sm mt-3 opacity-95">
              Depois disso, os preços voltam ao valor cheio. Aproveite agora.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12"
        >
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">
            Escolha o seu kit
          </p>
          <h2 className="font-heading italic text-3xl md:text-5xl text-balance leading-tight">
            Quanto mais potes,{" "}
            <span className="text-gradient-pink">maior o resultado</span>
          </h2>
          <p className="mt-4 text-sm text-muted-foreground max-w-xl mx-auto">
            Os ativos do Aurora Pink agem em ciclos de 30 dias. Pra resultado
            completo, recomendamos 90 dias de uso contínuo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-5 items-stretch pt-6">
          {PACOTES.map((p, i) => (
            <TiltCard key={p.id} p={p} index={i} />
          ))}
        </div>

        <div className="mt-10 max-w-3xl mx-auto grid sm:grid-cols-3 gap-3 text-center">
          <div className="rounded-2xl bg-white/70 backdrop-blur-sm border border-border/40 p-3">
            <p className="text-xl">🛡️</p>
            <p className="text-xs font-medium mt-1">Garantia 30 dias</p>
            <p className="text-[10px] text-muted-foreground">
              100% do dinheiro de volta
            </p>
          </div>
          <div className="rounded-2xl bg-white/70 backdrop-blur-sm border border-border/40 p-3">
            <p className="text-xl">🔒</p>
            <p className="text-xs font-medium mt-1">Compra 100% segura</p>
            <p className="text-[10px] text-muted-foreground">
              Coinzz · Pix · Cartão
            </p>
          </div>
          <div className="rounded-2xl bg-white/70 backdrop-blur-sm border border-border/40 p-3">
            <p className="text-xl">📦</p>
            <p className="text-xs font-medium mt-1">Postagem em 24h</p>
            <p className="text-[10px] text-muted-foreground">
              Rastreio por SMS/email
            </p>
          </div>
        </div>

        <p className="text-xs text-center text-muted-foreground mt-6">
          🇧🇷 Atendemos todo o Brasil · 💳 Parcelamento em até 12x sem juros
        </p>
      </div>
    </section>
  );
}
