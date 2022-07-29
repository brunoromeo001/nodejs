const express = require('express')
const bodyParse = require('body-parser')
const multer = require("multer")
const app = express()
const path = require("path")

app.use(bodyParse.urlencoded({extended:true}))

app.get("/", (req, res)=>{

  //res.json({message: "Bem-vindo"})

  res.sendFile(__dirname+'/index.html')
})

const storage = multer.diskStorage({
  destination: (req, file, cb)=>{
    cb(null, 'uploads/')
  },
  filename: (req, file, cb)=>{
    cb(null, file.fieldname+'-'+Date.now()+path.extname(file.originalname))
  }
})

const upload = multer({storage})

app.listen(3000, '127.0.0.1', ()=>{

  console.log("Server runnig at port 3000")
})