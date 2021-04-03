import hello from "../es6/module";

//ES8 Object.entries transformar todos los elementos de Objetos a Arreglos
const data={
  frontend: 'Oscar',
  backend: 'Isabel',
  Design: 'Ana',
}
const arreglo= Object.entries(data);
console.log(arreglo);
console.log(arreglo.length);
//Object values transforma solo los valores de las propiedades de un objeto a Arreglos
const data={
  frontend: 'Oscar',
  backend: 'Isabel',
  Design: 'Ana', //trading comas, establecer que puede haber o no un elemento próximo
}
const valores= Object.values(data);
console.log(valores);
//Padding añadir caracteres al inicio y al final de una cadena de texto
const string ='hello';
console.log(string.padStart(7,'hi'));
console.log(string.padStart(12,'-----'));
//ES8 Async Await y promesas
const holamundo=() =>{
  return new Promise((resolve, reject)=>{
    (true)
    ?setTimeout(()=> resolve('Hello World'),3000)
    :reject(new error('test error'))
  });
}
const testAsync= async()=>{
  const hello=await holamundo();
  console.log(hello);
};
testAsync();

const otraFuncion= async()=>{
  try{
    const hello= await holamundo();
    console.log(hello);
  }catch (error){
    console.log(error);
  }
}