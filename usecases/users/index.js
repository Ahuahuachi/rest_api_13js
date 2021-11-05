const User = require("../../models/users").model;
const encrypt = require("../../lib/encrypt");

const get = async (limit) => {
  if (limit) {
    limit = parseInt(limit);
  }
  return await User.find({}, null, { limit }).exec();
};

const getById = async (id) => {
  return await User.findById(
    id,
    "firstName lastName username email role"
  ).exec();
};

const create = async (userData) => {
  const { firstName, lastName, username, password, email, role } = userData;

  const hash = await encrypt.hashPassword(password);

  const user = new User({
    firstName,
    lastName,
    username,
    password: hash,
    email,
    role,
  });

  const { _id } = await user.save();

  return User.findById({ _id }, "firsName lastName username email role");
};

const del = async (id) => {
  return await User.findByIdAndDelete(id).exec();
};

const update = async (id, data) => {
  const { firstName, lastName, password, email, role } = data;

  if (password) {
    const hash = await encrypt.hashPassword(password);
  }

  return await User.findByIdAndUpdate(
    id,
    {
      firstName,
      lastName,
      password: hash,
      email,
      role,
    },
    { new: true }
  ).exec();
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
