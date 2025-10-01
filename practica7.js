//crear una funcion que reciba un numero y verifique si el numero ingresado por el usuario es un numero primo

function esPrimo(num) {
    if (num <=1) return false;

    for (let i = 2; i < num ; i++) {
        if (num % i === 0){
            return false
        }
    }
    return true

}

console.log("se verifico el numero y es: ", esPrimo(1));
console.log("se verifico el numero y es: ", esPrimo(2));
console.log("se verifico el numero y es: ", esPrimo(3));

/// ejercicio 2
function remover(params) {
    let arr = [];

    for (let i = 0; i < params.length; i++) {
        if (!arr.includes(params[i])){
            arr.push(params[i])
        }
    }

    return arr
}

console.log(remover([1,3,3,5,5]));

for (let i = 1; i <= 100; i++) {
    console.log(i);
}