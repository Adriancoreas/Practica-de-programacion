///////////////////////////////////////////////////////////////////////
//////////////   EJERCICIO 1

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// function calculadoraIMC(peso, altura) {
//     peso = parseFloat(peso);
//     altura = parseFloat(altura);

//     let imc = peso / [altura * altura];
//     let categoria = '';

//     if (imc < 18.5) {
//         categoria = 'Bajo peso';
//     } else if (imc >= 10.5 && imc > 25){
//         categoria = 'Peso normal';
//     }else if (imc >= 25 && imc < 30) {
//         categoria = 'Sobre peso';
//     }else {
//         categoria = 'Obesidad'
//     }

//     console.log(`Su IMC es: ${imc.toFixed(2)} \n Categoria: ${categoria} :D`);
// }

// rl.question('Ingrese su peso en kg: ', peso => {
//     rl.question('Ingrese su altura: ', altura =>{

//         calculadoraIMC(peso, altura);
//         rl.close();
//     })
// })

///////////////////////////////////////////////////////////////////////////////
////////////////// EJERCICIO 2

// function convertirTemperatura(valor, desde, hacia) {
//     valor = parseFloat(valor);

//     // Convertir primero a Celsius 
//     let celsius = valor;
//     if (desde === 'F') {
//         celsius = ( valor - 32 ) * 5/9;
//     } else if (desde === 'K') {
//         celsius = valor - 273.15
//     }

//     // Convertir desde celsius a la unidad deseada
//     if ( hacia === 'C') {
//         resultado = celsius; 
//     } else if (hacia === 'F') {
//         resultado = ( celsius * 9/5 ) + 32;
//     }else if (hacia === 'K') {
//         resultado = celsius + 273.15
//     }

//     console.log(`${valor}, ${desde} = ${resultado.toFixed(2)}`);
// }

// rl.question('ingrese la temperatura: ', temp =>{
//     rl.question('ingrese la unidad de origen(C, F, K): ', desde =>{
//         rl.question('ingrese la unidad de destino (C, F, K): ', hacia =>{
//             convertirTemperatura(temp, desde.toUpperCase(), hacia.toLocaleUpperCase());
//             rl.close();
//         })
//     })
// })


////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////// EJERCICIO 3

function generarPassword(longitud, incluirMayusculas, incluirNumeros, incluirSimbolos) {
    longitud = parseInt(longitud);

    let caracteres = 'abcdefghijklmnopqrstuvwxyz';
    if (incluirMayusculas === 'S') caracteres += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (incluirNumeros === 'S') caracteres += '0123456789';
    if (incluirSimbolos === 'S') caracteres += '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let password = '';
    for (let i = 0; i < longitud; i++) {
        const randomIndex = Math.floor(Math.random() * caracteres.length);
        password += caracteres[randomIndex];
    }

    console.log(`Contrasenia generada: ${password}`);
    console.log(`Longitud: ${longitud} caracteres`);
}

rl.question('longitud de la contrasenia: ', longitud => {
    rl.question('Quiere incluir mayusculas? [S/N] ', mayusculas => {
        rl.question('Quiere incluir numeros? [s/n] ', numeros=> {
            rl.question('Quiere incluir simbolos? [S/N] ', simbolos => {
                generarPassword(longitud, mayusculas.toUpperCase(), numeros.toUpperCase(), simbolos.toUpperCase);
                rl.close();
            })
        })
    })
}
)