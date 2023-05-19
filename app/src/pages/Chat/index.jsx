import * as S from "./styles";
import AsideContent from "../../components/ContentAsside";
import Head from "../../components/Head";

const Chat = () => {
    return (
        <S.Container>
            <div className="content">
                <AsideContent />
                <Head />
            </div>
        </S.Container>
    )
}

export default Chat;