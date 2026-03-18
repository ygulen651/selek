import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: '--font-outfit',
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: "SELEK TURIZM - Seyahat Acentası",
  description: "SELEK TURIZM ile hayallerinizdeki tatili gerçeğe dönüştürüyoruz. Güvenli ve konforlu seyahatler için yanınızdayız.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${outfit.variable} ${playfair.variable} font-sans`}>{children}</body>
    </html>
  );
}
