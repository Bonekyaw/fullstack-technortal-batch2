import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello FullStack Developer!");
});

export default app;
