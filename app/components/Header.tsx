'use client'

import Image from 'next/image'
import { Menu, MessageCircle, X } from 'lucide-react'
import { useState } from 'react'
import { trackEvent } from '../lib/gtag'

const navigation = [
  { href: '#produtos', label: 'Produtos' },
  { href: '#entrega', label: 'Entrega' },
  { href: '#orientacao', label: 'Orientação' },
  { href: '#duvidas', label: 'Dúvidas' },
]

const whatsappUrl =
  'https://wa.me/5585989351762?text=Ol%C3%A1%21%20Quero%20conhecer%20os%20produtos%20da%20MITE.'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const trackWhatsApp = () => {
    trackEvent('generate_lead', {
      method: 'whatsapp',
      lead_source: 'cabecalho',
    })
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-mite-dark/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#inicio"
          className="flex items-center gap-3 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
          aria-label="MITE Suplementos — início"
        >
          <Image
            src="/images/logo.svg"
            alt=""
            width={44}
            height={44}
            priority
          />
          <span className="text-lg font-extrabold tracking-tight text-white">
            MITE Suplementos
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Principal">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-zinc-300 transition hover:text-mite-green"
            >
              {item.label}
            </a>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackWhatsApp}
            className="inline-flex items-center gap-2 rounded-full bg-mite-green px-5 py-3 text-sm font-bold text-black transition hover:bg-lime-300"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Falar no WhatsApp
          </a>
        </nav>

        <button
          type="button"
          className="rounded-lg p-2 text-white md:hidden"
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
          aria-controls="menu-mobile"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <nav
          id="menu-mobile"
          className="border-t border-white/10 bg-mite-dark px-4 py-5 md:hidden"
          aria-label="Menu para celular"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 font-medium text-zinc-200 hover:bg-white/5 hover:text-mite-green"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackWhatsApp()
                setIsMenuOpen(false)
              }}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-mite-green px-5 py-3 font-bold text-black"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Falar no WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
