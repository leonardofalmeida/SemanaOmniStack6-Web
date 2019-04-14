//Inicia o servidor

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

mongoose.connect(
  "mongodb+srv://omnistack:stackomni@cluster0-iw1km.mongodb.net/omnistack?retryWrites=true",
  {
    useNewUrlParser: true
  }
);

//Entende os formatos json
app.use(express.json());

//Permite o envio de arquivos
app.use(express.urlencoded({ extended: true }));

//Redirecionamento para a tmp
app.use("/files", express.static(path.resolve(__dirname, "..", "tmp")));

//Importando as rotas
app.use(require("./routes"));

app.listen(3333);
