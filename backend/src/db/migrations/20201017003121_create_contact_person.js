
exports.up = function(knex) {
    return knex.schema.createTable('contact_person', table => {
        table.uuid('id').primary().notNullable()
        table.string('contact', 50).notNullable()

        table.uuid('person_id').notNullable()
        table.integer('type_contact_id').notNullable()

        table.foreign('person_id').references('id').inTable('person')
        table.foreign('type_contact_id').references('id').inTable('type_contact')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('contact_person')
};
