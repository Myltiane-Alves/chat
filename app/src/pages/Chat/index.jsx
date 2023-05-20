import * as S from "./styles";
import AsideContent from "../../components/ContentAsside";
import Head from "../../components/Head";
import ChatContent from "../../components/ChatContent";

const Chat = () => {
    return (
        <S.Container>
            <div className="content">
                <AsideContent />
                <ChatContent />
                {/* <Head /> */}
            </div>
        </S.Container>
    )
}

export default Chat;