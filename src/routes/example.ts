import express from "express";
import { exampleEndpoint } from "../controllers/exampleController";

const router = express.Router();

router.get("/test", exampleEndpoint);

export default router;



