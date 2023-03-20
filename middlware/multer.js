import multer from 'multer'
import path from 'path'
import tmp from 'tmp'
// import { uploadFileToServer } from '../config/scpConfig.js'
import dotenv from 'dotenv'
dotenv.config()
let tempDir =""
const tempPath =(path)=>{
    tempDir = path;
    return path;
}
tmp.dir((err,path)=>{
    if(err){return err}
    tempPath(path)
})
const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,tempDir)
    },
    filename:function(req,file,cb){
        cb(null,file.fieldname + "-" + Date.now() + path.extname(file.originalname) )
    }
})    

export const upload = multer({storage:storage})
