const express = require("express");
require("dotenv").config();
const colors = require("colors");
const Port = process.env.PORT || 3000;
const cors = require("cors");
const app = express();
const morgan = require("morgan");
const connectDB = require("./config/db");

//middleware
app.use(cors());
app.use(express.json());

connectDB();

app.use(morgan("dev"));
app.use("/api/v1/auth", require("./routes/auth.routes"));
app.get("/", (req, res) => {
  res.status(200).send("Home Page");
});

app.listen(Port, () => {
  console.log(`Server is running on ${Port}`.white.bgBlue);
});
