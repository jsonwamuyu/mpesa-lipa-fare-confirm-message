import { gql, useMutation } from "@apollo/client/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import type { InferType } from "yup";

const BookSchema = yup.object().shape({
  title: yup
    .string()
    .min(4, "Title must be min 4 characters")
    .required("Title is required"),
  genre: yup.string().required("Genre is required"),
  author: yup.string().required("A book must have an author"),
  price: yup
    .number()
    .typeError("Price must be a number")
    .positive("Price must be greator than 0")
    .required("Price is required"),
});

const ADD_BOOK = gql`
  mutation AddBook($title:String!, $genre: String!, $price:N)
`;

type BookFormData = InferType<typeof BookSchema>;

const AddBookComponent = () => {
  const [addBook, { loading, error }] = useMutation(ADD_BOOK, {
    refetchQueries: ["GetBooks"],
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<BookFormData>({
    resolver: yupResolver(BookSchema),
  });

  const onSubmit = (data: BookFormData) => {
    AddBook({ variables: data });
    reset();
  };
  return (
    <div className="wrapper bg-black/10 ">
      <div className="container">
        <div className="bg-white w-full md:max-w-md shadow-lg rounded-lg">
          <h4>Add a book</h4>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col mb-4 gap-1 w-full">
              <label htmlFor="title">Book title</label>
              <input
                type="text"
                id="title"
                className="p-2 rounded-md bg-black/5 border-[1px] border-slate-50/10 focus:outline-none focus:border-blue-500"
                {...register("title")}
              />
              {errors.title && (
                <p className="text-red-300">{errors.title?.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-1 mb-4 w-full"></div>
            <div className="flex flex-col mb-4">
              <label htmlFor="price">Book price</label>
              <input
                type="number"
                id="price"
                {...register("price", { valueAsNumber: true })}
                className="p-2 rounded-md bg-black/5 border-[1px] border-slate-50/10 focus:outline-none focus:border-blue-500"
              />
              {errors.price && (
                <p className="text-red-300">{errors.price?.message}</p>
              )}
            </div>
            <div className="flex flex-col mb-4 gap-1 w-full">
              <label htmlFor="author">Author</label>
              <input
                type="text"
                placeholder="Authors name"
                {...register("author")}
                id="author"
                className="p-2 rounded-md bg-black/5 border-[1px] border-slate-50/10 focus:outline-none focus:border-blue-500"
              />
              {errors.author && (
                <p className="text-red-300">{errors.author?.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-1 mb-4 w-full">
              <label htmlFor="genre" className="text-slate-300 text-sm">
                Genre
              </label>
              <input type="text" placeholder="Genre" {...register("genre")} />
            </div>
            <div className="flex items-center gap-8 justify-end">
              <button>Cancel</button>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
              >
                Add Book
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBookComponent;
