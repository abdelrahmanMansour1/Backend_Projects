import express from "express";

import getWeather from "../controllers/weatherController.mjs";
const router = express.Router();

router.get("/weather/:city", getWeather);

export default router;
