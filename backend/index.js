const express = require("express");

const app = express();

/*
    Criação de Rotas utilizando diferentes métodos:
    ---MÉTODOS HTTP: ------------------------
        get: buscar/receber  informações
        post: criar alguma informação
        put: editar um recurso da minha aplicação
        delete: deletar 

    --- Tipos de paramêtros dentro do Express-----
    Query Params: (Utilizados apenas no método get! São usados para filtros, ordenação, paginação...)
    pode ser acessado através de request.query

    Route Params:
    Body:

*/
app.get("/", (request, response) => {
  console.log(request.query);
  return response.json({ message: "Hello OmniStack" });
});

app.listen(3333);
