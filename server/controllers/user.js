const jwt = require("jsonwebtoken");
const { SECRET } = require("../config/dev");
const User = require("../model/user");

function notAuthorized(res) {
  return res.status(401).send({
    errors: [{ title: "Not Authorized", detail: "You need to login!" }],
  });
}

exports.authMiddleware = function (req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return notAuthorized(res);
  }

  jwt.verify(token.split(" ")[1], SECRET, function (err, decodedToken) {
    if (err) {
      return res.status(401).send({
        errors: [{ title: "Not Authorized", detail: "Invalid token!" }],
      });
    }

    User.findById(decodedToken.userId, function (err, foundUser) {
      if (err) {
        return res.status(401).send({
          errors: [{ title: "Not Authorized", detail: "Invalid token!" }],
        });
      }

      if (!foundUser) {
        return res.status(401).send({
          errors: [{ title: "Not Authorized", detail: "User not found!" }],
        });
      }
      next();
    });
  });
};
