import { gql } from 'apollo-server';

export const typeDefs = gql`
    type Task {
        id: ID!
        timeSlot: String!
        task: String!
        isFinished: Boolean
        created: String
    }
    
    type Query {
        tasks(timeSlot: String!): [Task]!
    }
    
    input TaskInput {
        timeSlot: String!
        task: String!
        isFinished: Boolean
    }
    
    type Mutation {
        addTask(task: TaskInput!) : Task!
    }
    `;
