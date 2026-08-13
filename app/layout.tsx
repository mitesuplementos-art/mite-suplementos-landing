import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import type { ReactNode } from 'react'
import './globals.css'
import { GA_TRACKING_ID } from './lib/gtag'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const siteUrl = 'https://mitesuplementos.com.br'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Loja de Suplementos em Fortaleza e Eusébio | MITE',
    template: '%s | MITE Suplementos',
  },
  description:
    'Compre creatina, proteínas e outros suplementos com atendimento on-line e entrega grátis em Fortaleza e Eusébio. Fale com a MITE pelo WhatsApp.',
  applicationName: 'MITE Suplementos',
  creator: 'MITE Suplementos',
  publisher: 'MITE Suplementos',
  category: 'shopping',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Loja de Suplementos em Fortaleza e Eusébio | MITE',
    description:
      'Creatina, proteínas e outros suplementos com atendimento on-line e entrega grátis em Fortaleza e Eusébio.',
    url: '/',
    siteName: 'MITE Suplementos',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MITE Suplementos | Fortaleza e Eusébio',
    description:
      'Suplementos com atendimento on-line e entrega grátis em Fortaleza e Eusébio.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/images/logo.svg',
    shortcut: '/images/logo.svg',
  },
}

export const viewport: Viewport = {
  themeColor: '#050505',
  colorScheme: 'dark',
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'OnlineStore',
      '@id': `${siteUrl}/#organization`,
      name: 'MITE Suplementos',
      alternateName: 'MITE',
      url: siteUrl,
      logo: `${siteUrl}/images/logo.svg`,
      image: `${siteUrl}/images/logomite.jpg`,
      description:
        'Loja on-line de suplementos com entrega grátis em Fortaleza e Eusébio.',
      email: 'mitesuplementos@gmail.com',
      telephone: '+5585989351762',
      sameAs: ['https://www.instagram.com/mitesuplementos/'],
      areaServed: [
        {
          '@type': 'City',
          name: 'Fortaleza',
          containedInPlace: {
            '@type': 'State',
            name: 'Ceará',
          },
        },
        {
          '@type': 'City',
          name: 'Eusébio',
          containedInPlace: {
            '@type': 'State',
            name: 'Ceará',
          },
        },
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        telephone: '+5585989351762',
        email: 'mitesuplementos@gmail.com',
        availableLanguage: 'Portuguese',
        areaServed: ['Fortaleza', 'Eusébio'],
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Suplementos',
        itemListElement: [
          { '@type': 'OfferCatalog', name: 'Creatinas' },
          { '@type': 'OfferCatalog', name: 'Proteínas' },
          { '@type': 'OfferCatalog', name: 'Pré-treinos' },
          { '@type': 'OfferCatalog', name: 'Vitaminas e bem-estar' },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'MITE Suplementos',
      alternateName: 'MITE',
      inLanguage: 'pt-BR',
      publisher: {
        '@id': `${siteUrl}/#organization`,
      },
    },
  ],
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="min-h-screen bg-mite-dark font-sans text-white antialiased">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            window.gtag = function(){window.dataLayer.push(arguments);};
            window.gtag('js', new Date());
            window.gtag('config', '${GA_TRACKING_ID}');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
          }}
        />
        {children}
      </body>
    </html>
  )
}
