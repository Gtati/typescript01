// Escriba un programa que dado un numero de tabla de multiplicar las imprima en la consola.


let num: number = 10
let multi: number = 0;

function multiplicar(num: number, multi: number){

if(!isNaN(num)){
while(multi<=9){

multi++
let op=num*multi

console.log(`${num}x${multi}=${op}`);

}}else if(isNaN(num)){

console.log("Valor invalido")

}
} 
multiplicar(num, multi);