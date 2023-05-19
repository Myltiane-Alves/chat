import * as S from './styles';
import logo from '../../../public/img/hello.gif'
import Logout from '../BtnLogout';
const Head = () => {
    return (
        <S.Container>
            <div className="logoutButton">
                <Logout />
            </div>
            <img src={logo} alt="" />
            <h1> Bem Vindos </h1>
            <h2>Selecione um bate-papo para começar a enviar mensagens</h2>
        </S.Container>
    )
}

export default Head;