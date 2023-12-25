const TodoService = require("../services/todo_service");
const TodoRepository = require("../repositories/todo_repository");

const todoService = new TodoService(new TodoRepository());

async function getTodos(req, res) {
  try {
    const response = await todoService.getTodos();
    return res.json({
      success: true,
      data: response,
    });
  } catch (error) {
    return res.json({ Error: error.message });
  }
}

async function addTodo(req, res) {
  try {
    const response = await todoService.addTodo(req.body.text);
    return res.json({
      success: true,
      data: response,
    });
  } catch (error) {
    return res.json({ Error: error.message });
  }
}

async function updateTodo(req, res) {
  try {
    const response = await todoService.updateTodo(req.params.id, {
      [req.body.update]: req.body[req.body.update],
    });
    return res.json({
      success: true,
      data: response,
    });
  } catch (error) {
    return res.json({ Error: error.message });
  }
}

async function deleteTodo(req, res) {
  try {
    const response = await todoService.deleteTodo(req.params.id);
    return res.json({
      success: true,
      data: response,
    });
  } catch (error) {
    return res.json({ Error: error.message });
  }
}

module.exports = {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
};
