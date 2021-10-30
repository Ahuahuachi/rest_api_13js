const User = require("../../models/users");
const encrypt = require("../../lib/encrypt");

const create = async (userData) => {
  const { firstName, lastName, username, password, email } = userData;

  const hash = await encrypt.hashPassword(password);

  const user = new User.model({
    firstName,
    lastName,
    username,
    password: hash,
    email,
  });
  return await user.save();
};

const getByUsername = async (username) => {
  return await User.model.findOne({ username }).exec();
};

const authenticate = async (user, password) => {
  const hash = user.password;

  return await encrypt.verifyPassword(password, hash);
};

module.exports = {
  create,
  getByUsername,
  authenticate,
};
