const express = require("express");
const cors = require("cors");

const port = 3300;

const app = express();
app.use(cors());

app.get("/api/hello", (req, res) => {
  res.json({
    message: "Hello from the backend!",
  });
});

app.use("/", express.static("static"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
