const jwt = require("jsonwebtoken");

const secret = "MySecret";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTYzNTQ2OTM0N30.mOkxgYyDhf-k1SmM8bXctziRerKGpTKrVinm_0HZe_I";

const payload = jwt.verify(token, secret);

console.log("Payload:", payload);
