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
