"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const perguntas = [
  {
    q: "Qual pacote devo escolher?",
    a: "Recomendamos o pacote de 3 unidades para o tratamento completo (3 meses) e melhor resultado. Para experimentar, o de 1 unidade é o ponto de partida ideal.",
  },
  {
    q: "Tem alguma contra-indicação?",
    a: "Não. A fórmula é segura para todos os tipos de pele, incluindo peles sensíveis. Em caso de gestação ou amamentação, consulte seu médico.",
  },
  {
    q: "A composição é natural? É seguro?",
    a: "Sim. Aurora Pink é vegano, cruelty-free, sem ácidos agressivos e sem hidroquinona. Todos os ativos são clinicamente seguros.",
  },
  {
    q: "O produto é vegano e cruelty-free?",
    a: "Sim! Não testamos em animais e nenhum ingrediente da fórmula é de origem animal.",
  },
  {
    q: "Contém algo que pode manchar ainda mais a pele?",
    a: "Não. Pelo contrário — a fórmula foi desenvolvida especificamente para clarear de forma segura, sem risco de hipocromia ou manchas reativas.",
  },
  {
    q: "Como devo usar?",
    a: "Aplique uma camada fina nas áreas desejadas após o banho, 1 a 2 vezes ao dia. Massageie até completa absorção.",
  },
  {
    q: "Funciona para qualquer tipo de pele e tom?",
    a: "Sim! A formulação atua regulando a melanina sem clarear demais — funciona em peles claras, morenas e negras.",
  },
  {
    q: "Em quanto tempo verei resultado?",
    a: "Em 7 dias a pele já fica mais macia. Os primeiros sinais de clareamento aparecem em 15 dias e o resultado é nítido em 30 dias.",
  },
  {
    q: "Um pote dura quanto tempo?",
    a: "Um pote de 1150g rende em média 30 dias de tratamento usado 1–2 vezes ao dia.",
  },
  {
    q: "Qual o prazo de entrega?",
    a: "Postagem em até 24h úteis após confirmação do pagamento. Entrega entre 5 e 10 dias úteis (varia por região).",
  },
  {
    q: "Tem garantia de resultado?",
    a: "Sim. 30 dias de garantia 'Pele de Seda'. Se não amar, devolvemos 100% do seu dinheiro — sem perguntas.",
  },
  {
    q: "O produto é regularizado na Anvisa?",
    a: "Sim. Aurora Pink é registrado e fabricado dentro de todos os padrões exigidos pela Anvisa.",
  },
];

export function Faq() {
  return (
    <section className="py-10 md:py-14 bg-gradient-to-b from-pink-cream/40 to-pink-cream/20">
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">
            Dúvidas
          </p>
          <h2 className="font-heading italic text-3xl md:text-5xl text-balance leading-tight">
            Dúvidas <span className="text-gradient-pink">frequentes</span>
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Veja as principais dúvidas de nossas clientes sobre o Aurora Pink
          </p>
        </motion.div>

        <Accordion className="space-y-3">
          {perguntas.map((p, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-primary text-primary-foreground rounded-full data-[panel-open]:rounded-3xl px-6 py-1 transition-all border-0 shadow-sm hover:shadow-md"
            >
              <AccordionTrigger className="text-left hover:no-underline font-medium py-4 text-primary-foreground hover:text-primary-foreground [&>svg]:text-white">
                {p.q}
              </AccordionTrigger>
              <AccordionContent className="text-primary-foreground/90 leading-relaxed pb-5 pt-1 text-sm">
                {p.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
