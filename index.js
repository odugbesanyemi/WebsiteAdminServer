import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import passport from 'passport'
import session from 'express-session'
const mySecret = process.env['APP_PORT']
import router from "./routes/routes.js";
import cors from "cors";
const app = express();
app.use(session({
  secret:'akejicneknf893inefnj3loijenmfnkfenf',
  resave:false,
  saveUninitialized:false
}))
app.use(passport.initialize());
app.use(passport.session())
const port = process.env.APP_PORT;
const CLIENT_ADDRESS = process.env.CLIENT;
app.use(express.json());
app.use(
  cors({
    origin: CLIENT_ADDRESS,
  })
);
app.use(router);
app.use(express.static("public"));
// app.use(express.static('public/dist'))
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public/dist', 'index.html'));
//   });
app.listen(port, () => {
  console.log(`app started on port ${port}`);
});
