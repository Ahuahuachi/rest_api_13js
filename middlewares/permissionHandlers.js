const jwt = require("../lib/jwt");

const adminHandler = async (req, res, next) => {
  console.log(req.params);
  try {
    const { role } = req.params.tokenPayload;

    if (isAdmin(role)) {
      next();
    } else {
      res.status(403).json({
        ok: false,
        message: "You are not authorized",
      });
    }
  } catch (err) {
    next(err);
  }
};

const staffHandler = async (req, res, next) => {
  try {
    const { role } = req.params.tokenPayload;
    if (isStaff(role)) {
      next();
    } else {
      res.status(403).json({
        ok: false,
        message: "You are not authorized",
      });
    }
  } catch (err) {
    next(err);
  }
};

const isAdmin = (role) => {
  return role === "admin";
};

const isStaff = (role) => {
  return role === "staff" || isAdmin(role);
};

module.exports = {
  adminHandler,
  staffHandler,
};
