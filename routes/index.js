const productsRouter = require("./productsRouter");
const categoriesRouter = require("./categoriesRouter");
const userRouter = require("./userRouter");
const authRouter = require("./authRouter");

const apiRouter = (app) => {
  app.use("/products", productsRouter);
  app.use("/users", userRouter);
  app.use("/auth", authRouter);
};

module.exports = apiRouter;
