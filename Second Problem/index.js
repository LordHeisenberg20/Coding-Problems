const express = require("express");
const mathRouter = require("./routes/math");
const fileRouter = require("./routes/file");
const app = express();

app.use(express.json());
const port = 3000;

app.use("/math", mathRouter);
app.use("/file", fileRouter);

app.get("/", (req, res) => {
  res.send("Congrats! Server is working");
});

app.listen(port, () => {
  console.log(`Server is working on port ${port}`);
});
