const express = require('express')
const db = require('./config/mongodb/index')
const bodyParser = require('body-parser')
require('dotenv').config();

const app = express();
db.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'))

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', "http://localhost:3000");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Authorization, content-type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

const productRoute = require("./product/product.route")
app.use("/api/product", productRoute);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`ocop listening on port http://localhost:${port}`);
});
