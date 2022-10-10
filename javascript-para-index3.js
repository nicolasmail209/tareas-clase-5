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

  const MINUTOS_EN_UNA_HORA = 60;
  const SEGUNDOS_EN_UN_MINUTO = 60;

  horasTotales = horasTotales * MINUTOS_EN_UNA_HORA * SEGUNDOS_EN_UN_MINUTO;
  minutosTotales = minutosTotales * SEGUNDOS_EN_UN_MINUTO;
  
  const tiempoTotalEnSegundos = horasTotales + minutosTotales + segundosTotales;

  const minutos = Math.floor(tiempoTotalEnSegundos / SEGUNDOS_EN_UN_MINUTO);
  const segundosFinales = tiempoTotalEnSegundos % SEGUNDOS_EN_UN_MINUTO;

  const horas = Math.floor(minutos / MINUTOS_EN_UNA_HORA);
  const minutosFinales = minutos % MINUTOS_EN_UNA_HORA;



  const $tiempoTotal = document.querySelector('#tiempo-total');
  $tiempoTotal.value = `${horas} : ${minutosFinales} : ${segundosFinales}`;

  const $divisor = document.querySelector('strong');
  $divisor.innerText = `${horas} : ${minutosFinales} : ${segundosFinales}`;

  return false;

}