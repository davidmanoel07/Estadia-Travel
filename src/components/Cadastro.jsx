import Header from "./Header"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cadastro.css";


function Cadastro() {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState(""); // NOVO: variável separada
  const navigate = useNavigate();

  function handleCadastrar(evento) {
    evento.preventDefault();

    // NOVO: Verifica se as senhas são iguais
    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem. Por favor, verifique.");
      return;
    }

    // Pega os usuários já salvos (ou array vazio se não existir)
    const usuariosSalvos = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Verifica se o e-mail já está cadastrado
    const emailExiste = usuariosSalvos.some((u) => u.email === email);
    if (emailExiste) {
      alert("Este e-mail já está cadastrado. Faça login.");
      return;
    }

    // Adiciona o novo usuário
    const novoUsuario = { nome, email, senha };
    usuariosSalvos.push(novoUsuario);

    // Salva de volta no localStorage
    localStorage.setItem("usuarios", JSON.stringify(usuariosSalvos));

    alert("Cadastro realizado com sucesso! Faça login.");
    navigate("/login");
  }

  return (

<>
    <Header></Header>

 <section className="cadastro-container">

       
      <h2>Crie a sua Conta</h2>

      
      <form onSubmit={handleCadastrar}>
        <div className="campo">
          <label htmlFor="nome">Nome Completo:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>

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

        <div className="campo">
          <label htmlFor="confirmar-senha">Confirme a Senha:</label>
          <input
            type="password"
            id="confirmar-senha"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn-cadastrar">
          Cadastrar
        </button>
      </form>

      <p>
        Já tem uma conta?{" "}
        <a href="/login" className="link-login">
          Faça login
        </a>
      </p>
    </section>
</>

    
  );
}

export default Cadastro;