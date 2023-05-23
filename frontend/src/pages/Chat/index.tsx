import { useState, useEffect, useRef } from "react";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import { getAllUsers, host } from "../../api";
import Contacts from "../../components/ContentAside";
import Welcome from "../../components/Head";
import ChatContainer from "../../components/ChatContent";
import { io, Socket } from "socket.io-client";
import { User } from "../../interfaces";

function Chat() {
  const [contacts, setContacts] = useState<User[]>([]);
  const [currentUser, setCurrentUser] = useState<User>();
  const [currentChat, setCurrentChat] = useState(undefined);
  const navigate = useNavigate();
  const socket = useRef<Socket>();

  useEffect(() => {
    const setUser = async () => {
      if (!localStorage.getItem("chat-app-user")) {
        navigate("/login");
      } else {
        setCurrentUser(
          await JSON.parse(localStorage.getItem("chat-app-user")!)
        );
      }
    };
    setUser();
  }, [navigate]);

  useEffect(() => {
    if (currentUser) {
      socket.current! = io(host);
      socket.current!.emit("add-user", currentUser._id);
    }
  }, [currentUser]);

  useEffect(() => {
    const getContats = async () => {
      if (currentUser) {
        const { data } = await getAllUsers(currentUser._id);
        setContacts(data);
      } else {
        // navigate("/setAvatar");
      }
    };
    getContats();
  }, [currentUser, navigate]);

  const handleChatChange = (chat: any) => {
    setCurrentChat(chat);
  };

  return (
    <>
      <S.Container>
        <div className="container">
          <Contacts
            contacts={contacts}
            currentUser={currentUser}
            changeChat={handleChatChange}
          />
          {currentChat === undefined ? (
            <Welcome currentUsername={currentUser?.username || ""} />
          ) : (
            <ChatContainer
              currentChat={currentChat}
              currentUser={currentUser}
              socket={socket}
            />
          )}
        </div>
      </S.Container>
    </>
  );
}

export default Chat;