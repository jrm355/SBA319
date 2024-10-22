// imports
import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';


//setup
dotenv.config();
const app = express();
let PORT = process.env.PORT || 3001;

//db connection


//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

//routes


//listener
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
  });