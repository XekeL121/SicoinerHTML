
//   *****   VARIABLES MODAL PRIMER PORTFOLIO **** //

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

//   *****   FIN VARIABLES MODAL PRIMER PORTFOLIO **** //

//****************************************************************************************** */

//   *****   VARIABLES INSERCIÓN DE DATOS EN EL MODAL PRIMER PORTFOLIO **** //

const newNombre = document.getElementById('newNombre');

const newBroker = document.getElementById('newBroker');

const newTicker = document.getElementById('newTicker');

const newCantidad = document.getElementById('newCantidad');

const newPrecioMedio = document.getElementById('newPrecioMedio');




//   *****   FIN INSERCIÓN DE DATOS EN EL PRIMER PORTFOLIO **** //




//CLIC EN BOTÓN NUEVO PORTFOLIO
botonNewPort.addEventListener('click', abrirContainer);

//CLIC EN X DE CERRAR VENTANA
cerrarNewPort.addEventListener('click', cerrarContainer);

//CLIC EN CANCELAR
cerrarNewPort2.addEventListener('click', cerrarContainer);

//CLIC EN NUEVO NOMBRE
newNombre.addEventListener('click', inNewNombre);

//CLIC EN NUEVO BRÓKER
newBroker.addEventListener('click', inNewBroker);

//CLIC EN NUEVO TICKER
newTicker.addEventListener('click', inNewTicker);

//CLIC EN CANTIDAD
newCantidad.addEventListener('click', inNewCantidad);

//CLIC EN PRECIO MEDIO
newPrecioMedio.addEventListener('click', inNewPrecioMedio);

//CLIC EN ACEPTAR
aceptarNewPort.addEventListener('click', inAceptar);
 

//FUNCIONES >>
//FUNCIONES >>
//FUNCIONES >>
//FUNCIONES >>
//FUNCIONES >>


//ABRIR CERRAR EL MODAL DE NUEVO PORTFOLIO
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
/* aceptarNewPort.addEventListener('click', () => {
    console.log('aceptar');
});
 */


//CLIC EN Nombre del Portfolio
function inNewNombre(){
    console.log('clic nuevo nombre')
}

//CLIC EN Bróker del Portfolio
function inNewBroker(){
    console.log('clic nuevo BROKER')
}

//CLIC EN TICKER del Portfolio
function inNewTicker(){
    console.log('clic nuevo TICKER')
}


//CLIC EN CANTIDAD del Portfolio
function inNewCantidad(){
    console.log('clic nuevo CANTIDAD')
}


//CLIC EN PRECIO MEDIO del Portfolio
function inNewPrecioMedio(){
    console.log('clic nuevo PRECIO MEDIO')
}


//CLIC EN aceptar
function inAceptar(){
    console.log('clic aceptar')
}








//Probando arrow function 

/* cerrarNewPort.addEventListener('click', () => {
    console.log('object')
    newPortContainer.classList.remove('on');
    newPortContainer.classList.add('off');
    newPortContainer.classList.remove('bg-shadow');
}); */


