function Rooms(props) {

    return(

 <div className="quarto-card">

      <img className="quarto-img" src={props.imagem} alt={`Quarto ${props.tipo}`} />

      <p>Tipo de Quarto: <strong> {props.tipo} </strong> </p>
      <p>Localização: {props.localizacao}</p>
      <p>Preço: R$ {props.preco}</p>

      <button className="btn-reserva">Fazer Reserva</button>
</div>
    )
}

export default Rooms