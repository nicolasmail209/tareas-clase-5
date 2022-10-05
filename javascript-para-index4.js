const $lista = document.querySelectorAll('li');

//console.log($lista);
//console.log($lista[0].innerText);

const y = [];

for(let i = 0; i < $lista.length; i++){
    y[i] = Number($lista[i].innerText);
}

//console.log(y);
//console.log(y[0]);

const $promedio = document.querySelector('#promedio');

let promedio = 0;

for(let i = 0; i < y.length; i++){
    promedio += y[i];
}

promedio = promedio / y.length;

$promedio.innerText = `El promedio es ${promedio}`;


const $pequeño = document.querySelector('#pequeño');

let pequeño = y[0];

for(let i = 1; i < y.length; i++){
    if( y[i] < pequeño ){
        pequeño = y[i];
    }
}

$pequeño.innerText = `El numero mas pequeño es ${pequeño}`;


const $grande = document.querySelector('#grande');

let grande = y[0];

for(let i = 1; i < y.length; i++){
    if( y[i] > grande ){
        grande = y[i];
    }
}

$grande.innerText = `El numero mas grande es ${grande}`;


const $frecuente = document.querySelector('#frecuente');

const frecuente = [];
let a = 0;
let b = 0;

for(let i = 0; i < y.length; i++){
    frecuente[a] = y[i];
    for(let j = 0; j < y.length; j++){
        if( y[j] == frecuente[a] ){
            b++;
        }
    }
    frecuente[a+1] = b;
    b = 0;
    a += 2;
}

//console.log(frecuente);

let numeroFrecuente = frecuente[0];
let frecuencia = frecuente[1];

for(let i = 2; i < frecuente.length; i++){
    if( frecuente[i+1] > frecuencia){
        numeroFrecuente = frecuente[i];
        frecuencia = frecuente[i+1];
    }
    i++;
}

//console.log(numeroFrecuente);

$frecuente.innerText = `El numero mas frecuente es ${numeroFrecuente}`;