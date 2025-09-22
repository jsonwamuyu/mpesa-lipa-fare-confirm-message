import graphql from "graphql";

const Adults = [
  { id: 1, fullname: "John Doe", gender: "Male", age: 40 },
  { id: 2, fullname: "Jane Smith", gender: "Female", age: 36 },
  { id: 3, fullname: "Sam Johnson", gender: "Male", age: 45 },
  { id: 4, fullname: "Emily Davis", gender: "Female", age: 32 },
];

const Children = [
  { id: 1, fullname: "Alice Doe", gender: "female", adultId: 4 },
  { id: 2, fullname: "Bob Doe", gender: "Male", adultId: 1 },
  { id: 3, fullname: "Charlie Smith", gender: "Male", adultId: 2 },
  { id: 4, fullname: "Daisy Johnson", gender: "Male", adultId: 3 },
  { id: 5, fullname: "Ethan Johnson", gender: "Male", adultId: 3 },
];

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLList,
  GraphQLSchema,
} = graphql;

const AdultType = new GraphQLObjectType({
  name: "Adult",
  fields: () => ({
    id: { type: GraphQLID },
    fullname: { type: GraphQLString },
    gender: { type: GraphQLString },
    age: { type: GraphQLInt },
    children: {
      type: new GraphQLList(ChildType),
      resolve: (parent, args) => {
        return Children.filter((child) => child.adultId == parent.id);
      },
    },
  }),
});

const ChildType = new GraphQLObjectType({
  name: "Child",
  fields: () => ({
    id: { type: GraphQLID },
    fullname: { type: GraphQLString },
    gender: { type: GraphQLString },
    adultId: { type: GraphQLID },
    adult: {
      type: AdultType,
      resolve: (parent, args) => {
        return Adults.find((par) => par.id == parent.adultId);
      },
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    adult: {
      type: AdultType,
      args: {
        id: { type: GraphQLID },
      },
      resolve: (parent, args) => {
        return Adults.find((pare) => pare.id == args.id);
      },
    },
    adults: {
      type: new GraphQLList(AdultType),
      resolve: (parent, args) => {
        return Adults;
      },
    },
    child: {
      type: ChildType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve: (parent, args) => {
        return Children.find((child) => child.id == args.id);
      },
    },
    children: {
      type: new GraphQLList(ChildType),
      resolve: (parent, args) => {
        return Children;
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutations",
  fields: {
    addAdult: {
      type: AdultType,
      args: {
        fullname: { type: GraphQLString },
        gender: { type: GraphQLString },
        age: { type: GraphQLInt },
      },
      resolve: (parent, args) => {
        const newAdult = {
          id: Adults.length + 1,
          fullname: args.fullname,
          age: args.age,
          gender: args.gender,
        };
        Adults.push(newAdult);
        return newAdult;
      },
    },
    addChild: {
      type: ChildType,
      args: {
        fullname: { type: GraphQLString },
        adultId: { type: GraphQLID },
      },
      resolve: (parent, args) => {
        const newChild = {
          id: Children.length + 1,
          fullname: args.fullname,
          adultId: args.adultId,
        };
        Children.push(newChild);
        return newChild;
      },
    },
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
