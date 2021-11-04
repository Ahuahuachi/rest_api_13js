const jsonwebtoken = require("jsonwebtoken");
const config = require("./config");

const sign = async (payload) => {
  const secret = config.jwt.secret;

  return await jsonwebtoken.sign(payload, secret, { expiresIn: "10s" });
};

const verify = async (token) => {
  const secret = config.jwt.secret;

  return await jsonwebtoken.verify(token, secret);
};

module.exports = {
  sign,
  verify,
};
