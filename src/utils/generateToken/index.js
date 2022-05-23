const jwt = require("jsonwebtoken");
module.exports = async function getToken({ email, _id, fullName }) {

  return await jwt.sign({ email, _id, fullName }, process.env.SECRETKEY);
};
