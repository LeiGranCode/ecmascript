let arreglo=[1,2,3, [1,2,3, [1,2,3]]];
console.log(arreglo.flat(2));

let arreglo2 =[1,2,3,4,5];
console.log(arreglo2.flatMap(value=>[value,value*2]));
//quitar espaciado a cadenas
let cadena='        hola      ';
console.log(cadena);
console.log(cadena.trimStart());
console.log(cadena.trimEnd());