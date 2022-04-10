import { ProductGroup } from '@prisma/client';
import { ApolloError } from 'apollo-server';
import { plainToClass } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';

import { CreateProductGroupDto } from '@/graphql/dtos/create-product-group.dto';
import { Context } from '@/index';
import {
  CreateProductGroupPayload,
  MutationCreateProductGroupArgs,
} from '@/types/resolvers-types';

export const productGroupResolver = {
  Query: {
    productGroups: (
      _: never,
      __: never,
      { prisma }: Context,
    ): Promise<ProductGroup[]> => {
      return prisma.productGroup.findMany();
    },
  },

  Mutation: {
    createProductGroup: async (
      _: never,
      { input }: MutationCreateProductGroupArgs,
      { prisma }: Context,
    ): Promise<CreateProductGroupPayload> => {
      const target = plainToClass(CreateProductGroupDto, input);
      try {
        const errors: ValidationError[] = await validate(target);
        if (errors) {
          const messages = errors.map((error) => {
            return error.constraints ? Object.values(error.constraints) : '';
          });
          return {
            __typename: 'CreateProductGroupInvalidInputError',
            message: messages.join(', '),
          };
        }

        const productGroup = await prisma.productGroup.create({
          data: target,
        });

        return {
          __typename: 'ProductGroupResultSuccess',
          productGroup: {
            ...productGroup,
            id: productGroup.id.toString(),
          },
        };
      } catch (error) {
        throw new ApolloError('Server Error');
      }
    },
  },
};
