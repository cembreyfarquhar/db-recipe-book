
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {name: 'flour'},
        {name: 'corn'},
        {name: 'milk'}
      ]);
    });
};
