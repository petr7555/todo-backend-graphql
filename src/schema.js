const {gql} = require('apollo-server');

const typeDefs = gql`
    type Todo {
        id: ID!
        text: String!
    }
    
    type Query { 
        todos: [Todo]!
    }
    
    type Mutation {
        addTodo(text: String!) : Todo!
    }
    `;

module.exports = typeDefs;
