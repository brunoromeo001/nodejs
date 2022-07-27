function sum(x){

  return new Promise((resolve, reject)=>{

    if(Number(x) == NaN || Number(x) == undefined || typeof x != "number"){

      reject("Tá de brincadeira")
    }

    setTimeout(()=>{

      resolve(x + 5000);
  
    }, 3000);
  });
}


async function main(){

  try {
    const resultado = await sum('sda');
    
    console.log(`Resultado com Async/Await: ${resultado}`);
  } catch (error) {
    
    console.log(`Error: ${error}`);
    console.log(process.env.USERNAME);
  }
}

main();