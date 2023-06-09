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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fs_1 = require("fs");
const dataPath = './data/data.json';
const routes = (0, express_1.Router)();
routes.get('/', (req, res) => {
    return res.json({ message: 'API endpoint working' });
});
routes.get('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const json = (0, fs_1.readFile)(dataPath, 'utf8', (err, data) => {
        console.log(data, err);
    });
    return res.json({ json });
}));
exports.default = routes;
//# sourceMappingURL=routes.js.map