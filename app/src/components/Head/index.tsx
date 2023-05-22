import * as S from './styles';
import Logout from '../BtnLogout';

interface HeadProps {
    currentUsername: string;
}

const Head: React.FC<HeadProps> = ({ currentUsername }) => {
    return (
        <S.Container>
            <div className="logoutButton">
                <Logout />
            </div>
            <img src="../../../public/img/chat-login.png" alt="" />
            <h1> Bem Vindos <span>{currentUsername}</span> </h1>
            <h2>Selecione um bate-papo para começar a enviar mensagens</h2>
        </S.Container>
    )
}

export default Head;