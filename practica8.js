// Ejercicio 1
let sumaImpares = (numeros) => {
    let suma = 0;
    for (let num of numeros) {
        if (num % 2 !== 0) {
            suma += num;
        }
    }
    return suma;
}

console.log("La suma de los números impares es:", sumaImpares([1, 2, 3, 4, 5, 6, 7]));


// Ejercicio 2
let palabrasMasLargas = (palabras) => {
    let maxLongitud = 0;
    let resultado = [];

    for (let palabra of palabras) {
        if (palabra.length > maxLongitud) {
            maxLongitud = palabra.length;
            resultado = [palabra];
        } else if (palabra.length === maxLongitud) {
            resultado.push(palabra);
        }
    }
    return resultado;
}

console.log("Palabra(s) más larga(s):", palabrasMasLargas(["sol", "luna", "universo", "estrella", "mar"]));


// Ejercicio 3
let rotarArray = (array, n) => {
    let rotaciones = n % array.length;
    let parteFinal = array.slice(-rotaciones);
    let parteInicio = array.slice(0, array.length - rotaciones);
    return parteFinal.concat(parteInicio);
}

console.log("Array rotado:", rotarArray([1, 2, 3, 4, 5], 2));
