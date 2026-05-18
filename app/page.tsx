'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import {
  MessageCircle,
  Shield,
  Star,
  CheckCircle,
  Phone,
  Mail,
  Clock,
  Zap,
  Menu,
  X
} from 'lucide-react'

interface FormData {
  name: string
  email: string
  phone: string
  goal: string
  experience: string
}

interface Testimonial {
  name: string
  text: string
  rating: number
  result: string
}

export default function SupplementsLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    goal: '',
    experience: ''
  })

  useEffect(() => {
    const savedData = localStorage.getItem('supplementsFormData')

    if (savedData) {
      setFormData(JSON.parse(savedData))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(
      'supplementsFormData',
      JSON.stringify(formData)
    )
  }, [formData])

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleWhatsAppConsultation = () => {
    const message = `Olá! Gostaria de receber uma consultoria personalizada.

Meus dados:
Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}
Objetivo: ${formData.goal}
Experiência: ${formData.experience}

Aguardo o contato!`

    const whatsappUrl = `https://wa.me/5585999078920?text=${encodeURIComponent(
      message
    )}`

    window.open(whatsappUrl, '_blank')
  }

  const products = [
    {
      name: 'Whey Protein DUX',
      description:
        'Proteína de alta qualidade para ganho de massa muscular',
      price: 'R$ 289,90',
      image:
        'https://duxnutrition.vtexassets.com/arquivos/ids/168691/mouse-hover-0000s-0020-DUX-REBRANDING-WPC-900-G-BANNER-01-R01.png?v=638853441152230000',
      benefits: [
        '21g de proteína por dose',
        'Alta saciedade',
        'Sabores exclusivos'
      ]
    },

    {
      name: 'Creatina 100% Pura DUX',
      description:
        'Aumento de força e performance nos treinos',
      price: 'R$ 99,90',
      image:
        'https://duxnutrition.vtexassets.com/arquivos/ids/167644/BANNER-01-CREATINA-CREAPURE-300-G-R02.png?v=638762748356230000',
      benefits: [
        'Mais força',
        'Recuperação rápida',
        'Pureza garantida'
      ]
    },

    {
      name: 'Multivitamínico Completo DUX',
      description:
        'Suporte nutricional completo para sua saúde',
      price: 'R$ 89,90',
      image:
        'https://duxnutrition.vtexassets.com/arquivos/ids/167651/BANNER-01_MULTI-VITAMINICO_R02.png?v=638762758667230000',
      benefits: [
        '17 vitaminas',
        'Minerais essenciais',
        'Energia natural'
      ]
    },

    {
      name: 'Pré Treino Hardcore Panic',
      description:
        'Energia extrema e foco para treinos intensos',
      price: 'R$ 151,90',
      image:
        'https://images.tcdn.com.br/img/img_prod/755956/panic_pre_treino_uva_300g_adaptogen_2411_1_93bfc274c486045f916aba80e477f1ab.jpeg',
      benefits: [
        'Mais energia',
        'Foco total',
        'Melhor desempenho'
      ]
    },

    {
      name: 'Ômega 3 EPA-DHA Vitafor',
      description:
        'Saúde cardiovascular e suporte cognitivo diário',
      price: 'R$ 139,90',
      image:
        'https://cdn.awsli.com.br/105/105301/arquivos/vitafor-omega3-primo-suplementos.png',
      benefits: [
        'Saúde do coração',
        'Ação anti-inflamatória',
        'Alta concentração'
      ]
    },

    {
      name: 'Colágeno Hidrolisado Essential',
      description:
        'Combate a perda natural dessa proteína após os 30 anos',
      price: 'R$ 269,90',
      image:
        'https://http2.mlstatic.com/D_NQ_NP_872624-MLB108584128803_032026-O.webp',
      benefits: [
        'Saúde da pele',
        'Saúde dos cabelos',
        'Saúde das unhas'
      ]
    }
  ]

  const testimonials: Testimonial[] = [
    {
      name: 'Carlos Silva',
      text:
        'A consultoria mudou completamente meus resultados! Em 3 meses ganhei 8kg de massa muscular.',
      rating: 5,
      result: '+8kg massa muscular'
    },

    {
      name: 'Ana Costa',
      text:
        'Perdi 12kg e me sinto muito mais disposta no dia a dia.',
      rating: 5,
      result: '-12kg peso corporal'
    },

    {
      name: 'Roberto Lima',
      text:
        'O atendimento via WhatsApp é incrível! Sempre recebo respostas rápidas.',
      rating: 5,
      result: 'Melhor performance'
    }
  ]

  return (
    <div className="min-h-screen bg-white">

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            <div className="flex items-center">
              <Image
                src="/images/logo.svg"
                alt="Mite Suplementos"
                width={40}
                height={40}
              />

              <span className="ml-2 text-xl font-bold text-gray-900">
                Mite Suplementos
              </span>
            </div>

            <nav className="hidden md:flex space-x-8">
              <a href="#produtos" className="text-gray-700 hover:text-[#97E622]">
                Produtos
              </a>

              <a href="#consultoria" className="text-gray-700 hover:text-[#97E622]">
                Consultoria
              </a>

              <a href="#depoimentos" className="text-gray-700 hover:text-[#97E622]">
                Depoimentos
              </a>
            </nav>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-black" />
              ) : (
                <Menu className="h-6 w-6 text-black" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section
        className="relative text-white py-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/14119708/pexels-photo-14119708.jpeg')"
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">

          <div>
      <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
  Creatinas a partir de
  <span className="block text-[#97E622]">
    R$ 89,90
  </span>
  Proteínas a partir de
  <span className="block text-[#97E622]">
    R$ 99,90
  </span>
</h1>
           <p className="text-xl mb-8 max-w-xl">
  Oferta especial por tempo limitado. Fale com a MITE no WhatsApp e escolha o suplemento ideal com consultoria gratuita.
</p>
            <div className="flex gap-4 flex-wrap">

              <button
                onClick={() =>
                  document
                    .getElementById('consultoria')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="bg-[#97E622] text-black px-8 py-4 rounded-lg font-semibold"
              >
                Consultoria Gratuita
              </button>

              <button
                onClick={() =>
                  document
                    .getElementById('produtos')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="border border-white px-8 py-4 rounded-lg"
              >
                Ver Produtos
              </button>
            </div>
          </div>

          <div className="relative">
            <img
              src="/images/logomite.jpg"
              alt="Mite"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">

          <div>
            <div className="bg-[#97E622] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="h-8 w-8 text-black" />
            </div>

            <h3 className="text-xl font-semibold text-black mb-2">
              Consultoria Personalizada
            </h3>

            <p className="text-gray-600">
              Atendimento via WhatsApp.
            </p>
          </div>

          <div>
            <div className="bg-[#97E622] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-black" />
            </div>

            <h3 className="text-xl font-semibold text-black mb-2">
              Resultados Rápidos
            </h3>

            <p className="text-gray-600">
              Protocolos eficazes e personalizados.
            </p>
          </div>

          <div>
            <div className="bg-[#97E622] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-black" />
            </div>

            <h3 className="text-xl font-semibold text-black mb-2">
              Qualidade Garantida
            </h3>

            <p className="text-gray-600">
              Produtos premium certificados.
            </p>
          </div>

        </div>
      </section>

      {/* Produtos */}
      <section id="produtos" className="py-20">

        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
               Produtos 
            </h2>

            <p className="text-xl text-gray-600">
              Selecionamos os melhores suplementos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {products.map((product, index) => (
              <div
                key={index}
                className="bg-black rounded-2xl overflow-hidden shadow-lg"
              >

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-52 object-cover"
                />

                <div className="p-6 text-white">

                  <h3 className="text-xl font-bold mb-2">
                    {product.name}
                  </h3>

                  <p className="text-gray-300 mb-4">
                    {product.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {product.benefits.map((benefit, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm"
                      >
                        <CheckCircle className="h-4 w-4 text-[#97E622] mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`https://wa.me/5585999078920?text=${encodeURIComponent(
                      `Olá, quero consultar o produto ${product.name}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="w-full bg-[#97E622] text-black py-3 rounded-lg font-semibold hover:bg-[#7AC81D] transition-colors">
                      A partir de {product.price}
                    </button>
                  </a>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

  {/* Consultoria */}
<section
  id="consultoria"
  className="relative py-24 bg-cover bg-center text-white"
  style={{
    backgroundImage: "url('/images/consultoria-bg.jpg')"
  }}
>
  <div className="absolute inset-0 bg-black/70"></div>

  <div className="relative z-10 max-w-4xl mx-auto px-4">

    <div className="text-center mb-10">
      <h2 className="text-4xl md:text-5xl font-black mb-4">
        Consultoria{" "}
        <span className="text-[#97E622]">
          Gratuita
        </span>
      </h2>

      <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
        Preencha os dados abaixo e receba orientação personalizada
        via WhatsApp.
      </p>
    </div>

    <div className="bg-black/50 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl p-6 md:p-8">

      <form className="space-y-5">

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Nome"
          className="w-full px-4 py-4 bg-transparent border border-white/40 rounded-lg text-white placeholder-gray-300 outline-none focus:border-[#97E622]"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
          className="w-full px-4 py-4 bg-transparent border border-white/40 rounded-lg text-white placeholder-gray-300 outline-none focus:border-[#97E622]"
        />

        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="WhatsApp"
          className="w-full px-4 py-4 bg-transparent border border-white/40 rounded-lg text-white placeholder-gray-300 outline-none focus:border-[#97E622]"
        />

        <textarea
          name="goal"
          value={formData.goal}
          onChange={handleInputChange}
          rows={4}
          placeholder="Seu objetivo"
          className="w-full px-4 py-4 bg-transparent border border-white/40 rounded-lg text-white placeholder-gray-300 outline-none focus:border-[#97E622]"
        />

        <button
          type="button"
          onClick={handleWhatsAppConsultation}
          className="w-full bg-[#97E622] text-black py-4 rounded-lg font-bold hover:bg-[#7AC81D] transition-colors"
        >
          Iniciar Consultoria
        </button>

      </form>
    </div>
  </div>
</section>
      {/* Depoimentos */}
      <section id="depoimentos" className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Depoimentos
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl shadow-lg p-6"
              >

                <div className="flex items-center mb-4">

                  <div className="bg-[#97E622] w-12 h-12 rounded-full flex items-center justify-center text-black font-bold">
                    {testimonial.name.charAt(0)}
                  </div>

                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>

                    <div className="flex">
                      {Array.from({
                        length: testimonial.rating
                      }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>

                </div>

                <p className="text-gray-600 mb-4">
                  "{testimonial.text}"
                </p>

                <span className="text-[#97E622] font-semibold">
                  {testimonial.result}
                </span>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 relative">

        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

          <div>
            <h4 className="font-bold text-white mb-4">
              Mite Suplementos
            </h4>

            <p>
              Suplementação inteligente baseada em evidências científicas.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">
              Contato
            </h4>

            <p className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              (85) 99907-8920
            </p>

            <p className="flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              mitesuplementos@gmail.com
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">
              Horário
            </h4>

            <p className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              Seg-Sex 08:00 - 18:00
            </p>

            <p className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              Sáb 08:00 - 12:00
            </p>
          </div>

        </div>

        <div className="flex justify-center mt-10">
          <div className="bg-white text-black px-6 py-3 rounded-xl flex items-center shadow-lg">
            <Shield className="h-5 w-5 text-[#97E622] mr-2" />

            <span className="font-semibold">
              Compra 100% Segura
            </span>
          </div>
        </div>

        <div className="text-center mt-8 text-gray-500 text-sm">
          © {new Date().getFullYear()} Mite Suplementos.
        </div>

        <a
          href="https://www.instagram.com/mitesupplements?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50"
        >
          <div className="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-1 rounded-full shadow-2xl hover:scale-110 transition-transform">

            <div className="bg-black rounded-full p-3 flex items-center gap-2">

              <img
                src="/images/logo.svg"
                alt="Instagram Mite"
                className="w-8 h-8 rounded-full"
              />

              <span className="text-white font-semibold hidden md:block">
                Instagram
              </span>

            </div>
          </div>
        </a>

      </footer>

    </div>
  )
}
