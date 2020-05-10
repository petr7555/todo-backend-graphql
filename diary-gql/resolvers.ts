export const resolvers = {
  Query: {
    tasks: (_, { timeSlot }, { dataSources }) => dataSources.taskAPI.getTasksForTimeSlot(timeSlot),
  },
  Mutation: {
    addTask: async (_, { task }, { dataSources }) => dataSources.taskAPI.addTask({ ...task }),
  },
};
