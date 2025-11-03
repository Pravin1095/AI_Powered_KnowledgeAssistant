import fileUpload from '../middlewares/file-upload.js'

import app from 'express'

const resumeRouter = app.Router()

resumeRouter.post('/',fileUpload.single('resumefile'), async(req, res)=>{
    const {body} = req
    try{
 console.log("check", body, req.file)
    res.status(200).json(body)
    }
    catch(err){
        res.status(400)
    }
   
})


export default resumeRouter