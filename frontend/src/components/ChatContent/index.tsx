import React, { useEffect, useRef, useState } from "react";
import * as S from "./styles"
import { getAllMessages, sendMessage } from "../../api";
import ChatInput from "../ChatInput";
import Logout from "../BtnLogout";
import { Message, User } from "../../interfaces";
import { v4 as uuidv4 } from "uuid";
import loading from "../../assets/loader.gif";

interface ChatContainerProps {
  currentChat: any;
  currentUser: User | undefined;
  socket: any;
}

const ChatContainer: React.FC<ChatContainerProps> = ({
  currentChat,
  currentUser,
  socket,
}) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [arrivalMessage, setArrivalMessage] = useState<Message>();
  const [isLoading, setIsLoading] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const getMsg = async () => {
      if (currentChat && currentUser) {
        const response = await getAllMessages(currentUser._id, currentChat._id);
        setMessages(response.data);
      }
      setIsLoading(false);
    };
    getMsg();
    //
  }, [currentChat, currentChat._id, currentUser]);

  useEffect(() => {
    if (socket.current) {
      socket.current.on("msg-recieve", (msg: string) => {
        setArrivalMessage({ fromSelf: false, message: msg });
        console.log(msg);
      });
    }
  }, [socket]);

  useEffect(() => {
    arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async (msg: string, image: string) => {
    if (currentUser) {
      await sendMessage(currentUser._id, currentChat._id, msg, image);
      socket.current.emit("send-msg", {
        to: currentChat._id,
        from: currentUser?._id,
        message: msg,
        image,
      });
    }

    setMessages((msgs) => [...msgs, { fromSelf: true, message: msg, image }]);
  };

  return (
    <S.Container>
      <div className="chat-header">
        <div className="user-details">
          <div className="avatar">
            <img src={currentChat.avatarImage} alt="current Chat avatar" />
          </div>
          <div className="username">
            <h3>{currentChat.username}</h3>
          </div>
        </div>
        <Logout />
      </div>
      {isLoading ? (
        <div className="loading-messages">
          <img src={loading} alt="loader" className="loader" />
        </div>
      ) : (
        <div className="chat-messages">
          {messages.map((message) => {
            return (
              <div ref={scrollRef} key={uuidv4()}>
                <div
                  className={`message ${message.fromSelf ? "sended" : "recieved"
                    }`}
                >
                  {message.message && (
                    <div className="content ">
                      <p>{message.message}</p>
                    </div>
                  )}
                  {message.image && (
                    <div className="content-image">
                      <img src={message.image} alt="sended" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
      <ChatInput handleSendMessage={handleSendMessage} />
    </S.Container>
  );
};

export default  ChatContainer;