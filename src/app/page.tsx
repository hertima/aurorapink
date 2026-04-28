import { TopBar } from "@/components/top-bar";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyCTA } from "@/components/sticky-cta";
import { ScrollProgress } from "@/components/scroll-progress";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { LogoMarquee } from "@/components/marquee";
import { Hero } from "@/components/sections/hero";
import { Pain } from "@/components/sections/pain";
import { Product } from "@/components/sections/product";
import { AntesDepois } from "@/components/sections/antes-depois";
import { RealCustomers } from "@/components/sections/real-customers";
import { PrintsClientes } from "@/components/sections/prints-clientes";
import { AppGlow } from "@/components/sections/app-glow";
import { Packages } from "@/components/sections/packages";
import { Guarantee } from "@/components/sections/guarantee";
import { Faq } from "@/components/sections/faq";
import { FinalCTA } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <TopBar />
      <Header />
      <main className="flex-1">
        <Hero />
        <LogoMarquee />
        <Pain />
        <Product />
        <AppGlow />
        <Packages />
        <RealCustomers />
        <AntesDepois />
        <PrintsClientes />
        <Guarantee />
        <Faq />
        <FinalCTA />
      </main>
      <Footer />
      <StickyCTA />
      <WhatsAppButton />
    </>
  );
}
