import { Schema, model } from "mongoose";

interface ChatUser {
  username: string;
  cpf: string;
  email: string;
  password: string;
  isAvatarSet: boolean;
  avatarImage: string;
}

const userSchema = new Schema<ChatUser>({
  username: { type: String, required: true, min: 3, max: 20, unique: true },
  cpf: { type: String, required: true, unique: true, min: 11, max: 11 },
  email: { type: String, required: true, unique: true, max: 50 },
  password: { type: String, required: true, max: 50 },
  isAvatarSet: {
    default: false,
  },
  avatarImage: { type: String, default: "" },
});

export default model("ChatUser", userSchema);

