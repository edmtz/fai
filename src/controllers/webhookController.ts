import { Request, Response } from "express";
import { handleIncomingMessage } from "../services/whatsappService";
import { config } from "../config/dotenvConfig";


export const webhookHandler = async (req: Request, res: Response) => {
  const body = req.body;

  if (body.object && body.entry?.[0]?.changes?.[0]?.value?.messages) {
    const message = body.entry[0].changes[0].value.messages[0];
    await handleIncomingMessage(message);
  }

  res.sendStatus(200);
};

// Función para validar el webhook de WhatsApp
export const verifyWebhook = (req: Request, res: Response) => {
  const mode = req.query["hub.mode"];
  const token = req.query["hub.verify_token"];
  const challenge = req.query["hub.challenge"];

  console.log("🔍 Token recibido:", token);
  console.log("🔐 Token esperado:", config.VERIFY_TOKEN);

  if (mode === "subscribe" && token === config.VERIFY_TOKEN) {
    console.log("✅ Webhook verificado correctamente.");
    res.status(200).send(challenge);
  } else {
    console.log("❌ Error: Token de verificación incorrecto.");
    res.status(403).send("Forbidden");
  }
};