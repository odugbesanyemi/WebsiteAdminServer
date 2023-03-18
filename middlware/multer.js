import multer from 'multer'
import path from 'path'
// import { uploadFileToServer } from '../config/scpConfig.js'
import dotenv from 'dotenv'
dotenv.config()

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"./public/images/")
    },
    filename:function(req,file,cb){
        cb(null,file.fieldname + "-" + Date.now() + path.extname(file.originalname) )
    }
})

export const upload = multer({storage:storage})
