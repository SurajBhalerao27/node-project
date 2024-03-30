import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import path from 'path';

const app = express();
const foldePath = path.join(__dirname, 'public')
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json({ limit: "4kb"}))

app.use(express.urlencoded({extended: true, limit: "4kb"}))

app.use(express.static(path.join(foldePath)));

app.use(express.cookieParser());


export default app;