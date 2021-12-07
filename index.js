require("dotenv").config();
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/src/index.html");
});

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    console.log("message: " + msg);
  });
});

app.get("/clientlist", (req, res) => {
  let tempclinets = [];
  for (let j in io.engine.clients) {
    tempclinets.push(j);
  }
  res.send({
    count: io.engine.clientsCount,
    list: tempclinets,
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
