const express = require("express");

const routes = express.Router();

routes.get("/teste", (req, res) => {
  //middleware
  return res.send("Hello World!");
});

module.exports = routes;
