export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-pink-cream/30">
      <div className="mx-auto max-w-6xl px-4 md:px-8 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <p className="font-heading text-xl tracking-[0.18em] text-primary mb-3">
            AURORA PINK
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Tratamento Glow 360 — creme clareador corporal premium + app de
            autocuidado gamificado.
          </p>
        </div>
        <div>
          <p className="font-medium mb-3 text-sm">Atendimento</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Postagem em até 24h úteis</li>
            <li>Entrega: 5–10 dias úteis</li>
            <li>Frete grátis no kit 3 meses</li>
          </ul>
        </div>
        <div>
          <p className="font-medium mb-3 text-sm">Legal</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Garantia "Pele de Seda" — 30 dias</li>
            <li>Vegano · Cruelty-free</li>
            <li>Sem ácidos agressivos</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/50">
        <p className="mx-auto max-w-6xl px-4 md:px-8 py-6 text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} Aurora Pink. Todos os direitos
          reservados. Resultados podem variar de pessoa para pessoa.
        </p>
      </div>
    </footer>
  );
}
