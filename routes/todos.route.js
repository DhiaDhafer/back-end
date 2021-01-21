const router = require("express").Router();
const todosController = require("../controllers/todos.controller.js");
//get All tasks
router.get("/tasks", todosController.getTodos);
// add task
router.post("/task", todosController.addTodos);
//get single task
router.get("task/:_id", todosController.getTodosById);
//delete task
router.delete('/task/:id',)
//delete all
router.delete('/tasks')
//updtate task
router.put('/task/:id')

module.exports = router;
