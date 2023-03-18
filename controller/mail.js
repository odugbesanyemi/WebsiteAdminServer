import dotenv from "dotenv";
dotenv.config();
import { transporter } from "../config/mailConfig.js";
export const newsletter = (req, res) => {
  const data = req.body;
  const recipients = data.recipients;
  const subject = data.subject;
  const content = data.content;

  // prepare mailoptions
  const mailoptions = {
    from: process.env.EMAIL_USER,
    to: recipients.join(', '),
    subject: subject,
    html: content,
  };
  transporter.sendMail(mailoptions, (err, info) => {
    if (err) {
      res.sendStatus(500);
      console.log(err)
    } else {
      res.send(info);
    }
  });
};
