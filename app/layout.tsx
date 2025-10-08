import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
