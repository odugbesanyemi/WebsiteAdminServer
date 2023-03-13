import { response } from "express";
import db from "../config/dbConfig.js";

export const getAllPosts = (result) => {
  const sql = "SELECT posts.*,post_type.type FROM `posts` INNER JOIN post_type ON post_type.id = posts.post_type ORDER BY `id` DESC";
  db.query(sql, (err, response) => {
    if (err) {
      result(err, null);
    } else {
      result(null, response);
    }
  });
};

export const getPostsByStatus = (status, result) => {
  const sql =
    "SELECT posts.*,users.username,users.profile_image,post_type.type,categories.title FROM `posts` INNER JOIN users ON users.id = post_author INNER JOIN post_type ON post_type.id = posts.post_type INNER JOIN has_categories ON has_categories.post_id = posts.id INNER JOIN categories ON has_categories.category_id = categories.id WHERE post_type.type = 'blogpost' AND post_status = ? ORDER BY id DESC";
  db.query(sql, status, (err, response) => {
    if (err) {
      result(err, null);
    } else {
      result(null, response);
    }
  });
};

export const searchPostByTitle = (query, result) => {
  const sql = "SELECT * FROM posts where post_content LIKE ?";
  db.query(sql, ["%" + query + "%"], (err, response) => {
    if (err) {
      result(err, null);
    } else {
      result(null, response);
    }
  });
};

export const initPost = (init, result) => {
  const sql = "INSERT INTO posts SET ?";
  db.query(sql, init, (err, response) => {
    if (err) {
      result(err, null);
    } else {
      result(null, response);
    }
  });
};

export const getPostById = (id, result) => {
  const sql = `SELECT posts.*,users.username,users.profile_image,post_type.type,categories.title FROM posts INNER JOIN users ON users.id = post_author INNER JOIN post_type ON post_type.id = posts.post_type INNER JOIN has_categories ON has_categories.post_id = posts.id INNER JOIN categories ON has_categories.category_id = categories.id where posts.id = ? ORDER BY post_date DESC`;
  db.query(sql, id, (err, response) => {
    if (err) {
      result(err, null);
    } else {
      result(null, response);
    }
  });
};

export const updatePostById = (id, data, result) => {
  const sql = `UPDATE posts SET ? where id = ${id}`;
  db.query(sql, data, (err, response) => {
    if (err) {
      result(err, null);
    } else {
      result(null, response);
    }
  });
};

export const removePost = (id, result) => {
  const sql = "DELETE FROM posts WHERE id = ?";
  db.query(sql, id, (err, response) => {
    if (err) {
      result(err, null);
    } else {
      result(null, response);
    }
  });
};

export const getPostCategories = (result) => {
  const sql =
    "SELECT * FROM posts INNER JOIN has_categories ON has_categories.post_id = posts.id INNER JOIN categories ON categories.id = has_categories.category_id INNER JOIN users ON users.id = posts.post_author;";
  db.query(sql, (err, response) => {
    if (err) {
      result(err, null);
    } else {
      result(null, response);
    }
  });
};

export const getPostByType = (type,result) => {
  const sql = `SELECT posts.*,post_type.type FROM posts INNER JOIN post_type ON post_type.id = posts.post_type WHERE post_type.type = ? ORDER BY id DESC`;
  db.query(sql,type, (err, response) => {
    if (err) {
      result(err, null);
    } else {
      result(null, response);
    }
  });
};