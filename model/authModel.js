import db from '../config/dbConfig.js'

export const findUserByEmail = (userEmail, result)=>{
    const sql = "SELECT * FROM users WHERE email = ?"
    db.query(sql,[userEmail], (err,response)=>{
        if(err)return result(err,null) 
        return result(null,response)
    })
}