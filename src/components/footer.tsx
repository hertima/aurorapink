export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-pink-cream/40">
      <div className="mx-auto max-w-6xl px-4 md:px-8 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <p className="font-heading text-2xl tracking-[0.2em] text-primary font-semibold mb-3">
            AURORA PINK
          </p>
          <p className="text-sm text-foreground/85 leading-relaxed">
            Tratamento Glow 360 — creme clareador corporal premium + app de
            autocuidado gamificado.
          </p>
        </div>
        <div>
          <p className="font-semibold mb-4 text-sm uppercase tracking-wider text-foreground">
            Atendimento
          </p>
          <ul className="space-y-2.5 text-sm text-foreground/85">
            <li>Postagem em até 24h úteis</li>
            <li>Entrega: 5–10 dias úteis</li>
            <li>Frete grátis no kit 3 meses</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-4 text-sm uppercase tracking-wider text-foreground">
            Legal
          </p>
          <ul className="space-y-2.5 text-sm text-foreground/85">
            <li>Garantia &ldquo;Pele de Seda&rdquo; — 30 dias</li>
            <li>Vegano · Cruelty-free</li>
            <li>Sem ácidos agressivos</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 bg-pink-cream/60">
        <p className="mx-auto max-w-6xl px-4 md:px-8 py-6 text-xs text-foreground/70 text-center">
          © {new Date().getFullYear()} Aurora Pink. Todos os direitos
          reservados. Resultados podem variar de pessoa para pessoa.
        </p>
      </div>
    </footer>
  );
}
