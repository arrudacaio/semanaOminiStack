const express = require("express");
const routes = require("./routes"); // Importando routes

const app = express();

app.use(express.json()); // Comunicando ao express que vá no corpo da minha requisição e conversa o JSON em um objeto JS

app.use(routes);

app.listen(3333);

/**
 * MÉTODOS HTTP
 *
 * GET:  Buscar uma informação no back-end
 * POST: Criar uma informação no back-end
 * PUT: Editar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/** Tipos de Parâmetros
 *
 * Query Params: Parâmetros nomeados enviados na rota após o "?" (Servem para: Filtros, paginção etc)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 *
 */
