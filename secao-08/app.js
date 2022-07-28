const express = require("express")
const app = express()
const adminRoutes = require("./routes/admin")
const usuarioRoutes = require("./routes/usuario")

app.use(express.json())

app.use((req, res, next)=>{

  console.log("Execultando o Middleware")

  return next()
})



app.get('/', (req, res)=>{
  
  res.send("Servidor OK")
})

app.use("/admin", adminRoutes)
app.use("/usuarios", usuarioRoutes)

app.listen(3000, ()=>{

  console.log("Server running");
})