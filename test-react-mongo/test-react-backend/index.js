const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const log4js = require("log4js");

const logger = log4js.getLogger();
logger.level = "debug";

const port = process.env.REACT_APP_PORT;

const mongo_url = process.env.REACT_APP_MONGODB_URL;
logger.info("Connecting to MongoDB at " + mongo_url);
mongoose.connect(mongo_url, {
  authSource: "admin",
});

const Message = mongoose.model("Message", { message: String });

logger.info("Initializing express app");
const app = express();
app.use(cors());
app.use(express.json());

logger.info("Setting up routes");

app.get("/api/hello", (req, res) => {
  logger.info("GET /api/hello");
  res.json({
    message: "Hello from the backend!",
  });
});

app.get("/api/messages", (req, res) => {
  logger.info("GET /api/messages");
  Message.find().then((messages) => {
    res.json({ messages });
  });
});

app.post("/api/message", (req, res) => {
  const body = req.body;

  logger.info("POST /api/message", body);

  const new_message = new Message({ message: body.message });

  new_message.save().then(() => {
    res.json({
      status: "OK",
    });
  });
});

logger.info("Setting up static files");
app.use("/", express.static("static"));

app.listen(port, () => {
  logger.info(`Example app listening on port ${port}`);
});
