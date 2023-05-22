import { Schema, model } from "mongoose";

interface ChatUser {
    username: string;
    cpf: string;
    email: string;
    password: string;
    isAvatarSet: boolean;
    avatarImg: string;
}

const userSchema = new Schema<ChatUser>({
    username: {
        type: String,
        required: true,
        min: 4,
        unique: true,
        max: 20,
    },
    cpf: {
        type: String,
        required: true,
        min: 11,
        max: 11,
        unique: true
    },
    email: {
        type: String,
        required: true,
        max: 50,
        min: 13,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 8,
        max: 50
    },
    avatarImg: {
        type: String,
        default: ""
    },
})

export default model("ChatUsers", userSchema, "users")