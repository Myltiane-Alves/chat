import React, { useEffect, useState } from 'react';
import * as S from './styles';
import { useNavigate } from 'react-router';
import { User } from '../../interfaces/user';
// import defaultAvatar from "../../img/DefaultAvatar.png";
import defaultAvatar from "../../img/DefaultAvatar.png";

interface ContactsProps  {
    contacts: any;
    currentUser: any;
    changeChat: (chat: any) => void;
}

const AsideContent: React.FC<ContactsProps> = ({contacts, currentUser, changeChat}) => {
    const [currentChat, setCurrentChat] = useState("");
    const [currentUserName, setCurrentUserName] = useState("");
    const [currentUserImage, setCurrentUserImage] = useState("");
    const [currentSelected, setCurrentSelected] = useState("");
    const [showEditButton, setShowEditButton] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const setUser = async () => {
            if(localStorage.getItem("chat-app-user")) {
                const data: User = await JSON.parse(localStorage.getItem("chat-app-user")!)
                setCurrentUserName(data.username)
                setCurrentUserImage(data.avatarImage)
            }
        }
        setUser();
    }, []);

    const changeCurrentChat = (index: any, contact: any) => {
        setCurrentSelected(index)
        changeChat(contact);
    }

    const handleEditButton = () => {
        navigate("/setAvatar");
    }

    return (
        <S.Container>
            <header className='brand'>
                <img src="/img/chat.png" alt="logo" />
                <h3>Chat</h3>
            </header>
            <div className="contacts">
                {contacts.map((contact: any, index: any) => {
                    return (
                        <div 
                            key={contact._id}
                            className={`contact ${currentSelected === index ? "selected" : ""}`}
                            onClick={() => changeCurrentChat(index, contact)}
                        >
                            <div className="avatar">
                                <img src={contact.avatarImage || defaultAvatar} alt="avatar do usuário" />
                            </div>
                            <div className="username">
                                <h3>Myltiane</h3>
                            </div>
                        </div>

                    )
                })}
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