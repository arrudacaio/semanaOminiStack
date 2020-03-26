const express = require("express");

const OngController = require("./Controllers/OngController");
const IncidentController = require("./Controllers/IncidentController");
const ProfileController = require("./Controllers/ProfileController");
const SessionController = require("./Controllers/SessionController");

const routes = express.Router(); // Desacoplando o módulo de rotas do express em uma nova variável

routes.post("/sessions", SessionController.create); // Login

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);

routes.get("/profile", ProfileController.index);

routes.get("/incidents", IncidentController.index);
routes.post("/incidents", IncidentController.create);
routes.delete("/incidents/:id", IncidentController.delete);

module.exports = routes; // Permitindo que outros arquivos possam importar esse arquivo
