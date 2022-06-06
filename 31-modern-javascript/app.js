import fs from "fs";
import express from "express";
import { resHandler } from "./response-handlers.js";

const app = express();

app.get("/", resHandler);

app.listen(3000);
