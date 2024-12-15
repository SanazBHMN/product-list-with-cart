const express = require("express");
const cors = require("cors");
const { prisma } = require("./db");

const app = express();
const port = 8080;

app.use(cors());

app.get("/", (req, res) => {
  res.send("HELLO WORLD!");
});

app.get("/products", async (req, res) => {
  const products = await prisma.products.findMany();

  res.json(products);
});

app.listen(port, () => {
  console.log(`LISTENING ON PORT ${port}`);
});
