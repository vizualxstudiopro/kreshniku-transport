import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kreshniku Transport | Transport Pakosh Shqipëri - Angli - Shqipëri",
  description: "Transport profesional dhe i sigurt pakosh e vlerash nga Shqipëria drejt Anglisë dhe anasjelltas. Nisje çdo të enjte nga Shqipëria. Shërbim i shpejtë dhe korrekt.",
  keywords: "transport shqiperi angli, kreshniku transport, dërgesa pakosh ne angli, linja shqiperi angli, kuks londer transport, dërgesa vlerash angli, pako per angli",
  openGraph: {
    title: "Kreshniku Transport - Lidhja juaj e sigurt me Anglinë",
    description: "Transportojmë pakot dhe vlerat tuaja me siguri maksimale. Nisje javore.",
    url: "https://www.kreshnikutransport.com",
    siteName: "Kreshniku Transport",
    images: [
      {
        url: "/logo1.svg", 
        width: 800,
        height: 600,
      },
    ],
    locale: "sq_AL",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="sq" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0b132b] text-white font-sans`}
      >
        {children}
      </body>
    </html>
  );
}