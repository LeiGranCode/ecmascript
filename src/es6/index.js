function newFunction(name, age, country){
var name= name || 'oscar';
var age= age || 15;
var country= country || 'laveigar';
console.log(name, age, country)
}


//ES6
function newFunction2(name='oscar', age=12, country ="laveigarx2")
{
  console.log(name,age,country);
};

newFunction2();
newFunction2('Pepe',23,'CO');

let hello="hello"
let world="world"
let epicphrase=hello+' '+world;
console.log(epicphrase);

let epicPhrase2= `${hello} ${world}`;
console.log(epicPhrase2);

let lorem=" LALALALAL KDALSKDALSD KASLDKQWJIED QWJKNASDKJ JNKASJNDAjsalk asdjlkasd\n"
+"Otra linea"
//ES6 templates
let lorem2 = `otra frase
ESTA ES OTRA LINEA
`;
console.log(lorem);
console.log(lorem2);
//objeto y atributos
let persona={
  'name': 'oscar',
  'age': 32,
  'country': 'MX'
}
console.log(persona.name, persona.age);
//destructurar objeto con ES6
let {name, age, country}=persona;
console.log(name,age,country);

//Arreglos - combinar arreglos
let team1=['Oscar','Julian','Ricardo'];
let team2=['Valeria','Yesica', 'Camila'];
let education=['David', ...team1, ...team2];
console.log(education);
//variable global y local
{
  var globalvar = "variable global";
}
{
  let localvar = "variable local"
  console.log(localvar);
}
console.log(globalvar);
console.log(localvar);
//const
const a='b';
//Propiedad de objetos mejorada ES5
let nombre='Oscar'
let age=32;
obj ={nombre:nombre,age:age};
//con ES6
obj2={nombre,age};
console.log(obj2);
//Arrows Functions
const nombres=[
  {nombre: 'oscar', age: 32},
  {nombre: 'Yesica',age: 27}
]
let listOfNombres=nombres.map(function(item){
console.log(item.nombre);
})
//ES6
let listOfNombres2=nombres.map(item=>console.log(item.nombre));
//Otra forma
const listOfNombres3=(nombre,ages,country)=>{
  //...
}
//otra forma
const listOfNombres4 = nombre=>{
  //...
}
//otra forma- recibe num y retorna el producto de la multiplicación
const square = num => num*num;

//PROMESAS
const PrimeraPromesa=()=>{
  return new Promise((resolve,reject)=>{
    if (true){
      resolve("Resuelto");
    }else{
      reject("UPS!");
    }
  });
}
PrimeraPromesa()
  .then(response =>console.log(response))
  .catch(error =>console.log(error));

  //Clases, Modulos y Generadores
  class calculadora{
    constructor(){
      this.valorA=0;
      this.valorB=0;
    }
    suma(valorA,valorB){
      this.valorA=valorA;
      this.valorB=valorB;
      return this.valorA+this.valorB;
    }
  }
  const resul= new calculadora();
  console.log(resul.suma(5,8));
  //importar arrow function de otro modulo
  import {hello} from './module.js';
  hello();
//Generadores
function* helloWorld(){
  if(true){
    yield 'hello, '
  }
  if(true){
    yield 'world'
  }
};
const generadorHello=helloWorld();
console.log(generadorHello.next().value);
console.log(generadorHello.next().value);
console.log(generadorHello.next().value);