const express = require("express");
const app = express();
const port = 8000;
const apiRouter = require("./routes");
const { logErrors, errorHandler } = require("./middlewares/errorHandlers");

app.use(express.json());

app.get("/", (request, response) => {
  response.send("Hello World!");
});

apiRouter(app);

app.use(logErrors);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Listening on port: http://localhost:${port}`);
});
