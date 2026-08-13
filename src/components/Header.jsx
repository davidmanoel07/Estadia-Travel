import { Link } from "react-router-dom";

function Header(){
    return(

 <header>
       
        <h1>Estadia Travel</h1>

    <nav className="nav-container">

         <div className="nav-links">

              <Link to="/sobre" className="nav-link">Sobre</Link>
              <Link to="/login" className="nav-link">Entrar</Link>
              <Link to="/cadastro" className="nav-link">Cadastrar-se</Link>

        </div>
       
    </nav>

</header>

    )
}

export default Header