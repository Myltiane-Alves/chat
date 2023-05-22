import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "react-avatar-edit";
import * as S from "./styles";
import { setProfileAvatar } from "../../api";
import { User } from "../../interfaces/user";
import { ToastContainer, toast } from "react-toastify";
import { toastOptions } from "../../utils/ToastOptions";

const SetAvatar = () => {
  const navigate = useNavigate();
  const [preview, setPreview] = useState<string>("");

  const handleClose = () => {
    setPreview("");
  };
  const handleCrop = (view: string) => {
    setPreview(view);
  };
  const handleCancel = () => {
    navigate("/");
  };

  const handleSave = async () => {
    const user: User = await JSON.parse(localStorage.getItem("chat-app-user")!);
    const { data } = await setProfileAvatar(user._id, preview);
    if (data.isSet) {
      user.isAvatarImageSet = true;
      user.avatarImage = data.image;
      localStorage.setItem("chat-app-user", JSON.stringify(user));
      navigate("/");
    } else {
      toast.error("Error setting avatar. Please try again.", toastOptions);
    }
  };
  return (
    <>
      <S.Container>
        <div className="avatarSelector">
          <Avatar
            width={window.innerWidth < 320 ? 250 : 300}
            height={300}
            src={undefined}
            onClose={handleClose}
            onCrop={handleCrop}
            labelStyle={{ color: "white", fontSize: "2rem" }}
            label="Choose an image"
          />
        </div>
        <div className="buttons">
          <button
            className="submit-btn"
            onClick={handleSave}
            disabled={preview ? false : true}
          >
            Save
          </button>
          <button className="submit-btn cancel" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </S.Container>
      <ToastContainer />
    </>
  );
};

export default SetAvatar;
