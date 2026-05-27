import type { Metadata } from "next";
import "./globals.css"; // <-- ESSA LINHA É A CHAVE

export const metadata: Metadata = {
  title: "Convite para o Grupo",
  description: "Fãs da Mari Fernandez",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}