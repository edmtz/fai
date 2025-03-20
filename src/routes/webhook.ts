import { Router } from "express";
import { verifyWebhook, webhookHandler } from "../controllers/webhookController";

const router = Router();
router.get("/webhook", verifyWebhook);
router.post("/webhook", webhookHandler);

export default router;