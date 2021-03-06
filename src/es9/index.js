//destructurar los elementos de un objeto
const obj={
  nombre:'oscar',
  edad: '25',
  ciudad: 'MX',
};

let {nombre,...all}=obj;
console.log(nombre,all);
//combinar objetos
const obj={
  name:'Oscar',
  age:32
}
const obj1={
  ...obj,
  country: 'MX'
}
console.log(obj1);
//
const holaMundo=()=>{
  return new Promise((resolve, reject)=>{
    (true)
    ?setTimeout(()=>resolve('Hola mundo'),3000)
    :reject(new Error ('test error'))
  });
};
holaMundo()
.then(response=>console.log(response))
.catch(error =>console.log(error))
.finally(()=>console.log('Finalizado'))
//Regex
const regexData=/([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match= regexData.exec('2021-04-03');
const year= match[1]
const month= match[2]
const day= match[3]
console.log(year,month,day)
