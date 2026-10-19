import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Cadastro from "./components/Cadastro";
import Login from "./components/Login";
import Sobre from "./components/Sobre";
import Reserva from "./components/Reserva"
import MinhasReservas from "./components/MinhasReservas"
import NotFound from "./components/NotFound"

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reserva/:id" element={<Reserva />} />
        <Route path="/minhas-reservas" element={<MinhasReservas />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;