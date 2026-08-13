'use client'

import { MessageCircle } from 'lucide-react'
import type { FormEvent } from 'react'
import { useState } from 'react'
import { trackEvent } from '../lib/gtag'

export default function ConsultationForm() {
  const [isOpening, setIsOpening] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name') ?? '').trim()
    const interest = String(formData.get('interest') ?? '').trim()
    const details = String(formData.get('details') ?? '').trim()

    if (!name || !interest) return

    const message = [
      'Olá! Quero receber uma orientação comercial da MITE.',
      '',
      `Nome: ${name}`,
      `Produto de interesse: ${interest}`,
      details ? `O que procuro: ${details}` : '',
    ]
      .filter(Boolean)
      .join('\n')

    const whatsappUrl = `https://wa.me/5585989351762?text=${encodeURIComponent(
      message,
    )}`

    trackEvent('generate_lead', {
      method: 'whatsapp',
      lead_source: 'formulario_orientacao',
      interest,
    })

    setIsOpening(true)
    const openedWindow = window.open(whatsappUrl, '_blank')

    if (openedWindow) {
      openedWindow.opener = null
    } else {
      window.location.assign(whatsappUrl)
    }

    window.setTimeout(() => setIsOpening(false), 800)
  }

  return (
    <form
      className="space-y-5 rounded-3xl border border-white/10 bg-black/40 p-6 shadow-2xl backdrop-blur md:p-8"
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-semibold text-white">
          Seu nome
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3.5 text-white placeholder:text-zinc-500 focus:border-mite-green focus:outline-none"
          placeholder="Como podemos chamar você?"
        />
      </div>

      <div>
        <label
          htmlFor="interest"
          className="mb-2 block text-sm font-semibold text-white"
        >
          Produto de interesse
        </label>
        <select
          id="interest"
          name="interest"
          required
          defaultValue=""
          className="w-full rounded-xl border border-white/20 bg-zinc-950 px-4 py-3.5 text-white focus:border-mite-green focus:outline-none"
        >
          <option value="" disabled>
            Selecione uma opção
          </option>
          <option value="Creatina">Creatina</option>
          <option value="Proteína">Proteína</option>
          <option value="Pré-treino">Pré-treino</option>
          <option value="Vitaminas e bem-estar">Vitaminas e bem-estar</option>
          <option value="Outro suplemento">Outro suplemento</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="details"
          className="mb-2 block text-sm font-semibold text-white"
        >
          O que você procura? <span className="font-normal text-zinc-400">(opcional)</span>
        </label>
        <textarea
          id="details"
          name="details"
          rows={4}
          className="w-full resize-y rounded-xl border border-white/20 bg-white/5 px-4 py-3.5 text-white placeholder:text-zinc-500 focus:border-mite-green focus:outline-none"
          placeholder="Conte qual produto, sabor ou faixa de preço você procura."
        />
      </div>

      <button
        type="submit"
        disabled={isOpening}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-mite-green px-6 py-4 font-extrabold text-black transition hover:bg-lime-300 disabled:cursor-wait disabled:opacity-70"
      >
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
        {isOpening ? 'Abrindo WhatsApp…' : 'Receber orientação pelo WhatsApp'}
      </button>

      <p className="text-xs leading-relaxed text-zinc-400">
        Este é um atendimento comercial para comparação e escolha de produtos. Não
        substitui a avaliação individual de médico ou nutricionista.
      </p>
    </form>
  )
}
