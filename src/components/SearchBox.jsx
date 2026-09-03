import { useState } from "react";
import "./SearchBox.css";

function SearchBox({ onPesquisar }) {
  const [destino, setDestino] = useState("");
  const [tipo, setTipo] = useState("");

  return (
    <section className="caixa-pesquisa">
      <div className="campo">
        <label htmlFor="destino">Insira o destino:</label>
        <input
          type="text"
          id="destino"
          placeholder="Ex: Rio de Janeiro"
          value={destino}
          onChange={(evento) => setDestino(evento.target.value)}
        />
      </div>

      <div className="campo">
        <label htmlFor="hospede">Tipo de Hóspede:</label>
        <select
          id="hospede"
          value={tipo}
          onChange={(evento) => setTipo(evento.target.value)}
        >
          <option value="">Escolha uma das opções</option>
          <option value="Solteiro">Solteiro</option>
          <option value="Casal">Casal</option>
          <option value="Família">Família</option>
        </select>
      </div>

      <button
        type="button"
        className="btn-pesquisar"
        onClick={() => onPesquisar(destino, tipo)}
      >
        Pesquisar
      </button>
    </section>
  );
}

export default SearchBox;