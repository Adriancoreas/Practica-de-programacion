//// EJERCICIO 1
// function generarTrianguloPascal(n) {
//     const triangulo = [];

//     for (let i = 0; i < n; i++) {
//         triangulo[i] = []; 

//         for (let j = 0; j <= i; j++) {
//             if (j === 0 || j === i) {
//                 triangulo[i][j] = 1; 
//             } else {
//                 triangulo[i][j] = triangulo[i - 1][j - 1] + triangulo[i - 1][j]; 
//             }
//         }
//     }

//     return triangulo;
// }

// console.log(generarTrianguloPascal(5));

/// EJERCICIO 2
// function contarVocales(texto) {
//     let contador = 0;
//     const vocales = "aeiou";

//     texto = texto.toLowerCase(); 

//     for (let i = 0; i < texto.length; i++) {
//         if (vocales.includes(texto[i])) {
//             contador++;
//         }
//     }

//     return contador;
// }


// console.log(contarVocales("Electroencefalografista"));

/// EJERCICIO 3

function encontrarMayor(array) {
    let mayor = array[0]; 

    for (let i = 1; i < array.length; i++) {
        if (array[i] > mayor) {
            mayor = array[i];
        }
    }

    return mayor;
}


console.log(encontrarMayor([10,70,35,99,105,83])); 
console.log(encontrarMayor([-15,-84,-70,-2,-39]));   
