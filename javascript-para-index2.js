const $botonMostrarInformacion = document.querySelector('#mostrar-informacion');

$botonMostrarInformacion.onclick = function(){
  const $primerNombre = document.querySelector('#primer-nombre');
  const $segundoNombre = document.querySelector('#segundo-nombre');
  const $apellido = document.querySelector('#apellido');
  const $edad = document.querySelector('#edad');

  $informacionDeUsuario = document.querySelector('#informacion-de-usuario');

  $informacionDeUsuario.value = `Primer nombre: ${$primerNombre.value}, Segundo nombre: ${$segundoNombre.value}, Apellido: ${$apellido.value}, Edad: ${$edad.value}`;

  const $h1 = document.querySelector('h1');

  $h1.innerText = `Bienvenido, ${$primerNombre.value} ${$segundoNombre.value}!`;

  return false;

}