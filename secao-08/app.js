const express = require("express")
const app = express()

app.get('/', (req, res)=>{
  
  res.send("Servidor OK")
})

app.get('/admin', (req, res)=>{
  
  res.send("Servidor Adm")
})

app.listen(3000, ()=>{

  console.log("Server running");
})