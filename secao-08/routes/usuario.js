const express = require("express");
const router = express.Router();

function logReq(req, res, next){

  console.log("Executando a função Middleware para rota usuários")
  return next()
}

router.get('/', logReq,(req, res)=>{
  
  res.send("Listando usuarios")
})

router.get('/:id',  (req, res)=>{
  
  res.send("Listando usuario com id: "+ req.params.id)
})

module.exports = router;