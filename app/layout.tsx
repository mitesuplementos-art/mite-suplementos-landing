import './globals.css'
import { ReactNode } from 'react'
import Analytics from './components/Analytics'

export const metadata = {
  title: 'Mite Suplementos | Creatina, Whey e Consultoria em Fortaleza',
  description:
    'Suplementos em Fortaleza com orientação personalizada. Creatina, whey protein e consultoria para hipertrofia e emagrecimento.',
  keywords: [
    'suplementos fortaleza',
    'creatina',
    'whey protein',
    'emagrecimento',
    'hipertrofia',
    'loja de suplementos'
  ],
  authors: [{ name: 'Mite Suplementos' }],
  openGraph: {
    title: 'Mite Suplementos | Suplementação Inteligente',
    description:
      'Creatina, whey e consultoria personalizada em Fortaleza.',
    url: 'https://www.mitesuplementos.com.br',
    siteName: 'Mite Suplementos',
    type: 'website'
  }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google tag */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-9NBVCE5J5Y"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9NBVCE5J5Y');
            `,
          }}
        />
      </head>

      <body>
        <Analytics />
        {children}
      </body>
    </html>
  )
}
