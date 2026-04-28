"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/50"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-8 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-heading text-xl tracking-[0.18em] text-primary font-medium"
        >
          AURORA <span className="text-foreground">PINK</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a
            href="#produto"
            className="hover:text-foreground transition-colors"
          >
            O produto
          </a>
          <a
            href="#resultados"
            className="hover:text-foreground transition-colors"
          >
            Resultados
          </a>
          <a href="#app" className="hover:text-foreground transition-colors">
            App Glow 360
          </a>
          <a
            href="#pacotes"
            className="hover:text-foreground transition-colors"
          >
            Pacotes
          </a>
        </nav>
        <Button
          nativeButton={false}
          size="sm"
          className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-md"
          render={<a href="#pacotes" />}
        >
          Comprar agora
        </Button>
      </div>
    </motion.header>
  );
}
