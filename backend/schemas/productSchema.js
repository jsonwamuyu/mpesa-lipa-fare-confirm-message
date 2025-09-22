import graphql from "graphql";
import _ from "lodash";

import Book from "../modals/Book.ts";
import Author from "../modals/Author.ts";

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
        return Author.findById(parent.authorId)
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
        return Book.find({authorId: parent.id})
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
        return Book.findById(args.id)
      },
    },
    books: {
      type: new GraphQLList(BookType),
      resolve: (parent, args) => {return Book.find({})},
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve: (parent, args) => {
        return Author.findById(args.id)
      },
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve: (parent, args) =>{
        return Author.find({})
      }
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutations",
  fields: {
    addBook: {
      type: BookType,
      args: {
        title: { type: GraphQLString },
        genre: { type: GraphQLString },
        price: { type: GraphQLFloat },
        authorId: { type: GraphQLID },
      },
      resolve: (parent, args) => {
        let book = new Book({
          title: args.title,
          genre: args.genre,
          price: args.price,
          authorId: args.authorId,
        });
        return book.save();
      },
    },
    addAuthor: {
      type: AuthorType,
      args: {
        name: { type: GraphQLString },
      },
      resolve: (parent, args) => {
        let author = new Author({
          name: args.name,
        });
        return author.save();
      },
    },
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
