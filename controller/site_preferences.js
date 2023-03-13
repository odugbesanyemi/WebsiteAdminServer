import { getSitePreference, updateSitePreference } from "../model/site_preferences.js";

export const getSitePreferenceCtrl = (req, res) => {
  const id = req.params.id;
  getSitePreference(id, (err, results) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.status(200).send(results);
    }
  });
};

export const updateSitePreferenceCtrl = (req,res)=>{
    const id = req.params.id
    const data = req.body
    console.log(data)
    updateSitePreference(id,data,(err,results)=>{
        if(err){
          console.log(err)
            res.sendStatus(500)
        }else{
            res.sendStatus(200)
        }
    })
}