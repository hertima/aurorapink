export type Pacote = {
  id: "1u" | "2u" | "3u";
  unidades: number;
  titulo: string;
  subtitulo: string;
  badge?: string;
  destaque?: boolean;
  precoCheio: number;
  preco: number;
  parcelas: number;
  precoParcela: number;
  freteGratis?: boolean;
  imagem: string;
  estoque: number;
  copy?: string;
  checkout: string;
};

export function descontoPct(p: { precoCheio: number; preco: number }) {
  return Math.round(((p.precoCheio - p.preco) / p.precoCheio) * 100);
}

const fmt = (v: number) =>
  v.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

export function precoBRL(v: number) {
  return `R$ ${fmt(v)}`;
}

export const PACOTES: Pacote[] = [
  {
    id: "1u",
    unidades: 1,
    titulo: "1 Aurora Pink",
    subtitulo: "Para experimentar",
    precoCheio: 247,
    preco: 177.97,
    parcelas: 12,
    precoParcela: 14.83,
    imagem: "/assets/pote-1u.png",
    estoque: 17,
    freteGratis: true,
    copy: "Pra quem quer testar antes de mergulhar de cabeça.",
    checkout: "https://app.coinzz.com.br/checkout/1-unidade-3z6oc-0",
  },
  {
    id: "2u",
    unidades: 2,
    titulo: "2 Aurora Pink",
    subtitulo: "Tratamento intensivo",
    badge: "Mais escolhido",
    precoCheio: 494,
    preco: 237.97,
    parcelas: 12,
    precoParcela: 19.83,
    imagem: "/assets/pote-2u.png",
    estoque: 9,
    freteGratis: true,
    copy: "60 dias de uso contínuo — onde a magia começa de verdade.",
    checkout: "https://app.coinzz.com.br/checkout/2-unidades-jyym9-0",
  },
  {
    id: "3u",
    unidades: 3,
    titulo: "3 Aurora Pink",
    subtitulo: "Tratamento completo",
    badge: "MELHOR OFERTA",
    destaque: true,
    precoCheio: 741,
    preco: 299.97,
    parcelas: 12,
    precoParcela: 24.99,
    freteGratis: true,
    imagem: "/assets/pote-3u.png",
    estoque: 4,
    copy: "Resultado pleno em 90 dias + frete grátis pro Brasil inteiro.",
    checkout: "https://app.coinzz.com.br/checkout/3-unidades-gx1ws-0",
  },
];

export const CTA_PADRAO = PACOTES[2].checkout;

const WHATSAPP_PHONE = "5564996275059";
const WHATSAPP_MESSAGE =
  "Oi! 💕 Vim do site Aurora Pink ✨ e quero saber mais sobre o Tratamento Glow 360 🌸";
export const WHATSAPP = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
