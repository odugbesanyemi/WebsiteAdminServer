import db from "../config/dbConfig.js";

export const createToken = (data, result) => {
  const sql = "INSERT INTO password_reset SET ?";
  db.query(sql, data, (err, response) => {
    if (err) {
      result(err, null);
    } else {
      result(null, response);
    }
  });
  //
};
export const ValidateToken = (token, result) => {
  const sql = "SELECT * FROM password_reset WHERE token = ?";
  db.query(sql, token, (err, response) => {
    if (err) {
      result(err, null);
    } else {
      result(null, response);
    }
  });
};
export const changePassword = (id,password, result) => {
  const sql = `UPDATE users SET password = ? WHERE id =${id}`;
  db.query(sql, password, (err, response) => {
    if (err) {
      result(err, null);
    } else {
      result(null, response);
    }
  });
};

export const clearToken = (id,result)=>{
    const sql = `DELETE FROM password_reset where id = ${id}`
    db.query(sql,(err,response)=>{
        if (err) {
            result(err, null);
          } else {
            result(null, response);
          }
    })
}
