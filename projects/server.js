const express = require("express");
const countriesRouter = require("./countries");
const personsRouter = require("./persons");

const app = express();
const PORT = 3000;

// Allow Express to read JSON request bodies
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("API is running");
});

// Separate route modules
app.use(countriesRouter);
app.use(personsRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
