import db from "../config/dbConfig.js"

export const getSitePreference = (id,result)=>{
    const sql = "SELECT * FROM site_preferences WHERE user_id = ?"
    db.query(sql,id,(err,response)=>{
        if(err){
            result(err,null)
        }else{
            result(null,response)
        }
    })
}

export const updateSitePreference = (id,data,result)=>{
    const sql = `UPDATE site_preferences SET ? WHERE user_id = ${id}`
    db.query(sql,data,(err,response)=>{
        if(err){
            result(err,null)
        }else{
            result(null,response)
        }
    })
}