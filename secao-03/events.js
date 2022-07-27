const EventEmitter = require('events');

class Evento extends EventEmitter {}

const meuEvento = new Evento();

meuEvento.on("seguranca", (x, y)=>{

  console.log(`Executando o envento 'seguranca': ${x} ${y}`);
})

meuEvento.emit('seguranca', 'userAdmin', 'Alterou Salário');

