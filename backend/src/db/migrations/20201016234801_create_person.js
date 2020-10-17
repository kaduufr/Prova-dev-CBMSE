
exports.up = function(knex) {
  return knex.schema.createTable('person', table => {
      table.uuid('id').primary().notNullable()
      table.string('name', 50).notNullable()
      table.string('surname', 50).notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('person')
};
