import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Rooms(props) {
  const [mostrarPopup, setMostrarPopup] = useState(false);
  const navigate = useNavigate();

  function handleClickReserva() {
    const usuarioLogado = localStorage.getItem("usuarioLogado");

    if (!usuarioLogado) {
      setMostrarPopup(true);          // não logou? mostra o pop-up
    } else {
      navigate(`/reserva/${props.id}`); // logou? vai pra página de reserva
    }
  }

  return (
    <div className="quarto-card">
      <img className="quarto-img" src={props.imagem} alt={`Quarto ${props.tipo}`} />

      <p>Tipo de Quarto: <strong> {props.tipo} </strong> </p>
      <p>Localização: {props.localizacao}</p>
      <p>Preço: R$ {props.preco}</p>

      <button className="btn-reserva" onClick={handleClickReserva}>
        Fazer Reserva
      </button>

      {mostrarPopup && (
        <div className="modal-fundo">
          <div className="modal-caixa">
            <h3>Atenção!</h3>
            <p>
              Para prosseguir com a reserva do seu quarto
              você precisa se cadastrar no nosso site.
            </p>

            <div className="modal-botoes">
              <button className="btn-modal" onClick={() => navigate("/login")}>
                Fazer Login
              </button>
              <button className="btn-modal" onClick={() => navigate("/cadastro")}>
                Ainda não possuo uma conta
              </button>
            </div>

            <button className="btn-fechar" onClick={() => setMostrarPopup(false)}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Rooms;