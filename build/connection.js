"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var knex_1 = __importDefault(require("knex"));
var Connection = /** @class */ (function () {
    function Connection() {
    }
    Connection.prototype.knex = function () {
        return knex_1.default(exportConfig());
    };
    return Connection;
}());
exports.Connection = Connection;
function exportConfig() {
    var environment = process.env.NODE_ENV || 'development';
    return require('./knexfile')[environment];
}
