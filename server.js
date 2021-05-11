const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./src/db/database");
const postRouter = require("./src/routes/post");
const userRouter = require("./src/routes/user");

/**Initializing Express Framework */
const app = express();

/** Connect Database */
connectDB();

const PORT = 5000;

/** Middleware */
app.use(bodyParser.json());
app.use(cors());

/**Route */
app.use(userRouter);
app.use(postRouter);

/** BASIC ROUTE */
app.get("/", (reg, res) => {
  res.send("WELCOME TO MICRO BLOG API");
});

app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);
});
