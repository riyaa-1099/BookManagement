import { BookModel, IBook } from "../models/book.model";

class BookService {
  public getAllBooks = async (
    page: number,
    limit: number
  ): Promise<{ books: IBook[]; count: number }> => {
    const skip = (page - 1) * limit;
    const books = await BookModel.find().skip(skip).limit(limit);
    const count = await BookModel.countDocuments();
    return { books, count };
  };

  public getBook = async (bookID: string): Promise<{ book: IBook }> => {
    const book = await BookModel.findOne({ _id: bookID });
    if (!book) {
      throw new Error("Book does not exist by this id.");
    }
    return { book };
  };

  public getBookByYear = async (year: string): Promise<{ book: IBook }> => {
    const book = await BookModel.find({ year: Number(year) });
    if (!book) {
      throw new Error("Book does not exist by this year.");
    }
    return { book };
  };

  public getBookByAuthor = async (author: string): Promise<{ book: IBook }> => {
    const book = await BookModel.find({
      author: { $regex: author, $options: "i" },
    });
    if (!book) {
      throw new Error("Book does not exist by this author.");
    }
    return { book };
  };

  public createBook = async (payload: IBook): Promise<void> => {
    const { userID } = payload;

    const existingBook = await BookModel.findOne({ userID });

    if (existingBook) {
      throw new Error("Book already exists for this user.");
    }

    const newBook = new BookModel(payload);
    await newBook.save();
  };

  public updateBook = async (
    payload: IBook,
    userID: string
  ): Promise<boolean> => {
    const book = await BookModel.findOne({ userID });
    if (!book) {
      throw new Error("Book does not exist for this User.");
    }
    if (String(userID) !== String(book.userID)) {
      throw new Error("You can only make editing in your book !");
    }

    let updatebook = await BookModel.findByIdAndUpdate(book._id, payload);
    if (updatebook === null) {
      throw new Error("Error in updating Book !");
    }
    return true;
  };

  public deleteBook = async (
    bookID: string,
    userID: string,
    isAdmin: boolean
  ): Promise<boolean> => {
    const book = await BookModel.findOne({ _id: bookID });

    if (!book) {
      throw new Error("Book does not exist.");
    }

    if (String(userID) !== String(book.userID) && !isAdmin) {
      throw new Error("Access Denied !");
    }

    await BookModel.findByIdAndDelete(bookID);
    return true;
  };
}

export default BookService;
