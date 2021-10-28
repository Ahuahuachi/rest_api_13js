const bcrypt = require("bcrypt");

const hashPassword = async () => {
  const password = "password123";
  const hash = await bcrypt.hash(password, 10);
  console.log(hash);
};

hashPassword();
