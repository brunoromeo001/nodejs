const express = require("express");
const router = express.Router();

router.get('/', (req, res)=>{
  
  res.send("Listando usuarios")
})

router.get('/:id', (req, res)=>{
  
  res.send("Listando usuario com id: "+ req.params.id)
})

module.exports = router;