import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import Rooms from "./components/Rooms";
import Footer from "./components/Footer";

// Criação do Array dos Quartos 
const quartos = [
  // ---------- SOLTEIRO ----------
  { id: 1,  imagem: "/images/studio-pinheiros.png",  tipo: "Solteiro", localizacao: "São Paulo, SP",      preco: "130,00" },
  { id: 2,  imagem: "/images/urban-paulista.png",    tipo: "Solteiro", localizacao: "São Paulo, SP",      preco: "150,00" },
  { id: 3,  imagem: "/images/compacto-augusta.png",  tipo: "Solteiro", localizacao: "São Paulo, SP",      preco: "120,00" },

  { id: 4,  imagem: "/images/copacabana-view.png",   tipo: "Solteiro", localizacao: "Rio de Janeiro, RJ", preco: "180,00" },
  { id: 5,  imagem: "/images/ipanema-classic.png",   tipo: "Solteiro", localizacao: "Rio de Janeiro, RJ", preco: "200,00" },
  { id: 6,  imagem: "/images/lapa-express.png",      tipo: "Solteiro", localizacao: "Rio de Janeiro, RJ", preco: "170,00" },

  { id: 7,  imagem: "/images/boa-viagem.png",        tipo: "Solteiro", localizacao: "Recife, PE",         preco: "140,00" },
  { id: 8,  imagem: "/images/olinda-colonial.png",   tipo: "Solteiro", localizacao: "Recife, PE",         preco: "160,00" },
  { id: 9,  imagem: "/images/recife-antigo.png",     tipo: "Solteiro", localizacao: "Recife, PE",         preco: "150,00" },

  // ---------- CASAL ----------
  { id: 10, imagem: "/images/skyline-premium.png",   tipo: "Casal", localizacao: "São Paulo, SP",         preco: "320,00" },
  { id: 11, imagem: "/images/executive-suite.png",   tipo: "Casal", localizacao: "São Paulo, SP",         preco: "280,00" },
  { id: 12, imagem: "/images/itaim-luxury.png",      tipo: "Casal", localizacao: "São Paulo, SP",         preco: "350,00" },

  { id: 13, imagem: "/images/pao-de-acucar.png",     tipo: "Casal", localizacao: "Rio de Janeiro, RJ",    preco: "340,00" },
  { id: 14, imagem: "/images/leblon-romance.png",    tipo: "Casal", localizacao: "Rio de Janeiro, RJ",    preco: "300,00" },
  { id: 15, imagem: "/images/vista-mar-premium.png", tipo: "Casal", localizacao: "Rio de Janeiro, RJ",    preco: "380,00" },

  { id: 16, imagem: "/images/porto-tropical.png",    tipo: "Casal", localizacao: "Recife, PE",            preco: "260,00" },
  { id: 17, imagem: "/images/praia-encanto.png",     tipo: "Casal", localizacao: "Recife, PE",            preco: "240,00" },
  { id: 18, imagem: "/images/coral-premium.png",     tipo: "Casal", localizacao: "Recife, PE",            preco: "290,00" },

  // ---------- FAMÍLIA ----------
  { id: 19, imagem: "/images/familia-conforto.png",  tipo: "Família", localizacao: "São Paulo, SP",       preco: "450,00" },
  { id: 20, imagem: "/images/jardim-europa.png",     tipo: "Família", localizacao: "São Paulo, SP",       preco: "420,00" },
  { id: 21, imagem: "/images/vila-madalena.png",     tipo: "Família", localizacao: "São Paulo, SP",       preco: "400,00" },

  { id: 22, imagem: "/images/resort-copacabana.png", tipo: "Família", localizacao: "Rio de Janeiro, RJ",  preco: "500,00" },
  { id: 23, imagem: "/images/barra-family.png",      tipo: "Família", localizacao: "Rio de Janeiro, RJ",  preco: "470,00" },
  { id: 24, imagem: "/images/santa-teresa.png",      tipo: "Família", localizacao: "Rio de Janeiro, RJ",  preco: "460,00" },

  { id: 25, imagem: "/images/boa-viagem-family.png", tipo: "Família", localizacao: "Recife, PE",          preco: "430,00" },
  { id: 26, imagem: "/images/recife-premium.png",    tipo: "Família", localizacao: "Recife, PE",          preco: "400,00" },
  { id: 27, imagem: "/images/praia-deluxe.png",      tipo: "Família", localizacao: "Recife, PE",          preco: "380,00" },
];

function App() {
  // Memória do App: começa com todos os quartos.
  // Depois da busca, guarda só os que passaram no filtro.
  const [quartosFiltrados, setQuartosFiltrados] = useState(quartos);

  function handlePesquisar(destino, tipo) {
    const resultado = quartos.filter((quarto) => {
      // Compara tudo em minúsculo para ignorar maiúsculas/acentos
      const destinoOk = quarto.localizacao
        .toLowerCase()
        .includes(destino.trim().toLowerCase());

      // Se o usuário não escolheu tipo, aceita qualquer um
      const tipoOk = tipo === "" || quarto.tipo === tipo;

      return destinoOk && tipoOk;
    });

    setQuartosFiltrados(resultado);
  }

  return (
    <>
      <Header />
      <SearchBox onPesquisar={handlePesquisar} />

      <main className="lista-dos-quartos">
        {quartosFiltrados.length === 0 ? (
          <p>Sinto muito, Nenhum quarto disponivel para essa busca!.</p>
        ) : (
          quartosFiltrados.map((quarto) => (
            <Rooms
              key={quarto.id}
              imagem={quarto.imagem}
              tipo={quarto.tipo}
              localizacao={quarto.localizacao}
              preco={quarto.preco}
            />
          ))
        )}
      </main>

      <Footer />
    </>
  );
}

export default App;