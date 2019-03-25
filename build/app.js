"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var body_parser_1 = __importDefault(require("body-parser")); // used to parse the form data that you pass in the request
var express_1 = __importDefault(require("express"));
// import { Logger } from './middleware/logger';
var routes_1 = require("./routes");
var App = /** @class */ (function () {
    function App() {
        this.app = express_1.default();
        this.config();
    }
    App.prototype.config = function () {
        // tslint:disable-next-line:no-unused-expression
        // new Logger(this.app);
        this.app.use(body_parser_1.default.json()); // support application/json type post data
        // support application/x-www-form-urlencoded post data
        this.app.use(body_parser_1.default.urlencoded({
            extended: false,
        }));
        // Routing
        this.app.use(routes_1.routes);
    };
    return App;
}());
exports.default = new App().app;
