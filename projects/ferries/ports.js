const express = require("express");

const router = express.Router();

const ports = [
  {
    id: 1,
    name: "Dover",
    country: "United Kingdom"
  },
  {
    id: 2,
    name: "Calais",
    country: "France"
  }
];

router.get("/", (req, res) => {
  res.json(ports);
});

module.exports = router;