
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('type_contact').del()
    .then(function () {
      // Inserts seed entries
      return knex('type_contact').insert([
        {id: 1, name: 'Telefone'},
        {id: 2, name: 'Celular'},
        {id: 3, name: 'E-mail'},
        {id: 4, name: 'Outros'}
      ]);
    });
};
