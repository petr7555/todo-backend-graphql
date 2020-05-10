const { RESTDataSource } = require('apollo-datasource-rest');

class TodoAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://todo-backend-rest.herokuapp.com/';
  }

  async getTodos() {
    return this.get('todos');
  }

  async addTodo(todo) {
    return this.post('todos', todo);
  }
}

module.exports = TodoAPI;
