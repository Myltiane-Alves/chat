const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const routes = require("./routes");

const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

mongoose.connect(
  "mongodb+srv://myltiane:95325414@cluster0.zobvf4z.mongodb.net/",
  // "mongodb+srv://chat:<password>@cluster0.ka4wqxg.mongodb.net/",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(cors());
app.use(express.json());
app.use(routes);

io.on("connection", (socket) => {
  socket.on("messageSend", (data) => {
    socket.broadcast.emit("messageReceived", data);
  });
});

server.listen(3333);
