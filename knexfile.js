const path = require('path');
const BASE_PATH = require('path').join(__dirname, 'src');


module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'myapp_test',
      user: 'david',
      password: 'david'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: path.join(BASE_PATH, 'migrations'),
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds'),
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'myapp_test',
      user: 'david',
      password: 'david'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'myapp_test',
      user: 'david',
      password: 'david'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
