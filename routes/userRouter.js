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

router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    id,
    username: "alfredoa",
    firstName: "Alfredo",
    lastName: "Altamirano",
  });
});

router.post("/", async (req, res, next) => {
  try {
    const { firstName, lastName, username, password, email, role } = req.body;

    const createdUser = await users.create({
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
      payload: createdUser,
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
