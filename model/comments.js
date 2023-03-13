import db from "../config/dbConfig.js";

export const getAllComments = (result)=>{
    const sql = "SELECT comments.*,posts.post_title,users.username FROM comments INNER JOIN posts ON comments.post_id = posts.id INNER JOIN users ON comments.user_id = users.id"
    db.query(sql,(err,response)=>{
        if(err){
            result(err,null)
        }else{
            result(null,response)
        }
    })
}

export const updateComment=(id,data,result)=>{
    const sql = `UPDATE comments SET ? WHERE id = ${id}`
    db.query(sql,data,(err,response)=>{
        if(err){
            result(err,null)
        }else{
            result(null,response)
        }
    })
}

export const delComment = (id, result)=>{
    const sql = `DELETE FROM comments WHERE id = ?`
    db.query(sql,id,(err,response)=>{
        if(err){
            result(err,null)
        }else{
            result(null,response)
        }
    })
}

export const replyComment = (data,result)=>{
    const sql = `INSERT INTO comments SET ?`
    db.query(sql,data,(err,response)=>{
        if(err){
            result(err,null)
        }else{
            result(null, response)
        }
    })
}