import { RESTDataSource } from 'apollo-datasource-rest';

export default class TaskAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:8080/';
  }

  async getTasksForTimeSlot(timeSlot) {
    return this.get(`tasks/all/time-slot/${timeSlot}`);
  }

  async addTask(task) {
    return this.post('tasks', task);
  }
}
