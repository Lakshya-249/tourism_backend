// Import required modules
const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MG_DATABASE_URL);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", function () {
  console.log("Connected to MongoDB");
});

// Define user schema
const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Define user model
const User = mongoose.model("User", userSchema);

// Export the User model
module.exports = User;
