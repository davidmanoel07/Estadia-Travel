import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./NotFound.css"; 

function NotFound() {
  return (
    <>
      <Header />
      <main className="notfound-container">
        <h2>ERRO 404!</h2>
        <p>Página não encontrada.</p>
        <Link to="/" className="btn-link">Voltar para a home</Link>
      </main>
      <Footer />
    </>
  );
}

export default NotFound;