import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Mite Suplementos",
  description: "Landing Page da Mite Suplementos - Energia, Performance e Saúde",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
