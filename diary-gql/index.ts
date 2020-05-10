import { ApolloServer } from 'apollo-server';
import { resolvers } from './resolvers';
import { typeDefs } from './schema';
import TaskAPI from './datasources/task';

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        taskAPI: new TaskAPI(),
    }),
});

server.listen({port: 7070}).then(({url}) => {
    console.log(`Server is running at ${url}.`);
});
