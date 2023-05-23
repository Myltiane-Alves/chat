import * as S from "./styles";
import HelloImage from "../../assets/hello.gif";
import Logout from "../BtnLogout";

interface WelcomeProps {
  currentUsername: string;
}

const Welcome: React.FC<WelcomeProps> = ({ currentUsername }) => {
  return (
    <S.Container>
      <div className="logoutButton">
        <Logout />
      </div>
      <img src={HelloImage} alt="Dog saying Hi!" />
      <h1> Seja Bem Vindo <span>{currentUsername}</span>  </h1>
      <h2>Selecione um bate-papo para começar a enviar mensagens</h2>
    </S.Container>
  );
};

export default Welcome;