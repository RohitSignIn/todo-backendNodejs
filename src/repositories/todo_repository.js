const Todo = require("../model/todo_model");

class TodoRepository {
  async getTodos() {
    try {
      const res = await Todo.findAll();
      return res;
    } catch (e) {
      console.log(e);
    }
  }

  async addTodo(text) {
    try {
      const res = await Todo.create({
        text: text,
        competed: false,
      });
      return res;
    } catch (e) {
      console.log(e);
    }
  }

  async updateTodo(id, updateObj) {
    try {
      const res = await Todo.update({ updateObj }, { where: { id } });
      return res;
    } catch (e) {
      console.log(e);
    }
  }

  async deleteTodo(id) {
    try {
      const res = await Todo.destroy({ id });
      return res;
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = TodoRepository;
