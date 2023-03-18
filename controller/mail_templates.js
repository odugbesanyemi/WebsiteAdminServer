import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();
import { transporter } from "../config/mailConfig.js";

export const verifyNewUser = (user_name,email,token,support_email,support_phone,logo_link)=>{
    const template = `
    <div> 
    <div style="background-color: rgba(230, 230, 230, 0.322);width: 100%; min-height: 100vh; margin: auto;padding: 20px;box-sizing: border-box;display: flex;justify-content: center;align-items: center;">
        <div >
            <div class="title">
                <img style="width: 150px;" src=${logo_link} alt="">
            </div>
            <div class="content" style="padding:20px 5px; background-color:rgb(255, 255, 255);min-height: 300px;margin: 20px 0;border-radius: 5px;">
                <h1 class="title" style="font-size: 30px;text-align: center;margin: 4px;">Activate your Account to Manage Your Website</h1>
                <div style="padding: 5px 0;color: grey;padding: 20px;">
                <p style="font-size: 14px;">Dear ${user_name},</p>
                <p style="padding-bottom:5px ;">Congratulations on owning a website built on webAdmin ! We have created an account for you on our content management system (CMS), and we can't wait for you to start managing your website.</p>
                <p style="padding-bottom:5px ;">To get started, you need to activate your account. Follow these simple steps to activate your account:</p>
                <a class="button" href="${process.env.CLIENT_ADDRESS}/user/activate?token=${token}" style="background-color: #ff6936;color: #ffffffd3;padding: 10px 20px;margin: 10px 0;border-radius: 2px;border-bottom: 2px #c31b00 solid;min-width:90% ;text-decoration: none;" >click here to continue</a>
                <p class="" style="padding-top:4px;">${process.env.CLIENT_ADDRESS}/user/activate?token=${token}</p>
                <ul class="" style="margin:0;padding: 5px 5px;list-style-type:none;line-height:1.5;">
                    <li class=""><span style="font-weight: 500;">Step 1:</span>Click on the activation link  or copy and paste it into your browser:<br> 
                    </li>
                    <li class=""><span style="font-weight: 500;">Step 2:</span> Click the activation link or activate now button on the resulting page.</li>
                    <li class=""><span style="font-weight: 500;">Step 3:</span>Once you have successfully activated the link, you should be redirected to the login page.</li>
                </ul>
                
                <p style="font-size: 14px;padding: 10px 0 0 0;">If you have any questions or need assistance with activating your account or managing your website, our support team is always here to help. Simply reach out to us through ${support_email} or ${support_phone}, and we will be happy to assist you.</p>
                <p style="font-size: 12px;">Thank you for choosing our CMS, and we are excited to see how great you manage your website.</p>
                <p style="font-size: 12px;">Best regards.</p>
                </div>
            </div>
            <div class="footer" style="font-size: 10px;text-align: center;">
                <div style="margin-bottom: 10px;display: flex;gap: 2px;justify-content: center;text-align: center;align-items: center;">
                <a href="https://web.facebook.com/texha.co" style="padding-right:5px;">facebook </a>
                <a href="https://twitter.com/TecxhaIT" style="padding-right:5px;">Twitter</a>
                <a href="https://www.instagram.com/tecxha/" style="padding-right:5px;">Instagram</a>
                </div>
                <p style="margin: 0;">Problems or Questions? Call us at +234704711951 or email <a href="mailto:admin@tecxha.com.ng">admin@tecxha.com.ng</a></p>
                <p style="margin: 5px;">&#169; Adamo, Ikorodu, Lagos State. Nigeria</p>
            </div>                
        </div>
    </div>
  </div>

    `
    const mailoptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Activate your User Account",
        html: template,
    };

    transporter.sendMail(mailoptions, (error, info) => {
        if (error) {
          return false;
        }
        return true;
    });

}