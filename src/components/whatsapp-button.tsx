"use client";

import { motion } from "framer-motion";
import { WHATSAPP } from "@/lib/checkouts";

export function WhatsAppButton() {
  return (
    <motion.a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 220, damping: 16 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 text-white shadow-[0_8px_28px_-6px_rgba(16,185,129,0.6)] hover:bg-emerald-600 transition-colors"
    >
      <span
        className="absolute inset-0 rounded-full bg-emerald-500 opacity-60 animate-ping"
        aria-hidden
      />
      <svg
        viewBox="0 0 32 32"
        className="relative w-7 h-7"
        fill="currentColor"
        aria-hidden
      >
        <path d="M16.003 3C9.376 3 4 8.376 4 15.003c0 2.114.553 4.18 1.602 5.999L4 28l7.215-1.564a11.93 11.93 0 0 0 4.788 1.005h.005C22.635 27.441 28 22.064 28 15.438 28 8.812 22.62 3 16.003 3zm0 21.844h-.004a9.97 9.97 0 0 1-5.07-1.388l-.364-.215-4.281.928.913-4.171-.237-.385a9.973 9.973 0 0 1-1.527-5.31c0-5.508 4.485-9.993 10.003-9.993 2.673 0 5.184 1.04 7.073 2.928a9.927 9.927 0 0 1 2.928 7.072c0 5.514-4.487 9.998-10.004 9.534zm5.49-7.485c-.301-.151-1.785-.881-2.062-.982-.276-.101-.477-.151-.679.151s-.778.982-.954 1.184c-.176.201-.352.226-.654.075-.301-.151-1.273-.469-2.426-1.495-.897-.798-1.502-1.785-1.679-2.087-.176-.301-.019-.464.132-.615.135-.135.301-.352.452-.528.151-.176.201-.301.301-.503.101-.201.05-.378-.025-.528-.075-.151-.679-1.638-.93-2.243-.245-.589-.494-.509-.679-.519l-.578-.011a1.116 1.116 0 0 0-.81.378c-.276.301-1.054 1.03-1.054 2.514s1.078 2.917 1.229 3.119c.151.201 2.122 3.244 5.14 4.553.718.31 1.279.495 1.716.633.721.229 1.378.197 1.897.119.578-.086 1.785-.729 2.037-1.434.251-.704.251-1.308.176-1.434-.075-.126-.276-.201-.578-.352z" />
      </svg>
    </motion.a>
  );
}
