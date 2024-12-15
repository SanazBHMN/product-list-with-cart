const products = require("../data.json");
const { prisma } = require("../db");

const seedProducts = async () => {
  const productsFormatted = products.map(({ image, name, category, price }) => {
    return {
      image,
      name,
      category,
      price,
    };
  });

  await prisma.products.deleteMany();

  await prisma.products.createMany({ data: productsFormatted });
};

seedProducts();
