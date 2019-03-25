"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var user_1 = require("./controllers/user");
var Routes = /** @class */ (function () {
    function Routes() {
        this.router = express_1.default.Router();
        this.userController = new user_1.UserController();
        this.config();
    }
    Routes.prototype.config = function () {
        var _this = this;
        this.router.get('/test', function (req, res) {
            return _this.userController.test(req, res);
        });
    };
    return Routes;
}());
exports.routes = new Routes().router;
