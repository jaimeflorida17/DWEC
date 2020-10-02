valores=["Ana",2,"Javi",5,"Roberto",7,"Vanessa",10];
function w(valores){
const result = valores.filter(name =>typeof(name) === typeof("Text"));

return result;

}

console.log(w(valores));
function aw(valores){

const numeros = valores.filter(number =>typeof(number) === typeof(2) && (number%2==0) || (typeof(number) === typeof("Text")));

return numeros;

}

console.log(aw(valores));