const express = require("express");
require("dotenv").config();
const postRouter = require("./routers/post");
const morgan = require("morgan");
const app = express();
app.use("/controllers/post.js", postRouter);
app.use(morgan("dev"));

const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log("err", err);
  });

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`port is listening on ${PORT}`);
});
