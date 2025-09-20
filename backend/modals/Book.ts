import mongoose from "mongoose";

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: String,
  genre: String,
  authorId: String,
  price: Number,
});

export default mongoose.model("Book", BookSchema);
