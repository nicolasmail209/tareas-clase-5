const $lista = document.querySelectorAll('li');

//console.log($lista);
//console.log($lista[0].innerText);

const y = [];

for(let i = 0; i < $lista.length; i++){
    y[i] = Number($lista[i].innerText);
}

//console.log(y);
//console.log(y[0]);

const $promedioDeLaLista = document.querySelector('#promedioDeLaLista');

let promedio = 0;

for(let i = 0; i < y.length; i++){
    promedio += y[i];
}

promedio = promedio / y.length;

$promedioDeLaLista.innerText = `El promedio de la lista es ${promedio}`;


const $masPequeñoDeLalista = document.querySelector('#masPequeñoDeLaLista');

let pequeño = y[0];

for(let i = 1; i < y.length; i++){
    if( y[i] < pequeño ){
        pequeño = y[i];
    }
}

$masPequeñoDeLalista.innerText = `El numero mas pequeño de la lista es ${pequeño}`;


const $masGrandeDeLaLista = document.querySelector('#masGrandeDeLaLista');

let grande = y[0];

for(let i = 1; i < y.length; i++){
    if( y[i] > grande ){
        grande = y[i];
    }
}

$masGrandeDeLaLista.innerText = `El numero mas grande de la lista es ${grande}`;


const $masFrecuenteDeLaLista = document.querySelector('#masFrecuenteDeLaLista');

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

$masFrecuenteDeLaLista.innerText = `El numero mas frecuente de la lista es ${numeroFrecuente}`;