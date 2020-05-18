const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

require("dotenv").config();
const app = express();
// const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://satyamDB:satyam@cluster0-teswf.gcp.mongodb.net/question_tracker?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const questionsRouter = require("./route/question");
const userRouter = require("./route/user");

app.use(express.json({ extended: false }));

app.use("/question", questionsRouter);
app.use("/user", userRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server is running on port : " + PORT);
});
