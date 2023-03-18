import { createNotification } from "../model/notification.js";
import {
  getAllPosts,
  getPostsByStatus,
  searchPostByTitle,
  initPost,getPostById, updatePostById,removePost, getPostCategories, getPostByType
} from "../model/posts.js";

export const getAllPostsCtrl = (req, res) => {
  getAllPosts((err, results) => {
    if (err) {
      res.status(400);
    } else {
      res.send(results);
    }
  });
};

export const getPostsByStatusCtrl = (req, res) => {
  const status = req.body.status;
  getPostsByStatus(status, (err, results) => {
    if (err) {
      res.status(400);
    } else {
      res.send(results);
    }
  });
};

export const searchPostByTitleCtrl = (req, res) => {
  const query = req.query.query;
  searchPostByTitle(query, (err, results) => {
    if (err) {
      res.status(500);
    } else {
      res.send(results);
    }
  });
};

export const initPostCtrl = (req,res) =>{
    const init = req.body
    initPost(init,(err,results)=>{
        if(err){
            res.sendStatus(500)
        }else{
          const notification =`New Post initiatilized`
          const notData = {message:notification}
          createNotification(notData,(err,results)=>{
              if(err){
                  // do nothing 
              }else{
                  // 
              }
          })
          res.send(results)
        }
    })
}

export const getPostByIdCtrl = (req,res)=>{
    const id = req.params.id
    getPostById(id,(err,results)=>{
        if(err){
            res.status(500)
        }else{
            res.send(results)
        }
    })
}

export const updatePostByIdCtrl = (req,res) => {
    const data = req.body    
    const post_id = req.params.id
    updatePostById(post_id,data,(err,results)=>{
        if(err){
          console.log(err)
            res.sendStatus(500)
        }else{
            res.sendStatus(200)
        }
    })
}

export const removePostCtrl =(req,res)=>{
  const id = req.params.id
  removePost(id,(err,results)=>{
    if(err){
      res.sendStatus(500)
    }else{
      res.status(200).send({"message":"Post removed Successfully"})
    }
  })
}

export const getPostCategoriesCtrl =(req,res)=>{
  getPostCategories((err,results)=>{
    if(err){
      res.sendStatus(500)
    }else{
      res.status(200).send(results)
    }
  })
}

export const getPostByTypeCtrl = (req,res)=>{
  const type = req.body.type
  getPostByType(type,(err,results)=>{
    if(err){
      res.sendStatus(500)
    }else{
      res.send(results)
    }
  })

}