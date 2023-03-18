import { addPostLikes, getPostLikes, removePostLikes } from "../model/post_meta.js"

export const getPostLikesCtrl = (req,res)=>{
    const post_id = req.params.id
    getPostLikes(post_id,(err,results)=>{
        if(err){
            res.status(500).send("error fetching Data")
        }else{
            res.status(200).send(results)
        }
    })
}

export const addPostLikesCtrl = (req,res)=>{
    const data = req.body
    addPostLikes(data,(err,results)=>{
        if(err){
            res.sendStatus(500)
        }else{
            res.sendStatus(200)
        }
    })
}

export const removePostLikesCtrl = (req,res)=>{
    const id = req.params.id
    removePostLikes(id,(err,results)=>{
        if(err){
            res.sendStatus(500)
        }else{
            res.sendStatus(200)
        }        
    })
}