import './globals.css'
import { ReactNode } from 'react'
import Analytics from './components/Analytics' 
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google tag (gtag.js) */}
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
        <Analytics /> {/* <- aqui */}
        {children}
      </body>
    </html>
  )
}
