import dotenv from "dotenv"
dotenv.config()
import mysql from 'mysql2'

const db = mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME,
    connectTimeout:'30000'
})

db.connect((err)=>{
    if(err) return console.log('error connecting to database');
    return "success database connect"
})

export default db