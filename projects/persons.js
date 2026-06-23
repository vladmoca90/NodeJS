const express = require("express");
const router = express.Router();

const persons = [
  { name: "Mia Carter", age: 28, nationality: "French", job: "Graphic Designer" },
  { name: "Luca Novak", age: 34, nationality: "Czech", job: "Software Engineer" },
  { name: "Sofia Rossi", age: 23, nationality: "Italian", job: "Marketing Specialist" },
  { name: "Hugo Müller", age: 41, nationality: "German", job: "Project Manager" },
  { name: "Elsa Petrova", age: 30, nationality: "Swedish", job: "Data Analyst" },
  { name: "Noah Silva", age: 26, nationality: "Portuguese", job: "UX Researcher" },
  { name: "Nina Popescu", age: 37, nationality: "Romanian", job: "Product Owner" },
  { name: "Jonas Smith", age: 45, nationality: "British", job: "Architect" },
  { name: "Ava Dimitrov", age: 22, nationality: "Bulgarian", job: "Content Writer" },
  { name: "Leo Ferreira", age: 32, nationality: "Spanish", job: "Financial Advisor" },
];

router.get("/persons", (req, res) => {
  res.json(persons);
});

module.exports = router;
