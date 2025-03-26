import express from "express";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";

import weatherRoutes from "./routes/weatherRouter.mjs";

dotenv.config();

const limiter = rateLimit({ windowMs: 15 * 6000, max: 100 });

const app = express();
const port = process.env.PORT;

app.use(limiter);

app.use("/", weatherRoutes);

app.listen(port, () => {
  console.log(`App listening on ${port}`);
});
