import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: number;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: Date;
};

export type CreateProductGroupInput = {
  companyName: Scalars['String'];
  productGroupName: Scalars['String'];
};

export type CreateProductGroupInvalidInputError = ErrorType & {
  __typename?: 'CreateProductGroupInvalidInputError';
  message: Scalars['String'];
};

export type CreateProductGroupPayload = CreateProductGroupInvalidInputError | ProductGroupResultSuccess;

export type ErrorType = {
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createProductGroup: CreateProductGroupPayload;
};


export type MutationCreateProductGroupArgs = {
  input: CreateProductGroupInput;
};

export type Node = {
  id: Scalars['ID'];
};

export type PaginationInput = {
  limit: Scalars['Int'];
  page: Scalars['Int'];
};

export type ProductGroup = Node & {
  __typename?: 'ProductGroup';
  companyName: Scalars['String'];
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  productGroupName: Scalars['String'];
  productOptionGroups: Array<ProductOptionGroup>;
  updatedAt: Scalars['Date'];
};

export type ProductGroupConnection = {
  __typename?: 'ProductGroupConnection';
  edges: Array<ProductGroupEdge>;
  totalCount: Scalars['Int'];
};

export type ProductGroupEdge = {
  __typename?: 'ProductGroupEdge';
  node: ProductGroup;
};

export type ProductGroupResultSuccess = {
  __typename?: 'ProductGroupResultSuccess';
  productGroup: ProductGroup;
};

export type ProductOption = Node & {
  __typename?: 'ProductOption';
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  productOptionName: Scalars['String'];
  updatedAt: Scalars['Date'];
};

export type ProductOptionGroup = Node & {
  __typename?: 'ProductOptionGroup';
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  productOptionGroupName: Scalars['String'];
  productOptions: Array<ProductOption>;
  updatedAt: Scalars['Date'];
};

export type Query = {
  __typename?: 'Query';
  productGroup?: Maybe<ProductGroup>;
  productGroups: ProductGroupConnection;
};


export type QueryProductGroupArgs = {
  productGroupId: Scalars['ID'];
};


export type QueryProductGroupsArgs = {
  pagination: PaginationInput;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CreateProductGroupInput: CreateProductGroupInput;
  CreateProductGroupInvalidInputError: ResolverTypeWrapper<CreateProductGroupInvalidInputError>;
  CreateProductGroupPayload: ResolversTypes['CreateProductGroupInvalidInputError'] | ResolversTypes['ProductGroupResultSuccess'];
  Date: ResolverTypeWrapper<Scalars['Date']>;
  ErrorType: ResolversTypes['CreateProductGroupInvalidInputError'];
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  Node: ResolversTypes['ProductGroup'] | ResolversTypes['ProductOption'] | ResolversTypes['ProductOptionGroup'];
  PaginationInput: PaginationInput;
  ProductGroup: ResolverTypeWrapper<ProductGroup>;
  ProductGroupConnection: ResolverTypeWrapper<ProductGroupConnection>;
  ProductGroupEdge: ResolverTypeWrapper<ProductGroupEdge>;
  ProductGroupResultSuccess: ResolverTypeWrapper<ProductGroupResultSuccess>;
  ProductOption: ResolverTypeWrapper<ProductOption>;
  ProductOptionGroup: ResolverTypeWrapper<ProductOptionGroup>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean'];
  CreateProductGroupInput: CreateProductGroupInput;
  CreateProductGroupInvalidInputError: CreateProductGroupInvalidInputError;
  CreateProductGroupPayload: ResolversParentTypes['CreateProductGroupInvalidInputError'] | ResolversParentTypes['ProductGroupResultSuccess'];
  Date: Scalars['Date'];
  ErrorType: ResolversParentTypes['CreateProductGroupInvalidInputError'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Mutation: {};
  Node: ResolversParentTypes['ProductGroup'] | ResolversParentTypes['ProductOption'] | ResolversParentTypes['ProductOptionGroup'];
  PaginationInput: PaginationInput;
  ProductGroup: ProductGroup;
  ProductGroupConnection: ProductGroupConnection;
  ProductGroupEdge: ProductGroupEdge;
  ProductGroupResultSuccess: ProductGroupResultSuccess;
  ProductOption: ProductOption;
  ProductOptionGroup: ProductOptionGroup;
  Query: {};
  String: Scalars['String'];
}>;

export type CreateProductGroupInvalidInputErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateProductGroupInvalidInputError'] = ResolversParentTypes['CreateProductGroupInvalidInputError']> = ResolversObject<{
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateProductGroupPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateProductGroupPayload'] = ResolversParentTypes['CreateProductGroupPayload']> = ResolversObject<{
  __resolveType: TypeResolveFn<'CreateProductGroupInvalidInputError' | 'ProductGroupResultSuccess', ParentType, ContextType>;
}>;

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type ErrorTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ErrorType'] = ResolversParentTypes['ErrorType']> = ResolversObject<{
  __resolveType: TypeResolveFn<'CreateProductGroupInvalidInputError', ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createProductGroup?: Resolver<ResolversTypes['CreateProductGroupPayload'], ParentType, ContextType, RequireFields<MutationCreateProductGroupArgs, 'input'>>;
}>;

export type NodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = ResolversObject<{
  __resolveType: TypeResolveFn<'ProductGroup' | 'ProductOption' | 'ProductOptionGroup', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
}>;

export type ProductGroupResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductGroup'] = ResolversParentTypes['ProductGroup']> = ResolversObject<{
  companyName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  productGroupName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  productOptionGroups?: Resolver<Array<ResolversTypes['ProductOptionGroup']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductGroupConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductGroupConnection'] = ResolversParentTypes['ProductGroupConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['ProductGroupEdge']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductGroupEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductGroupEdge'] = ResolversParentTypes['ProductGroupEdge']> = ResolversObject<{
  node?: Resolver<ResolversTypes['ProductGroup'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductGroupResultSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductGroupResultSuccess'] = ResolversParentTypes['ProductGroupResultSuccess']> = ResolversObject<{
  productGroup?: Resolver<ResolversTypes['ProductGroup'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductOptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductOption'] = ResolversParentTypes['ProductOption']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  productOptionName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductOptionGroupResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductOptionGroup'] = ResolversParentTypes['ProductOptionGroup']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  productOptionGroupName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  productOptions?: Resolver<Array<ResolversTypes['ProductOption']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  productGroup?: Resolver<Maybe<ResolversTypes['ProductGroup']>, ParentType, ContextType, RequireFields<QueryProductGroupArgs, 'productGroupId'>>;
  productGroups?: Resolver<ResolversTypes['ProductGroupConnection'], ParentType, ContextType, RequireFields<QueryProductGroupsArgs, 'pagination'>>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  CreateProductGroupInvalidInputError?: CreateProductGroupInvalidInputErrorResolvers<ContextType>;
  CreateProductGroupPayload?: CreateProductGroupPayloadResolvers<ContextType>;
  Date?: GraphQLScalarType;
  ErrorType?: ErrorTypeResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Node?: NodeResolvers<ContextType>;
  ProductGroup?: ProductGroupResolvers<ContextType>;
  ProductGroupConnection?: ProductGroupConnectionResolvers<ContextType>;
  ProductGroupEdge?: ProductGroupEdgeResolvers<ContextType>;
  ProductGroupResultSuccess?: ProductGroupResultSuccessResolvers<ContextType>;
  ProductOption?: ProductOptionResolvers<ContextType>;
  ProductOptionGroup?: ProductOptionGroupResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
}>;

