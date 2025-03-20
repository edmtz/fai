import express from "express";
import { config } from "./config/dotenvConfig";
import webhookRoutes from "./routes/webhook";
import exampleRoutes from "./routes/example";

const app = express();
app.use(express.json());

// Rutas
app.use("/api", webhookRoutes);
app.use("/api", exampleRoutes);

app.listen(config.PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${config.PORT}`);
});