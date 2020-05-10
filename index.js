const {ApolloServer} = require('apollo-server');
const TodoAPI = require('./src/todos');
const typeDefs = require('./src/schema');
const resolvers = require('./src/resolvers');

const PORT = process.env.PORT || 4000;

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        todoAPI: new TodoAPI(),
    }),
});

server.listen({port: PORT}).then(({url}) => {
    console.log(`GraphQL server is running at ${url}.`);
});




