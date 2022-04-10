import { ProductGroup } from '@prisma/client';
import { ApolloError } from 'apollo-server';
import { plainToClass } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';

import { CreateProductGroupDto } from '@/graphql/dtos/create-product-group.dto';
import { Context } from '@/index';
import {
  CreateProductGroupPayload,
  MutationCreateProductGroupArgs,
  QueryProductGroupArgs,
} from '@/types/resolvers-types';

export const productGroupResolver = {
  Query: {
    productGroups: async (
      _: never,
      __: never,
      { prisma }: Context,
    ): Promise<ProductGroup[]> => {
      try {
        return await prisma.productGroup.findMany();
      } catch (error) {
        throw new ApolloError('Server Error');
      }
    },

    productGroup: (
      _: never,
      { productGroupId }: QueryProductGroupArgs,
      { prisma }: Context,
    ): Promise<ProductGroup | null> => {
      try {
        return prisma.productGroup.findUnique({
          where: { id: Number(productGroupId) },
        });
      } catch (error) {
        throw new ApolloError('Server Error');
      }
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
