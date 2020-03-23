const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    evento: "Semana OmniStack 11.0",
    aluno: "Caio Arruda"
  });
});

app.listen(3333);
