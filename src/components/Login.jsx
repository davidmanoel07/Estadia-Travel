import Header from "./Header"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  function handleLogin(evento) {
    evento.preventDefault();

    const usuariosSalvos = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Procura o usuário com esse e-mail e senha
    const usuario = usuariosSalvos.find(
      (u) => u.email === email && u.senha === senha
    );

    if (usuario) {
      // Salva o usuário logado (para o site saber quem está)
      localStorage.setItem("usuarioLogado", JSON.stringify(usuario));
      alert(`Bem-vindo, ${usuario.nome}!`);
      navigate("/");
    } else {
      alert("E-mail ou senha incorretos.");
    }
  }

  return (

   <>
    <Header></Header>

       <section className="login-container">

      

      <h2>Entrar</h2>
      <form onSubmit={handleLogin}>
        <div className="campo">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="campo">
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn-login">
          Entrar
        </button>
      </form>

      <p>
        Ainda não tem uma conta?{" "}
        <a href="/cadastro" className="link-cadastro">
          Cadastre-se
        </a>
      </p>
    </section>
   </> 
    
  );
}

export default Login;