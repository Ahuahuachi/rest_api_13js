const { request, response } = require("express");
const express = require("express");
const faker = require("faker");

const router = express.Router();

router.get("/", (request, response) => {
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

router.get("/:id", (request, response, next) => {
  try {
    throw "Error generico";
    // const { id } = request.params;
    // response.json({
    //   id,
    //   name: "Product 1",
    //   price: 1000,
    // });
  } catch (error) {
    next(error);
  }
});

router.post("/", (request, response) => {
  const body = request.body;

  // Logica del negocio

  response.status(201).json({
    ok: true,
    message: "Created successfully",
    payload: {
      body,
    },
  });
});

router.patch("/:id", (request, response) => {
  const { id } = request.params;
  const { name, price } = request.body;

  if (id == 99) {
    response.status(404).json({
      ok: false,
      message: "Product not found",
    });
  } else {
    response.status(201).json({
      ok: true,
      message: `Product ${id} updated successfully`,
      payload: {
        name,
        price,
      },
    });
  }
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  // Logica para eliminar
  res.status(202).json({
    ok: true,
    message: `Product ${id} deleted successfully`,
  });
});

module.exports = router;
