const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
////////////////////////////////////////////////////////
///////////////////// EJERCICIO 1

// function ordenarCadena(cadena) {
//   let resultado = cadena.split('').sort().join('')
//   return resultado
// }

// rl.question('Ingrese una cadena de texto: ', texto => {
//   const resultado = ordenarCadena(texto)
//   console.log(`Cadena ordenada: ${resultado}`)
//   rl.close()
// })


/////////////////////////////////////////////////////////////
/////////////////////// EJERCICIO 2

// function mayusculas(cadena) {
//     let mayusculas = cadena.split(' ').map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()).join(' ');

//     return mayusculas
// }

// rl.question("Ingrese una cadena de texto: ", texto =>{
//     const resultado = mayusculas(texto);
//     console.log(`Texto en mayuscula: ${resultado}`);
//     rl.close();
// })




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////// EJERCICIO 3

function salario(salarioBase, horasExtras, valorHora){
    const valorHoraExtra = valorHora * 1.5;
    const pagohorasExtras = horasExtras * valorHoraExtra;

    return salarioBase + pagohorasExtras;
}

rl.question('Ingrese su salario base: ', salarioBase =>{
    rl.question('Ingrese el numero de horas extras trabajadas: ', horasExtras =>{
        rl.question('Ingrese el valor de una hora normal: ', valorHora =>{
            const salarioTotal = salario(parseFloat(salarioBase), parseFloat(horasExtras), parseFloat(valorHora));
            console.log(`Salario total: ${salarioTotal.toFixed(2)}`);
            rl.close();
        })
    })
})
