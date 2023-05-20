import * as S from './styles';
import { IoMdSend } from "react-icons/io";
import { BsFillCameraFill } from "react-icons/bs";
import { BsEmojiSmileFill } from "react-icons/bs";
import ImageUploading, {
    ImageListType,
    ImageType,
  } from "react-images-uploading";
import { useState } from 'react';

const ChatInput = () => {
    const [images] = useState([])
    return (
        <S.Container>
            <div className="btnContainer">
                <div className="emoji">
                    <BsEmojiSmileFill />
                    <div className="emoji-picker-react">
                        <img src="" alt="" />
                    </div>
                    
                </div>

            </div>
            <form className="inputContainer" action="">
                <input
                    type="text"
                    placeholder="digite sua mensagem aqui"
                    // onChange={(e) => setMsg(e.target.value)}
                    // value={msg}
                />
                <button type="submit">
                  <IoMdSend />
                </button>
            </form>
            <div className="imageSend">
                <ImageUploading
                    multiple={false}
                    value={images}
                    onChange={console.log}
                >
                    {({ onImageUpload, isDragging, dragProps}) => ( 
                        <div className="updload__image-wrapper">
                            <button 
                                style={isDragging ? { color: 'red' } : undefined}
                                type="submit"
                                className="addImageBtn"  
                                onClick={onImageUpload}
                                {...dragProps}  
                            >
                                
                                <BsFillCameraFill  />
                            </button>
                        </div>

                    )}
                </ImageUploading>
            </div>
        </S.Container>
    )
}

export default ChatInput;