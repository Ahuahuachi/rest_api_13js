const express = require("express");
const app = express();
const port = 8000;
const faker = require("faker");

app.get("/", (request, response) => {
  response.send("Hello World!");
});

app.get("/products", (request, response) => {
  const products = [];
  const { limit } = request.query;

  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }

  if (limit) {
    // Si tiene limite entonces
    response.json({
      ok: true,
      payload: products,
    });
  } else {
    //Si no tiene limite
    response.json({
      ok: false,
      message: "El límite y la pagina son obligatorios",
    });
  }
});

app.get("/products/:id", (request, response) => {
  const { id } = request.params;
  response.json({
    id,
    name: "Product 1",
    price: 1000,
  });
});

app.get("/categories/:categoryId/product/:productId", (request, response) => {
  const { categoryId, productId } = request.params;

  response.json({
    productId,
    categoryId,
    name: "Producto1",
    price: 1000,
  });
});

app.listen(port, () => {
  console.log(`Listening on port: http://localhost:${port}`);
});
