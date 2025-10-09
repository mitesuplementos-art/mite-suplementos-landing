'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { MessageCircle, Shield, Users, Star, CheckCircle, Phone, Mail, Clock, Zap, ArrowRight, Menu, X } from 'lucide-react'

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
    localStorage.setItem('supplementsFormData', JSON.stringify(formData))
  }, [formData])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
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
    
    const whatsappUrl = `https://wa.me/5585989372995?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const products = [
    {
      name: "Whey Protein Premium",
      description: "Proteína de alta qualidade para ganho de massa muscular",
      image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400&h=300&fit=crop",
      benefits: ["21g de proteína por dose", "Alta Saciedade", "Sabores Exclusivos"]
    },
    {
      name: "Creatina Creapure",
      description: "Aumento de força e performance nos treinos",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      benefits: ["Mais força", "Recuperação rápida", "Pureza garantida"]
    },
    {
      name: "Multivitamínico Completo",
      description: "Suporte nutricional completo para sua saúde",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      benefits: ["17 vitaminas", "Minerais essenciais", "Energia natural"]
    }
  ]

  const testimonials: Testimonial[] = [
    {
      name: "Carlos Silva",
      text: "A consultoria mudou completamente meus resultados! Em 3 meses ganhei 8kg de massa muscular com a suplementação personalizada.",
      rating: 5,
      result: "+8kg massa muscular"
    },
    {
      name: "Ana Costa",
      text: "Finalmente encontrei uma orientação profissional. Perdi 12kg e me sinto muito mais disposta no dia a dia.",
      rating: 5,
      result: "-12kg peso corporal"
    },
    {
      name: "Roberto Lima",
      text: "O atendimento via WhatsApp é incrível! Sempre que tenho dúvidas, recebo respostas rápidas e precisas.",
      rating: 5,
      result: "Melhor performance"
    }
  ]

  const articles = [
    {
      title: "Como Escolher o Whey Protein Ideal",
      excerpt: "Descubra os critérios essenciais para selecionar a proteína que vai potencializar seus resultados.",
      readTime: "5 min"
    },
    {
      title: "Creatina: Mitos e Verdades",
      excerpt: "Desmistificamos as principais dúvidas sobre um dos suplementos mais estudados do mundo.",
      readTime: "7 min"
    },
    {
      title: "Suplementação Feminina: Guia Completo",
      excerpt: "Entenda as necessidades específicas e os melhores suplementos para mulheres ativas.",
      readTime: "6 min"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Image src="/images/logo.svg" alt="Mite Suplementos" width={40} height={40} />
              <span className="ml-2 text-xl font-bold text-gray-900">Mite Suplementos</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#produtos" className="text-gray-700 hover:text-[#97E622] transition-colors">Produtos</a>
              <a href="#consultoria" className="text-gray-700 hover:text-[#97E622] transition-colors">Consultoria</a>
              <a href="#artigos" className="text-gray-700 hover:text-[#97E622] transition-colors">Artigos</a>
              <a href="#depoimentos" className="text-gray-700 hover:text-[#97E622] transition-colors">Depoimentos</a>
            </nav>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-[#97E622]"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                <a href="#produtos" className="text-gray-700 hover:text-[#97E622] transition-colors">Produtos</a>
                <a href="#consultoria" className="text-gray-700 hover:text-[#97E622] transition-colors">Consultoria</a>
                <a href="#artigos" className="text-gray-700 hover:text-[#97E622] transition-colors">Artigos</a>
                <a href="#depoimentos" className="text-gray-700 hover:text-[#97E622] transition-colors">Depoimentos</a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#97E622] to-[#7AC81D] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Suplementação
              <span className="block text-[#000000]">Inteligente</span>
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Consultoria personalizada via WhatsApp para maximizar seus resultados com a suplementação ideal para seu objetivo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => document.getElementById('consultoria')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-[#97E622] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                <MessageCircle className="mr-2 h-5 w-5" /> Consultoria Gratuita
              </button>
              <button
                onClick={() => document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#6B7C32] transition-colors"
              >
                Ver Produtos
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="/images/logomite.jpg"
              alt="Suplementos de qualidade"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg flex items-center">
              <Shield className="h-8 w-8 text-[#97E622] mr-3" />
              <div>
                <p className="font-semibold text-gray-900">100% Seguro</p>
                <p className="text-sm text-gray-600">Produtos certificados</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="bg-[#97E622] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="h-8 w-8 text-black" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-black">Consultoria Personalizada</h3>
            <p className="text-gray-600">Atendimento exclusivo via WhatsApp com especialistas em suplementação</p>
          </div>
          <div>
            <div className="bg-[#97E622] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-black" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-black">Resultados Rápidos</h3>
            <p className="text-gray-600">Protocolos eficazes baseados em ciência para acelerar seus objetivos</p>
          </div>
          <div>
            <div className="bg-[#97E622] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-black" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-black">Qualidade Garantida</h3>
            <p className="text-gray-600">Produtos premium com certificação internacional e pureza testada</p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produtos" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Nossos Produtos Premium</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Selecionamos apenas os melhores suplementos do mercado para garantir resultados excepcionais</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-black rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
       <img
  src={
    product.name === "Whey Protein Premium"
      ? "https://duxnutrition.vtexassets.com/arquivos/ids/168691/mouse-hover-0000s-0020-DUX-REBRANDING-WPC-900-G-BANNER-01-R01.png?v=638853441152230000"
      : product.name === "Creatina Creapure"
      ? "https://duxnutrition.vtexassets.com/arquivos/ids/167644/BANNER-01-CREATINA-CREAPURE-300-G-R02.png?v=638762748356230000"
      : product.name === "Multivitamínico Completo"
      ? "https://duxnutrition.vtexassets.com/arquivos/ids/167651/BANNER-01_MULTI-VITAMINICO_R02.png?v=638762758667230000"
      : product.image
  }
  alt={product.name}
  className="w-full h-48 object-cover"
/>
<div className="p-6">
  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
  <p className="text-white-600 mb-4">{product.description}</p>
  <ul className="space-y-2 mb-6">
    {product.benefits.map((benefit, idx) => (
      <li key={idx} className="flex items-center text-sm">
        <CheckCircle className="h-4 w-4 text-[#97E622] mr-2" /> {benefit}
      </li>
    ))}
  </ul>
  <a
    href="https://wa.me/5515989337295?text=Ol%C3%A1%2C%20quero%20consultar%20o%20pre%C3%A7o"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="w-full bg-[#97E622] text-white py-3 rounded-lg font-semibold hover:bg-[#5A6B2A] transition-colors">
      Consultar Preço
    </button>
  </a>
</div>

      {/* Consultation Form Section */}
      <section id="consultoria" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Consultoria Gratuita via WhatsApp</h2>
            <p className="text-xl text-gray-600">Preencha o formulário e receba uma orientação personalizada para seus objetivos</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B7C32] focus:border-transparent text-black" placeholder="Seu nome completo" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B7C32] focus:border-transparent text-black" placeholder="seu@email.com" required />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">WhatsApp *</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B7C32] focus:border-transparent text-black" placeholder="(11) 99999-9999" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Experiência com Suplementos</label>
                  <select name="experience" value={formData.experience} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B7C32] focus:border-transparent text-black">
                    <option value="">Selecione...</option>
                    <option value="iniciante">Iniciante</option>
                    <option value="intermediario">Intermediário</option>
                    <option value="avancado">Avançado</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Qual seu principal objetivo? *</label>
                <textarea name="goal" value={formData.goal} onChange={handleInputChange} rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B7C32] focus:border-transparent text-black" placeholder="Ex: Ganhar massa muscular, perder peso, melhorar performance..." required />
              </div>
              <button type="button" onClick={handleWhatsAppConsultation} disabled={!formData.name || !formData.email || !formData.phone || !formData.goal} className="w-full bg-[#25D366] text-white py-4 rounded-lg font-semibold hover:bg-[#20BA5A] transition-colors flex items-center justify-center disabled:bg-gray-400 disabled:cursor-not-allowed">
                <MessageCircle className="mr-2 h-5 w-5" /> Iniciar Consultoria no WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Articles Section */}
<section id="artigos" className="py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
      Artigos sobre Suplementação Inteligente
    </h2>
    <p className="text-xl text-gray-600">
      Conteúdo educativo para você tomar decisões informadas
    </p>
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

    {/* Artigo 1 */}
    <a
      href="https://pubmed.ncbi.nlm.nih.gov/36725371/"
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow p-6 cursor-pointer active:scale-95 transform duration-100"
    >
      <h3 className="text-xl font-semibold mb-2 text-black">
        Whey proteins as a functional food
      </h3>
      <p className="text-gray-600 mb-4">
        Revisão que discute os efeitos antioxidantes, anti-inflamatórios e benefícios de aplicação do whey como alimento funcional.
      </p>
      <div className="text-sm text-gray-400">5 min de leitura</div>
    </a>

    {/* Artigo 2 */}
    <a
      href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8342187/"
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow p-6 cursor-pointer active:scale-95 transform duration-100"
    >
      <h3 className="text-xl font-semibold mb-2 text-black">
        Vitamin D in athletes: focus on physical performance and musculoskeletal health
      </h3>
      <p className="text-gray-600 mb-4">
        Artigo que mostra como deficiência de vitamina D pode influenciar força muscular, potência e saúde óssea em atletas.
      </p>
      <div className="text-sm text-gray-400">4 min de leitura</div>
    </a>

    {/* Artigo 3 */}
    <a
      href="https://pubmed.ncbi.nlm.nih.gov/35871954/"
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow p-6 cursor-pointer active:scale-95 transform duration-100"
    >
      <h3 className="text-xl font-semibold mb-2 text-black">
        Effect of whey protein supplementation on weight and body composition
      </h3>
      <p className="text-gray-600 mb-4">
        Meta-análise de ensaios clínicos randomizados mostrando efeitos do whey sobre peso corporal e composição corporal.
      </p>
      <div className="text-sm text-gray-400">6 min de leitura</div>
    </a>

  </div>
</section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Depoimentos de Clientes</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Veja como a consultoria personalizada ajudou pessoas reais a alcançarem seus objetivos</p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="bg-[#97E622] w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg">{testimonial.name.charAt(0)}</div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <div className="flex">
                    {Array.from({ length: testimonial.rating }).map((_, i) => <Star key={i} className="h-4 w-4 text-yellow-400" />)}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
              <span className="text-[#97E622] font-semibold">{testimonial.result}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#97E622] text-white text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Pronto para alcançar seus objetivos?</h2>
        <p className="text-xl mb-8">Agende sua consultoria gratuita e descubra como a suplementação certa pode transformar seus resultados.</p>
        <button onClick={() => document.getElementById('consultoria')?.scrollIntoView({ behavior: 'smooth' })} className="bg-white text-[#6B7C32] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">Iniciar Consultoria</button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-bold text-white mb-4">Mite Suplementos</h4>
            <p>Suplementos de qualidade e consultoria personalizada para alcançar seus objetivos de forma segura e eficiente.</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Contato</h4>
            <p className="flex items-center"><Phone className="h-4 w-4 mr-2" /> (85) 98937-2995</p>
            <p className="flex items-center"><Mail className="h-4 w-4 mr-2" /> contato@mitesuplementos.com.br</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Horário de Atendimento</h4>
            <p className="flex items-center"><Clock className="h-4 w-4 mr-2" /> Seg-Sex 08:00 - 18:00</p>
            <p className="flex items-center"><Clock className="h-4 w-4 mr-2" /> Sáb 08:00 - 12:00</p>
          </div>
        </div>
        <div className="text-center mt-12 text-gray-500 text-sm">
          © {new Date().getFullYear()} Mite Suplementos. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  )
}
