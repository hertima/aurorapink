import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { MotionProvider } from "@/components/motion-provider";
import { MetaPixel } from "@/components/meta-pixel";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Aurora Pink — Clareie qualquer região do seu corpo em até 30 dias",
    template: "%s | Aurora Pink",
  },
  description:
    "O primeiro creme clareador corporal formulado para atacar a raiz do problema. Vegano, cruelty-free e com app Glow 360 de acompanhamento gratuito.",
  applicationName: "Aurora Pink",
  generator: "Next.js",
  keywords: [
    "creme clareador",
    "clareador corporal",
    "Aurora Pink",
    "clarear axilas",
    "clarear virilha",
    "clarear pele",
    "Glow 360",
    "cosmético vegano",
    "cruelty-free",
  ],
  authors: [{ name: "Aurora Pink" }],
  creator: "Aurora Pink",
  publisher: "Aurora Pink",
  category: "beauty",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Aurora Pink — Tratamento Glow 360",
    description:
      "Creme clareador corporal premium + App Glow 360 vitalício. Garantia de 30 dias.",
    url: "/",
    siteName: "Aurora Pink",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/assets/banner-desktop.png",
        width: 1200,
        height: 630,
        alt: "Aurora Pink — Creme clareador corporal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aurora Pink — Tratamento Glow 360",
    description:
      "Creme clareador corporal premium + App Glow 360 vitalício. Garantia de 30 dias.",
    images: ["/assets/banner-desktop.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fff5f7" },
    { media: "(prefers-color-scheme: dark)", color: "#1a0810" },
  ],
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col grain">
        <MetaPixel />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
