"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FloatingPetals } from "@/components/floating-petals";
import { Magnetic } from "@/components/magnetic";

export function Hero() {
  return (
    <section className="relative min-h-[560px] md:min-h-[640px] lg:min-h-[720px] overflow-hidden bg-primary text-white">
      <div className="absolute inset-0 -z-0">
        <div className="md:hidden absolute inset-0">
          <Image
            src="/assets/banner-mobile.png"
            alt="Modelo segurando o pote de Aurora Pink"
            fill
            loading="eager"
            fetchPriority="high"
            quality={85}
            sizes="100vw"
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/85 via-40% to-primary/20" />
        </div>
        <div className="hidden md:block absolute inset-0">
          <Image
            src="/assets/banner-desktop.png"
            alt="Modelo segurando o pote de Aurora Pink"
            fill
            loading="eager"
            fetchPriority="high"
            quality={85}
            sizes="100vw"
            className="object-cover object-[right_center]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/70 via-35% to-primary/0 to-65%" />
        </div>
      </div>

      <FloatingPetals count={14} />

      <div className="relative z-10 mx-auto max-w-6xl px-5 md:px-8 py-16 md:py-24 lg:py-28 min-h-[inherit] flex items-end md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6 md:max-w-[58%] text-white"
        >
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading font-bold text-[2.4rem] sm:text-5xl md:text-[3.4rem] lg:text-[4.2rem] leading-[1.05] tracking-tight text-balance text-white"
            style={{ textShadow: "0 2px 24px rgba(0,0,0,0.22)" }}
          >
            Clareie Qualquer Região Do Seu Corpo Com{" "}
            <span className="block mt-1">Aurora Pink</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base md:text-lg text-white/95 max-w-lg pl-4 border-l-[3px] border-white/80"
          >
            O primeiro creme formulado para atacar a{" "}
            <strong className="font-semibold">raiz do problema</strong>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="pt-2"
          >
            <Magnetic>
              <Button
                nativeButton={false}
                size="lg"
                className="rounded-full bg-[oklch(0.55_0.245_5)] hover:bg-[oklch(0.5_0.245_5)] text-white shadow-2xl h-14 px-10 text-sm md:text-base font-semibold tracking-[0.12em] uppercase"
                render={<a href="#pacotes" />}
              >
                Clarear minha pele agora
              </Button>
            </Magnetic>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs md:text-sm text-white/90 pt-2"
          >
            <span>✓ Garantia 30 dias</span>
            <span className="opacity-50">·</span>
            <span>✓ Frete grátis no kit completo</span>
            <span className="opacity-50">·</span>
            <span>✓ Vegano · Cruelty-free</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
