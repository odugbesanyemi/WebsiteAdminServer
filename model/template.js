import db from "../config/dbConfig.js"
export const getPostTypes = (result)=>{
    const sql = "SELECT * FROM post_type"
    db.query(sql,(err,response)=>{
        if(err){
            result(err,null)
        }else{
            result(null,response)
        }
    })
}

export const getPostTypesTemplates = (id,result)=>{
    const sql = "SELECT * FROM templates WHERE post_type = ?"
    db.query(sql,id,(err,response)=>{
        if(err){
            result(err,null)
        }else{
            result(null,response)
        }
    })
}

export const getTemplatesById = (type,id,result) =>{
    const sql = `SELECT * FROM templates WHERE post_type = ${type} AND id = ?`
    db.query(sql,id,(err,response)=>{
        if(err){
            result(err,null)
        }else{
            result(null,response)
        }
    })
}

export const getAllTemplates=(result)=>{
    const sql = `SELECT * FROM templates`
    db.query(sql,(err,response)=>{
        if(err){
            result(err,null)
        }else{
            result(null,response)
        }
    })
}

export const undoDefault = (data,result)=>{
    const sql = "UPDATE `templates` SET `default` = 0 WHERE post_type = ?"
    db.query(sql,data.post_type,(err,response)=>{
        if(err){
            result(err,null)
        }else{
            result(null,response)
        }
    })
}

export const setDefault = (data,result)=>{
    const sql = "UPDATE `templates` SET `default` = 1 WHERE id = ?"
    db.query(sql,data.id,(err,response)=>{
        if(err){
            result(err,null)
        }else{
            result(null,response)
        }
    })
}

export const getDefaultTemplate = (data,result)=>{
    const sql = "SELECT * FROM `templates` INNER JOIN post_type ON templates.post_type = post_type.id WHERE type = ? AND `default` = 1"
    db.query(sql,data.post_type,(err,response)=>{
        if(err){
            console.log(err)
            result(err,null)
        }else{
            result(null,response)
        }
    })
}

export const setNewTemplate = (data,result)=>{
    const sql = "INSERT INTO templates SET ?"
    db.query(sql,data,(err,response)=>{
        if(err){
            result(err,null)
        }else{
            result(null,response)
        }
    })
}

export const delTemplate = (id,result)=>{
    const sql = "DELETE FROM templates WHERE id = ?"
    db.query(sql,id,(err,response)=>{
        if(err){
          return  result(err,null);
        }
        return result(null,response);
    })
}