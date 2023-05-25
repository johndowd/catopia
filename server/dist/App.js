"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class App {
    constructor() {
        this.server = (0, express_1.default)();
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.server.use(express_1.default.json());
    }
    routes() {
        this.server.get('/', (req, res) => {
            res.send('Hello, World!');
        });
    }
    start(port) {
        this.server.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    }
}
exports.default = App;
//# sourceMappingURL=App.js.map