import mongoose, { Schema, Document } from "mongoose";

interface IBook extends Document {
  userID: mongoose.Schema.Types.ObjectId;
  image: string;
  bookName: string;
  authorName: string;
  category: string;
  publicationYear: number;
  price: number;
  avgTransactions: number;
}

const bookSchema: Schema = new Schema(
  {
    bookName: {
      type: String,
      required: true,
    },
    authorName: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    publicationYear: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    avgTransactions: {
      type: Number,
    },
    image: {
      type: String,
    },
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "bookusers",
      required: true,
    },
  },
  { timestamps: true }
);

const BookModel = mongoose.model<IBook>("books", bookSchema);

export { BookModel, IBook };