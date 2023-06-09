"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = __importDefault(require("./App"));
const app = new App_1.default();
require('dotenv').config();
const port = parseInt(process.env.SERVER_PORT);
app.start(port || 33333);
//# sourceMappingURL=server.js.map