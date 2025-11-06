////////// Funcion autoinvocada //////
// (function (){
//     console.log("Me ejecuto al instante");
// })();

// (function (){
//     const hola = "soy privado"
//     var contador = 0;
//     console.log(hola);
// })();

// console.log(hola);

// var contador = 0; // codigo contaminado si esta afuera de la funcion

(function(nombre, edad) {
    console.log(`Hola ${nombre}, tienes ${edad} anios`)
})("Adrian", 19)

function normal(){
    console.log(arguments); // con arguments invocara todo lo que esta en el parentecis
}

normal(1,3,'pedro')

// const arrow =() =>{
//     console.log(arguments);
// }

// arrow(1,3, "pedro") // dira error por no especificar el argumento en el parentecis

const persona ={
    nombre: "juan",
    tareas: ["tarea1", "tarea2", "tarea3"],

    mostrarTareas: function () {
        this.tareas.forEach(function (tarea) {
            console.log(`${this.nombre}: ${tarea}`);
        })
    }
}

// personalbar.mostrarTareas()

const persona2 ={
    nombre: "juan",
    tareas: ["tarea1", "tarea2", "tarea3"],

    mostrarTareas: function () {
        this.tareas.forEach(function (tarea) {
            console.log(`${this.nombre}: ${tarea}`);
        })
    }
}

//// ejercicio 1 ////

const reproductorMusica = {
    canciones: ["Cancion1", "Cancion2", "Cancion3"],
    cancionActual: 1,

    reproducir: () =>{
        console.log(`Reproduciendo: ${reproductorMusica.canciones[reproductorMusica.cancionActual]}`);
    },

    siguiente: function () {
        this.cancionActual = (this.cancionActual +1) % this.canciones.length;
        console.log(`Siguiente cancion ${this.canciones[this.cancionActual]}`);

    },

    anterior: function() {
        this.cancionActual = (this.cancionActual -1 + this.canciones.length) % this.canciones.length;
        console.log(`cancion anterior: ${this.canciones[this.cancionActual]}`);
    }

    
};

reproductorMusica.reproducir();
reproductorMusica.siguiente();
reproductorMusica.anterior();