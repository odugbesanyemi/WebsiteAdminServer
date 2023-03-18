import { listFilesScp } from "../config/scpConfig.js";

export const listFilesScpCtrl = (req,res)=>{
    console.log("testing...")
    listFilesScp((err,result)=>{
        if(err){
            res.send(err)
            console.log(err)
        }else{
            res.send(result)
            console.log(result)
        }
    })
}