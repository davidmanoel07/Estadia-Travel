import "./SearchBox.css"

function SearchBox(){
   return(
    
       <section className="caixa-pesquisa">
        
        <div className="campo">
          <label htmlFor="destino">Insira o destino:</label>
          <input
            type="text"
            id="destino"
            placeholder="Ex: Rio de Janeiro"
          />
        </div>


        <div className="campo">
          <label htmlFor="checkin">Check-in:</label>
          <input type="date" id="checkin" />
        </div>

        <div className="campo">
          <label htmlFor="checkout">Check-out:</label>
          <input type="date" id="checkout" />
        </div>

        <div className="campo">
          <label htmlFor="hospede">Tipo de Hóspede:</label>

          <select id="hospede">
            <option value="">Escolha uma das opções</option>
            <option value="solteiro">Solteiro</option>
            <option value="casal">Casal</option>
            <option value="familia">Família</option>
          </select>
        </div>

        <button type="button" className="btn-pesquisar">
          Pesquisar
        </button>
      </section>
   )
}

export default SearchBox