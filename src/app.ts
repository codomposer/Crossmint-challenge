import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

require("dotenv").config();

const app = express();
app.use(bodyParser.json());

app.use(cors());

app.get("/");

export default app;
