import * as S from './styles';

const AsideContent = () => {
    return (
        <S.Container>
            <header className='brand'>
                <img src="/img/chat.png" alt="logo" />
                <h3>Chat</h3>
            </header>
            <div className="contacts">
                <div className="contact">
                    <div className="avatar">
                        <img src="/img/defaultAvatar.png" alt="avatar" />
                    </div>
                    <div className="username">
                        <h3>Myltiane</h3>
                    </div>
                </div>
            </div>
            <div className="current-user">
                <div className="avatar">
                    <img src="/img/defaultAvatar.png" alt="avatar" />
                    <div className="camera-img">
                        {/* <img src="/img/defaultAvatar.png" alt="avatar" /> */}
                    </div>
                </div>
                <div className="username">
                    <h2>Myltiane</h2>
                </div>
            </div>
        </S.Container>
    )
}

export default AsideContent;