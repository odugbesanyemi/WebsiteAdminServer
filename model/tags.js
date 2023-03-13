import db from "../config/dbConfig.js";

export const getAllTags=(result)=>{
    const  sql = "SELECT * FROM tags"
    db.query(sql,(err,response)=>{
        if(err){
            result(err,null)
        }else{
            result(null,response)
        }
    })
}

export const getTagsById = (id,result)=>{
    const sql = "SELECT tags_id FROM has_tags WHERE post_id = ? LIMIT 1"
    db.query(sql,id,(err,response)=>{
        if(err){
            result(err,null)
        }else{
            result(null,response)
        }
    })
}

export const  addTagsToPost = (data, result)=>{
    const sql = "INSERT INTO has_tags (post_id,tags_id) VALUES (?)"
    db.query(sql,[data],(err,response)=>{
        if(err){
            result(err,null)
        }else{
            result(null,response)
        }
    })
}

export const HaveTags=(data,result)=>{
    const post_id = data[0]
    const sql = "SELECT * FROM has_tags WHERE post_id = ? "
    db.query(sql,post_id,(err,response)=>{
        if(err){
            result(err,null)
        }else{
            result(null,response)
        }
    })
}

export const updateTags = (data,result)=>{
    const post_id = data[0]
    const tags_id = data[1]
    const sql = "UPDATE has_tags SET tags_id = ? WHERE post_id = ?"
    db.query(sql,[tags_id,post_id],(err,response)=>{
        if(err){
            result(err,null)
        }else{
            result(null,response)
        }
    })
}

export const searchTags = (query,result)=>{
    const sql = `SELECT * FROM tags where title LIKE ?`
    db.query(sql,['%' + query + '%'],(err,response)=>{
        if(err){
            result(err,null)
        }else{
            result(null,response)
        }
    })
}

export const AddNewTags = (data,result)=>{
    const sql = "INSERT INTO tags SET ?"
    db.query(sql,data,(err,response)=>{
        if(err){
            result(err,null)
        }else{
            result(null,response)
        }
    })
}

export const EditTags = (id,data,result)=>{
    const sql = `UPDATE tags SET ? WHERE id = ${id}`
    db.query(sql,data,(err,response)=>{
        if(err){
            result(err,null)
        }else{
            result(null,response)
        }
    })
}

export const removeTags = (id,result)=>{
    const sql = "DELETE FROM tags WHERE id = ?"
    db.query(sql,id,(err,response)=>{
        if(err){
            result(err,null)
        }else{
            result(null,response)
        }
    })
}

export const tagsPosts = (result)=>{
    const sql = "SELECT * FROM has_tags"
    db.query(sql,(err,response)=>{
        if(err){
            result(err,null)
        }else{
            result(null,response)
        }
    })
}

export const tags_hasTags = (result)=>{
    const sql = "SELECT * FROM has_tags INNER JOIN tags WHERE tags.id = has_tags.tags_id"
    db.query(sql,(err,response)=>{
        if(err){
            result(err,null)
        }else{
            result(null,response)
        }
    })
}