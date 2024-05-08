import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type BodyStats = {
  __typename?: 'BodyStats';
  bmi?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  weight?: Maybe<Scalars['Int']['output']>;
};

export type Exercise = {
  __typename?: 'Exercise';
  id: Scalars['Int']['output'];
  kcal?: Maybe<Scalars['Int']['output']>;
  time?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Meal = {
  __typename?: 'Meal';
  id: Scalars['Int']['output'];
  kcal?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addBodyStats?: Maybe<BodyStats>;
  addExercise?: Maybe<Exercise>;
  addMeal?: Maybe<Meal>;
  deleteExercise?: Maybe<Exercise>;
  deleteMeal?: Maybe<Meal>;
  editBodyStats?: Maybe<BodyStats>;
  editExercise?: Maybe<Exercise>;
  editMeal?: Maybe<Meal>;
  resetBodyStats?: Maybe<BodyStats>;
};


export type MutationAddBodyStatsArgs = {
  height?: InputMaybe<Scalars['Int']['input']>;
  weight?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationAddExerciseArgs = {
  kcal?: InputMaybe<Scalars['Int']['input']>;
  time?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};


export type MutationAddMealArgs = {
  kcal?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDeleteExerciseArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationDeleteMealArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationEditBodyStatsArgs = {
  height?: InputMaybe<Scalars['Int']['input']>;
  weight?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationEditExerciseArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  kcal?: InputMaybe<Scalars['Int']['input']>;
  time?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};


export type MutationEditMealArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  kcal?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  bodyStats?: Maybe<BodyStats>;
  exercises: Array<Maybe<Exercise>>;
  meals: Array<Maybe<Meal>>;
};



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
export type ResolversTypes = {
  BodyStats: ResolverTypeWrapper<BodyStats>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Exercise: ResolverTypeWrapper<Exercise>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Meal: ResolverTypeWrapper<Meal>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  BodyStats: BodyStats;
  Boolean: Scalars['Boolean']['output'];
  Exercise: Exercise;
  Float: Scalars['Float']['output'];
  Int: Scalars['Int']['output'];
  Meal: Meal;
  Mutation: {};
  Query: {};
  String: Scalars['String']['output'];
};

export type BodyStatsResolvers<ContextType = any, ParentType extends ResolversParentTypes['BodyStats'] = ResolversParentTypes['BodyStats']> = {
  bmi?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  weight?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ExerciseResolvers<ContextType = any, ParentType extends ResolversParentTypes['Exercise'] = ResolversParentTypes['Exercise']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  kcal?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  time?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MealResolvers<ContextType = any, ParentType extends ResolversParentTypes['Meal'] = ResolversParentTypes['Meal']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  kcal?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addBodyStats?: Resolver<Maybe<ResolversTypes['BodyStats']>, ParentType, ContextType, Partial<MutationAddBodyStatsArgs>>;
  addExercise?: Resolver<Maybe<ResolversTypes['Exercise']>, ParentType, ContextType, Partial<MutationAddExerciseArgs>>;
  addMeal?: Resolver<Maybe<ResolversTypes['Meal']>, ParentType, ContextType, Partial<MutationAddMealArgs>>;
  deleteExercise?: Resolver<Maybe<ResolversTypes['Exercise']>, ParentType, ContextType, Partial<MutationDeleteExerciseArgs>>;
  deleteMeal?: Resolver<Maybe<ResolversTypes['Meal']>, ParentType, ContextType, Partial<MutationDeleteMealArgs>>;
  editBodyStats?: Resolver<Maybe<ResolversTypes['BodyStats']>, ParentType, ContextType, Partial<MutationEditBodyStatsArgs>>;
  editExercise?: Resolver<Maybe<ResolversTypes['Exercise']>, ParentType, ContextType, Partial<MutationEditExerciseArgs>>;
  editMeal?: Resolver<Maybe<ResolversTypes['Meal']>, ParentType, ContextType, Partial<MutationEditMealArgs>>;
  resetBodyStats?: Resolver<Maybe<ResolversTypes['BodyStats']>, ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  bodyStats?: Resolver<Maybe<ResolversTypes['BodyStats']>, ParentType, ContextType>;
  exercises?: Resolver<Array<Maybe<ResolversTypes['Exercise']>>, ParentType, ContextType>;
  meals?: Resolver<Array<Maybe<ResolversTypes['Meal']>>, ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  BodyStats?: BodyStatsResolvers<ContextType>;
  Exercise?: ExerciseResolvers<ContextType>;
  Meal?: MealResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};

