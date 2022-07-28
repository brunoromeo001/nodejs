console.log("Executando module-01");

oculta = ()=>{

  console.log("Executando função oculta");
}

executa = ()=>{
  
  console.log("Executando a função oculta");
}

welcome = `Bem-vindo ao módulo module-01.js`;

module.exports = {executa, welcome}