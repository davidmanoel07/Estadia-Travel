import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./MinhasReservas.css";

function MinhasReservas() {
  const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
  const reservas = JSON.parse(localStorage.getItem("reservas")) || [];

  // "2026-09-18" → "18/09/2026"
  function formatarData(dataIso) {
    const [ano, mes, dia] = dataIso.split("-");
    return `${dia}/${mes}/${ano}`;
  }

  // Guarda-chuva: alguém digitou a URL sem estar logado
  if (!usuario) {
    return (
      <>
        <Header />
        <main className="reservas-container">
          <h2>Minhas Reservas</h2>
          <p>Você precisa estar logado para ver suas reservas.</p>
          <Link to="/login" className="btn-link">Fazer Login</Link>
        </main>
        <Footer />
      </>
    );
  }

  // O mesmo filter da busca, agora filtrando pelo e-mail do usuário logado
  const minhasReservas = reservas.filter((r) => r.usuario === usuario.email);

  return (
    <>
      <Header />

      <main className="reservas-container">
        <h2>Minhas Reservas</h2>

        {minhasReservas.length === 0 ? (
          <div className="reservas-vazio">
            <p>Você ainda não tem reservas.</p>
            <Link to="/" className="btn-link">Pesquisar quartos</Link>
          </div>
        ) : (
          minhasReservas.map((reserva) => (
            <div className="reserva-card" key={reserva.id}>
              <h3>Quarto {reserva.quartoTipo} — {reserva.localizacao}</h3>
              <p>Check-in: <strong>{formatarData(reserva.checkin)}</strong></p>
              <p>Check-out: <strong>{formatarData(reserva.checkout)}</strong></p>
              <p>{reserva.noites} noite(s)</p>
              <p className="reserva-total">Total: R$ {reserva.total.replace(".", ",")}</p>
            </div>
          ))
        )}
      </main>

      <Footer />
    </>
  );
}

export default MinhasReservas;