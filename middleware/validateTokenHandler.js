const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const validateToken = asyncHandler(async (req, res, next) => {
  let token;
  let authHeader = req.headers.Authorization || req.headers.authorization;

  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1]; // Extract token

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        res.status(401);
        throw new Error('User is not authorized'); // Return error if token is invalid
      }

      console.log("Decoded::::", decoded.user);
      req.user = decoded.user; // Attach decoded user info to req.user
      next(); // Pass control to the next middleware
    });
  } else {
    res.status(401);
    throw new Error('Token missing or invalid');
  }
});

module.exports = validateToken;
