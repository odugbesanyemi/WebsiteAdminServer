import { findUserByEmail } from "../model/users.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();
import { transporter } from "../config/mailConfig.js";
import { changePassword, clearToken, createToken, ValidateToken } from "../model/reset_password.js";
export const createTokenCtrl = (req, res) => {
  const email = req.body.email;
  // find email in user account and return id
  findUserByEmail(email, (err, results) => {
    if (err) {
      return res.sendStatus(500);
    }
    if (results.length == 0) {
      // console.log(err)
      return res.status(400).send("Email not found");
    }
    const user_id = results[0].id;
    const user_name = results[0].username;
    // generate a random token
    const generateToken = () => {
      const randNum = Math.random() * 5000;
      return randNum.toString(36).substring(4);
    };
    const token = generateToken() + generateToken() + generateToken();
    const expiry = new Date(Date.now() + 3600000); // Token expiry time = 1 hour from now
    const data = { user_id: user_id, token: token, expiry: expiry };
    createToken(data, (err, results) => {
      if (err) {
        return res.sendStatus(500);
      }
      // send a mail with above details
      const template = `
        <div> 
          <div style="background-color: white;width: 100%; min-height: 100vh;max-width: 600px; margin: auto;padding: 20px;box-sizing: border-box;">
            <div class="title">
              <img style="width: 150px;" src="https://lh3.googleusercontent.com/xw00OvAg13ZiPgAmZ-i8NaEg-_8CUJ65FuobIfFqfZfHdHDMsSH9QQqycnauvKbIzGrLOPH_Ny1kDBtyhqF7TrefdD7pr0jY9NTOI_eIqJlMwYo0Ps-v75BRl2hyfzqUbAO2DGv4sYG8DAxrvuO_HSvi0Mtsg7DgwjIHT2xB3YTcDwgC1oKcVoXYuUQQOQ2KqjFLyaANx1k8BHGOnXmXhVsqb8MGz92cNryoIrGMXFivoLIv5lM6gHCcAPwYIZhY-VuBrilnrH1UQnyI2AjwDH18DXHuY5NheqBq--bs_X54x5R9n_-Kt2QMVY7OoH1lOFfbDn2O7dBgqxnOrjKHTvD-zJJOGtfBSRzo9YTlNi9Io92-z2VbHOMcIwHGtvGjAda_535eh66vuMOKCCint7MWz_NpTYPxjpK1aGv38g0gUGjegXo1tRalkDRB7MPQXXpJPp3cVszF7UFMwu-evS5e_bZ3NBv0649h-OQugARBRJJWFUD8T5G14iVkmsEbmBlJge8QQB3La1xiPhORUwZdKkM8uPPfs94Lx_2amLPhjlc0FwevmcQALHDGQhjlbS1veF6yigMqE8vP0mO0l7_Mn8eE4IEmWfw05CCtr8EGuDVXB2xILZgJ8tJXmHdJxOxR2augn6Ef4RAG8Qk_bSUPnqauBZliIBTz4BvGGTbU_xrQWpt08C2XECOum7KFj20oolDDu79-E2gaG8rfKSgeuoHUWpaloyoEt3n6mwa92SWU1MV54KjqqdALjxGtm-r9elh1w9tAIin0SDTMNdGzZhpBHIepBXqia5NQmSJxJ-qKzxP27q46JW8nh9Cx9s1NsHSfexRF7xCzDAT8SB8HOVREvyxYlvuck-WYdKF9UjfDHWtnz-f1lqE-uxf-HVOhCcLEUNaRajZIJ0BT3dueEpo4OQSvvuhFRT3pNA09WP8=w320-h81-no?authuser=0" alt="">
            </div>
            <div class="content" style="padding:20px 5px; background-color:ghostwhite;min-height: 300px;margin: 20px 0;border-radius: 5px;">
              <h1 class="title" style="font-size: 30px;text-align: center;margin: 4px;">Recover Password</h1>
              <div style="padding: 5px 0;color: grey;padding: 20px;">
                <p style="font-size: 14px;">Dear ${user_name},</p>
                <p style="padding-bottom:20px ;">You recently requested to reset the password for your Website Administrator account associated with the email address: ${email}. Click the button below to proceed.</p>
                <a class="button" href="${process.env.CLIENT_ADDRESS}/recover-password?token=${token}" style="background-color: #ff6936;color: #ffffffd3;padding: 10px 20px;margin: 10px 0;border-radius: 2px;border-bottom: 2px #c31b00 solid;min-width:90% ;text-decoration: none;" >click here to continue</a>
                <p style="font-size: 14px;padding: 20px 0 0 0;">If you did not request a password reset, please ignore this email or reply to let us know. This password reset link is only valid for the next 60 minutes.</p>
                <p style="font-size: 12px;">Thanks, The Tecxha Team</p>
              </div>
            </div>
            <div class="footer" style="font-size: 14px;">
              <div style="margin-bottom: 10px;display: flex;gap: 5px;">
                <a href="https://web.facebook.com/texha.co" style="padding-right:5px;">facebook </a>
                <a href="https://twitter.com/TecxhaIT" style="padding-right:5px;">Twitter</a>
                <a href="https://www.instagram.com/tecxha/" style="padding-right:5px;">Instagram</a>
              </div>
              <p style="margin: 0;">Problems or Questions? Call us at +234704711951 or email <a href="mailto:admin@tecxha.com.ng">admin@tecxha.com.ng</a></p>
              <p style="margin: 5px;">&#169; Adamo, Ikorodu, Lagos State. Nigeria</p>
            </div>
          </div>
        </div>
            `;
      const mailoptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Password Reset",
        html: template,
      };
      transporter.sendMail(mailoptions, (error, info) => {
        if (error) {
          return res.sendStatus(500);
        }
        res.status(200).send("success");
      });
    });
  });
};

export const resetPasswordCtrl = (req,res)=>{
  const data = req.body
  let token = data.token
  let password = data.password
  console.log(data)
  // check if token is present 
  ValidateToken(token,(err,results)=>{
    if(err){
      return res.sendStatus(500)
    }
    if(results.length == 0){
      return res.status(400).send('Invalid Token Supplied')
    }
    // validate against time
    if(results[0].expiry < new Date(Date.now())){
      console.log("token expired")
      return res.status(403).send('Token Expired')
    }
    // meaning token is valid do something
    const userId = results[0].user_id
    const reset_id = results[0].id
    bcrypt.hash(password,10)
    .then((result)=>{
      changePassword(userId,result,(err,results)=>{
        if(err){
          return res.sendStatus(500)
        }
        clearToken(reset_id,(err,results)=>{
          if(err){
            return res.status(500).send('Could not Complete Request')
          }
          res.status(200).send('Passoword Reset Successful')
        })
      })
    })
    .catch((err)=>{
      res.sendStatus(500)
    })
  })
}