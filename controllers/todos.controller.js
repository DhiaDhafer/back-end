const todosService = require("../services/todos.service.js");
const TaskModel = require("./../models/todo.model");

module.exports = {
  async getTodos(req, res, next) {
    try {
      const todos = await todosService.getTodos();
      res.send(todos);
    } catch (error) {
      // handle error
      res.send("error");
    }
  },

  async getTodosById(req, res, next) {
    try {
      const todo = await todosService.getTodosById(req.params);
      res.send(todo);
    } catch (error) {
      // handle error
      res.send("error");
    }
  },

  async addTodos(req, res, next) {
    var newTodo = new TaskModel({
      text: req.body.text,
      idDone: req.body.isDone,
    });
    try {
      const savedtodo = await newTodo.save();
      res.send(savedtodo);
    } catch (error) {
      // handle error
      res.send("error while creating task");
    }
  }
  
};
