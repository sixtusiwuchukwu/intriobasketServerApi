const jwt = require("jsonwebtoken");
module.exports = async function getToken({ gmail, _id, username }) {
  return await jwt.sign({ gmail, _id, username }, process.env.SECRETKEY);
};
