import db from '../config/dbConfig.js'


export const getUserById = (id,result)=>{
    const sql = "SELECT `username`,`fullname`,`email`,`role`,`active`,`profile_image`,`bio`, `phone` FROM users WHERE id = ?"
    db.query(sql,id,(err,response)=>{
        if(err){
            result(err,null)
        }else{
            result(null,response)
        }
    })
}

export const saveGuestUser = (data,result)=>{
    const sql = "INSERT INTO users SET ?"
    db.query(sql,data,(err,response)=>{
        if(err){
            result(err,null)
        }else{
            result(null,response)
        }
    })
}
