const ITEMS = [
  "Zero Irritação",
  "100% Natural",
  "Clareia a Pele",
  "Niacinamida",
  "Ácido Hialurônico",
  "Rosa Mosqueta",
  "Pantenol",
  "Vegano",
  "Cruelty-Free",
];

export function LogoMarquee() {
  const sequence = [...ITEMS, ...ITEMS, ...ITEMS];
  return (
    <div className="relative overflow-hidden bg-primary text-primary-foreground py-3 border-y border-white/20">
      <div className="flex gap-8 animate-[marquee_36s_linear_infinite] whitespace-nowrap will-change-transform">
        {sequence.map((item, i) => (
          <span
            key={i}
            className="font-medium text-sm md:text-base tracking-wide flex items-center gap-8"
          >
            <span aria-hidden className="text-base opacity-90">
              ✦
            </span>
            {item}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}
