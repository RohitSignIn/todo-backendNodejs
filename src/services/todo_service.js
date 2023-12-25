class TodoService {
  constructor(repository) {
    this.todoRepository = repository;
  }

  async getTodos() {
    try {
      const res = await this.todoRepository.getTodos();
      return res;
    } catch (e) {
      console.log(e);
    }
  }

  async addTodo(text) {
    try {
      const res = await this.todoRepository.addTodo(text);
      return res;
    } catch (e) {
      console.log(e);
    }
  }

  async updateTodo(id, updateObj) {
    try {
      const res = await this.todoRepository.updateTodo(id, updateObj);
      return res;
    } catch (e) {
      console.log(e);
    }
  }

  async deleteTodo(id) {
    try {
      const res = await this.todoRepository.deleteTodo(id);
      return res;
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = TodoService;
