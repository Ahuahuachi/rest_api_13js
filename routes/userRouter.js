const express = require("express");
const users = require("../usecases/users");

const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    {
      id: 1,
      username: "alfredoa",
      firstName: "Alfredo",
      lastName: "Altamirano",
    },
    {
      id: 2,
      username: "clauro",
      firstName: "Claudia",
      lastName: "Rodrigez",
    },
  ]);
});

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
    const { firstName, lastName, username, password, email } = req.body;

    const createdUser = await users.create({
      firstName,
      lastName,
      username,
      password,
      email,
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
