const express = require('express')
const cors = require('cors');

// instantiating express app and variables
const app = express()
const port = 4001;

// this will enable getting elements from post request as json
app.use(express.json()) 
// this is for handling cors
app.use(cors())

// basic GET request to check if app is running
app.get("/", (req, res) => {
    console.log(reg)
    res.send('App is running')
})

// setting up the app
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})

// model maps data to database
const mongoose = require('mongoose')


mongoose.connect("mongodb://localhost/nodeserver") //connecting to our database
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

