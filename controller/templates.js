import { delTemplate, getAllTemplates, getDefaultTemplate, getPostTypes, getPostTypesTemplates, getTemplatesById, setDefault, setNewTemplate, undoDefault } from "../model/template.js"

export const getPostTypesCtrl =(req,res)=>{
    getPostTypes((err,results)=>{
        if(err){
            res.sendStatus(404)
        }else{
            res.send(results)
        }
    })
}

export const getPostTypesTemplatesCtrl =(req,res)=>{
    const id = req.params.id
    getPostTypesTemplates(id,(err,results)=>{
        if(err){
            res.sendStatus(404)
        }else{
            res.send(results)
        }
    })
}

export const getTemplatesByIdCtrl =(req,res)=>{
    const post_type = req.params.type
    const id = req.params.id
    getTemplatesById(post_type,id,(err,results)=>{
        if(err){
            res.sendStatus(404)
        }else{
            res.send(results)
        }
    })
}

export const getAllTemplatesCtrl = (req,res)=>{
    getAllTemplates((err,results)=>{
        if(err){
            res.sendStatus(404)
        }else{
            res.send(results)
        }
    })
}

export const changeDefaultCtrl = (req,res)=>{
    const data = req.body
    const post_type = data.post_type
    const id = data.id
    // first thing is to use set any post_type default from 1 to 0
    undoDefault(data,(err,results)=>{
        if(err){
            console.log(err)
            res.sendStatus(500)
        }else{
            setDefault(data,(err,results)=>{
                if(err){
                    console.log(err)
                 return  res.sendStatus(500)
                }
                res.status(200).send("Default Theme Assigned successfully")
            })
        }
    })
}

export const getDefaultTemplateCtrl =(req,res)=>{
    const data = req.body
    getDefaultTemplate(data,(err,results)=>{
        if(err){
           return res.sendStatus(500)
        }
        if(!results.length){
            // meaning the data is empty
            return res.sendStatus(404)
        }
        return res.status(200).send(results)
    })
}

export const setNewTemplateCtrl =(req,res)=>{
    const data = req.body
    if(data.default){
        // meaning the user wants to set to default
        undoDefault(data,(err,results)=>{
            if(err){
                return res.sendStatus(500)
            }
            return
        })
    }
    setNewTemplate(data,(err,results)=>{
        if(err){
            return res.sendStatus(500)
         }
         return res.sendStatus(200)
    })
}

export const deleteTemplateCtrl = (req,res)=>{
    const id = req.params.id
    delTemplate(id,(err,results)=>{
        if(err){
            return res.sendStatus(500)
        }
        return res.sendStatus(200)
    })
}