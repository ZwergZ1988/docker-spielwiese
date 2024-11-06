require("dotenv").config();
const mongoose = require("mongoose");
const log4js = require("log4js");

const logger = log4js.getLogger();
logger.level = "debug";

const mongo_url = process.env.REACT_APP_MONGODB_URL;
logger.info("Connecting to MongoDB at " + mongo_url);
mongoose.connect(mongo_url, {
  authSource: "admin",
});

const Message = mongoose.model("Message", { message: String });

async function work() {
  logger.info("Worker starting up");
  while (true) {
    logger.info("Fetching messages");
    const messages = await Message.find();
    logger.info("Messages:", messages.length);
    await new Promise((resolve) => setTimeout(resolve, 10000));
  }
}

work().finally(() => {
  logger.info("Worker shutting down");
});
