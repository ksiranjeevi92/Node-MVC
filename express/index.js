const express = require("express");
const mongoose = require("mongoose");

// /Routes
createPostRoute = require("./routes/post/create");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/post", createPostRoute);
mongoose
  .connect(
    "mongodb+srv://siranjeevi:Siran%40jeevi003@myatlasclusteredu.yflj6si.mongodb.net/?retryWrites=true&w=majority&appName=myAtlasClusterEDU"
  )
  .then(() => {
    app.listen(3000, () => {
      console.log("App listning on port 3000");
    });
  })
  .catch((err) => {
    throw err;
  });
