const express = require("express");
const cors = require("cors");
require("dotenv").config();

const port = process.env.REACT_APP_PORT;

const mongo_url = process.env.REACT_APP_MONGODB_URL;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.json({
    message: "Hello from the backend!",
  });
});

app.get("/api/messages", (req, res) => {
  res.json({
    messages: ["Hello from the backend!", "Hello again from the backend!"],
  });
});

app.post("/api/message", (req, res) => {
  const body = req.body;

  console.log(body);

  res.json({
    status: "OK",
  });
});

app.use("/", express.static("static"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
