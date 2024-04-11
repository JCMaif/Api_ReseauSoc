import express from 'express';
import cors from 'cors';
import usersRouter from './routers/users.js';
import loginRouter from './routers/login.js';
import postRouter from './routers/posts.js';

const app = express();

// Middleware for CORS
app.use(cors({
    origin: '*'
}));

// Middleware for expose public directory
app.use(express.static('public'));

// view engine
app.set("view engine", "ejs");
app.set("views", "./src/views");

// Middleware for JSON body parsing
app.use(express.json());
// Middleware to read FormData (accessible in `req.body`)
app.use(express.urlencoded({extended: true}));

const hostname = process.env.HOST || 'localhost';
const port = Number(process.env.PORT) || 3000;

app.use(loginRouter);
app.use(usersRouter);
app.use(postRouter);

// Start the server
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});