import express, { Request, Response } from "express";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();
const app = express();

const PORT = process.env.PORT;

// Define root endpoint
app.get("/", (request: Request, response: Response) => {
  response.status(200).send("Hello World");
});

// Start the server and handle potential errors
app
  .listen(PORT, () => {
    console.log("Server running at PORT: ", PORT);
  })
  .on("error", (error) => {
    // gracefully handle error
    throw new Error(error.message);
  });
