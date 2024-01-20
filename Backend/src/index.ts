import express from "express";
import { config } from "dotenv";

config();

const app = express();
// middlewear
app.use(express.json());

//connectors and listneres

app.listen(5000, () => console.log("Server open"));
