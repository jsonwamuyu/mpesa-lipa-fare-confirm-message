import { GraphQLObjectType, GraphQLID, GraphQLSchema } from "graphql";

const DirectorType = new GraphQLObjectType({
    name:"Director",
    fields:{},
})

const MovieType = new GraphQLObjectType({
    name:"Movie",
    fields:{},
})

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {},
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {},
});

const schema = new GraphQLObjectType({
  query: RooQuery,
  mutation: Mutation,
});
