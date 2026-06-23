const express = require("express");

const router = express.Router();

const ferries = [
  {
    id: 1,
    operator: "P&O Ferries",
    from: "Dover",
    to: "Calais",
    departure: "08:00",
    duration: "90 mins",
    price: 85
  },
  {
    id: 2,
    operator: "DFDS",
    from: "Dover",
    to: "Dunkirk",
    departure: "09:30",
    duration: "2 hours",
    price: 72
  }
];

router.get("/", (req, res) => {
  res.json(ferries);
});

router.get("/:id", (req, res) => {
  const ferry = ferries.find(
    f => f.id === Number(req.params.id)
  );

  if (!ferry) {
    return res.status(404).json({
      message: "Ferry not found"
    });
  }

  res.json(ferry);
});

module.exports = router;