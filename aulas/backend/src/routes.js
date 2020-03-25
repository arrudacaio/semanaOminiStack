const express = require("express");
const crypto = require("crypto");

const connection = require("./database/connection"); // Importando a conexão com o dB.

const routes = express.Router(); // Desacoplando o módulo de rotas do express em uma nova variável

routes.post("/ongs", (req, res) => {
  const { name, email, whatsapp, city, uf } = req.body;
  const id = crypto.randomBytes(4).toString("HEX"); // Gerando o id de cada ong de maneira criptografada

  return res.json();
});

module.exports = routes; // Permitindo que outros arquivos possam importar esse arquivo
