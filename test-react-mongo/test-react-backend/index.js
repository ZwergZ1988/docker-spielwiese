const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");

const port = process.env.REACT_APP_PORT;

const mongo_url = process.env.REACT_APP_MONGODB_URL;
mongoose.connect(mongo_url);

const Message = mongoose.model("Message", { message: String });

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.json({
    message: "Hello from the backend!",
  });
});

app.get("/api/messages", (req, res) => {
  Message.find().then((messages) => {
    res.json({ messages });
  });
});

app.post("/api/message", (req, res) => {
  const body = req.body;

  const new_message = new Message({ message: body.message });

  new_message.save().then(() => {
    res.json({
      status: "OK",
    });
  });
});

app.use("/", express.static("static"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
