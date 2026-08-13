import Image from 'next/image'
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  PackageCheck,
  Phone,
  ShieldCheck,
  ShoppingBag,
  Truck,
} from 'lucide-react'
import ConsultationForm from './components/ConsultationForm'
import Header from './components/Header'
import TrackedLink from './components/TrackedLink'

const whatsappNumber = '5585989351762'

const products = [
  {
    name: 'Creatina Max Titanium 300 g',
    category: 'Creatina',
    price: 'R$ 89,90',
    image: '/images/creatina-max-titanium.png',
    description:
      'Creatina Max Titanium em embalagem de 300 g. Consulte estoque e condições pelo WhatsApp.',
    details: ['Embalagem de 300 g', 'Atendimento on-line'],
  },
  {
    name: 'Creatina Integralmédica 300 g',
    category: 'Creatina',
    price: 'R$ 89,90',
    image: '/images/creatina-integralmedica.png',
    description:
      'Creatina Integralmédica em embalagem de 300 g. Consulte estoque e condições pelo WhatsApp.',
    details: ['Embalagem de 300 g', 'Atendimento on-line'],
  },
  {
    name: 'Caniblend 900 g',
    category: 'Proteína',
    price: 'R$ 99,90',
    image: '/images/caniblend-900g.png',
    description:
      'Blend proteico Caniblend em embalagem de 900 g, disponível em três opções de sabor.',
    details: ['Chocolate, morango e baunilha', 'Embalagem de 900 g'],
  },
]

const benefits = [
  {
    title: 'Orientação comercial',
    description:
      'Compare marcas, tamanhos, sabores e preços antes de decidir.',
    icon: MessageCircle,
  },
  {
    title: 'Entrega grátis',
    description: 'Pedidos entregues sem taxa em Fortaleza e Eusébio.',
    icon: Truck,
  },
  {
    title: 'Atendimento on-line',
    description: 'Consulte disponibilidade e faça seu pedido pelo WhatsApp.',
    icon: ShoppingBag,
  },
]

const steps = [
  {
    title: 'Conte o que procura',
    description: 'Informe produto, sabor, tamanho ou faixa de preço.',
  },
  {
    title: 'Compare as opções',
    description: 'A MITE apresenta as alternativas disponíveis no estoque.',
  },
  {
    title: 'Receba seu pedido',
    description: 'Combine o prazo de entrega em Fortaleza ou Eusébio.',
  },
]

function createWhatsAppUrl(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-mite-dark text-white">
      <a
        href="#conteudo"
        className="sr-only z-[100] rounded bg-mite-green px-4 py-2 font-bold text-black focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Pular para o conteúdo
      </a>

      <Header />

      <main id="conteudo">
        <section
          id="inicio"
          className="relative isolate min-h-[680px] overflow-hidden border-b border-white/10"
          aria-labelledby="titulo-principal"
        >
          <Image
            src="/images/consultoria-bg.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="-z-20 object-cover object-center"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/90 to-black/45" />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_30%,rgba(151,230,34,0.18),transparent_34%)]" />

          <div className="mx-auto grid min-h-[680px] max-w-7xl items-center px-4 py-20 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-mite-green/30 bg-mite-green/10 px-4 py-2 text-sm font-bold text-mite-green">
                <Truck className="h-4 w-4" aria-hidden="true" />
                Entrega grátis em Fortaleza e Eusébio
              </div>

              <h1
                id="titulo-principal"
                className="text-balance text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-7xl"
              >
                Loja de suplementos on-line em Fortaleza e Eusébio
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300 sm:text-xl">
                Creatina, proteínas e outros suplementos com orientação comercial
                gratuita para você comparar opções antes de comprar.
              </p>

              <div className="mt-8 flex flex-wrap gap-3" aria-label="Ofertas em destaque">
                <span className="rounded-xl border border-white/15 bg-black/50 px-4 py-3 text-sm text-zinc-200">
                  Creatinas 300 g por <strong className="text-white">R$ 89,90</strong>
                </span>
                <span className="rounded-xl border border-white/15 bg-black/50 px-4 py-3 text-sm text-zinc-200">
                  Caniblend 900 g por <strong className="text-white">R$ 99,90</strong>
                </span>
              </div>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <TrackedLink
                  href={createWhatsAppUrl(
                    'Olá! Quero conhecer as ofertas da MITE e consultar a disponibilidade.',
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  eventName="generate_lead"
                  eventParams={{
                    method: 'whatsapp',
                    lead_source: 'hero',
                  }}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-mite-green px-7 py-4 font-extrabold text-black transition hover:bg-lime-300"
                >
                  Falar com a MITE
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </TrackedLink>
                <a
                  href="#produtos"
                  className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-black/30 px-7 py-4 font-bold text-white transition hover:border-white/50 hover:bg-white/5"
                >
                  Ver produtos
                </a>
              </div>

              <p className="mt-5 text-xs leading-relaxed text-zinc-400">
                Consulte disponibilidade. A orientação da loja é comercial e não
                substitui avaliação de médico ou nutricionista.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 bg-mite-charcoal py-20" aria-labelledby="vantagens-titulo">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.2em] text-mite-green">
                Atendimento simples
              </p>
              <h2 id="vantagens-titulo" className="text-balance text-3xl font-black sm:text-4xl">
                Compare suplementos sem sair de casa
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {benefits.map((benefit) => {
                const Icon = benefit.icon

                return (
                  <article
                    key={benefit.title}
                    className="rounded-2xl border border-white/10 bg-black/30 p-7"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-mite-green text-black">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-extrabold">{benefit.title}</h3>
                    <p className="mt-3 leading-relaxed text-zinc-400">
                      {benefit.description}
                    </p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section id="produtos" className="py-24" aria-labelledby="produtos-titulo">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-14 max-w-3xl">
              <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.2em] text-mite-green">
                Ofertas atuais
              </p>
              <h2 id="produtos-titulo" className="text-balance text-3xl font-black sm:text-5xl">
                Creatinas e proteína em destaque
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-400">
                Consulte estoque, sabores e outras opções disponíveis diretamente
                com o atendimento da MITE.
              </p>
            </div>

            <div className="grid gap-7 lg:grid-cols-3">
             {products.map((product) => (
  <article
    key={product.name}
    className="group relative isolate flex min-h-[540px] h-full flex-col overflow-hidden rounded-3xl border border-white/15 bg-mite-charcoal shadow-glow"
  >
    {/* Imagem de fundo */}
    <Image
      src={product.image}
      alt=""
      fill
      sizes="(max-width: 1024px) 100vw, 33vw"
      className="-z-20 object-cover object-center transition-transform duration-500 group-hover:scale-105"
    />

    {/* Overlay médio, mais escuro onde fica o texto */}
    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/65 via-black/85 to-black/100" />

    <div className="flex flex-1 flex-col p-7">
      <span className="w-fit rounded-full bg-black/60 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-mite-green backdrop-blur-sm">
        {product.category}
      </span>

      {/* Espaço para a imagem aparecer */}
      <div className="h-36" aria-hidden="true" />

      <h3 className="text-2xl font-black leading-tight text-white">
        {product.name}
      </h3>

      <p className="mt-4 leading-relaxed text-zinc-200">
        {product.description}
      </p>

      <ul className="mt-6 space-y-3 text-sm text-white">
        {product.details.map((detail) => (
          <li key={detail} className="flex items-start gap-2">
            <CheckCircle2
              className="mt-0.5 h-4 w-4 shrink-0 text-mite-green"
              aria-hidden="true"
            />
            {detail}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-8">
        <p className="mb-4 text-3xl font-black text-white">
          {product.price}
        </p>

        <TrackedLink
          href={createWhatsAppUrl(
            `Olá! Quero consultar a disponibilidade de ${product.name}.`,
          )}
          target="_blank"
          rel="noopener noreferrer"
          eventName="select_item"
          eventParams={{
            item_list_name: 'Produtos em destaque',
            currency: 'BRL',
            items: [
              {
                item_name: product.name,
                item_category: product.category,
                price: Number(
                  product.price.replace('R$ ', '').replace(',', '.'),
                ),
              },
            ],
          }}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-mite-green px-5 py-3.5 font-extrabold text-black transition hover:bg-lime-300"
          aria-label={`Consultar ${product.name} pelo WhatsApp`}
        >
          Consultar no WhatsApp
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </TrackedLink>
      </div>
    </div>
  </article>
))}
            </div>

            <p className="mt-6 text-sm text-zinc-500">
              Preços e disponibilidade sujeitos à atualização de estoque.
            </p>
          </div>
        </section>

        <section
          id="entrega"
          className="border-y border-white/10 bg-mite-charcoal py-24"
          aria-labelledby="entrega-titulo"
        >
          <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <div>
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-mite-green text-black">
                <MapPin className="h-7 w-7" aria-hidden="true" />
              </div>
              <h2 id="entrega-titulo" className="text-balance text-3xl font-black sm:text-5xl">
                Entrega grátis em Fortaleza e Eusébio
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-zinc-400">
                A MITE funciona exclusivamente on-line. Você consulta os produtos,
                confirma o pedido pelo WhatsApp e combina o prazo de entrega com o
                atendimento.
              </p>
            </div>

            <ol className="grid gap-5">
              {steps.map((step, index) => (
                <li
                  key={step.title}
                  className="grid grid-cols-[auto_1fr] gap-5 rounded-2xl border border-white/10 bg-black/25 p-6"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-mite-green font-black text-black">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-extrabold">{step.title}</h3>
                    <p className="mt-2 leading-relaxed text-zinc-400">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          id="orientacao"
          className="relative overflow-hidden py-24"
          aria-labelledby="orientacao-titulo"
        >
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(151,230,34,0.16),transparent_34%)]" />
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.2em] text-mite-green">
                Atendimento gratuito
              </p>
              <h2 id="orientacao-titulo" className="text-balance text-3xl font-black sm:text-5xl">
                Precisa comparar produtos antes de escolher?
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-zinc-400">
                Informe o que você procura. O atendimento da MITE mostra marcas,
                tamanhos, sabores, preços e disponibilidade para facilitar sua
                escolha.
              </p>

              <div className="mt-8 rounded-2xl border border-mite-green/20 bg-mite-green/5 p-5">
                <div className="flex items-start gap-3">
                  <ShieldCheck
                    className="mt-0.5 h-5 w-5 shrink-0 text-mite-green"
                    aria-hidden="true"
                  />
                  <p className="text-sm leading-relaxed text-zinc-300">
                    A orientação é comercial. Para indicação individual, dosagem ou
                    avaliação de saúde, procure médico ou nutricionista.
                  </p>
                </div>
              </div>
            </div>

            <ConsultationForm />
          </div>
        </section>

        <section
          id="duvidas"
          className="border-t border-white/10 bg-mite-charcoal py-24"
          aria-labelledby="duvidas-titulo"
        >
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.2em] text-mite-green">
                Perguntas frequentes
              </p>
              <h2 id="duvidas-titulo" className="text-3xl font-black sm:text-4xl">
                Dúvidas sobre pedidos e atendimento
              </h2>
            </div>

            <div className="space-y-4">
              <details className="group rounded-2xl border border-white/10 bg-black/25 p-6">
                <summary className="cursor-pointer list-none pr-8 text-lg font-extrabold">
                  A MITE possui loja física?
                </summary>
                <p className="mt-4 leading-relaxed text-zinc-400">
                  Não. O atendimento e os pedidos são realizados on-line, pelo
                  WhatsApp.
                </p>
              </details>

              <details className="group rounded-2xl border border-white/10 bg-black/25 p-6">
                <summary className="cursor-pointer list-none pr-8 text-lg font-extrabold">
                  Onde a entrega é gratuita?
                </summary>
                <p className="mt-4 leading-relaxed text-zinc-400">
                  A entrega é gratuita em Fortaleza e Eusébio. O prazo é combinado
                  durante o atendimento.
                </p>
              </details>

              <details className="group rounded-2xl border border-white/10 bg-black/25 p-6">
                <summary className="cursor-pointer list-none pr-8 text-lg font-extrabold">
                  A orientação substitui uma consulta nutricional?
                </summary>
                <p className="mt-4 leading-relaxed text-zinc-400">
                  Não. A orientação da MITE é comercial e ajuda a comparar produtos.
                  Indicação individual e dosagem devem ser avaliadas por médico ou
                  nutricionista.
                </p>
              </details>

              <details className="group rounded-2xl border border-white/10 bg-black/25 p-6">
                <summary className="cursor-pointer list-none pr-8 text-lg font-extrabold">
                  Quais sabores do Caniblend estão disponíveis?
                </summary>
                <p className="mt-4 leading-relaxed text-zinc-400">
                  O Caniblend 900 g é oferecido nos sabores chocolate, morango e
                  baunilha, conforme disponibilidade de estoque.
                </p>
              </details>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <Image src="/images/logo.svg" alt="" width={42} height={42} />
              <p className="text-lg font-black">Mite Suplementos</p>
            </div>
            <p className="mt-4 max-w-sm leading-relaxed text-zinc-400">
              Loja on-line de suplementos com entrega grátis em Fortaleza e
              Eusébio.
            </p>
          </div>

          <div>
            <h2 className="font-extrabold text-white">Contato</h2>
            <ul className="mt-4 space-y-3 text-sm text-zinc-400">
              <li>
                <a
                  href="tel:+5585989351762"
                  className="inline-flex items-center gap-2 hover:text-mite-green"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  (85) 98935-1762
                </a>
              </li>
              <li>
                <a
                  href="mailto:mitesuplementos@gmail.com"
                  className="inline-flex items-center gap-2 hover:text-mite-green"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  mitesuplementos@gmail.com
                </a>
              </li>
              <li>
                <TrackedLink
                  href="https://www.instagram.com/mitesuplementos/"
                  target="_blank"
                  rel="noopener noreferrer"
                  eventName="select_content"
                  eventParams={{ content_type: 'social_profile', item_id: 'instagram' }}
                  className="inline-flex items-center gap-2 hover:text-mite-green"
                >
                  <Instagram className="h-4 w-4" aria-hidden="true" />
                  @mitesuplementos
                </TrackedLink>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-extrabold text-white">Horário de atendimento</h2>
            <div className="mt-4 space-y-3 text-sm text-zinc-400">
              <p className="flex items-center gap-2">
                <Clock3 className="h-4 w-4" aria-hidden="true" />
                Segunda a sexta: 08h às 18h
              </p>
              <p className="flex items-center gap-2">
                <Clock3 className="h-4 w-4" aria-hidden="true" />
                Sábado: 08h às 12h
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 px-4 pt-8 text-sm text-zinc-500 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} MITE Suplementos. Atendimento exclusivamente
          on-line.
        </div>

        <TrackedLink
          href={createWhatsAppUrl('Olá! Quero conhecer os produtos da MITE.')}
          target="_blank"
          rel="noopener noreferrer"
          eventName="generate_lead"
          eventParams={{ method: 'whatsapp', lead_source: 'botao_flutuante' }}
          className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-mite-green text-black shadow-2xl transition hover:scale-105 hover:bg-lime-300"
          aria-label="Falar com a MITE pelo WhatsApp"
        >
          <MessageCircle className="h-6 w-6" aria-hidden="true" />
        </TrackedLink>
      </footer>
    </div>
  )
}
