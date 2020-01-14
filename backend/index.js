const express = require("express");

const app = express();

/*
    Criação de Rotas utilizando diferentes métodos:
    ---MÉTODOS HTTP: ------------------------
        get: buscar/receber  informações
        post: criar alguma informação
        put: editar um recurso da minha aplicação
        delete: deletar 

*/
app.get("/", (request, response) => {
  return response.json({ message: "Hello Caio" });
});

app.listen(3333);
