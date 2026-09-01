import type { Metadata } from "next";
import "./globals.css";

const WHATSAPP_DISPLAY = "(21) 97279-6543";

export const metadata: Metadata = {
  metadataBase: new URL("https://lucialafayete.com.br"),
  title: {
    default: "Lúcia Lafayete — Fisioterapia e Osteopatia | Leblon, Rio de Janeiro",
    template: "%s | Lúcia Lafayete",
  },
  description:
    "Fisioterapia, Osteopatia, Pilates e Reabilitação com Lúcia Lafayete. Atendimento personalizado no Leblon, RJ e a domicílio. Agende pelo WhatsApp.",
  applicationName: "Lúcia Lafayete",
  keywords: [
    "fisioterapia Leblon",
    "osteopatia Leblon",
    "pilates Leblon",
    "fisioterapeuta Leblon RJ",
    "Lúcia Lafayete fisioterapia",
    "reabilitação Leblon",
  ],
  authors: [{ name: "Lúcia Lafayete" }],
  creator: "Lúcia Lafayete",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://lucialafayete.com.br",
    siteName: "Lúcia Lafayete",
    title: "Lúcia Lafayete — Fisioterapia e Osteopatia | Leblon, RJ",
    description:
      "Fisioterapia, Osteopatia e Pilates com Lúcia Lafayete. Atendimento personalizado no Leblon e a domicílio. Agende pelo WhatsApp.",
    images: [
      {
        url: "/images/Lucia.png",
        width: 1080,
        height: 1350,
        alt: "Lúcia Lafayete — Fisioterapeuta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lúcia Lafayete — Fisioterapia e Osteopatia | Leblon, RJ",
    description:
      "Fisioterapia, Osteopatia e Pilates com Lúcia Lafayete. Atendimento personalizado no Leblon e a domicílio.",
    images: ["/images/Lucia.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/images/Lucia-logo.svg",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Lúcia Lafayete Fisioterapia",
  image: "/images/Lucia.png",
  url: "https://lucialafayete.com.br",
  telephone: WHATSAPP_DISPLAY,
  email: "contato@lucialafayete.com.br",
  medicalSpecialty: ["Physiotherapy", "Osteopathic"],
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Ataulfo de Paiva, 1175 - Sala 205",
    addressLocality: "Leblon",
    addressRegion: "RJ",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -22.9843,
    longitude: -43.2269,
  },
  areaServed: "Rio de Janeiro, RJ",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  },
  founder: {
    "@type": "Person",
    name: "Lúcia Lafayete",
  },
  knowsAbout: ["Osteopatia", "Fisioterapia", "Pilates", "Ondas de Choque"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
