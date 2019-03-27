"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seed = function (knex) { return seed(knex); };
function seed(knex) {
    // Deletes ALL existing entries
    return knex('users').del()
        .then(function () {
        return knex('users').insert({
            id: 1,
            email: 'david@yahoo.com',
            first_name: 'Jurassic Park',
            last_name: 'Science Fiction',
        });
    })
        .then(function () {
        return knex('users').insert({
            id: 2,
            email: 'bisi@yahoo.com',
            first_name: 'Ade Park',
            last_name: 'Captain Marvel',
        });
    })
        .then(function () {
        return knex('users').insert({
            id: 3,
            email: 'sam@yahoo.com',
            first_name: 'sam Park',
            last_name: 'Action Fiction',
        });
    });
}
