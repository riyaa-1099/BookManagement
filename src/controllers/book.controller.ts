import { Request, Response } from "express";
import BookServices from "../dao/book.dao";
import RegistrationValidator from "./validators/validateBookDetails";

const registrationValidator = new RegistrationValidator();
const bookservices = new BookServices();

class BookController {
  public getAllBooks = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const { page, limit } = req.query;
      const booksResult = await bookservices.getAllBooks(
        Number(page),
        Number(limit)
      );
      const userID = req.body.userID;
      const isAdmin = req.body.isAdmin || false;
      res.send({
        All_Books: booksResult.books,
        userID,
        total: booksResult.count,
        currentPage: page,
        perPage: limit,
        status: "success",
        isAdmin,
      });
    } catch (err) {
      console.log(err);
      res.send({ msg: "Something went wrong!!" });
    }
  };

  public createBook = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    let payload = req.body;
    let {
      bookName,
      authorName,
      category,
      publicationYear,
      price,
      avgTransactions,
      image,
    } = payload;

    const validationResult = registrationValidator.validateRegistration(
      bookName,
      authorName,
      category,
      publicationYear,
      price,
    );

    if (!validationResult) {
      res.send({ msg: "Not Registered, Book Details Not Filled Properly!!" });
      return;
    }

    if (!image) {
      const defaultImage = {
        image:
          "https://i.guim.co.uk/img/media/77e3e93d6571da3a5d77f74be57e618d5d930430/0_0_2560_1536/master/2560.jpg?width=1900&dpr=1&s=none",
      };
      payload = { ...payload, ...defaultImage };
    }

    try {
      await bookservices.createBook(payload);
      res.send({ msg: "Book Added successfully" });
    } catch (error) {
      const errorMessage = (error as Error).message;
      res.send(errorMessage);
    }
  };

  public getBook = async (req: Request, res: Response): Promise<void> => {
    const bookID = req.body.bookID;

    try {
      let result = await bookservices.getBook(bookID);
      res.send(result);
    } catch (err) {
      console.log(err);
      res.send({ msg: "something wrong!!" });
    }
  };

  public getBookByYear = async (req: Request, res: Response): Promise<void> => {
    const year = req.body.year;

    try {
      let result = await bookservices.getBookByYear(year);
      res.send(result);
    } catch (err) {
      console.log(err);
      res.send({ msg: "something wrong!!" });
    }
  };

  public getBookByAuthor = async (req: Request, res: Response): Promise<void> => {
    const author = req.body.author;

    try {
      let result = await bookservices.getBookByAuthor(author);
      res.send(result);
    } catch (err) {
      console.log(err);
      res.send({ msg: "something wrong!!" });
    }
  };

  public updateBookByAuthor = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    const payload = req.body;
    const userID = req.body.userID;

    try {
      let result = await bookservices.updateBook(
        payload,
        userID
      );
      if (result === true) {
        res.send({ msg: "Book updated successfully!!" });
      } else {
        res.send({ msg: "Not Authorized!!" });
      }
    } catch (err) {
      console.log(err);
      res.send({ msg: "something wrong!!" });
    }
  };

  public deleteBook = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    const bookID = req.params.bookID;
    const userID = req.body.userID;
    const isAdmin = req.body.isAdmin || false;

    try {
      let result = await bookservices.deleteBook(
        bookID,
        userID,
        isAdmin
      );
      if (result === true) {
        res.send({
          msg: "Book deleted successfully!!",
          status: "success",
        });
      } else {
        res.send({ msg: "Not Authorized!!", status: "fail" });
      }
    } catch (err) {
      console.log(err);
      res.send({ msg: "something wrong", status: "fail" });
    }
  };
}

export default BookController;
