      {/* Consultoria */}
      <section id="consultoria" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Consultoria Gratuita via WhatsApp
            </h2>

            <p className="text-xl text-gray-600">
              Preencha o formulário e receba uma orientação personalizada.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">

            <form className="space-y-6">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Seu nome"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="seu@email.com"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black"
                  />
                </div>

              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    WhatsApp *
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(11) 99999-9999"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Experiência
                  </label>

                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black"
                  >
                    <option value="">Selecione</option>
                    <option value="iniciante">Iniciante</option>
                    <option value="intermediario">Intermediário</option>
                    <option value="avancado">Avançado</option>
                  </select>
                </div>

              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Objetivo *
                </label>

                <textarea
                  name="goal"
                  value={formData.goal}
                  onChange={handleInputChange}
                  rows={4}
                  required
                  placeholder="Ex: ganhar massa muscular..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black"
                />
              </div>

              <button
                type="button"
                onClick={handleWhatsAppConsultation}
                disabled={
                  !formData.name ||
                  !formData.email ||
                  !formData.phone ||
                  !formData.goal
                }
                className="w-full bg-[#25D366] text-white py-4 rounded-lg font-semibold hover:bg-[#20BA5A] transition-colors disabled:bg-gray-400"
              >
                <MessageCircle className="inline mr-2 h-5 w-5" />
                Iniciar Consultoria no WhatsApp
              </button>

            </form>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Depoimentos de Clientes
            </h2>

            <p className="text-xl text-gray-600">
              Veja resultados reais de clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

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
      <footer className="bg-gray-900 text-gray-300 py-12">

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
              contato@mitesuplementos.com.br
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

        <div className="text-center mt-12 text-gray-500 text-sm">
          © {new Date().getFullYear()} Mite Suplementos.
        </div>

      </footer>
