const jwt = require("jsonwebtoken");
const User = require("./Database");

// Login function
const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if username and password are provided
    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Username and password are required" });
    }

    // Find the user by username and password
    const user = await User.findOne({ username, password });

    // If user not found
    if (!user) {
      return res.status(404).json({ message: "Invalid credentials" });
    }

    // Create JWT token
    const token = jwt.sign(
      { username: user.username, userId: user._id },
      "your_secret_key",
      { expiresIn: "20d" }
    );

    // Send token in response
    res.status(200).json({ token });
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = loginUser;
