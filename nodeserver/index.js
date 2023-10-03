const express = require("express");
const cors = require("cors");
const todoRoutes = require("../routes/todoRoutes")

//instantiating express app and variables
const app = express();
const port = 4001;

app.use(express.json()); // this will enable getting elements from Post request as json
app.use(cors()); // this is for handling cors

app.get("/", (req, res) => {
  // Basic GET request to check if app is running
  console.log(req);
  res.send("App is running");
});

app.listen(port, () => {
  // Setting up app
  console.log(`Server running on http://localhost:${port}`);
});

const mongoose = require("mongoose"); //importing mongoose

mongoose
  .connect("mongodb://localhost/nodeserver") //connecting to our database
  // you can store these value in env file to ensure security. But right now I will just use plain text
  .then(() => {
    app.listen(port, () => {
      // enwraping the listen to database connect
      console.log(`Server running on http://localhost:${port}`);
    });
    console.log("Mongodb Database connected");
  })
  .catch((e) => {
    //throwing error when connection fails
    console.log("error::", e);
  });

  app.use("/todos", todoRoutes);
