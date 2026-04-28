"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export function StickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 24 }}
          className="md:hidden fixed bottom-4 inset-x-4 z-50"
        >
          <Button
            nativeButton={false}
            size="lg"
            className="w-full rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-2xl glow-pink h-14 text-base font-medium"
            render={<a href="#pacotes" />}
          >
            CLAREAR MINHA PELE AGORA →
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
