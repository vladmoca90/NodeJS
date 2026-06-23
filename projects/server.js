const express = require("express");

const countriesRouter = require("./countries");
const personsRouter = require("./persons");

const app = express();
const PORT = 3000;

app.use(express.json());

// Home page
app.get("/", (req, res) => {
  res.send("API is running");
});

// Register route modules
app.use(countriesRouter);
app.use(personsRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});