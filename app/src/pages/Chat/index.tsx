import * as S from "./styles";
import AsideContent from "../../components/ContentAsside";
import Head from "../../components/Head";
import ChatContent from "../../components/ChatContent";
import { useState } from "react";
import { User } from "../../interfaces/user";
import { useNavigate } from "react-router";

const Chat = () => {
    const [contacts, setContacts] = useState<User[]>([])
    const [currentUser, setCurrentUser] = useState<User>()
    const [currentChat, setCurrentChat] = useState(undefined)
    const navigate = useNavigate();
    
    const handleChatChange = (chat: any) => {
        setCurrentChat(chat);
    }
    return (
        <S.Container>
            <div className="content">
                <AsideContent 
                    contacts={contacts}
                    currentUser={currentUser}
                    changeChat={handleChatChange}
                />
                <ChatContent />
                {/* <Head /> */}
            </div>
        </S.Container>
    )
}

export default Chat;