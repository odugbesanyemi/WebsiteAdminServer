import { delFile, getFiles } from "../model/files.js";
import dotenv from "dotenv";
import { delFilesScp } from "../config/scpConfig.js";
dotenv.config();
export const getFilesCtrl = (req, res) => {
  getFiles((err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(results);
    }
  });
};

export const fileQuotaCtrl = (req, res) => {
  res.send({ quota: process.env.FILE_QUOTA });
};

export const delFileCtrl = (req, res) => {
  const id = req.params.id;
  const filename = req.body.filename;
//   console.log(filename)
  delFile(id, (err, results) => {
    if (err) {
        // console.log(err)
      res.sendStatus(500);
    } else {
      // delete file from server
      delFilesScp(filename)
      .then(result=>{
        res.sendStatus(200);
      })
      .catch(err=>{
        res.sendStatus(500).send(err)
      })
      
    }
  });
  
};
