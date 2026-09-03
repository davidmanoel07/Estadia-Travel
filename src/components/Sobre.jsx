import Header from "./Header";
import Footer from "./Footer";
import "./Sobre.css";

function Sobre() {
  return (
    <>
      <Header />

      <main className="sobre-container">
        <section className="sobre-hero">
          <h2>Sobre a Estadia Travel</h2>
          <p>
            Conectando você às melhores estadias do Brasil, com praticidade,
            segurança e o preço certo.
          </p>
        </section>

        <section className="sobre-texto">
          <h3>Nossa história</h3>
          <p>
            A Estadia Travel nasceu de uma ideia simples: tornar a busca por
            hospedagem algo simples e acessível. Sabemos que, por trás de cada
            viagem, existe uma história — e queremos fazer parte da sua,
            começando pelo lugar onde você vai chamar de lar por alguns dias.
          </p>
          <p>
            Por isso, selecionamos quartos de solteiro, casal e família em
            cidades como São Paulo, Rio de Janeiro e Recife — para que você
            escolha a estadia que combina com o seu jeito de viajar.
          </p>
        </section>

        <section className="sobre-valores">
          <h3>Nossos valores</h3>
          <div className="valores-grid">
            <div className="valor-card">
              <h4>🛏️ Conforto</h4>
              <p>Quartos selecionados para garantir descanso e bem-estar durante toda a sua estadia.</p>
            </div>
            <div className="valor-card">
              <h4>⚡ Praticidade</h4>
              <p>Pesquise, compare e reserve em poucos cliques, sem complicação.</p>
            </div>
            <div className="valor-card">
              <h4>💰 Preço justo</h4>
              <p>Opções para todos os bolsos, sem surpresa na hora de fechar a reserva.</p>
            </div>
          </div>
        </section>

        <section className="sobre-cta">
          <h3>Pronto para a sua próxima viagem?</h3>
          <p>Encontre o quarto perfeito para a sua estadia.</p>
          <a href="/" className="btn-cta">Pesquisar quartos</a>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Sobre;