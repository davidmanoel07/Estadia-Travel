import "./App.css";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import Rooms from "./components/Rooms";


  const quartos = [
  { id: 1, imagem: "/images/quarto-compacto.png", tipo: "Solteiro", localizacao: "São Paulo, Sp", preco: "130,00" },
  { id: 2, imagem: "/images/quarto-individual.png", tipo: "Solteiro", localizacao: "Rio de Janeiro, RJ", preco: "150,00" },
  { id: 3, imagem: "/images/quarto-economico.png", tipo: "Solteiro", localizacao: "Recife, PE", preco: "250,00" },


  { id: 4, imagem: "/images/quarto-duplo-luxo.png", tipo: "Casal", localizacao: "Florianópolis, SC", preco: "320,00" },
  { id: 5, imagem: "/images/suite-casal.png", tipo: "Casal", localizacao: "Fortaleza, CE", preco: "280,00" },
  { id: 6, imagem: "/images/suite-vista-pro-mar.png", tipo: "Casal", localizacao: "Rio de Janeiro, RJ", preco: "320,00" },
];

function App() {
  
  return (
    <>
      <Header />
      <SearchBox />

       <main className="lista-dos-quartos">

        {quartos.map((quarto) => (

  <Rooms
            key = {quarto.id}
            imagem = {quarto.imagem}
            tipo = {quarto.tipo}
            localizacao = {quarto.localizacao}
            preco = {quarto.preco}
    />

      ))}

        </main>
    </>
  );
}

export default App;