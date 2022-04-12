import { ApolloError } from 'apollo-server';

import { Context } from '@/index';
import { ProductOption, ProductOptionGroup } from '@/types/resolvers-types';

export const productOptionGroupResolver = {
  ProductOptionGroup: {
    productOptions: async (
      { id: productOptionGroupId }: ProductOptionGroup,
      __: never,
      { prisma }: Context,
    ): Promise<ProductOption[]> => {
      try {
        return await prisma.productOption.findMany({
          where: { productOptionGroupId },
        });
      } catch (error) {
        throw new ApolloError('Server Error');
      }
    },
  },
};
