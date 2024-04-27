# book-management-backend
The backend of the application is responsible for handling the API requests from the front end, processing the form submissions, and interacting with the MongoDB database for data storage and retrieval. It is built using TypeScript, a statically-typed superset of JavaScript, which adds type-checking and additional features to the language. It handles the authentication, data storage, and API endpoints required for the front-end application.

<h3>Technologies Used</h3>

TypeScript: A typed superset of JavaScript that compiles to plain JavaScript.

Node.js: A JavaScript runtime environment for running server-side applications.

Express: A fast and minimalist web framework for Node.js.

MongoDB: A popular NoSQL database for data storage.

Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js.

JSON Web Tokens (JWT): For secure authentication and authorization.

Axios: A promise-based HTTP client for making API requests.

Bcrypt: A library for hashing and encrypting passwords.

Cookie Parser: A middleware for parsing cookies in the HTTP request.

Cors: A middleware for enabling Cross-Origin Resource Sharing.

Dotenv: A module for loading environment variables from a .env file.

Nodemon: A development tool for automatically restarting the server during development.

React Router DOM: A library for handling routing in React applications.

<h3>Getting Started</h3>
To get started with the backend application locally, follow these steps:

1. Clone the repository:
  git clone <repository-url>
  
2. Install the dependencies:
  npm install

3. Configure the environment variables:
 Create a .env file in the root directory.
 Set the required environment variables in the .env file, such as:
 PORT: The port number for the server to listen on.
 MONGODB_URI: The MongoDB connection URL.
 SECRET_KEY: A secret key for JWT token generation.

4.Start the application:
 npm run dev
 The backend server should now be running and ready to handle requests from the frontend application.

<h3>Project Structure</h3>

The Book Management Backend project follows a structured directory layout for better organization:

src/: Contains the source code files.

routes/: Defines the API routes and connects them to the respective controllers.

controllers/: Handles the logic for different API endpoints and data manipulation.

models/: Defines the data schema and interacts with the database using Mongoose.

middlewares/: Contains custom middleware functions for authentication, error handling, etc.

utils/: Contains utility functions or modules used throughout the application.

config/: Contains configuration files, such as database connection setup.

services/:Ideally controller should connect to respective service files where helpers and other things utilized and dao is only for db query.

index.js: The entry point of the application.

<h3>API Endpoints</h3>

The backend application provides the following API endpoints:

POST /api/user/signup: Creates a new user account.

POST /api/user/signin: Logs in with user credentials and returns a JWT token.

POST /api/user/logout: Logs out the currently logged-in user.

GET /api/book: Retrieves a paginated list of books.

GET /api/book/:bookId: Retrieves details of a specific book.

POST /api/book: Add new book by the currently logged-in user.

PUT /api/book/: Updates information of a specific book.

DELETE /api/book/:bookId: Deletes a specific book.

Acknowledgments
We would like to acknowledge the following resources and frameworks that made Book Management Backend possible:

Node.js documentation: https://nodejs.org;

Express documentation: https://expressjs.com;

MongoDB documentation: https://docs.mongodb.com;

Mongoose documentation: https://mongoosejs.com;

JSON Web Token documentation: https://jwt.io;

Axios documentation: https://axios-http.com;

Bcrypt documentation: https://github.com/kelektiv/node.bcrypt.js;
React Router DOM documentation: https://reactrouter.com;