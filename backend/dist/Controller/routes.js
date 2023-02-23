"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pessoasRouter = void 0;
const express_1 = __importDefault(require("express"));
const mongodb_1 = require("mongodb");
const database_services_1 = require("../Services/database.services");
exports.pessoasRouter = express_1.default.Router();
exports.pessoasRouter.use(express_1.default.json());
exports.pessoasRouter.get("/", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pessoas = yield database_services_1.collections.pessoas.find({}).toArray();
        res.status(200).send(pessoas);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}));
exports.pessoasRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const id = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id;
    try {
        const query = { _id: new mongodb_1.ObjectId(id) };
        const game = yield database_services_1.collections.pessoas.findOne(query);
        if (game) {
            res.status(200).send(game);
        }
    }
    catch (error) {
        res.status(404).send(`Pessoa não encontrada: ${req.params.id}`);
    }
}));
exports.pessoasRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const novaPessoa = req.body;
        const result = yield database_services_1.collections.pessoas.insertOne(novaPessoa);
        result
            ? res.status(201).send(JSON.stringify(`Cadastrado nova pessoa: ${result.insertedId}`))
            : res.status(500).send("Falha ao cadastrar");
    }
    catch (error) {
        console.error(error);
        res.status(400).send(error.message);
    }
}));
exports.pessoasRouter.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const id = (_b = req === null || req === void 0 ? void 0 : req.params) === null || _b === void 0 ? void 0 : _b.id;
    try {
        const newdata = req.body;
        const query = { _id: new mongodb_1.ObjectId(id) };
        const result = yield database_services_1.collections.pessoas.updateOne(query, { $set: newdata });
        result
            ? res.status(200).send(`Atualizado com sucesso o id: ${id}`)
            : res.status(304).send(`ID: ${id} não atualizado`);
    }
    catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
}));
exports.pessoasRouter.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    const id = (_c = req === null || req === void 0 ? void 0 : req.params) === null || _c === void 0 ? void 0 : _c.id;
    try {
        const query = { _id: new mongodb_1.ObjectId(id) };
        const result = yield database_services_1.collections.pessoas.deleteOne(query);
        if (result && result.deletedCount) {
            res.status(202).send(`Removido com sucesso id: ${id}`);
        }
        else if (!result) {
            res.status(400).send(`Falha ao deletar o id: ${id}`);
        }
        else if (!result.deletedCount) {
            res.status(404).send(`id: ${id} não existe`);
        }
    }
    catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
}));
//# sourceMappingURL=routes.js.map