
const jwt = require("jsonwebtoken");
const verify = require("jsonwebtoken");



const validateToken =  (req, res, next) => {

  try {
    const token = req.header("access-token");
    if (!token) return res.status(403).send("Access denied.");

    const decoded =  jwt.verify(token,process.env.KEY);
    req.user = decoded;
    next();
} catch (error) {
    res.status(400).send("Invalid token");
}
  };

  module.exports = { createTokens, validateToken };
