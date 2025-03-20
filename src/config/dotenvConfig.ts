import dotenv from "dotenv";

dotenv.config();

export const config = {
  PORT: process.env.PORT || 3000,
  PHONE_NUMBER_ID: process.env.PHONE_NUMBER_ID || "",
  WHATSAPP_TOKEN: process.env.WHATSAPP_TOKEN || "",
  VERIFY_TOKEN: process.env.VERIFY_TOKEN || "",
};