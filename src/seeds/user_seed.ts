import Knex from 'knex';

exports.seed = (knex: Knex) => seed(knex);

function seed(knex: Knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() => {
      return knex('users').insert({
        id: 1,
        email: 'david@yahoo.com',
        first_name: 'Jurassic Park',
        last_name: 'Science Fiction',
      });
    })
    .then(() => {
      return knex('users').insert({
        id: 2,
        email: 'bisi@yahoo.com',
        first_name: 'Ade Park',
        last_name: 'Captain Marvel',
      });
    })
    .then(() => {
      return knex('users').insert({
        id: 3,
        email: 'sam@yahoo.com',
        first_name: 'sam Park',
        last_name: 'Action Fiction',
      });
    });
}