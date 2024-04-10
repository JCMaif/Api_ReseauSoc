import express from 'express';
import cors from 'cors';
import usersRouter from './routers/users.js';
import loginRouter from './routers/login.js'

const app = express();

// Middleware for CORS
app.use(cors({
    origin: '*'
}));
// Middleware for expose public directory
app.use(express.static('public'));
// Middleware for JSON body parsing
app.use(express.json());
// Middleware to read FormData (accessible in `req.body`)
app.use(express.urlencoded({extended: true}));

const hostname = process.env.HOST || 'localhost';
const port = Number(process.env.PORT) || 3000;

app.use(loginRouter);
app.use(usersRouter);

// Start the server
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});