import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

  function handleSair() {
    localStorage.removeItem("usuarioLogado");
    navigate("/");
  }

  return (
    <header>
      <h1>Estadia Travel</h1>

      <nav className="nav-container">
        <div className="nav-links">
          <Link to="/sobre" className="nav-link">Sobre</Link>

          {usuarioLogado ? (
            <>
              <span className="nav-link">Olá, {usuarioLogado.nome}</span>
              <button className="nav-link btn-sair" onClick={handleSair}>
                Sair
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-link">Entrar</Link>
              <Link to="/cadastro" className="nav-link">Cadastrar-se</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;