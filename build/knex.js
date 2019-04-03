"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var path = __importStar(require("path"));
var BASE_PATH = path.join(__dirname, 'src', 'server', 'db');
var KnexConnection = require('knex')({
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
exports.default = KnexConnection;
