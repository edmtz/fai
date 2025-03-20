"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenvConfig_1 = require("./config/dotenvConfig");
const webhook_1 = __importDefault(require("./routes/webhook"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Rutas
app.use("/api", webhook_1.default);
app.listen(dotenvConfig_1.config.PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${dotenvConfig_1.config.PORT}`);
});
