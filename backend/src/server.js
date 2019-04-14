//Inicia o servidor

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const app = express();

//Definindo o cors
app.use(cors());

//Para aceitar tanto protocolo http quanto WS
const server = require("http").Server(app);
const io = require("socket.io")(server);

//Seta uma "sala" especifica para cada usuário
io.on("connection", socket => {
  socket.on("connectRoom", box => {
    socket.join(box);
  });
});

mongoose.connect(
  "mongodb+srv://omnistack:stackomni@cluster0-iw1km.mongodb.net/omnistack?retryWrites=true",
  {
    useNewUrlParser: true
  }
);

//Middleware io
app.use((req, res, next) => {
  req.io = io;
  return next(); // vai para o restante das rotas abaixo
});

//Entende os formatos json
app.use(express.json());

//Permite o envio de arquivos
app.use(express.urlencoded({ extended: true }));

//Redirecionamento para a tmp
app.use("/files", express.static(path.resolve(__dirname, "..", "tmp")));

//Importando as rotas
app.use(require("./routes"));

server.listen(3333);
