import React, { useState, useEffect } from "react";
import * as S from "./styles"
import Chat from "../../assets/chat.png";
import { User } from "../../interfaces";
import defaultAvatar from "../../assets/defaultAvatar.png";
import cameraImage from "../../assets/camera.png";
import { Navigate, useNavigate } from "react-router-dom";

interface ContactsProps {
  contacts: any;
  currentUser: any;
  changeChat: (chat: any) => void;
}

const Contacts: React.FC<ContactsProps> = ({
  contacts,
  currentUser,
  changeChat,
}) => {
  const [currentUserName, setCurrentUserName] = useState<string>("");
  const [currentUserImage, setCurrentUserImage] = useState<string>("");
  const [currentSelected, setCurrentSelected] = useState<string>("");
  const [showEditButton, setShowEditButton] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const setUser = async () => {
      if (localStorage.getItem("chat-app-user")) {
        const data: User = await JSON.parse(
          localStorage.getItem("chat-app-user")!
        );
        console.log(data);
        setCurrentUserName(data.username);
        setCurrentUserImage(data.avatarImage);
      }
    };
    setUser();
  }, []);

  const changeCurrentChat = (index: any, contact: any) => {
    setCurrentSelected(index);
    changeChat(contact);
  };

  const handleEditButton = () => {
    navigate("/setAvatar");
  };

  return (
    <>
      <S.Container>
        <div className="brand">
          <img src={Chat} alt="logo" />
          <h3>Chat</h3>
        </div>
        <div className="contacts">
          {contacts.map((contact: any, index: any) => {
            return (
              <div
                key={contact._id}
                className={`contact ${
                  index === currentSelected ? "selected" : ""
                }`}
                onClick={() => changeCurrentChat(index, contact)}
              >
                <div className="avatar">
                  <img src={contact.avatarImage || defaultAvatar} alt="avatar do usuário" />
                  
                </div>
                <div className="username">
                  <h3>{contact.username}</h3>
                </div>
              </div>
            );
          })}
        </div>
        <div className="current-user">
          <div
            className="avatar"
            onMouseEnter={() => setShowEditButton(true)}
            onMouseLeave={() => setShowEditButton(false)}
          >
            <img src={currentUserImage || defaultAvatar} alt="avatar" />
            <p>Trocar Foto</p>
            {showEditButton && (
              <div className="camera-img" onClick={handleEditButton}>
                <img src={cameraImage} alt="camera" />
              </div>
            )}
          </div>
          <div className="username">
            <h2>{currentUserName}</h2>
          </div>
        </div>
      </S.Container>
    </>
  );
};

export default Contacts;