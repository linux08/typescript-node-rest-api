import { Config } from 'knex';
import * as path from 'path';
const BASE_PATH = path.join(__dirname, 'src', 'server', 'db');

module.exports = {

  test: {
    client: 'pg',
    connection: 'postgres://postgres:david@localhost:5432/example',
    migrations: {
      directory: path.join(BASE_PATH, 'migrations'),
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds'),
    },
  },
  development: {
    client: 'pg',
    connection: 'postgres://postgres:david@localhost:5432/eexample',
    migrations: {
      directory: path.join(BASE_PATH, 'migrations'),
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds'),
    },
  },

};