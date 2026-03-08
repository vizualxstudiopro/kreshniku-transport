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
  title: "Kreshniku Transport | Transport Ndërkombëtar Shqipëri ↔ Angli",
  description: "Transport i sigurt, i shpejtë dhe i besueshëm për pako dhe mallra nga Shqipëria në Angli dhe anasjelltas. Eksperiencë që nga viti 2004.",
  icons: {
    icon: '/logo1.svg', // Kjo e bën logo1.svg të shfaqet si Favicon!
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