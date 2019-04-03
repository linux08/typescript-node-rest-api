
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          email: 'david@yahoo.com',
          first_name: 'Jurassic Park',
          last_name: 'Science Fiction',
          password: 'password'
        },
        {
          id: 2,
          email: 'bisi@yahoo.com',
          first_name: 'Ade Park',
          last_name: 'Captain Marvel',
          password: 'password',
        },
        {
          id: 3,
          email: 'sam@yahoo.com',
          first_name: 'sam Park',
          last_name: 'Action Fiction',
          password: 'password',
        }
      ]);
    });
};
