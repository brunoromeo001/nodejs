const {EventEmitter} = require('events');

class Evento extends EventEmitter {}
const meuEvento = new Evento();

// Assinante 
meuEvento.on("seguranca", (x, y)=>{

  console.log(`Executando o envento 'seguranca': ${x} ${y}`);
})

// Emissor
meuEvento.emit('seguranca', 'userAdmin', 'Alterou Salário');

// Assinante 
meuEvento.on("encerrar", (dados)=>{

  console.log(`Assinante: ${dados}`);
});

// Emissor
meuEvento.emit('encerrar', 'Encerrando a execução da importação dos dados.');



