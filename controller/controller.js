import { findUserByEmail } from "../model/authModel.js";
import jwt from "jsonwebtoken";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { saveGuestUser } from "../model/model.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import bcrypt from "bcrypt";

export const loginCtrl = (req, res) => {
  const user = req.body.email;
  const passwordInput = req.body.password;
  findUserByEmail(user, (err, results) => {
    if (err) {
      res.sendStatus(404);
    } else {
      // meaning user already exists so we check if the email is matching the password supllied
      if (results.length > 0) {
        const dbPassword = results[0].password;
        bcrypt
          .compare(passwordInput, dbPassword)
          .then(result => {
            if (result) {
              // meaning the passwords match now you can send a status 200 to the user and create a token to embed user information for jwt
              let jwtSecretKey = process.env.JWT_SECRET_KEY;
              let jwtRefreshKey = process.env.JWT_REFRESH_SECRET_KEY
              let data = {
                user: results[0].id,
                loggedIn: true,
              };
              const accessToken = jwt.sign(data, jwtSecretKey);
              const refreshToken = jwt.sign(data, jwtRefreshKey);
              res.status(200).send({accessToken,refreshToken});
            } else {
              res.status(401).send({ message: "Password do not match" });
            }
          })
          .catch(err => {
            res.status(500).send(err);
          });
      } else {
        // meaning the passwords do not match
        res.status(400).send({ message: "No user found" });
      }
    }
  });
};

export const refreshTokenCtrl = (req,res)=>{
  const refreshToken = req.headers.authorization
  if(!refreshToken){
    return res.status(401).send("No refresh Token provided")
  }
  const token = refreshToken.split(' ')[1];
  jwt.verify(token,process.env.JWT_REFRESH_SECRET_KEY,(err,user)=>{
    if(err){
      return res.status(401).send("Invalid refresh Token")
    }
    const accessToken = jwt.sign(user,process.env.JWT_SECRET_KEY,{expiresIn:"15m"});
    res.send(accessToken)
  })
}


export const getAllImages = (req, res) => {
  const directory = path.join(__dirname, "../public/images");
  fs.readdir(directory, (err, files) => {
    if (err) {
      res.status(500);
    } else {
      res.send(files);
      // files.forEach((file)=>{
      //   res.send(file)
      // })
    }
  });
};

export const saveGuestUserCtrl = (req, res) => {
  const userIp = req.connection.remoteAddress;
  const data1 = req.body;
  const data2 = { ip_address: userIp };
  const data = { ...data1, ...data2 };
  saveGuestUser(data, (err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
};
