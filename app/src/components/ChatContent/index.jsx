import Logout from '../BtnLogout';
import ChatInput from '../ChatInput';
import * as S from './styles';

const ChatContent  = () => {
    return (
        <S.Container>
            <header>
                <div className="userDetails">
                    <div className="avatar">
                        <img src="/img/defaultAvatar.png" alt="" />
                    </div>
                    <div className="username">
                        <h3>Myltiane</h3>
                    </div>
                </div>
                <Logout/>
            </header>
            <div className="chatMessages">
                <div className="message">
                    <div className="content">
                        <p>mesage user 1</p>
                    </div>
                    <div className="contentImage">
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
            <ChatInput />
        </S.Container>
    )
}

export default ChatContent;