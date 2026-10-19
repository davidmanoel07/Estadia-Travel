# 🏨 Estadia Travel

Sistema de reserva de quartos de solteiro, casal e família em **São Paulo**, **Rio de Janeiro** e **Recife** — construído do zero com React.

## 🚀 Funcionalidades

- **Busca com filtro** — encontre quartos por destino e tipo de hóspede (ignora maiúsculas/minúsculas)
- **Autenticação** — cadastro e login com persistência em `localStorage`
- **Reserva protegida** — pop-up exige login antes de reservar
- **Reserva completa** — check-in/check-out com bloqueio de datas passadas, cálculo de noites e total
- **Minhas Reservas** — histórico filtrado pelo usuário logado
- **Sessão persistente** — header com "Olá, [nome]" e botão Sair
- **Páginas extras** — Sobre, 404 personalizada e footer institucional

## 🛠️ Tecnologias

- [React](https://react.dev/) + [Vite](https://vite.dev/)
- [React Router DOM](https://reactrouter.com/) para navegação entre páginas
- CSS puro para estilização
- `localStorage` para persistência de usuários e reservas

## ▶️ Como rodar localmente

    git clone https://github.com/davidmanoel07/Estadia-Travel.git
    cd Estadia-Travel
    npm install
    npm run dev

Depois abra `http://localhost:5173` no navegador.

## 📁 Estrutura do projeto

    src/
    ├── components/    # Header, SearchBox, Rooms, Cadastro, Login, Reserva...
    ├── data/
    │   └── quartos.js # "Banco de dados" dos 27 quartos
    ├── App.jsx        # Home + filtro de busca
    ├── router.jsx     # Rotas da aplicação
    └── main.jsx       # Ponto de partida do React

## 👤 Autor

**David Manoel França de Oliveira** — [GitHub](https://github.com/davidmanoel07)

