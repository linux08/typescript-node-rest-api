"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ts_express_decorators_1 = require("ts-express-decorators");
const body_parser_1 = __importDefault(require("body-parser")); // used to parse the form data that you pass in the request
const morgan_1 = __importDefault(require("morgan"));
let App = class App extends ts_express_decorators_1.ServerLoader {
    constructor() {
        super();
    }
    $onMountingMiddlewares() {
        this.use(body_parser_1.default.json())
            .use(body_parser_1.default.urlencoded({
            extended: true
        }))
            .use(morgan_1.default('dev'));
    }
    startApp() {
        this.start();
    }
    $onReady() {
        console.log('Server started...');
    }
    $onServerInitError(err) {
        console.error(err);
    }
};
App = __decorate([
    ts_express_decorators_1.ServerSettings({
        acceptMimes: ["application/json"],
        rootDir: `${__dirname}`,
        port: process.env.PORT || 3000,
        mount: {
            "/": "${rootDir}/controllers/**\/*.ts"
        },
        componentsScan: [
            "${rootDir}/services/**/**.ts"
        ],
    }),
    __metadata("design:paramtypes", [])
], App);
exports.App = App;
module.exports = new App().startApp();
// export default new App().app;
