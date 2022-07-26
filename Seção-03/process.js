console.log(`Nomde do Arquivo: `, __filename);
console.log(`Diretório do Arquivo: `, __dirname);
console.log(`Diretório onde foi invocado: `, process.cwd());
console.log(`Sistema Operacioanal: `, process.env.OS);
console.log(`Usuário no SO: `, process.env.USERNAME);
console.log(`Indioma: `, process.env.LANG);
console.log(`Nome do Server: `, process.env.COMPUTERNAME);


switch(process.argv[2]){

  case '-a':
    console.log("Execute a rotina principal");
    break;
  case '-i':
    console.log("Execute a instalação");
    break;
  case '-q':    
    console.log("Encerrando aplicação");
    process.exit();
    break
  default:
    console.log("Parâmetro inválido");
   
}

console.log(`Ambiente do Servidor: `, process.platform);