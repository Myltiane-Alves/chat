import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

import userRoutes from "./routes/userRoutes";
import messagesRoutes from "./routes/messagesRoute";

const socket = require("socket.io");

declare global {
    var onlineUsers: any;
    var chatSocket: any;
}

const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json());

app.use("/api/auth", userRoutes);
app.use("/api/messages", messagesRoutes);

mongoose
    .connect(process.env.MONGODB_URL!)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err: Error) => {
        console.log(err.message);
    });

const server = app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
});

const io = socket(server, {
    cors: {
        origin: "*",
        credentials: true,
    }
});

global.onlineUsers = new Map();

io.on("connection", (socket: any) => { 
    global.chatSocket = socket;
    socket.on("add-user", (userUd: string) => {
        onlineUsers.set(userUd, socket.id);
    });
    socket.on("send-msg", (data: any) => { 
        const sendUserSocket = onlineUsers.get(data.to);
        if(sendUserSocket) {
            socket.to(sendUserSocket).emit("msg-recieve", data.message)
        }
    });
});