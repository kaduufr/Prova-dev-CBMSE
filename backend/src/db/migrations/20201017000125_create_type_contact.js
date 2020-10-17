
exports.up = function(knex) {
    return knex.schema.createTable('type_contact', table => {
        table.integer('id').primary().notNullable()
        table.string('name', 50).notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('type_contact')
};
