import readline from 'readline'
// isNaN = NO ES NUMERO
// Hola -> true
//5 -> false

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function adivinaElNumero(){
    const numeroSecreto = Math.floor(Math.random() *10) +1;
    let intentos = 3;

    console.log("Adivine el numero entre 1 y 10. Tienes solo 3 intentos");

    function preguntar(){

        if(intentos === 0) {
            console.log(`Game over! El numero era: ${numeroSecreto}`);
            rl.close();
            return;
        }

        rl.question(`Intentos restantes: ${intentos}. Ingrese tu numero: `, (respuesta) =>{
            let numeroUsuario = parseInt(respuesta)

            if (isNaN(numeroUsuario)){
                console.log("Valor no valido, ingrese un numero");
                preguntar();
                return;
            }

            if (numeroUsuario === numeroSecreto) {
                console.log("FELICIDADES ADIVINASTE EL NUMERO");
                rl.close();
            }  else if (numeroUsuario < numeroSecreto) {
                console.log("El numero es mayor");
                intentos--;
                preguntar()
            } else{
                console.log("El numero es menor");
                intentos--;
                preguntar();
            }
        })
    }
    preguntar();
}

adivinaElNumero();