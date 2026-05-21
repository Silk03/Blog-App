import express from 'express';
import {connectDB} from './config/db.js';
import dotenv from 'dotenv';

dotenv.config();
let app = express();


app.get("/api/blog", (req, res) => {
    res.send("Hello World");
});


connectDB().then(() => {
app.listen(5003, () => {
    console.log("Server is running on port 5003");
}) 
});
