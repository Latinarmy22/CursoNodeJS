// function soyAsincrona(){
//     console.log('Hola, soy async')
// }

// soyAsincrona();

//Hasta este momento la función no es asincrona, la manera mas sencilla de hacerla asinncrona es con un timeout

function hola(nombre, miCallback) {
    setTimeout(function () {
        console.log('Hola, '+ nombre);
        miCallback(nombre); // ejecutando el callback con la variable nombre nos aseguramos que este funcionando y asi no tenemos que pasar en cada funcion
    }, 1500); //Hola se ejecuta despues que adios
}

function adios(nombre, otroCallback) {
    setTimeout(function() {
        console.log('Adios', nombre);
        otroCallback();
    }, 1000);
}

console.log('Iniciando proceso...');
hola('Pablo', function (nombre) {
    adios(nombre, function() {
        console.log('Terminando proceso...');
    });
});

// hola('Carlos', function () {});
// adios('Carlos', function () {});