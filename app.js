let numSecreto;
let numUsuario;
let intentos;
let listaNumerosSorteados;
let numMax;
let limDeJuegos = true;

//Asignador de textos a elementos
function asignarTextoAElementos(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//Boton intento
function verificadorIntento() {
    numUsuario = parseInt(document.querySelector('#valorUsuario').value);
    console.log(numUsuario);

    if (numSecreto===numUsuario){
        asignarTextoAElementos('p', `¡Felicidades, acertaste! El numerosecreto era ${numUsuario} y lo hallaste en tu ${intentos} intento.`);
        document.querySelector('#reiniciar').removeAttribute('disabled');
    } else if (numSecreto<numUsuario){
        asignarTextoAElementos('p', `El numero secreto es menor al numero ${numUsuario}.`);
        intentos++;
        limpiarCaja();
    } else {
        asignarTextoAElementos('p', `El numero secreto es mayor al numero ${numUsuario}.`);
        intentos++;
        limpiarCaja();
    }
    return;
}

//Limpiar el imput del HTML
function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
    return;
}

//Generacion del numero secreto y limitacion de la listo
function generarNumeroSecreto() {
    numSecreto=Math.floor(Math.random()*numMax)+1;

    console.log(numSecreto);
    console.log(listaNumerosSorteados);

    if (listaNumerosSorteados.length==numMax){
        asignarTextoAElementos('p', 'Ya se han sorteado todos los numeros posibles.');
        document.querySelector('#reiniciar').removeAttribute('disabled');
        limDeJuegos=true;
    } else if (listaNumerosSorteados.includes(numSecreto)){
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numSecreto);
        return numSecreto;
    }
}

//condiciones presentes en el inicio del juego
function condicionesIniciales() {
    if (limDeJuegos == true) {
        numMax = parseInt(prompt("Por favor. Introduzca un numero maximo"));
        listaNumerosSorteados=[];
        limDeJuegos=false;
    }
    asignarTextoAElementos('h1', 'Juego del Numero Secreto!')
    asignarTextoAElementos('p', `Por favor, ingrese un numero del 1 al ${numMax}.`);

    numSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numSecreto);
}

//Utilizacion del boton teniniciar
function reiniciarJuego() {
    document.querySelector('#reiniciar').setAttribute('disabled', true);
    limpiarCaja();
    condicionesIniciales();
}

condicionesIniciales();