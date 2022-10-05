const $botonCalcular = document.querySelector('#calcular-tiempo-total');

$botonCalcular.onclick = function(){
  const $horas = document.querySelectorAll('.horas');
  const $minutos = document.querySelectorAll('.minutos');
  const $segundos = document.querySelectorAll('.segundos');

  //console.log($horas[0].value);

  let horasTotales = 0;
  for(let i = 0; i < $horas.length; i++){
    horasTotales += Number($horas[i].value);
  }

  let minutosTotales = 0;
  for(let i = 0; i < $minutos.length; i++){
    minutosTotales += Number($minutos[i].value);
  }

  let segundosTotales = 0;
  for(let i = 0; i < $segundos.length; i++){
    segundosTotales += Number($segundos[i].value);
  }

  horasTotales = horasTotales * 60 * 60;
  minutosTotales = minutosTotales * 60;
  
  const tiempoTotalEnSegundos = horasTotales + minutosTotales + segundosTotales;

  const minutos = Math.floor(tiempoTotalEnSegundos / 60);
  const segundosFinales = tiempoTotalEnSegundos % 60;

  const horas = Math.floor(minutos / 60);
  const minutosFinales = minutos % 60;



  const $tiempoTotal = document.querySelector('#tiempo-total');
  $tiempoTotal.value = `${horas} : ${minutosFinales} : ${segundosFinales}`;

  const $divisor = document.querySelector('strong');
  $divisor.innerText = `${horas} : ${minutosFinales} : ${segundosFinales}`;

  return false;

}