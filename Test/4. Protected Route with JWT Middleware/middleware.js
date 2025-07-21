const jwt = require("jsonwebtoken");
const User = require("./models/userModel.js");

const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    
    if (!token) {
      return res.status(401).json({ message: "Token not provided" });
    }
    
    const decoded = jwt.verify(token, process.env.SECRET);
    const user = await User.findById(decoded.id);
    
    if (!user) return res.status(401).json({ message: "User not found" });
    req.user = user;
    next();
  } 
  catch (error) {
      return res.status(400).json({ message: "Invalid token or expired token" });
  }
};

module.exports = verifyToken;
