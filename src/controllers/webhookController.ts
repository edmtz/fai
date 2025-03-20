import { Request, Response } from "express";
import { handleIncomingMessage } from "../services/whatsappService";

export const webhookHandler = async (req: Request, res: Response) => {
  const body = req.body;

  if (body.object && body.entry?.[0]?.changes?.[0]?.value?.messages) {
    const message = body.entry[0].changes[0].value.messages[0];
    await handleIncomingMessage(message);
  }

  res.sendStatus(200);
};
