const express = require("express");
const app = express();
const router = require("./router");
require("dotenv").config();
var cors = require("cors");

const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use("/api", router);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
