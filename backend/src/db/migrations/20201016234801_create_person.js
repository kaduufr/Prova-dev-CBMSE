
exports.up = function(knex) {
  return knex.schema.createTable('person', table => {
      table.increments('id').primary()
      table.string('name', 50).notNullable()
      table.string('surname', 50).notNullable()

      table.timestamp('created_at').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('person')
};
