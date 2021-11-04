const express = require("express");
const { authHandler } = require("../middlewares/authHandlers");
const permissionHandlers = require("../middlewares/permissionHandlers");
const products = require("../usecases/products");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const { limit } = req.query;

    const payload = await products.get(limit);
    res.json({
      ok: true,
      message: "Done!",
      payload,
    });
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const payload = await products.getById(id);

    res.json({
      ok: true,
      message: "Done!",
      payload,
    });
  } catch (err) {
    next(err);
  }
});

router.post(
  "/",
  authHandler,
  permissionHandlers.staffHandler,
  async (req, res, next) => {
    try {
      const productData = req.body;
      const payload = await products.create(productData);

      res.status(201).json({
        ok: true,
        message: "New product created",
        payload,
      });
    } catch (err) {
      next(err);
    }
  }
);

router.patch(
  "/:id",
  authHandler,
  permissionHandlers.staffHandler,
  async (request, response, next) => {
    try {
      const { id } = request.params;
      const { name, price } = request.body;

      const payload = await products.update(id, { name, price });
      if (!payload) {
        throw new Error("Product not found");
      }

      response.json({
        ok: true,
        message: "Product updated successfully",
        payload,
      });
    } catch (err) {
      next(err);
    }
  }
);

router.delete(
  "/:id",
  authHandler,
  permissionHandlers.adminHandler,
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const payload = await products.del(id);

      if (!payload) {
        throw new Error("Product not found");
      }

      res.json({
        ok: true,
        message: "Product deleted successfuly",
        payload,
      });
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;
