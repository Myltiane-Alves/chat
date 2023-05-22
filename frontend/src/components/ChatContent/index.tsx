import React from 'react';
import * as S from './styles';
import Logout from '../BtnLogout';
import ChatInput from '../ChatInput';
import { User } from '../../interfaces/user';
import { useEffect, useRef, useState } from 'react';
import { Message } from '../../interfaces/message';
import { getAllMessages, sendMessage } from '../../api';
import loading from "../../img/chat2.png"

interface ChatContentProps {
    currentChat: any;
    currentUser: User | undefined;
    socket: any;
}

const ChatContent: React.FC<ChatContentProps> = ({
    currentChat,
    currentUser,
    socket
}) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [arrivalMessage, setArrivalMessage] = useState<Message>();
    const [isLoading, setIsLoading] = useState(true);
    const scrollRef = useRef<HTMLDivElement>(null)
    
    useEffect(() => {
        const getMsg = async () => {
            if(currentChat && currentUser) {
                const response = await getAllMessages(currentUser._id, currentChat._id);
                setMessages(response.data)
            }
            setIsLoading(false);
        };
        getMsg();
    }, [currentChat, currentChat._id, currentUser]);

    useEffect(() => {
        if(socket.current) {
            socket.current.on("msg-recieve", (msg: string) => {
                setArrivalMessage({ fromSelf: false, message: msg});
                console.log(msg);
            })
        }
    }, [socket]);

    useEffect(() => {
        arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
    }, [arrivalMessage]);

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSendMessage = async (msg: string, image: string) => {
        if(currentUser) {
            await sendMessage(currentUser._id, currentChat._id, msg, image);
            socket.current.emit("send-msg", {
                to: currentChat._id,
                from: currentUser?._id,
                message: msg,
                image
            })
        }
        setMessages((msgs) => [...msgs, { fromSelf: true, message: msg, image }]);
    };
    return (
        <S.Container>
            <header>
                <div className="userDetails">
                    <div className="avatar">
                        <img src={currentChat.avatarImage} alt="imagem do avatar do usuário" />
                    </div>
                    <div className="username">
                        <h3>{currentChat.username}</h3>
                    </div>
                </div>
                <Logout/>
            </header>
            {isLoading ? ( 
                <div className="loading-messafes">
                    <img src={loading} alt="" />
                </div>

            ): ( 
                <div className="chatMessages">
                    {messages.map((message) => {
                        return (
                            <div 
                                className={`message ${message.fromSelf ? "sent" : "received"}`}
                            >
                                {message.message && (
                                    <div className="content">
                                        <p>{message.message}</p>
                                    </div>
                                )}
                                {message.image && (
                                    <div className="contentImage">
                                        <img src={message.image} alt="sent" />
                                    </div>

                                )}
                            </div>
                        )
                    })}
                </div>
            )}
            <ChatInput handleSendMessage={handleSendMessage} />
        </S.Container>
    )
}

export default ChatContent;