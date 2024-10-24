import React from 'react';

export default function Culture() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Brazilian Culture</h1>
      
      <div className="grid gap-6">
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Samba</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            O samba é um gênero musical e uma dança de origem brasileira, que tem suas raízes na cultura afro-brasileira. 
            Originado no início do século XX, o samba se tornou um dos principais símbolos da identidade cultural do Brasil.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            É caracterizado por seu ritmo contagiante, melodia envolvente e letras que muitas vezes falam sobre o cotidiano, 
            amor e a vida social.
          </p>
          <div className="bg-yellow-50 p-4 rounded-md mb-4">
            <h3 className="font-semibold mb-2">Instrumentos Típicos:</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Pandeiro</li>
              <li>Cuíca</li>
              <li>Tamborim</li>
              <li>Surdo</li>
              <li>Violão</li>
            </ul>
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Bossa Nova</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            A bossa nova surgiu no final da década de 1950 como uma nova forma de expressão musical que combinava 
            elementos do samba com influências do jazz.
          </p>
          <div className="bg-blue-50 p-4 rounded-md mb-4">
            <h3 className="font-semibold mb-2">Artistas Pioneiros:</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>João Gilberto</li>
              <li>Tom Jobim</li>
              <li>Vinicius de Moraes</li>
            </ul>
          </div>
          <p className="mb-4 text-gray-700 leading-relaxed">
            A bossa nova é marcada por sua harmonia sofisticada, letras poéticas e um ritmo mais suave e relaxado, 
            em comparação com o samba tradicional.
          </p>
          <p className="text-gray-700 leading-relaxed">
            A influência do samba na bossa nova é evidente na forma como os músicos incorporaram ritmos e cadências 
            do samba em suas composições, criando um estilo único que reverberou não apenas no Brasil, mas também 
            internacionalmente.
          </p>
        </section>
      </div>
    </div>
  );
}