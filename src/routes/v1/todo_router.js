const router = require("express").Router();

const {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
} = require("../../controllers/todo_controller");

// GET ALL TODOS
router.get("/", getTodos);

// CREATE TODO
router.post("/", addTodo);

// UPDATE TODOS
router.patch("/:id", updateTodo);

// DELETE TODO
router.delete("/:id", deleteTodo);

module.exports = router;
