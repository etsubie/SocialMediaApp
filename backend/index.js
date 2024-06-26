import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import postRouter from "./routes/postRoute.js";

dotenv.config();

const app = express();
const port = process.env.port;
const URL = process.env.CONNECTION_URL;

app.use(express.json())
app.get('/', (req, res) => {
    console.log(req)
    res.json('welcome')
})
app.use('/posts', postRouter)

mongoose
  .connect(URL)
  .then(() => {
    console.log("mongoDB is connected succesfully!");
    app.listen(port, () => {
      console.log(`server is running on port: ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
