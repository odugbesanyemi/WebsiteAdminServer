import { response } from "express";
import db from "../config/dbConfig.js";

export const getAllCategories=(result)=>{
    const  sql = "SELECT * FROM categories"
    db.query(sql,(err,response)=>{
        if(err){
            result(err,null)
        }else{
            result(null,response)
        }
    })
}

export const getCategoriesById = (id,result)=>{
    const sql = "SELECT category_id FROM has_categories WHERE post_id = ? LIMIT 1"
    db.query(sql,id,(err,response)=>{
        if(err){
            result(err,null)
        }else{
            result(null,response)
        }
    })
}

export const  addCategoriesToPost = (data, result)=>{
    const sql = "INSERT INTO has_categories (post_id,category_id) VALUES (?)"
    db.query(sql,[data],(err,response)=>{
        if(err){
            result(err,null)
        }else{
            result(null,response)
        }
    })
}

export const HaveCategory=(data,result)=>{
    const post_id = data[0]
    const sql = "SELECT * FROM has_categories WHERE post_id = ? "
    db.query(sql,post_id,(err,response)=>{
        if(err){
            result(err,null)
        }else{
            result(null,response)
        }
    })
}

export const updateCategory = (data,result)=>{
    const post_id = data[0]
    const category_id = data[1]
    const sql = "UPDATE has_categories SET category_id = ? WHERE post_id = ?"
    db.query(sql,[category_id,post_id],(err,response)=>{
        if(err){
            result(err,null)
        }else{
            result(null,response)
        }
    })
}

export const searchCategories = (query,result)=>{
    const sql = `SELECT * FROM categories where title LIKE ?`
    db.query(sql,['%' + query + '%'],(err,response)=>{
        if(err){
            result(err,null)
        }else{
            result(null,response)
        }
    })
}

export const AddNewCategory = (data,result)=>{
    const sql = "INSERT INTO categories SET ?"
    db.query(sql,data,(err,response)=>{
        if(err){
            result(err,null)
        }else{
            result(null,response)
        }
    })
}

export const EditCategory = (id,data,result)=>{
    const sql = `UPDATE categories SET ? WHERE id = ${id}`
    db.query(sql,data,(err,response)=>{
        if(err){
            result(err,null)
        }else{
            result(null,response)
        }
    })
}

export const removeCategory = (id,result)=>{
    const sql = "DELETE FROM categories WHERE id = ?"
    db.query(sql,id,(err,response)=>{
        if(err){
            result(err,null)
        }else{
            result(null,response)
        }
    })
}

export const categoryPosts = (result)=>{
    const sql = "SELECT * FROM has_categories"
    db.query(sql,(err,response)=>{
        if(err){
            result(err,null)
        }else{
            result(null,response)
        }
    })
}

export const categories_hasCategories = (result)=>{
    const sql = "SELECT * FROM has_categories INNER JOIN categories WHERE categories.id = has_categories.category_id"
    db.query(sql,(err,response)=>{
        if(err){
            result(err,null)
        }else{
            result(null,response)
        }
    })
}