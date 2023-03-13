import path from 'path'
import { fileURLToPath } from 'url'
const __dirname = path.dirname(fileURLToPath(import.meta.url));
import dotenv from "dotenv"
dotenv.config()
import express from "express"
import router from './routes/routes.js'
import cors from 'cors'
const app = express()
const port = process.env.APP_PORT
app.use(express.json())
app.use(cors({
    origin: process.env.CLIENT
  }))
app.use(router)
app.use(express.static('public'))
// app.use(express.static('public/dist'))
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public/dist', 'index.html'));
//   });
app.listen(port,()=>{
    console.log(`app started on port ${port}`)
})