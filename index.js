const express = require("express");
const app = express();
const port = 3001;

app.use(express.json());

app.use("/api/v1", require("./routes"));

app.use("*", async (req, res, next) => {
  return res.status(500).send({
    code: 500,
    message: "Internal Server Error",
  });
});

const SUBMISSION = [];

// TODO

app.get("/questions", function (req, res) {
  //return the user all the questions in the QUESTIONS array
  res.send("Hello World from route 3!");
});

app.get("/submissions", function (req, res) {
  // return the users submissions for this problem
  res.send("Hello World from route 4!");
});

app.post("/submissions", function (req, res) {
  // let the user submit a problem, randomly accept or reject the solution
  // Store the submission in the SUBMISSION array above
  res.send("Hello World from route 4!");
});

// leaving as hard todos
// Create a route that lets an admin add a new problem
// ensure that only admins can do that.

app.listen(port, function () {
  console.log(`Example app listening on port ${port}`);
});
