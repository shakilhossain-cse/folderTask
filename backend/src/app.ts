import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
app.use(express.json());
const port = process.env.PORT || 5000;


export { app };
