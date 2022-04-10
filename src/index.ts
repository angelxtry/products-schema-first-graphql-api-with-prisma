import { Prisma, PrismaClient } from '@prisma/client';
import { ApolloServer } from 'apollo-server';

import { resolvers, typeDefs } from '@/graphql';

export interface Context {
  prisma: PrismaClient<
    Prisma.PrismaClientOptions,
    never,
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined
  >;
}

const prisma = new PrismaClient();

const server = new ApolloServer({
  typeDefs,
  resolvers: resolvers as any,
  context: { prisma },
});

server.listen({ port: 6001 }).then(({ url }) => {
  console.log('server start: ', url);
});
