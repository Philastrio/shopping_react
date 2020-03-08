import express from "express";
import mongoose from "mongoose";
import path from "path";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import config from "./config";

// routes
import itemsRoutes from "./routes/api/items";
import userRoutes from "./routes/api/user";
import authRoutes from "./routes/api/auth";

const { MONGO_URI, MONGO_DB_NAME } = config;

const app = express();

// Cors middlewares
app.use(cors());

// Cors middlewares
app.use(morgan("dev"));

// BodyParser middleware
app.use(bodyParser.json());

//DB config
const db = `${MONGO_URI}/${MONGO_DB_NAME}`;

// Connect to Mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  }) // Adding new mongo url parser
  .then(() => console.log("MongoDB connecting Success!!"))
  .catch(err => console.log(err));

// Use routes
app.use("/api/items", itemsRoutes);

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

export default app;
