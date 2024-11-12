import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

const corsOrigin = ["http://localhost:5173", "http://localhost:3000"];

app.use(
  cors({
    origin: corsOrigin,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    prefilightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  morgan(":method :url :status :res[content-length] - :respi=onse-time ms")
);

app.get("/health", (_, res) => {
  return res.status(200).json({
    message: "health check",
  });
});

app.use((_, res) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

app.listen(8090, () => console.log("Listening to 8090..."));
