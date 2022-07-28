const express = require("express")
const app = express()
const adminRoutes = require("./routes/admin")
const usuarioRoutes = require("./routes/usuario")
const cookieParse = require("cookie-parser")

app.use(express.json())
app.use(cookieParse())

app.use((req, res, next)=>{

  console.log("Execultando o Middleware")

  return next()
})

app.get("/setcookie", (req, res)=>{

  res.cookie('user', 'Bruno Romeo', {maxAge: 90000, httpOnly: true})
  return res.send("Cookie gravado com sucesso")
})

app.get("/getcookie", (req, res)=>{

  let user = req.cookies['user'];

  if (user){

    return res.send(user)
  }

})

app.get('/', (req, res)=>{
  
  res.send("Servidor OK")
})

app.use("/admin", adminRoutes)
app.use("/usuarios", usuarioRoutes)

app.listen(3000, ()=>{

  console.log("Server running");
})