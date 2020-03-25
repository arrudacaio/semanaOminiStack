const knex = require("knex"); // Importando o knex
const configuration = require("../../knexfile"); // Importando as configurações do db

const connection = knex(configuration.development); // Criando a conexão com o dataBase

module.exports = connection; // Exportando a conexão do db
