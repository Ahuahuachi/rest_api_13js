const productsRouter = require("./productsRouter");
const categoriesRouter = require("./categoriesRouter");
const userRouter = require("./userRouter");

const apiRouter = (app) => {
  app.use("/products", productsRouter);
  //   app.use("/categories", categoriesRouter);
  //   app.use("/users", userRouter);
};

module.exports = apiRouter;
