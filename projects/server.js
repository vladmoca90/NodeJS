const express = require("express");

const countriesRouter = require("./countries");
const personsRouter = require("./persons");
const hotelsRouter = require("./hotels");
const carsRouter = require("./cars");

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
app.use(hotelsRouter);
app.use(carsRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});