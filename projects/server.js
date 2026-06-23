const express = require("express");

const app = express();
const PORT = 3000;

// Allow Express to read JSON request bodies
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("API is running");
});

// Example API route
app.get("/countries", (req, res) => {
  res.json([
    { id: 1, name: "Romania", capital: "Bucharest" },
    { id: 2, name: "United Kingdom", capital: "London" }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});