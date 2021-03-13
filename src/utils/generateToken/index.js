const jwt = require("jsonwebtoken");
module.exports = async function getToken({ email, _id, username }) {
  return await jwt.sign({ email, _id, username }, process.env.SECRETKEY);
};
