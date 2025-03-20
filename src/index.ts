import express from "express";
import { config } from "./config/dotenvConfig";
import webhookRoutes from "./routes/webhook";

const app = express();
app.use(express.json());

// Rutas
app.use("/api", webhookRoutes);

app.listen(config.PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${config.PORT}`);
});
