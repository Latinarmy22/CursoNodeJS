// si no se le da un valor a la variable de entorno los console.log nos devolvera lo que esta despues del ||
let nombre = process.env.NOMBRE || "Sin nombre";
let web = process.env.WEB || "Sin Web";

console.log("Hola " + nombre);
console.log("La Web es: " + web);

