const mongoose = require("mongoose");
const config = require("dotenv").config();

const connect = () =>
  new Promise((resolve, reject) => {
    mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
      }
    );

    const db = mongoose.connection;

    db.on("open", () => {
      console.warn("Connection successful");
      resolve(mongoose);
    });

    db.on("error", (error) => {
      console.error("Connection failed", error);
      reject(error);
    });
  });

module.exports = {
  connect,
};
