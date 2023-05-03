import { findUserByEmail } from "../model/authModel.js";
import jwt from "jsonwebtoken";
import passport from '../config/passport.js'
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { saveGuestUser } from "../model/model.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import bcrypt from "bcrypt";

export const loginCtrl = (req, res, next) => {
  passport.authenticate("local", function (err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }
    req.logIn(user, function (err) {
      if (err) {
        return next(err);
      }
      return res.status(200).json({ user });
    });
  })(req, res, next);
};

export const refreshTokenCtrl = (req, res) => {
  const refreshToken = req.headers.authorization;
  if (!refreshToken) {
    return res.status(401).send("No refresh Token provided");
  }
  const token = refreshToken.split(" ")[1];
  jwt.verify(token, process.env.JWT_REFRESH_SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(401).send("Invalid refresh Token");
    }
    const accessToken = jwt.sign(user, process.env.JWT_SECRET_KEY, {
      expiresIn: "15m",
    });
    res.send(accessToken);
  });
};

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

export const saveGuestUserCtrl = async (req, res) => {
  // findbyEmail and return user if username and password matches
  const userIp = req.connection.remoteAddress;
  const data = req.body;
  // generate a username
  const username = `Guest-${Math.random().toString(36).substring(2)} `;
  const password = await bcrypt.hash(data.password, 10);
  const email = data.email;
  const user = {
    username: username,
    password: password,
    email: email,
    role: "guest",
    ip_address: userIp,
  };
  findUserByEmail(req.body.email, (err,results)=>{
    if(err){
      // err getting email
     return res.status(500).send(err)
    }
    if(!results.length){
      // meaning no user was found with that email so go ahead and create a new user
      saveGuestUser(user, (err, results) => {
        if (err) {
         return res.sendStatus(500);
        } else {
         return res.status(200).send({id:results.insertId,username:user.username,email:user.email});
        }
      });
      return
    }
    // meaning user was found, now check if password matches
    const userPassword = req.body.password
    bcrypt.compare(userPassword,results[0].password)
    .then(result => {
      // meaning password matches
      if(result){
        return res.status(200).send({id:results[0].id,username:results[0].username,email:results[0].email})
      }
      return res.status(403).send("Email Already Exists. Retry with Correct password")
    }).catch(err=>{
    })
  })
  
};
