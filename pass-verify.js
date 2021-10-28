const bcrypt = require("bcrypt");

const verifyPassword = async () => {
  const password = "password";
  const hash = "$2b$10$WnRNOh3UhiofSVdXvJkpwOzvfEKLamD5skZEfUWYlOKoojJgi1YmG";
  const isMatch = await bcrypt.compare(password, hash);

  console.log("is a match?", isMatch);
};

verifyPassword();
