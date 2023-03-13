import db from '../config/dbConfig.js'

export const getAllForms=(result)=>{
    const sql = "SELECT * FROM forms ORDER BY id DESC"
    db.query(sql,(err,response)=>{
        if(err){
            result(err,null)
        }else{
            result(null,response)
        }
    })
}

export const getFormResponse=(tableName,result)=>{
    const sql = `SELECT * FROM ${tableName} ORDER BY id DESC`
    db.query(sql,(err,response)=>{
        if(err){
            result(err,null)
        }else{
            result(null,response)
        }
    })
}

export const addFormResponse = (tableName,data,result)=>{
    const sql = `INSERT INTO ${tableName} SET ?`
    db.query(sql,data,(err,response)=>{
        if(err){
            console.log(err)
            result(err,null)
        }else{
            result(null,response)
        }
    })
}