// var createError = require('http-errors');
const mongoose = require("mongoose");
const cors = require("cors");
// const bodyParser = require("body-parser");
var express = require("express");
const logger = require("morgan");
require('dotenv').config();


var app = express();

app.use(cors());
app.use(express.json());
app.use(logger("dev"));
// app.use(bodyParser.json());


var chainRouter = require("./routes/chainid");
var tokenRouter = require("./routes/token");

//------------ import router
// app.use("/", indexRouter);
app.use("/chainids",chainRouter);
app.use("/tokens", tokenRouter);



const PORT = process.env.PORT || 3001;
mongoose
  .connect(process.env.MONGO_DB, { useNewUrlParser: true })
  .then(() => app.listen(PORT))
  .catch((err) => console.log(err));

// module.exports = app;