const express = require("express");
const router = express.Router();

router.get('/', (req, res)=>{
  
  res.send("Acessando a adimistração")
})

router.get('/:id', (req, res)=>{
  
  res.send("Acessando a adimistração com id: "+ req.params.id)
})

router.post('/', (req, res)=>{

  const corpo = `Login: ${req.body.login} \n
    Senha: ${req.body.senha}
  `
  
  res.send("Acessando a adimistração via POST "+ corpo)
})

router.patch('/:id', (req, res)=>{

  res.send("Acessando a adimistração via PATCH ")
})

router.put('/:id', (req, res)=>{

  res.send("Acessando a adimistração via PUT ")
})

router.delete('/:id', (req, res)=>{

  res.send("Acessando a adimistração via DELETE ")
})

module.exports = router;