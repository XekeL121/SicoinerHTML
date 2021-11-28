
//   *****   INICIO BOTONES **** //

//BOTÓN DE NUEVO PORTFOLIO "+"
const botonNewPort = document.getElementById('btnNewPort');

//CONTAINER QUE OCUPA TODA LA PANTALLA
const newPortContainer = document.getElementById('newPortContainer');

//BOTÓN DE CERRAR
const cerrarNewPort = document.getElementById('cerrarNewPort');

//BOTÓN ACEPTAR
const aceptarNewPort = document.getElementById('aceptarNewPort')

//BOTÓN DE CANCELAR
const cerrarNewPort2 = document.getElementById('cerrarNewPort2');

//   *****   FIN BOTONES **** //

//****************************************************************************************** */

//   *****   INICIO DATOS **** //

const newNombre = document.getElementById('newNombre');

newNombre.addEventListener('click', nuevoNombre);


//   *****   FIN DATOS **** //











//FUNCIONES >>
//CLIC EN BOTÓN NUEVO PORTFOLIO
botonNewPort.addEventListener('click', abrirContainer);

//CLIC EN X DE CERRAR VENTANA
cerrarNewPort.addEventListener('click', cerrarContainer);

//CLIC EN CANCELAR
cerrarNewPort2.addEventListener('click', cerrarContainer);
 

function abrirContainer(){
    if (newPortContainer.classList.contains('off')) {
        newPortContainer.classList.remove('off');
        newPortContainer.classList.add('on');
        newPortContainer.classList.add('bg-shadow');
    } 
}

function cerrarContainer(){         
    if (newPortContainer.classList.contains('on')) {     
     newPortContainer.classList.remove('on');
     newPortContainer.classList.add ('off');
     newPortContainer.classList.remove('bg-shadow');
    } 
}


//Clic en botón aceptar
aceptarNewPort.addEventListener('click', () => {
    console.log('aceptar');
});



//Nombre del Portfolio
function nuevoNombre(){
    console.log('clic nuevo nombre')
}











//Probando arrow function 

/* cerrarNewPort.addEventListener('click', () => {
    console.log('object')
    newPortContainer.classList.remove('on');
    newPortContainer.classList.add('off');
    newPortContainer.classList.remove('bg-shadow');
}); */


