import db from "../config/dbConfig.js";

export const getAllUsers=(result)=>{
    const sql = "SELECT username,email,role,profile_image,datejoined,phone,bio FROM users"
    db.query(sql,(err,response)=>{
        if(err){
            result(err,null)
        }else{
            result(null,response)
        }
    })
}

export const setNewUser = (data,result)=>{
    const sql = "INSERT INTO users SET ?"
    db.query(sql,data,(err,response)=>{
        if(err){
            result(err,null)
        }else{
            result(null,response)
        }
    })
}

export const getAllSubscribers=(result)=>{
    const sql = "SELECT * FROM subscribers"
    db.query(sql,(err,response)=>{
        if(err){
            result(err,null)
        }else{
            result(null,response)
        }
    })
}

export const updateUsers =(id,data,result)=>{
    const sql = `UPDATE users SET ? WHERE id = ${id}`
    db.query(sql,data,(err,response)=>{
        if(err){
            result(err,null)
        }else{
            result(null, response)
        }
    })
}

export const init_site_preferences = (data,result)=>{
    const sql = `INSERT into site_preferences SET ?`
    db.query(sql,data,(err,response)=>{
        if(err){
            result(err,null)
            return err
        }else{
            result(null,response)
            return response
        }
    })
}

export const setNewSubscriber = (data,result)=>{
    const sql = `INSERT INTO subscribers SET ?`
    db.query(sql,data,(err,response)=>{
        if(err){
            result(err,null)
            return err
        }else{
            result(null,response)
            return response
        }
    })
}

export const findEmail = (email,result)=>{
    const sql = `SELECT * FROM subscribers WHERE email = ?`
    db.query(sql,email,(err,response)=>{
        if(err){  
            result(err,null)
        }else{
            result(null,response)
        }
    })
}

export const findUserByEmail = (email,result)=>{
    const sql = `SELECT * FROM users WHERE email = ?`
    db.query(sql,email,(err,response)=>{
        if(err){  
            result(err,null)
        }else{
            result(null,response)
        }
    })
}