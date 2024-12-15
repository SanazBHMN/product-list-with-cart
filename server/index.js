const express = require("express");
const cors = require("cors");

const app = express();
const port = 8080;

app.use(cors());

app.get("/", (req, res) => {
  res.send("HELLO WORLD!");
});

app.listen(port, () => {
  console.log(`LISTENING ON PORT ${port}`);
});
