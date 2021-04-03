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