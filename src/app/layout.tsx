import type { Metadata } from "next";
import { Archivo, Inter, IBM_Plex_Mono } from "next/font/google";
import Nav from "@/app/components/nav";
import Footer from "@/app/components/footer";
import "./globals.css";

const archivo = Archivo({ subsets: ["latin"], weight: ["500", "700", "900"], variable: "--font-display" });
const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: {
    template: 'J Power solutions | %s',
    default: 'J Power solutions',
  },
  description: 'J Power: Sustainable energy for tomorrow',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} ${inter.variable} ${mono.variable} font-body bg-jp-paper antialiased`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
