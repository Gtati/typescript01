// Para verificar si un triángulo es equilátero, se deben comprobar que los tres lados del triángulo tienen la misma
// longitud.
// a. Pedir al usuario los lados y determinar si es equilátero o no

let lado1: number = 5
let lado2: number = 5
let lado3: number = 5

function triangulo(lado1: number, lado2: number, lado3: number) {
  if(lado1 == lado2 && lado2 == lado3) {
    console.log("El triangulo es equilatero")
}else{
  console.log("El triangulo no es equilatero")
}
}
triangulo(lado1, lado2, lado3);