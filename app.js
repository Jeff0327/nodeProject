require("./db");
const morgan = require("morgan");
const express = require("express");
const postRouter = require("./routers/post");
const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use("/api/post", postRouter);
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`port is listening on ${PORT}`);
});
