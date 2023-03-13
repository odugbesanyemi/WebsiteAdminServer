import { Client } from "node-scp";
import dotenv from 'dotenv'
dotenv.config()

export const config = {
    host:process.env.MEDIA_LOC_HOST,
    username:process.env.MEDIA_LOC_USERNAME,
    password:process.env.MEDIA_LOC_PASSWORD,
    port:22,
    path:process.env.MEDIA_LOC
}

export const uploadFIleToServer = async function (file) {
    console.log(file.path)
    try {
      const client = await Client({
        host: config.host,
        port: config.port,
        username: config.username,
        password: config.password,
        // privateKey: fs.readFileSync('./key.pem'),
        // passphrase: 'your key passphrase',
      })
      await client.uploadFile(
        `./${file.path}`,
        `${config.path}/${file.filename}`,
        // options?: TransferOptions
      )
      // you can perform upload multiple times
    //   await client.uploadFile('./test1.txt', '/workspace/test1.txt')
      client.close() // remember to close connection after you finish
    } catch (e) {
      console.log(e)
      console.log("this is an error",e)
    }
}


export const listFilesScp = ()=>{
  Client({
    host: process.env.MEDIA_LOC_HOST,
    port: 22,
    username: process.env.MEDIA_LOC_USERNAME,
    password: process.env.MEDIA_LOC_PASSWORD,
    // privateKey: fs.readFileSync('./key.pem'),
    // passphrase: 'your key passphrase',
  }).then(client => {
    client.list('/home/bluvardo/www/assets')
          .then(result => {
            // results(null,result)
            console.log(result)
            client.close() // remember to close connection after you finish
          })
          .catch(error => {})
  }).catch(e => {console.log(e)
})
}

export const delFilesScp = async(filename)=>{
  try {
    const client = await Client({
      host: config.host,
      port: config.port,
      username: config.username,
      password: config.password,
      // privateKey: fs.readFileSync('./key.pem'),
      // passphrase: 'your key passphrase',
    })
    const file = `${config.path}/${filename}`
    await client.unlink(file)
    client.close() // remember to close connection after you finish
  } catch (e) {
    // console.log(e)
  }
}