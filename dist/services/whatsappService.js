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
exports.sendWhatsAppMessage = exports.handleIncomingMessage = void 0;
const axios_1 = __importDefault(require("axios"));
const dotenvConfig_1 = require("../config/dotenvConfig");
const WHATSAPP_API_URL = `https://graph.facebook.com/v17.0/${dotenvConfig_1.config.PHONE_NUMBER_ID}/messages`;
// Función para manejar mensajes entrantes
const handleIncomingMessage = (message) => __awaiter(void 0, void 0, void 0, function* () {
    const from = message.from;
    const text = message.text.body;
    console.log(`📩 Mensaje recibido de ${from}: ${text}`);
    // Responder al usuario
    yield (0, exports.sendWhatsAppMessage)(from, `¡Hola! Recibí tu mensaje: ${text}`);
});
exports.handleIncomingMessage = handleIncomingMessage;
// Función para enviar mensajes a WhatsApp
const sendWhatsAppMessage = (to, message) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        yield axios_1.default.post(WHATSAPP_API_URL, {
            messaging_product: "whatsapp",
            to,
            text: { body: message },
        }, {
            headers: {
                Authorization: `Bearer ${dotenvConfig_1.config.WHATSAPP_TOKEN}`,
                "Content-Type": "application/json",
            },
        });
    }
    catch (error) {
        console.error("❌ Error enviando mensaje:", ((_a = error.response) === null || _a === void 0 ? void 0 : _a.data) || error.message);
    }
});
exports.sendWhatsAppMessage = sendWhatsAppMessage;
