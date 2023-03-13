import { uploadFIleToServer } from "../config/scpConfig.js"
import { saveImages } from "../model/uploadImage.js"
import { updateUsers } from "../model/users.js"

export const saveImagesCtrl = (req,res) =>{
    const files = req.files
    files.forEach(file=>{
        uploadFIleToServer(file)
        const data = {"file_name":file.filename,"mime_type":file.mimetype,"size":file.size}
        saveImages(data,(err,results)=>{
            if(err){
                res.send(err) 
                return
            }
        })
    })
    res.sendStatus(200)
}

export const uploadProfileImageCtrl = (req,res)=>{
    const file = req.file
    const data = {profile_image:file.filename}
    const id = req.params.id
    updateUsers(id,data,(err,results)=>{
        if(err){
            res.sendStatus(500)
        }else{
            res.sendStatus(200)
        }
    })
}