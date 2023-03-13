import { addFormResponse, getAllForms, getFormResponse } from "../model/forms.js"
import { createNotification } from "../model/notification.js"



export const getAllFormsCtrl=(req,res)=>{
    getAllForms((err,results)=>{
        if(err){
            res.sendStatus(500)
        }else{
            res.send(results)
        }
    })
}

export const getFormResponseCtrl=(req,res)=>{
    const tableName = req.params.tableName
    getFormResponse(tableName,(err,results)=>{
        if(err){
            res.sendStatus(500)
        }else{
            res.send(results)
            
        }
    })
}

export const addFormResponseCtrl =(req,res)=>{
    const tableName = req.params.tableName
    const data = req.body
    addFormResponse(tableName,data,(err,results)=>{
        if(err){ 
            res.sendStatus(500)
        }else{
            // send notification to database
            const notData = {
                message:"You have a new form response. Go to the feedback page to repspond."
            }
            createNotification(notData,(err,results)=>{
                if(err){
                    // do nothing 
                }else{
                    // 
                }
            })
            res.send(results)
        }
    })
}