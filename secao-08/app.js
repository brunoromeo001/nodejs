const express = require("express")
const app = express()
const adminRoutes = require("./routes/admin")
const usuarioRoutes = require("./routes/usuario")

app.use(express.json())

app.get('/', (req, res)=>{
  
  res.send("Servidor OK")
})

app.use("/admin", adminRoutes)
app.use("/usuarios", usuarioRoutes)

app.listen(3000, ()=>{

  console.log("Server running");
})