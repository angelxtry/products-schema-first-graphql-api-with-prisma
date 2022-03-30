import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      hello: String
    }
  `,
  resolvers: {
    Query: {
      hello: (): string => 'world!',
    },
  },
});

server.listen({ port: 6001 }).then(({ url }) => {
  console.log('server start: ', url);
});
