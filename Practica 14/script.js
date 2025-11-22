document.addEventListener('DOMContentLoaded', function(){
    const display = document.getElementById('display');
    const botonIncrementar = document.getElementById('incrementar');
    const botonDecrementar = document.getElementById('decrementar');
    const botonReset = document.getElementById('reset');

    let contador = 0
     
    function actualizar(){
        display.textContent = contador;
        display.classList.remove('positivo','negativo','cero');

        if (contador > 0){
            display.classList.add('positivo')
             display.style.borderColor = colorAleatorio();
        }else if(contador < 0){
            display.classList.add('negativo')
             display.style.borderColor = colorAleatorio();
        }else{
            display.classList.add('cero')
             display.style.borderColor = 'White';
        }
    }
    
    function colorAleatorio() {
    const r = Math.floor(Math.random() * 256); 
    const g = Math.floor(Math.random() * 256); 
    const b = Math.floor(Math.random() * 256); 
    return `rgb(${r}, ${g}, ${b})`;
}


    botonIncrementar.addEventListener('click', function(){
        contador++
        actualizar()
    })

    botonDecrementar.addEventListener('click', function(){
        contador--
        actualizar()
    })

    botonReset.addEventListener('click',function(){
        contador = 0
        actualizar()
    })

    actualizar()

    document.addEventListener('keydown', function(event){
        switch (event.key) {
            case 'd':
                contador++
                actualizar()
                break
            case 'a':
                contador--
                actualizar()
                break
            case 'w':
                contador = 0
                actualizar()
                break
        }
    })
}
)