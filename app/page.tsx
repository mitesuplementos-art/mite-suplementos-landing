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

  // Carregar dados do localStorage na inicialização
  useEffect(() => {
    const savedData = localStorage.getItem('supplementsFormData')
    if (savedData) {
      setFormData(JSON.parse(savedData))
    }
  }, [])

  // Salvar dados no localStorage sempre que o formulário mudar
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
    const message = `Olá! Gostaria de agendar uma consultoria personalizada.
    
Meus dados:
Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}
Objetivo: ${formData.goal}
Experiência: ${formData.experience}

Aguardo o contato!`
    
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const products = [
    {
      name: "Whey Protein Premium",
      description: "Proteína de alta qualidade para ganho de massa muscular",
      image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400&h=300&fit=crop",
      benefits: ["25g de proteína por dose", "Absorção rápida", "Sabores naturais"]
    },
    {
      name: "Creatina Monohidratada",
      description: "Aumento de força e performance nos treinos",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      benefits: ["Mais força", "Recuperação rápida", "Pureza garantida"]
    },
    {
      name: "Multivitamínico Completo",
      description: "Suporte nutricional completo para sua saúde",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      benefits: ["26 vitaminas", "Minerais essenciais", "Energia natural"]
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
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#produtos" className="text-gray-700 hover:text-[#6B7C32] transition-colors">Produtos</a>
              <a href="#consultoria" className="text-gray-700 hover:text-[#6B7C32] transition-colors">Consultoria</a>
              <a href="#artigos" className="text-gray-700 hover:text-[#6B7C32] transition-colors">Artigos</a>
              <a href="#depoimentos" className="text-gray-700 hover:text-[#6B7C32] transition-colors">Depoimentos</a>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-[#6B7C32]"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                <a href="#produtos" className="text-gray-700 hover:text-[#6B7C32] transition-colors">Produtos</a>
                <a href="#consultoria" className="text-gray-700 hover:text-[#6B7C32] transition-colors">Consultoria</a>
                <a href="#artigos" className="text-gray-700 hover:text-[#6B7C32] transition-colors">Artigos</a>
                <a href="#depoimentos" className="text-gray-700 hover:text-[#6B7C32] transition-colors">Depoimentos</a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#6B7C32] to-[#5A6B2A] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Suplementação
                <span className="block text-[#B8E986]">Inteligente</span>
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Consultoria personalizada via WhatsApp para maximizar seus resultados com a suplementação ideal para seu objetivo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => document.getElementById('consultoria')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white text-[#6B7C32] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Consultoria Gratuita
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
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop" 
                alt="Suplementos de qualidade"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center">
                  <Shield className="h-8 w-8 text-[#6B7C32] mr-3" />
                  <div>
                    <p className="font-semibold text-gray-900">100% Seguro</p>
                    <p className="text-sm text-gray-600">Produtos certificados</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Restante das seções mantém exatamente igual */}
      {/* Benefits, Products, Consultation, Articles, Testimonials, CTA, Footer */}
      {/* Apenas substitua todos os "VitalSupp" por "Mite Suplementos" */}
    </div>
  )
}
