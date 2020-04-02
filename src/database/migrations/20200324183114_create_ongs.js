// Metodo Up é responsavel pela criação da tabela.
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function (table) {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatzapp').notNullable();
    table.string('city').notNullable();  
    table.string('uf', 2).notNullable();
  })
};

// Metodo Down é deleta a tabela.
exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};