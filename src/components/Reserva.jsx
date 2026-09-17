import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import quartos from "../data/quartos";
import "./Reserva.css";

function Reserva() {
  const { id } = useParams();
  const quarto = quartos.find((q) => q.id === Number(id));

  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [reservaConfirmada, setReservaConfirmada] = useState(null);

  if (!quarto) {
    return (
      <>
        <Header />
        <main className="reserva-container">
          <p>Ops! Quarto não encontrado!</p>
        </main>
        <Footer />
      </>
    );
  }

  function calcularNoites() {
    if (!checkin || !checkout) return 0;
    const diferencaMs = new Date(checkout) - new Date(checkin);
    return Math.round(diferencaMs / (1000 * 60 * 60 * 24));
  }

  const noites = calcularNoites();
  const precoPorNoite = Number(quarto.preco.replace(",", "."));
  const total = noites * precoPorNoite;

  // "2026-09-17" → "17/09/2026"
  function formatarData(dataIso) {
    const [ano, mes, dia] = dataIso.split("-");
    return `${dia}/${mes}/${ano}`;
  }

  function handleConfirmar() {
    const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));

    const novaReserva = {
      id: Date.now(),
      usuario: usuario.email,
      quartoId: quarto.id,
      quartoTipo: quarto.tipo,
      localizacao: quarto.localizacao,
      checkin,
      checkout,
      noites,
      total: total.toFixed(2),
    };

    const reservasSalvas = JSON.parse(localStorage.getItem("reservas")) || [];
    reservasSalvas.push(novaReserva);
    localStorage.setItem("reservas", JSON.stringify(reservasSalvas));

    setReservaConfirmada(novaReserva);
  }

  return (
    <>
      <Header />

      <main className="reserva-container">
        <h2>Reserve o seu Quarto</h2>
        <img className="reserva-img" src={quarto.imagem} alt={`Quarto ${quarto.tipo}`} />

        <div className="reserva-info">
          <p>Tipo de Quarto: <strong>{quarto.tipo}</strong></p>
          <p>Localização: {quarto.localizacao}</p>
          <p>Preço por noite: R$ {quarto.preco}</p>
        </div>

        {reservaConfirmada ? (
          <div className="reserva-sucesso">
            <h3>Sua reserva está confirmada para o dia {formatarData(reservaConfirmada.checkin)}!</h3>
            <p>Check-out: {formatarData(reservaConfirmada.checkout)}</p>
            <p>{reservaConfirmada.noites} noite(s) • Total: R$ {reservaConfirmada.total}</p>
            <p>Detalhes enviados para {reservaConfirmada.usuario}</p>
          </div>
        ) : (
          <>
            <div className="reserva-datas">
              <div className="campo">
                <label htmlFor="checkin">Check-in:</label>
                <input
                  type="date"
                  id="checkin"
                  value={checkin}
                  onChange={(e) => setCheckin(e.target.value)}
                />
              </div>

              <div className="campo">
                <label htmlFor="checkout">Check-out:</label>
                <input
                  type="date"
                  id="checkout"
                  min={checkin}
                  value={checkout}
                  onChange={(e) => setCheckout(e.target.value)}
                />
              </div>
            </div>

            {noites > 0 ? (
              <div className="reserva-resumo">
                <p>{noites} noite(s) × R$ {quarto.preco}</p>
                <h3>Total: R$ {total.toFixed(2).replace(".", ",")}</h3>
              </div>
            ) : (
              <p>Escolha as datas para ver o valor total.</p>
            )}

            <button
              className="btn-reserva"
              disabled={noites <= 0}
              onClick={handleConfirmar}
            >
              Confirmar Reserva
            </button>
          </>
        )}
      </main>

      <Footer />
    </>
  );
}

export default Reserva;