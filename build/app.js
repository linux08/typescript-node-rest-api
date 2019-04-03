"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var ts_express_decorators_1 = require("ts-express-decorators");
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser")); // used to parse the form data that you pass in the request
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super.call(this) || this;
        _this.app = express_1.default();
        return _this;
        // this.config();
    }
    App.prototype.$onMountingMiddlewares = function () {
        this.use(body_parser_1.default.json())
            .use(body_parser_1.default.urlencoded({
            extended: true
        }));
    };
    App.prototype.startApp = function () {
        this.start();
    };
    App.prototype.$onReady = function () {
        console.log('Server started...');
    };
    App.prototype.$onServerInitError = function (err) {
        console.error(err);
    };
    App = __decorate([
        ts_express_decorators_1.ServerSettings({
            acceptMimes: ["application/json"],
            rootDir: "" + __dirname,
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
    return App;
}(ts_express_decorators_1.ServerLoader));
exports.App = App;
// export default new App().app;
