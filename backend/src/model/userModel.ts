import { Schema, model } from "mongoose";
import { ChatUser } from "../interfaces/ChatUser";

const userSchema = new Schema<ChatUser>({
    username: {
        type: String,
        required: true,
        min: 4,
        max: 20,
        unique: true
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

export default model("ChatUser", userSchema, "users")