export function TopBar() {
  return (
    <div className="bg-primary text-primary-foreground text-xs sm:text-sm font-medium py-2 text-center px-4">
      <span className="inline-flex items-center gap-2">
        <span aria-hidden>🚚</span>
        <span className="tracking-wide">
          FRETE GRÁTIS em todos os pedidos · Garantia de 30 dias · Postagem em
          24h
        </span>
      </span>
    </div>
  );
}
