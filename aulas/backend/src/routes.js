const express = require("express");

const routes = express.Router(); // Desacoplando o módulo de rotas do express em uma nova variável

routes.post("/users", (req, res) => {
  const body = req.body;
  console.log(body);
  return res.json({
    evento: "Semana OmniStack 11.0",
    aluno: "Caio Arruda"
  });
});

module.exports = routes; // Permitindo que outros arquivos possam importar esse arquivo
