import graphql from "graphql";
import _ from "lodash";

const books = [
  { id: "1", title: "Book One", genre: "Fantasy", price: 29.99, authorId: "1" },
  {
    id: "2",
    title: "Book Two",
    genre: "Science Fiction",
    price: 19.99,
    authorId: "2",
  },
  {
    id: "3",
    title: "Book Three",
    genre: "Science Fiction",
    price: 19.99,
    authorId: "3",
  },
  { id: "4", title: "Book Four", genre: "Horror", price: 1.99, authorId: "3" },
  {
    id: "5",
    title: "Book Five",
    genre: "Adventure",
    price: 3.99,
    authorId: "2",
  },
  { id: "6", title: "Book Six", genre: "Horror", price: 8.99, authorId: "1" },
];

const authors = [
  { id: "1", name: "Author One" },
  { id: "2", name: "Author Two" },
  { id: "3", name: "Author Three" },
];

const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLFloat,
  GraphQLString,
  GraphQLID,
  GraphQLList,
} = graphql;

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    genre: { type: GraphQLString },
    price: { type: GraphQLFloat },
    author: {
      type: AuthorType,
      resolve: (parent, args) => {
        return _.find(authors, { id: parent.authorId });
      },
    },
  }),
});

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    books: {
      type: new GraphQLList(BookType),
      resolve: (parent, args) => {
        return _.filter(books, { authorId: parent.id });
      },
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve: (parent, args) => {
        return _.find(books, { id: args.id });
      },
    },
    books: {
      type: new GraphQLList(BookType),
      resolve: (parent, args) => books,
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve: (parent, args) => {
        return _.find(authors, { id: args.id });
      },
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve: (parent, args) => authors,
    },
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
});
