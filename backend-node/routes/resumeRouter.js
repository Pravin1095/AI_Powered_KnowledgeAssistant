// import fileUpload from '../middlewares/file-upload.js'
const fileUpload = require('../middlewares/file-upload.js')
const pdf = require('pdf-parse');
const fs = require('fs').promises;
const express = require('express');
const dotenv = require("dotenv");
const axios = require('axios');
const {GoogleGenerativeAI} = require('@google/generative-ai');

// const app = express();

dotenv.config();
const resumeRouter = express.Router()
const apiKey = process.env.GEMINI_API_KEY
const genAI = new GoogleGenerativeAI(apiKey)
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

resumeRouter.post('/',
    fileUpload.single('resumefile'),
     async(req, res)=>{
    const {JD} = req.body
    
    try{
        console.time("File Uploaded")
        console.log("Multer uploaded", req.file, JD, process.env.GEMINI_API_KEY)
        console.timeEnd("File Uploaded")

        const cloudUrl = req.file.path
        let response;
        try{
 response = await axios.get(cloudUrl,{responseType:"arraybuffer"})
        
        }
        catch(err){
          console.log("Axios error", err)
          res.status(500).json({message : "Cloudinary Error"})
        }
       const readPdf = Buffer.from(response.data)
        console.time("Read file")
        // const readPdf = await fs.readFile(req.file.path)
        // console.log('Buffer length:', readPdf.length);
        console.timeEnd("Read file")

        console.log("type of pdf", typeof pdf)
        console.time("Parse pdf")

    const pdfData = await pdf(readPdf);
    // pdf(readPdf).then((data)=>{
    //     console.log("check pdf",data.text)
    // }).catch((err)=>{
    //     console.log("checkerr",err)
    // })
    console.timeEnd("Parse pdf")
 console.log("check", pdfData.text)

  const prompt = `
You are a professional resume reviewer. Compare the following resume and job description.

Job Description:
${JD}

Resume:
${pdfData.text}

Please provide:
1. A match score out of 100 for how well this resume fits the job description.
2. Top 3 strengths of the candidate in 1st paragraph
3. 3 specific improvement suggestions to make the resume more aligned with the JD in 2nd paragraph.
4. Conclude with a paragraph with summary of evaluation
5. Return only valid JSON with keys: score, feedback.No markdown formatting, no code blocks.

{
  "score": <number>,
  "feedback": "<string>"
}

`;

  const result = await model.generateContent(prompt);
  let text = result.response.text();

  text = text.replace(/```json|```/g, '').trim();


  console.log("check text", text)
  let output

  output = JSON.parse(text)
    res.status(200).json({score : output.score, feedback: output.feedback})
    }
    catch(err){
        console.log("check err", err, req.file.path)
        res.status(400)
    }
   
})


module.exports = resumeRouter;