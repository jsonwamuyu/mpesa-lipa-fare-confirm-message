import { useState, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";

import BookCard, { type BookProps } from "../components/BookCard";

// const books = [
//   {
//     id: "1",
//     title: "Love and Beast",
//     genre: "Fantasy",
//     price: 29.99,
//     authorId: "1",
//   },
//   {
//     id: "2",
//     title: "The Hobbit",
//     genre: "Science Fiction",
//     price: 19.99,
//     authorId: "2",
//   },
//   {
//     id: "3",
//     title: "Harry Porter",
//     genre: "Horror",
//     price: 24.99,
//     authorId: "3",
//   },
// ];


//

// Query to get all books
const GET_BOOKS = gql`
  query GetBooks {
    books {
      title
      price
      author
    }
  }
`;


// Mutation to add a book
const ADD_BOOK = gql`
mutation AddBook($title: String!, $price: Float!, $authorId: ID!){
  addBook(title:$title, price:$price, authorId: $authorId){
    id
    title
    price
    author{
      name
    }
  }
}`;

const BooksList = () => {
  const [open, setOpen] = useSatate(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const { data, loading, error } = useQuery(GET_BOOKS);

  useEffect(() => {}, [data]);

  if (loading) return <p>Loading...</p>;

  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="wrapper">
      <div className="container">
        <div className="flex flex-row gap-8 justify-between items-center w-full mb-8">
          <h2 className="text-5xl font-bold mb-4">Books List</h2>
          <button>Add a book</button>
        </div>
        <div>
          {data.books.length ? (
            <div className="grid grid-cols-3 gap-4">
              {data.books.map((book:BookProps) => (
                <BookCard key={book.id} {...book} />
              ))}
            </div>
          ) : (
            <h4 className="text-2xl font-bold">Sorry no books for you</h4>
          )}
        </div>
      </div>
    </div>
  );
};

export default BooksList;
