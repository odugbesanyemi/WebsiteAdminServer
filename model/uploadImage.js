import db from "../config/dbConfig.js";

export const saveImages = (data,result)=>{
    const sql ="INSERT INTO files SET ?"
    db.query(sql,data,(err,response)=>{
        if(err){
            result(err,null)
        }else{
            result(null,response)
        }
    })
}