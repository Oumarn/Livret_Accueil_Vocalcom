import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Livret d'accueil — Vocalcom",
  description:
    "Tout ce que vous devez savoir pour bien démarrer votre aventure chez Vocalcom.",
  robots: "noindex, nofollow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${openSans.variable} antialiased`}>
      <body className="max-w-[900px] mx-auto w-full bg-white text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
