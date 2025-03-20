import express from "express";
import { config } from "./config/dotenvConfig";
import webhookRoutes from "./routes/webhook";
import exampleRoutes from "./routes/example";

const app = express();
app.use(express.json());

// Rutas de prueba
app.use("/api", webhookRoutes);
app.use("/api", exampleRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${port}`);
});

export default app;