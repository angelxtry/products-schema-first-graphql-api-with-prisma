import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge';
import path from 'path';

import { productGroupResolver } from '@/graphql/resolvers';

const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql'), {
  extensions: ['graphql'],
});

const typeDefs = mergeTypeDefs(typesArray);

const resolverArray = [productGroupResolver];
const resolvers = mergeResolvers(resolverArray);

export { resolvers, typeDefs };
