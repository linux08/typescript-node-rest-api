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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ts_express_decorators_1 = require("ts-express-decorators");
const knex_1 = __importDefault(require("../knex"));
let UserController = class UserController {
    constructor() {
        this.connector = new knex_1.default(); //.knex();
    }
    test(req, res) {
        res.send('test');
    }
    getUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.connector.table('users')
                    .select('*');
                res.send(data);
            }
            catch (err) {
                res.status(500).send({ error: err.message });
            }
        });
    }
    getUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const data = yield this.connector.table('users').whereIn('id', id);
                res.send(data);
            }
            catch (err) {
                res.status(500).send({ error: err.message });
            }
        });
    }
    updateUserInfo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const data = yield this.connector.table('users').whereIn('id', id).update(req.body).returning('*');
                res.send(data);
            }
            catch (err) {
                res.status(500).send({ error: err.message });
            }
        });
    }
};
__decorate([
    ts_express_decorators_1.Get("/test"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "test", null);
__decorate([
    ts_express_decorators_1.Get("/users"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUser", null);
__decorate([
    ts_express_decorators_1.Get("/users/:id"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUserById", null);
__decorate([
    ts_express_decorators_1.Put("/users/:id"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateUserInfo", null);
UserController = __decorate([
    ts_express_decorators_1.Controller("/"),
    __metadata("design:paramtypes", [])
], UserController);
exports.UserController = UserController;
