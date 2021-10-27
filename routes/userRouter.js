const express = require("express");

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

module.exports = router;
