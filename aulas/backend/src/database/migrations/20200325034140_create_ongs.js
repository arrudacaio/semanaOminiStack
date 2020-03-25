//Método up é responsável pela criação da tabela
exports.up = function(knex) {
  return knex.schema.createTable("ongs", function(table) {
    table.string("id").primary();
    table.string("name").notNullable();
    table.string("email").notNullable();
    table.string("whatsapp").notNullable();
    table.string("city").notNullable();
    table.string("uf", 2).notNullable();
  });
};

// Serve para quando voce precisar voltar atrás,
// o que ele precisa fazer, neste caso é deletar a tabela criada
exports.down = function(knex) {
  return knex.schema.dropTable("ongs");
};
