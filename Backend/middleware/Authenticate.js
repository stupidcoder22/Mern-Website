const jwt = require("jsonwebtoken");
const jwtKey = "secret";

const verify = (req, res, next) => {
  const token = req.header("auth-token");
  if (token === null) {
    res.status(401).send({ error: "Please enter a valid token", msg: false });
  }
  try {
    const data = jwt.verify(token, jwtKey);
    req.user = data.user;
    next();
  } catch (error) {
    res
      .status(401)
      .send({ error: "Please authenticate using a valid token", msg: false });
  }
};

module.exports = verify;
