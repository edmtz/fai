import axios from "axios";
import { config } from "../config/dotenvConfig";

const WHATSAPP_API_URL = `https://graph.facebook.com/v17.0/${config.PHONE_NUMBER_ID}/messages`;

// Función para manejar mensajes entrantes
export const handleIncomingMessage = async (message: any) => {
  const from = message.from;
  const text = message.text.body;

  console.log(`📩 Mensaje recibido de ${from}: ${text}`);

  // Responder al usuario
  await sendWhatsAppMessage(from, `¡Hola! Recibí tu mensaje: ${text}`);
};

// Función para enviar mensajes a WhatsApp
export const sendWhatsAppMessage = async (to: string, message: string) => {
  try {
    await axios.post(
      WHATSAPP_API_URL,
      {
        messaging_product: "whatsapp",
        to,
        text: { body: message },
      },
      {
        headers: {
          Authorization: `Bearer ${config.WHATSAPP_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error:any) {
    console.error("❌ Error enviando mensaje:", error.response?.data || error.message);
  }
};
