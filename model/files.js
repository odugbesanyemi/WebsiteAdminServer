import db from "../config/dbConfig.js";

export const getFiles=(result)=>{
    const sql = "SELECT * FROM files ORDER BY id DESC"
    db.query(sql,(err,response)=>{
        if(err){
            result(err,null)
        }else{
            result(null,response)
        }
    })
}

export const delFile = (id,result)=>{
    const sql = "DELETE FROM files WHERE id = ? "
    db.query(sql,id,(err,response)=>{
        if(err){
            result(err,null)
        }else{
            result(null,response)
        }
    })
}