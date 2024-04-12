const jwt = require("jsonwebtoken");
const User = require("./Database");

// Function to get username from token and return in response
const getUsernameFromToken = async (req, res) => {
  try {
    // Extract token from headers
    const token = req.headers.authorization.split(" ")[1];

    // Verify token
    const decodedToken = jwt.verify(token, "your_secret_key"); // Replace 'your_secret_key' with your actual secret key

    // Get username from decoded token
    const username = decodedToken.username;

    // Return username in response
    res.status(200).json({ username });
  } catch (error) {
    console.error("Error getting username from token:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = getUsernameFromToken;
