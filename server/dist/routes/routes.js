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
const userData = {
    users: [
        {
            id: 1,
            email: 'jd831',
        }
    ]
};
const routes = (0, express_1.Router)();
routes.get('/', (req, res) => {
    return res.json({ message: 'API endpoint working' });
});
routes.get('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = JSON.stringify(userData.users);
    return res.json({ users });
}));
exports.default = routes;
//# sourceMappingURL=routes.js.map