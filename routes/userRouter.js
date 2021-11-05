const express = require("express");
const { authHandler } = require("../middlewares/authHandlers");
const permissionHandlers = require("../middlewares/permissionHandlers");
const users = require("../usecases/users");

const router = express.Router();

router.get(
  "/",
  authHandler,
  permissionHandlers.adminHandler,
  async (req, res, next) => {
    try {
      const { limit } = req.query;

      const payload = await users.get(limit);

      res.status(200).json({
        ok: true,
        message: "Done!",
        payload,
      });
    } catch (err) {
      next(err);
    }
  }
);

router.get(
  "/:id",
  authHandler,
  permissionHandlers.sameUserHandler,
  async (req, res) => {
    try {
      const { id } = req.params;

      const payload = await users.getById(id);

      res.status(200).json({
        ok: true,
        message: "Done!",
        payload,
      });
    } catch (err) {
      next(err);
    }
  }
);

router.post("/", async (req, res, next) => {
  try {
    const { firstName, lastName, username, password, email, role } = req.body;

    const payload = await users.create({
      firstName,
      lastName,
      username,
      password,
      email,
      role,
    });

    res.status(201).json({
      ok: true,
      message: "User created successfully",
      payload,
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
