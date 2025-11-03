import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import resumeRouter from "./routes/resumeRouter.js";
// const taskRouter=require('./routes/taskRouter')
// const authRouter = require('./routes/authRouter')


const app = express()
dotenv.config();
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const url=process.env.MONGO_URI;

// app.use(cors({
//   origin: "https://task-creator-opal.vercel.app",  // your Vercel frontend
//   methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
//   credentials: true
// }));

// app.use((req, res, next)=>{
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
//     res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE')
//     next()
// })

app.use('/api/resume-upload', resumeRouter)
// app.use('/api/users', authRouter)

// mongoose.connect(process.env.MONGODB_URI || url).then(()=>{
//     console.log("Connection successful")
//     app.listen(process.env.PORT  || 8000)
// }).catch(err=>{
//     console.log('Mongoose connect err', err)
// })

app.listen(process.env.PORT  || 8000)
