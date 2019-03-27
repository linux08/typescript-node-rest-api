"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var body_parser_1 = __importDefault(require("body-parser")); // used to parse the form data that you pass in the request
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var routes_1 = require("./routes");
var App = /** @class */ (function () {
    function App() {
        this.app = express_1.default();
        this.config();
    }
    App.prototype.config = function () {
        var controllers = [];
        var normalizedPath = require("path").join(__dirname, "controllers");
        require("fs").readdirSync(normalizedPath).forEach(function (file) {
            if (file.indexOf('base') === -1)
                controllers.push(require("./controllers/" + file).default);
        });
        // tslint:disable-next-line:no-unused-expression
        this.app.use(morgan_1.default('dev'));
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
