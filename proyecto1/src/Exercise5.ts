let tamaño: string = "pequeño";
let cantidad: number = 12;

// Validamos que la cantidad sea mayor o igual a 10
while (cantidad < 10) {
  console.log("Ingrese nuevamente la cantidad de stickers. Minimo 10");
  cantidad = 12;
}

// Verificamos el tamaño del sticker y calculamos el precio
if (tamaño === "pequeño") {
  let precioPequeño: number = 4000;
  console.log(`El valor del sticker es ${precioPequeño}.  \n El total de su compra es ${precioPequeño * cantidad}`);
} else if (tamaño === "grande") {
  let precioGrande: number = 6000;
  console.log(`El valor del sticker es ${precioGrande}. \n El total de su compra es ${precioGrande * cantidad}`);
}