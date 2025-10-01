// inventario
let inventario = [
    { nombre: "Espada", precio: 100, cantidad: 1},
    { nombre: "pocion", precio: 30, cantidad: 3 },
    {nombre: "Escudo", precio: 80, cantidad: 1}
];

// mostrar objetos
console.log("1. inventario completo");
inventario.forEach(item => {
    console.log(`${item.nombre} - Precio: ${item.precio} - cantidad: ${item.cant}`);
});

//agregar nuevo objeto
inventario.push({ nombre: "Arco", precio: 120, cantidad: 1 });
console.log("2. Arco agregado al inventario", inventario);

//eliminar objeto
inventario.pop();
console.log("3. se a eliminado un objeto del inventario",inventario);

//filtro
let mayores50 = inventario.filter(item => item.precio > 50);
console.log("4. items con precios > 50:", mayores50);

//nombres
let nombres = inventario.map(item => item.nombre);
console.log("5. nombres de los objetos:", nombres);

// precio mayor a 100
let existeMayor100 = inventario.some(item => item.precio > 100);
console.log("6. item con precio mayor a 100:", existeMayor100);

// cantidad mayor a 0
let cantidadMayor = inventario.every(item => item.cantidad > 0);
console.log("6. item con precio mayor a 0:", cantidadMayor);

//calcular valor total del inventario
let total = inventario.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
console.log("8. El valor total del inventario es de:", total);