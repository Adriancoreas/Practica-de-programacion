import readline from 'readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


///// EJERCICIO 1 

// let numero = Math.floor(Math.random() * 10) + 1;
// let intentos = 0;
// let maxIntentos = 3;

// function preguntar() {
//   rl.question("Adivina el número (1-10): ", (respuesta) => {
//     let intento = parseInt(respuesta);
//     intentos++;

//     if (intento === numero) {
//       console.log(`¡Correcto! El número era ${numero}.`);
//       rl.close();
//     } else if (intentos < maxIntentos) {
//       console.log(`¡Incorrecto! Intento ${intentos} de ${maxIntentos}.`);
//       preguntar();
//     } else {
//       console.log(` Se acabaron los intentos. El número era ${numero}.`);
//       rl.close();
//     }
//   });
// }

// preguntar();

///// EJERCICIO 2

// let suma = 0;

// function pedirNumero() {
//   rl.question("Ingresa un número: ", (num) => {
//     num = parseFloat(num);
//     suma += num;

//     console.log("Suma actual: " + suma);

//     if (suma > 100) {
//       console.log("¡Límite alcanzado! Suma total: " + suma);
//       rl.close();
//     } else {
//       pedirNumero();
//     }
//   });
// }

// pedirNumero();


///// EJERCICIO 3

// function validarContraseña(pass) {
//   return (
//     pass.length >= 8 &&
//     /[A-Z]/.test(pass) &&
//     /[0-9]/.test(pass)
//   );
// }

// function pedirContraseña() {
//   rl.question("Ingrese una contraseña: ", (pass) => {
//     if (validarContraseña(pass)) {
//       console.log(" Contraseña válida.");
//       rl.close();
//     } else {
//       console.log(" Debe tener mínimo 8 caracteres, 1 mayúscula y 1 número.");
//       pedirContraseña();
//     }
//   });
// }

// pedirContraseña();

//// EJERCICIO 5

let saldo = 1000;

function mostrarMenu() {
  console.log("\n=== CAJERO AUTOMÁTICO ===");
  console.log("1. Consultar saldo");
  console.log("2. Depositar");
  console.log("3. Retirar");
  console.log("4. Salir");

  rl.question("Seleccione una opción: ", (op) => {
    switch (op) {
      case "1":
        console.log("Saldo actual: $" + saldo);
        mostrarMenu();
        break;

      case "2":
        rl.question("Cantidad a depositar: $", (dep) => {
          dep = parseFloat(dep);
          saldo += dep;
          console.log("Depósito exitoso. Nuevo saldo: $" + saldo);
          mostrarMenu();
        });
        break;

      case "3":
        rl.question("Cantidad a retirar: $", (ret) => {
          ret = parseFloat(ret);
          if (ret > saldo) {
            console.log("Fondos insuficientes.");
          } else {
            saldo -= ret;
            console.log("Retiro exitoso. Nuevo saldo: $" + saldo);
          }
          mostrarMenu();
        });
        break;

      case "4":
        console.log("Gracias por usar el cajero.");
        rl.close();
        break;

      default:
        console.log("Opción no válida.");
        mostrarMenu();
    }
  });
}

mostrarMenu();
