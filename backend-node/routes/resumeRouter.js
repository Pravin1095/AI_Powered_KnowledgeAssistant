// import fileUpload from '../middlewares/file-upload.js'
const fileUpload = require('../middlewares/file-upload.js')
const pdf = require('pdf-parse');
const fs = require('fs').promises;
const express = require('express');

// const app = express();


const resumeRouter = express.Router()

resumeRouter.post('/',
    // fileUpload.single('resumefile'),
     async(req, res)=>{
    const {body} = req
    
    try{
        // console.time("File Uploaded")
        // console.log("Multer uploaded", req.file)
        // console.timeEnd("File Uploaded")

        console.time("Read file")
        const readPdf = await fs.readFile('uploads\\images\\Hello World.pdf',)
        console.log('Buffer length:', readPdf.length);
        console.timeEnd("Read file")

        console.log("type of pdf", typeof pdf)
        console.time("Parse pfdf")

    // const pdfData = await pdf(readPdf);
    pdf(readPdf).then((data)=>{
        console.log("check pdf",data.text)
    }).catch((err)=>{
        console.log("checkerr",err)
    })
    console.timeEnd("Parse pdf")
 console.log("check", body, req.file, pdfData.text)
    res.status(200).json(body)
    }
    catch(err){
        res.status(400)
    }
   
})


module.exports = resumeRouter;