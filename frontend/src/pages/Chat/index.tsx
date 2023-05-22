import { useEffect, useRef, useState } from "react";
import * as S from "./styles";
import AsideContent from "../../components/ContentAsside";
import Head from "../../components/Head";
import ChatContent from "../../components/ChatContent";
import { User } from "../../interfaces/user";
import { useNavigate } from "react-router";
import { io, Socket } from "socket.io-client";
import { getAllUsers, host } from "../../api";

const Chat = () => {
    const [contacts, setContacts] = useState<User[]>([])
    const [currentUser, setCurrentUser] = useState<User>()
    const [currentChat, setCurrentChat] = useState(undefined)
    const navigate = useNavigate();
    const socket = useRef<Socket>();

    useEffect(() => {
        const setUser = async () => {
            if (!localStorage.getItem("chat-app-user")) {
                navigate("/login")
            } else {
                setCurrentUser(
                    await JSON.parse(localStorage.getItem("chat-app-user")!)
                )
            }
        }
        setUser();
    }, [navigate]);

    useEffect(() => {
        if (currentUser) {
            socket.current! = io(host);
            socket.current!.emit("add-user", currentUser._id)
        }
    }, [currentUser]);

    useEffect(() => {
        const getContacts = async () => {
            if (currentUser) {
                const { data } = await getAllUsers(currentUser._id);
                setContacts(data);
            } else {
                navigate("/")
            }
        }
        getContacts();
    }, [currentUser, navigate])

    const handleChatChange = (chat: any) => {
        setCurrentChat(chat);
    };

    return (
        <S.Container>
            <div className="content">
                <AsideContent
                    contacts={contacts}
                    currentUser={currentUser}
                    changeChat={handleChatChange}
                />
                {currentChat === undefined ? (

                    <Head currentUsername={currentUser?.username || ""} />
                ) : (

                    <ChatContent
                        currentChat={currentChat}
                        currentUser={currentUser}
                        socket={socket}
                    />
                )}
            </div>
        </S.Container>
    )
}

export default Chat;