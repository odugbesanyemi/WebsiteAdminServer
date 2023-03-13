import { getAllCategories , getCategoriesById, addCategoriesToPost, HaveCategory, updateCategory,searchCategories,
AddNewCategory,EditCategory,removeCategory,categoryPosts,categories_hasCategories} from "../model/categories.js";

export const getAllCategoriesCtrl = (req,res)=>{
    getAllCategories((err,results)=>{
        if(err){
            res.status(400)
        }else{
            res.send(results)
        }
    })
}

export const getCategoriesByIdCtrl = (req,res)=>{
    const post_id = req.params.id
    getCategoriesById (post_id,(err,results)=>{
        if(err){
            res.sendStatus(400)
        }else{
            res.send(results)
        }
    })
}

export const addCategoriesToPostCtrl = (req,res)=>{
    const post_id = req.params.id
    const category_id = req.body.category_id
    const data = [post_id,category_id]
    HaveCategory(data,(err,results)=>{
        if(err){
            console.log(err)
        }else{
            if(results.length){
                // update and send a message 
                updateCategory(data,(err,results)=>{
                    if(err){
                        res.sendStatus(500)
                    }else{
                        res.sendStatus(200)
                    }
                })
            }else{
                addCategoriesToPost(data,(err,results)=>{
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

export const searchCategoriesCtrl = (req, res) => {
    const query = req.query.query;
    searchCategories(query, (err, results) => {
      if (err) {
        res.status(500);
      } else {
        res.send(results);
      }
    });
  };

export const AddNewCategoryCtrl = (req,res)=>{
    const data = req.body
    const id = req.query.id?req.query.id:"";
    if(id){
        EditCategory(id,data,(err,results)=>{
            if(err){
                res.status(500)
            }else{
                res.send(results)
            }
        })
    }else{
        AddNewCategory(data,(err,results)=>{
            if(err){
                res.status(500)
            }else{
                res.send(results)
            }
        })        
    }
}

export const removeCategoryCtrl = (req,res)=>{
    const id = req.params.id
    removeCategory(id,(err,results)=>{
        if(err){
            res.status(500)
        }else{
            res.sendStatus(200)
        }
    })
}

export const categoryPostsCtrl =(req,res)=>{
    categoryPosts((err,results)=>{
        if(err){
            res.sendStatus(400)
        }else{
            res.send(results)
        }
    })
}

export const categories_hasCategoriesCtrl =(req,res)=>{
    categories_hasCategories((err,results)=>{
        if(err){
            res.sendStatus(500)
        }else{
            res.send(results)
        }
    })
}