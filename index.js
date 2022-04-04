require("dotenv").config();
const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const http = require("http");
const https = require("https");
const server = https.createServer(
  {
    key: fs.readFileSync(
      "/opt/bitnami/letsencrypt/certificates/socketio.lanigiro.io.key"
    ),
    cert: fs.readFileSync(
      "/opt/bitnami/letsencrypt/certificates/socketio.lanigiro.io.crt"
    ),
  },
  app
);
const { Server } = require("socket.io");

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

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

server.listen(443, () => {
  console.log("listening on *:443");
});
