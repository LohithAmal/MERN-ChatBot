import express from "express";

const app = express();
// middlewear
app.use(express.json());

//connectors and listneres

app.listen(5000, () => console.log("Server open"));
