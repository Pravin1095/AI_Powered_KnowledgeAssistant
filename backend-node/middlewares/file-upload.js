
import multer from 'multer';  //Multer itself acts an a middleware
import { v4 as uuidv4 } from 'uuid';

const MIME_TYPE_MAP = {
  'application/pdf': 'pdf',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'docx',
  'application/msword': 'doc',
}; //Mention the type of file that we are dealing
const fileUpload = multer({
    limits : 500000,  //in bytes
    storage : multer.diskStorage({
        destination : (req, file, cb)=>{
cb(null,'uploads/images')  //define the path were we need to store our files
        },
        filename : (req, file, cb)=>{
const ext = MIME_TYPE_MAP[file.mimetype]  //multer gives the mimetype property and we can filter the extension that we want
cb(null, uuidv4()+'.'+ext)  //This generates a random id name for our file with right extension
        },

    fileFilter : (req, file, cb)=>{
       const isValid = !!MIME_TYPE_MAP[file.mimetype]
       let error = isValid ? null : new Error('Invalid mime type')
       cb(error, isValid)
    } // Validating file type in backend
    })
})

export default fileUpload

// The fileUpload that we are exporting is an object contains bunch of preconfigured middlewares that we can use