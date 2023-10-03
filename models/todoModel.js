//Model maps data to database
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TodoSchema = new Schema( //creating a schema
  {
    todo: {
      // fields in the database
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, //for storing databse
  }
);

module.exports = mongoose.model("Todos", TodoSchema); //mapping schema to a model
