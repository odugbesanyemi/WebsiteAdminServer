import { delComment, getAllComments, replyComment, updateComment } from "../model/comments.js"
import { createNotification } from "../model/notification.js"

export const getAllCommentsCtrl = (req,res)=>{
    getAllComments((err,results)=>{
        if(err){
            res.sendStatus(500)
        }else{
            res.send(results)
        }
    })
}

export const updateCommentCtrl = (req,res)=>{
    const data = req.body
    const id = req.params.id
    updateComment(id,data,(err,results)=>{
        if(err){
            res.sendStatus(500)
        }else{
            res.send(results)
        }
    })
}

export const delCommentCtrl = (req,res)=>{
    const id = req.params.id
    delComment(id,(err,results)=>{
        if(err){
            res.sendStatus(500)
        }else{
            res.send(results)
        }
    })
}

export const replyCommentCtrl = (req,res)=>{
    const data = req.body
    replyComment(data,(err,results)=>{
        if(err){
            console.log(err)
            res.sendStatus(500)
        }else{
            const notification =`you have a new comment: ${data.comment}.`
            const notData = {message:notification}
            createNotification(notData,(err,results)=>{
                if(err){
                    // do nothing 
                }else{
                    // 
                }
            })
            res.sendStatus(200)
        }
    })
}