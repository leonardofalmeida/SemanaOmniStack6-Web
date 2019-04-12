//Inicia o servidor

const express = require("express");
const mongoose = require("mongoose");

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

//Importando as rotas
app.use(require("./routes"));

app.listen(3333);
