//importing Library
const mongoose = require("mongoose");
//importing model we created
const Todos = require("../models/todoModel");

//function declaration
const getTodos = async (req, res) => {
  // this is for fetching all todo data from database
  try {
    const todos = await Todos.find(); // this .find() function enable us to fetch data from model
    res.status(200).json(todos); // returning data with status code 200
  } catch (error) {
    // this is for throwing error
    res.status(400).json({ error: error });
  }
};

const getTodo = async (req, res) => {
  // this is for fetching one todo data from database
  const { id } = req.params; // all the path elements comes form req.params we need to send id from path you can see it on postman below
  try {
    const todos = await Todos.findById({ _id: id }); // .findById() enable us to get on data by id
    res.status(200).json(todos);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

const deleteTodo = async (req, res) => {
  // this is for deleting data
  const { id } = req.params;
  try {
    const todos = await Todos.findByIdAndDelete({ _id: id }); // .findByIdAndDelete() enable us to delete data by id
    res.status(200).json(todos);
  } catch (error) {
    res.status(400).json({ error: "Couldn't delete the document" });
  }
};

const updateTodo = async (req, res) => {
  // this is for updating todo
  const { id } = req.params;
  try {
    const todos = await Todos.findByIdAndUpdate(
      //.findByIdAndUpdate enable us to update specific data by id
      { _id: id },
      { ...req.body }
    );
    res.status(200).json(todos);
  } catch {
    res.status(400).json({ error: "Couldn't udpate the document" });
  }
};

const createTodos = async (req, res) => {
  // this is for creating todo
  try {
    const { todo, status } = req.body; // You can easily get POST body data from req.body
    const todos = await Todos.create({
      // .create() enables to save data on database
      todo,
      status,
    });
    res.status(200).json(todos);
  } catch (e) {
    console.log(e);
  }
};

///export the function to be import on routes
module.exports = {
  getTodos,
  createTodos,
  getTodo,
  deleteTodo,
  updateTodo,
};
