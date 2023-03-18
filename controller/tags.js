import { createNotification } from "../model/notification.js";
import { getAllTags , getTagsById, addTagsToPost, HaveTags, updateTags,searchTags,
    AddNewTags,EditTags,removeTags,tagsPosts,tags_hasTags} from "../model/tags.js";
    
    export const getAllTagsCtrl = (req,res)=>{
        getAllTags((err,results)=>{
            if(err){
                res.status(400)
            }else{
                res.send(results)
            }
        })
    }
    
    export const getTagsByIdCtrl = (req,res)=>{
        const post_id = req.params.id
        getTagsById (post_id,(err,results)=>{
            if(err){
                res.sendStatus(400)
            }else{
                res.send(results)
            }
        })
    }
    
    export const addTagsToPostCtrl = (req,res)=>{
        const post_id = req.params.id
        const category_id = req.body.tags_id
        const data = [post_id,tags_id]
        HaveTags(data,(err,results)=>{
            if(err){
                console.log(err)
            }else{
                if(results.length){
                    // update and send a message 
                    updateTags(data,(err,results)=>{
                        if(err){
                            res.sendStatus(500)
                        }else{
                            res.sendStatus(200)
                        }
                    })
                }else{
                    addTagsToPost(data,(err,results)=>{
                        if(err){
                            res.status(400).send(err)
                        }else{
                            res.sendStatus(200)
                        }
                    })
                }
            }
        })
    
    }
    
    export const searchTagsCtrl = (req, res) => {
        const query = req.query.query;
        searchTags(query, (err, results) => {
          if (err) {
            res.status(500);
          } else {
            res.send(results);
          }
        });
      };
    
    export const AddNewTagsCtrl = (req,res)=>{
        const data = req.body
        const id = req.query.id?req.query.id:"";
        if(id){
            EditTags(id,data,(err,results)=>{
                if(err){
                    res.status(500)
                }else{
                    res.send(results)
                }
            })
        }else{
            AddNewTags(data,(err,results)=>{
                if(err){
                    res.status(500)
                }else{
                    const notification =`New Tag has been added: ${data.title}.`
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
    }
    
    export const removeTagsCtrl = (req,res)=>{
        const id = req.params.id
        removeTags(id,(err,results)=>{
            if(err){
                res.status(500)
            }else{
                res.sendStatus(200)
            }
        })
    }
    
    export const TagsPostsCtrl =(req,res)=>{
        tagsPosts((err,results)=>{
            if(err){
                res.sendStatus(400)
            }else{
                res.send(results)
            }
        })
    }
    
    export const tags_hasTagsCtrl =(req,res)=>{
        tags_hasTags((err,results)=>{
            if(err){
                res.sendStatus(500)
            }else{
                res.send(results)
            }
        })
    }