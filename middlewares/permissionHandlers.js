const adminHandler = async (req, res, next) => {
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

const sameUserHandler = async (req, res, next) => {
  try {
    const { sub } = req.params.tokenPayload;
    const { id } = req.params;
    if (sub != id) {
      res.json({
        ok: false,
        message: "You are not authorized",
      });
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  adminHandler,
  staffHandler,
  sameUserHandler,
};
