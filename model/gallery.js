import db from '../config/dbConfig.js'
export const getCategories = (result) => {
    const sql = "SELECT * FROM gallery_categories"
    db.query(sql, (err, response) => {
        if (err) {
            result(err, null)
        } else {
            result(null, response)
        }
    })
}

export const getGalleryImagesById = (id, result) => {
    const sql = "SELECT gallery_images.*,gallery_categories.category_name,gallery_categories.category_image FROM gallery_images INNER JOIN gallery_categories ON gallery_images.category_id= gallery_categories.id WHERE category_id = ?"
    db.query(sql, id, (err, response) => {
        if (err) {
            result(err, null)
        } else {
            result(null, response)
        }
    })
}

export const getAllGalleryImages = (result) => {
    const sql = "SELECT gallery_images.*,gallery_categories.category_name,gallery_categories.category_image FROM gallery_images INNER JOIN gallery_categories ON gallery_images.category_id= gallery_categories.id "
    db.query(sql, (err, response) => {
        if (err) {
            result(err, null)
        } else {
            result(null, response)
        }
    })
}

export const setGallerycategory = (data, result) => {
    const sql = "INSERT INTO gallery_categories SET ?"
    db.query(sql, data, (err, response) => {
        if (err) {
            result(err, null)
        } else {
            result(null, response)
        }
    })
}

export const removeGalleryCategory = (id, result) => {
    const sql = `DELETE FROM gallery_categories WHERE id = ${id}`
    db.query(sql,(err, response) => {
        if (err) {
            result(err, null)
        } else {
            result(null, response)
        }
    })
}

export const updateGalleryCategory = (id,data,result)=>{
    const sql = `UPDATE gallery_categories SET ? WHERE id=${id}`
    db.query(sql,data,(err,response)=>{
        if (err) {
            result(err, null)
        } else {
            result(null, response)
        }
    })
}

export const getGalleryCategoriesById =(id,result)=>{
    const sql = `SELECT * FROM gallery_categories WHERE id = ${id}`
    db.query(sql,(err,response)=>{
        if (err) {
            result(err, null)
        } else {
            result(null, response)
        }
    })
}

export const setGalleryImages = (data,result)=>{
    const sql = `INSERT INTO gallery_images SET ?`
    db.query(sql,data,(err,response)=>{
        if (err) {
            result(err, null)
        } else {
            result(null, response)
        }
    })
}

export const deleteGalleryImage = (id,result)=>{
    const sql = `DELETE FROM gallery_images WHERE id = ${id}`
    db.query(sql,(err,response)=>{
        if (err) {
            result(err, null)
        } else {
            result(null, response)
        }
    })
}