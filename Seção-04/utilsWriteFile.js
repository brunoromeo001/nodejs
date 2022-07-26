const {promisify} =  require("util");

const writeFile = promisify(require("fs").writeFile);

const conteudo = "Criando um arquivo utilizando promissify do módulo nativo util";

writeFile("utilArquivo.txt", conteudo)
  .then(()=>{
    console.log("Arquivo utilArquvio criado com sucesso");
  })
  .catch((err)=>{
    console.log("Erro: "+ err);
});