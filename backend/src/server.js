import express from 'express';
import {connectDB} from './config/db.js';
import postRoute from './routes/postRoute.js';
import dotenv from 'dotenv';

dotenv.config();
let app = express();

//MIDDLEWARE
app.use(express.json())




app.use("/api/posts", postRoute);


connectDB().then(() => {
app.listen(5003, () => {
    console.log("Server is running on port 5003");
}) 
});
