import Knex, { Config } from 'knex';
import * as path from 'path';
const BASE_PATH = path.join(__dirname, 'src', 'server', 'db');

const KnexConnection = require('knex')({
  client: 'pg',
  version: '7.2',
  connection: {
    host: '127.0.0.1',
    user: 'david',
    password: 'david',
    database: 'myapp_test'
  },
  migrations: {
    directory: path.join(BASE_PATH, 'migrations'),
  },
  seeds: {
    directory: path.join(BASE_PATH, 'seeds'),
  },
});

export default KnexConnection;