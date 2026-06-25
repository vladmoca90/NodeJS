const express = require("express");
const router = express.Router();

const cars = [
  {
    carId: 1,
    make: "Toyota",
    model: "Corolla",
    price: 21999,
    description: "Reliable compact sedan with excellent fuel economy and a comfortable interior.",
  },
  {
    carId: 2,
    make: "Ford",
    model: "Mustang",
    price: 34999,
    description: "Sporty coupe with a powerful V8 engine and iconic American styling.",
  },
  {
    carId: 3,
    make: "Honda",
    model: "CR-V",
    price: 28999,
    description: "Spacious crossover SUV with modern safety features and a smooth ride.",
  },
  {
    carId: 4,
    make: "BMW",
    model: "X3",
    price: 43999,
    description: "Premium compact SUV with agile handling and a refined luxury cabin.",
  },
  {
    carId: 5,
    make: "Tesla",
    model: "Model 3",
    price: 44999,
    description: "Electric sedan offering instant acceleration, advanced autopilot, and low running costs.",
  },
  {
    carId: 6,
    make: "Chevrolet",
    model: "Camaro",
    price: 32999,
    description: "Muscle car with bold design and a thrilling performance-focused driving experience.",
  },
  {
    carId: 7,
    make: "Hyundai",
    model: "Santa Fe",
    price: 30999,
    description: "Mid-size SUV with versatile seating, a quiet ride, and strong warranty coverage.",
  },
  {
    carId: 8,
    make: "Audi",
    model: "A4",
    price: 41499,
    description: "Luxury sedan with sharp styling, premium tech, and composed all-wheel-drive handling.",
  },
  {
    carId: 9,
    make: "Nissan",
    model: "Leaf",
    price: 26999,
    description: "Affordable electric hatchback with easy city driving and a well-equipped cabin.",
  },
  {
    carId: 10,
    make: "Jeep",
    model: "Wrangler",
    price: 37999,
    description: "Rugged off-road SUV built for adventure with removable top and strong trail capability.",
  },
];

router.get("/cars", (req, res) => {
  res.json(cars);
});

module.exports = router;
