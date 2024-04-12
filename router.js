const express = require("express");
const router = express.Router();
const registerUser = require("./register"); // Assuming you have a registerUser function
const loginUser = require("./login"); // Assuming you have a loginUser function
const getUsernameFromToken = require("./getusername"); // Assuming you have a getUsernameFromToken function
const getGenerativeEvents = require("./getEvents");

// Route to register a new user
router.post("/register", registerUser);

// Route to login
router.post("/login", loginUser);

// Route to get username from token
router.get("/username", async (req, res) => {
  await getUsernameFromToken(req, res);
});

router.get("/getprompts/:state", getGenerativeEvents);

module.exports = router;
