const jwt = require("jsonwebtoken");

const secret = "MySecret";
const payload = {
  sub: 1,
  role: "customer",
};

const token = jwt.sign(payload, secret);

console.log("Token:", token);
