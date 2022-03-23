require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/src/index.html");
});

io.on("connection", (socket) => {
  socket.on("updatelocation", (msg) => {
    console.log("location: " + msg);
    socket.emit("updatelocation", msg);
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

app.post("/updatelocation", (req, res) => {});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
