import { Request, Response } from "express";
import mongoose from "mongoose";
import { app } from "./app";

const port = process.env.PORT || 5000;

app.get('/',(req:Request,res:Response)=>{
    res.send('hello wrold')
})

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log("connected with Database ✔");
    app.listen(port, () =>
      console.log(`⚡️[server]: Server is running at https://localhost:${port}`)
    );
  } catch (error) {
    console.log("faild to connect database");
    console.log(error);
  }
};
startServer();