const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    let tokens = null;
    if (req && req.headers.cookie) {
      tokens = req.headers.cookie.split("=")[1];
      req.user = await jwt.verify(tokens, process.env.SECRETKEY);
    }
    if (req && req.headers["token"]) {
      tokens = req.headers["token"];
      req.user = await jwt.verify(tokens, process.env.SECRETKEY);
    }
    return tokens;
  } catch (e) {
    if (e.message.includes("expired")) {
      req.user = null;
    }
  } finally {
    next();
  }
};
