{/* Products Section */}
<section id="produtos" className="py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
        Nossos Produtos Premium
      </h2>

      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Selecionamos apenas os melhores suplementos do mercado para garantir resultados excepcionais
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product, index) => (
        <div
          key={index}
          className="bg-black rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover"
          />

          <div className="p-6 text-white">
            <h3 className="text-xl font-semibold mb-2">
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
