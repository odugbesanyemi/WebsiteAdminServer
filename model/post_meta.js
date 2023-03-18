import db from "../config/dbConfig.js";
// post likes
export const getPostLikes = (id, result) => {
  const sql = "SELECT * FROM post_comment_meta WHERE post_id = ?";
  db.query(sql, id, (err, response) => {
    if (err) {
      result(err, null);
    } else {
      result(null, response);
    }
  });
};

export const addPostLikes = (data, result) => {
  const sql = "INSERT INTO post_comment_meta SET ?";
  db.query(sql, data, (err, response) => {
    if (err) {
      result(err, null);
    } else {
      result(null, response);
    }
  });
};

export const removePostLikes = (id, result) => {
  const sql = "DELETE FROM post_comment_meta WHERE id = ?";
  db.query(sql, id, (err, response) => {
    if (err) {
      result(err, null);
    } else {
      result(null, response);
    }
  });
};
