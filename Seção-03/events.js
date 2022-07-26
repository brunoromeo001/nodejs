const EventEmmitter = require('events');

class Evento extends EventEmmitter {}

const meuEvento = new Evento();

meuEvento.on("seguranca", (x, y)=>{

  console.log(`Executando o envento 'seguranca': ${x} ${y}`);
})

meuEvento.emit('seguranca', 'userAdmin', 'Alterou Salário');

