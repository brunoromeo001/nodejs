console.log("Exibindo uma mensagem no console");

console.error(new Error("Exibindo mensagem de erro!"));

const carros = [ 
  "Ford",
  "GM",
  "Audi",
  "Fiate"
];

console.table(carros);

const dados = {name: "Bruno Romeo", empresa: "Bruno's"}

console.table(dados);

console.count('processo');
console.count('processo');
console.count('processo');

console.log("Resetando processo");

console.countReset('processo');

console.count('processo');

console.time('contador');

for (let index = 0; index < 100; index++) {
  
  //console.log('-')
  
}

console.timeEnd("contador");

console.assert(true, "Faça alguma coisa");

console.assert(false, "Ih rapaz %s, que pena", "Não funcionou");

//console.clear();


