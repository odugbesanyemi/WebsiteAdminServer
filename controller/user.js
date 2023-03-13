import { getUserById } from "../model/model.js";
import { findEmail, getAllSubscribers, getAllUsers, init_site_preferences, setNewSubscriber, setNewUser, updateUsers } from "../model/users.js";
import bcrypt from 'bcrypt'

export const getUserByIdCtrl=(req,res)=>{
    const id = req.params.id
    getUserById(id,(err,results)=>{
        if(err){
            res.status(400)
        }else{
            res.send(results)
        }
    })
}

export const getAllUsersCtrl = (req,res)=>{
    getAllUsers((err,results) =>{
        if(err){
            res.sendStatus(500)
        }else{
            res.send(results)
        }
    })
}

export const setNewUserCtrl = (req,res)=>{
    const data = req.body
    const password = req.body.password
    const email = req.body.email
    const role = req.body.role
    const saltRounds = 10;
    bcrypt.hash(data.password,saltRounds).then(
        result=>{
            setNewUser({email:email,password:result,role:role},(err,results)=>{
                if(err){
                    res.sendStatus(500)
                }else{
                    const data = {user_id:results.insertId}
                    init_site_preferences(data,(err,results)=>{
                        if(err){
                            res.sendStatus(500)
                        }else{
                            res.sendStatus(200)
                        }
                    })
                }
            })
        }
    ).catch(err=>{
        res.sendStatus(404)
    })
}

export const getAllSubscribersCtrl = (req,res)=>{
    getAllSubscribers((err,results) =>{
        if(err){
            res.sendStatus(500)
        }else{
            res.send(results)
        }
    })
}

export const updateUsersCtrl = (req,res)=>{
    const data = req.body
    const id = req.params.id
    updateUsers(id,data,(err,results)=>{
        if(err){
            res.sendStatus(500)
        }else{
            res.sendStatus(200)
        }
    })
}

export const changePasswordCtrl = (req,res)=>{
    const id = req.params.id
    const old_password = req.body.old_password
    const new_password = req.body.new_password
    var dbPassword;
    getUserById (id,(err,results)=>{
        if(err){
            // something went wrong
            res.sendStatus(400)
        }else{
           dbPassword = results[0].password
           bcrypt.compare(old_password,dbPassword).then(
            result=>{
                if(result){
                    // update db
                    const saltRounds = 10;
                    bcrypt.hash(new_password,saltRounds).then(
                        result=>{
                            updateUsers(id,{password:result},(err,results)=>{
                                if(err){
                                    res.sendStatus(500)
                                }else{
                                    res.sendStatus(200)
                                }
                            })
                        }
                    ).catch(err=>{
                        res.sendStatus(404)
                    })
                }else{
                    res.staus(404).send('Passwords do not match')
                }
            }
           ).catch(err=>{
            res.status(500).send(err)
           })

        }
    })
    

}

export const setNewSubscriberCtrl = (req,res)=>{
    const data = req.body
    const email = data.email

    findEmail(email,(err,results)=>{
        if(err){
            res.sendStatus(404)
        }else{
            if(results.length){
                res.status(400).send("Email already Exists")
            }else{
                setNewSubscriber(data,(err,results)=>{
                    if(err){
                        res.sendStatus(500)
                        console.log(err) 
                    }else{
                        res.sendStatus(200)
                    }   
                })
            }
        }
    })

}