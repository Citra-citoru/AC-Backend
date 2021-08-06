const express = require("express");
const cors = require("cors");
const Route = require('./src/routes');
const app = express();
require('dotenv').config();
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome" });
});
app.use('/', Route);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});