// const jwt = require("jsonwebtoken");

// module.exports = (req, res, next) => {
//   try {
//     const authHeader = req.headers.authorization;
//     console.log(authHeader);
//     console.log(authHeader.split(" ")[0]);
//     const token = authHeader.split(" ")[1];

//     if (!token) {
//       return res.status(403).json({ message: "No token. Unauthorized." });
//     }
//     if (jwt.verify(token, process.env.JWT_SECRET)) {
//       req.decode = jwt.decode(token);
//       console.log(req.decode);

//       req.user = req.decode.email;
//       next();
//     }
//   } catch (error) {
//     res.status(401).json({ message: "Authentication failed!" });
//   }
// };
