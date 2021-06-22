import { Link } from "react-router-dom";
import illustationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";

import "../styles/auth.scss";
import { Button } from "../components/Button";

export function NewRoom() {
  // const { user } = useContext(AuthContext);
  return (
    <div id="page-auth">
      <aside>
        <img
          src={illustationImg}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tira as dúvidas de audiência em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask logo" />
          {/* <h1>{user?.name}</h1> */}
          <h2>Criar uma nova sala</h2>
          <form>
            <input type="text" placeholder="Nome da sala" />
            <Button type="submit">Criar sala</Button>
          </form>
          <p>
            Quer entrar em uma sala existente? <Link to="/"> Clique aqui</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
