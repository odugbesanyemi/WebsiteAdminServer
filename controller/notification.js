import { createNotification, getUserNotification, getUserNotificationByStatus, updateUserNotification } from "../model/notification.js"

export const createNotificationCtrl=(req,res)=>{
    const data = req.body
    createNotification(data,(err,results)=>{
        if(err){
            res.sendStatus(500)
        }else{
            res.sendStatus(200)
        }
    })
}


export const getUserNotificationCtrl = (req,res)=>{
    const id = req.params.id
    getUserNotification(id,(err,results)=>{
        if(err){
            res.sendStatus(500)
        }else{
            res.send(results)
        }
    })
}

export const updateUserNotificationCtrl = (req,res)=>{
    const data = req.body
    const id = req.params.id
    updateUserNotification(id,data,(err,results)=>{
        if(err){
            res.sendStatus(500)
        }else{
            res.sendStatus(200)
        }
    })
}

export const getUserNotificationByStatusCtrl = (req,res)=>{
    const id = req.params.id
    const status = req.body.status
    getUserNotificationByStatus(id,status,(err,results)=>{
        if(err){
            res.sendStatus(500)
        }else{
            res.send(results)
        }
    })
} 