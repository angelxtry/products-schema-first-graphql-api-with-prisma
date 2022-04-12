import { Prisma, PrismaClient } from '@prisma/client';
import { ApolloServer } from 'apollo-server';

import { resolvers, typeDefs } from '@/graphql';

export interface Context {
  prisma: PrismaClient<
    Prisma.PrismaClientOptions,
    never,
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation
  >;
}

// const prisma = new PrismaClient({ log: [{ level: 'query', emit: 'event' }] });
// prisma.$on('query', (e) => {
//   console.log(e);
// });

const prisma = new PrismaClient();

const server = new ApolloServer({
  typeDefs,
  resolvers: resolvers as any,
  context: { prisma },
});

server.listen({ port: 6001 }).then(({ url }) => {
  console.log('server start: ', url);
});
