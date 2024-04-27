import express from "express";
import BookController from "../controllers/book.controller";

const bookRouter = express.Router();
let books = new BookController();
//--------------------------------------------------Getting all books

bookRouter.get("/", books.getAllBooks);

bookRouter.get("/:bookID", books.getBook);

bookRouter.get("/:year", books.getBookByYear);

bookRouter.get("/:author", books.getBookByAuthor);

bookRouter.post("/", books.createBook);

bookRouter.put("/", books.updateBookByAuthor);

bookRouter.delete("/:bookID", books.deleteBook);

export default bookRouter;
