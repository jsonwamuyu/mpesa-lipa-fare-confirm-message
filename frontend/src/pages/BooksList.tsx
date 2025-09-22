import BookCard from "../components/BookCard";

const books = [
  {
    id: "1",
    title: "Love and Beast",
    genre: "Fantasy",
    price: 29.99,
    authorId: "1",
  },
  {
    id: "2",
    title: "The Hobbit",
    genre: "Science Fiction",
    price: 19.99,
    authorId: "2",
  },
  {
    id: "3",
    title: "Harry Porter",
    genre: "Horror",
    price: 24.99,
    authorId: "3",
  },
];

const BooksList = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="flex flex-row gap-8 justify-between items-center w-full mb-8">
          <h2 className="text-5xl font-bold mb-4">Books List</h2>
          <button>Add a book</button>
        </div>
        <div>
          {books.length ? (
            <div className="grid grid-cols-3 gap-4">
              {books.map((book) => (
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
