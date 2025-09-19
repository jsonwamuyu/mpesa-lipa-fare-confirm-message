import graphql, { GraphQLList } from "graphql";
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
  { id: "3", title: "Book Three", genre: "Horror", price: 9.99, authorId: "3" },
];

const authors = [
  { id: "1", name: "Author One" },
  { id: "2", name: "Author Two" },
  { id: "3", name: "Author Three" },
];

const { GraphQLObjectType, GraphQLSchema, GraphQLFloat, GraphQLString } =
  graphql;

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    genre: { type: GraphQLString },
    price: { type: GraphQLFloat },
  }),
});

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      resolver: (parent, args) => {
        return _.find(books, { id: args.id });
      },
    },
    books: {
      type: new GraphQLList(BookType),
      resolver: () => books,
    },
    author: {
      type: AuthorType,
      resolver: (parent, args) => {
        return _.find(authors, { id: args.id });
      },
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolver: () => authors,
    },
  },
});
