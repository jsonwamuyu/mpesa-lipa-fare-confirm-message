type BookProps = {
  title: string;
  price: number;
  genre?: string;
  author?: string;
  thumbnail?: string;
};

const BookCard = ({ title, price, author, thumbnail }: BookProps) => {
  return (
    <div className="bg-black/25 text-white rounded-lg p-4 flex flex-col gap-2">
      <div className="flex justify-between items-center relative">
        <h4 className="text-xl font-bold">{title}</h4>
        <div className="text-blue-700 text-4xl font-semibold">
          $ {price}
        </div>
      </div>
      <p>{author}</p>
      <img src={thumbnail} alt={title} />
    </div>
  );
};

export default BookCard;
