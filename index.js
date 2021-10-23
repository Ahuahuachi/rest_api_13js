const express = require("express");
const app = express();
const port = 8000;
const apiRouter = require("./routes");

app.use(express.json());

app.get("/", (request, response) => {
  response.send("Hello World!");
});

apiRouter(app);

app.listen(port, () => {
  console.log(`Listening on port: http://localhost:${port}`);
});
