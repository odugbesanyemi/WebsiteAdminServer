import db from "../config/dbConfig.js";

export const createNotification = (data,result)=>{
    const sql = "INSERT INTO notification SET ?"
    db.query(sql,data,(err,response)=>{
        if(err){
            result(err,null)
        }else{
            result(null,response)
        }
    })
}


export const getUserNotification = (id,result)=>{
    const sql = "SELECT * FROM `notification` WHERE user_id IN (0,?) ORDER BY id DESC"
    db.query(sql,id,(err,response)=> {
        if(err){
            result(err,null)
        }else{
            result(null,response)
        }
    })
}

export const updateUserNotification = (id,data,result)=>{
    const sql = `UPDATE notification SET ? WHERE id = ${id} `
    db.query(sql,data,(err,response)=>{
        if(err){
            result(err,null)
        }else{
            result(null,response)
        }
    })
}

export const getUserNotificationByStatus = (id,status,result)=>{
    const sql = `SELECT * FROM notification WHERE user_id = ${id} AND status = ? ORDER BY id DESC`
    db.query(sql,status,(err,response)=>{
        if(err){
            result(err,null)
        }else{
            result(null,response)
        }
    }) 
}
