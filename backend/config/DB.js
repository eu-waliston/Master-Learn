var mongoose = require("mongoose");
require("dotenv").config();

var mongoDB = process.env.DB_URL;
mongoose.connect(mongoDB, { useNewUrlParser: true });

var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.on("error", console.error.bind(console, "MongoDB connection error:"));
