const fs = require("fs");

const logMessage = (message) => {
  fs.appendFile("app.log", message + "\n", (error) => {
    if (error) {
      console.error("Erroe while logging the message ;", error);
    } else {
      console.info("Message successfully write int log");
    }
  });
};

module.exports = logMessage;
