import { getUserById } from "../model/model.js";
import {
  findEmail,
  getAllSubscribers,
  getAllUsers,
  init_site_preferences,
  setNewSubscriber,
  setNewUser,
  updateUsers,
} from "../model/users.js";
import bcrypt from "bcrypt";
import { verifyNewUser } from "./mail_templates.js";
import { findUserByEmail } from "../model/authModel.js";
import { createNotification } from "../model/notification.js";

export const getUserByIdCtrl = (req, res) => {
  const id = req.params.id;
  getUserById(id, (err, results) => {
    if (err) {
      res.status(400);
    } else {
      res.send(results);
    }
  });
};

export const getAllUsersCtrl = (req, res) => {
  getAllUsers((err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(results);
    }
  });
};

export const setNewUserCtrl = (req, res) => {
  const data = req.body;
  const password = req.body.password;
  const username = `USER-${Math.random().toString(36).substring(2)}`;
  const generateToken = () => {
    const randNum = Math.random() * 5000;
    return randNum.toString(36).substring(4);
  };
  const token = generateToken() + generateToken() + generateToken();
  const email = req.body.email;
  const role = req.body.role;
  const saltRounds = 10;
  findUserByEmail(email, (err, results) => {
    if (err) return res.sendStatus(500);
    if (results.length > 0) {
      // meaning user already exists
      return res.status(400).send("User already Exists");
    }
    // meaning user doesnt exists
    bcrypt
      .hash(data.password, saltRounds)
      .then((result) => {
        setNewUser(
          {
            email: email,
            password: result,
            role: role,
            username: username,
            token: token,
          },
          (err, results) => {
            if (err) {
              return res.sendStatus(500);
            } else {
              const data = { user_id: results.insertId };
              init_site_preferences(data, (err, results) => {
                if (err) {
                  return false;
                } else {
                  return true;
                }
              });
              if (
                verifyNewUser(
                  username,
                  email,
                  token,
                  "help@tecxha.com.ng",
                  "07015131887",
                  ""
                )
              ) {
                return res.status(200).send("success");
              } else {
              }
              const notification =`New user has been added`
              const notData = {message:notification}
              createNotification(notData,(err,results)=>{
                  if(err){
                      // do nothing 
                  }else{
                      // 
                  }
              })
              return res.sendStatus(200);
            }
          }
        );
      })
      .catch((err) => {
        res.sendStatus(404);
      });
  });
};

export const getAllSubscribersCtrl = (req, res) => {
  getAllSubscribers((err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(results);
    }
  });
};

export const updateUsersCtrl = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  updateUsers(id, data, (err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
};

export const changePasswordCtrl = (req, res) => {
  const id = req.params.id;
  const old_password = req.body.old_password;
  const new_password = req.body.new_password;
  var dbPassword;
  getUserById(id, (err, results) => {
    if (err) {
      // something went wrong
      res.sendStatus(400);
    } else {
      dbPassword = results[0].password;
      bcrypt
        .compare(old_password, dbPassword)
        .then((result) => {
          if (result) {
            // update db
            const saltRounds = 10;
            bcrypt
              .hash(new_password, saltRounds)
              .then((result) => {
                updateUsers(id, { password: result }, (err, results) => {
                  if (err) {
                    res.sendStatus(500);
                  } else {
                    res.sendStatus(200);
                  }
                });
              })
              .catch((err) => {
                res.sendStatus(404);
              });
          } else {
            res.staus(404).send("Passwords do not match");
          }
        })
        .catch((err) => {
          res.status(500).send(err);
        });
    }
  });
};

export const setNewSubscriberCtrl = (req, res) => {
  const data = req.body;
  const email = data.email;

  findEmail(email, (err, results) => {
    if (err) {
      res.sendStatus(404);
    } else {
      if (results.length) {
        res.status(400).send("Email already Exists");
      } else {
        setNewSubscriber(data, (err, results) => {
          if (err) {
            res.sendStatus(500);
          } else {
            res.sendStatus(200);
          }
        });
      }
    }
  });
};

export const activateUserCtrl = (req, res) => {
  const data = req.body;
  findUserByEmail(data.email, (err, results) => {
    if (err) return res.status(500).send(err);
    if (results.length > 0) {
      // meaning user exist hence check token
      const dbToken = results[0].token;
      if (data.token == dbToken) {
        // meaning user's token matches with the one in the db
        // set the db active to 1
        updateUsers(results[0].id, { active: 1, token: 0 }, (err, results) => {
          if (err){ return res.sendStatus(500)};
          return res.status(200).send("Activation successful!");
        });
      }
      return res.status(403).send("Link is Malformed. Kindly try again.");
    }
    return res.status(400).send("Something went Wrong!");
  });
};
