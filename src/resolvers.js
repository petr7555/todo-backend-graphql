const resolvers = {
  Query: {
    todos: async (_, __, { dataSources }) => dataSources.todoAPI.getTodos(),
  },
  Mutation: {
    addTodo: async (_, text, { dataSources }) => dataSources.todoAPI.addTodo(text),
  },
};

module.exports = resolvers;
