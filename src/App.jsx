import "./App.css";
import quartos from "./data/quartos";
import { useState } from "react";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import Rooms from "./components/Rooms";
import Footer from "./components/Footer";


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
              id={quarto.id}
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