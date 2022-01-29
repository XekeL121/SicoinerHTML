//Faltaría que el botón aceptar se activara cuando ya no quedan inputs vacíos, sin necesidad de validar clic fuera

//   *****   VARIABLES INPUTS EN EL MODAL NUEVO PORTFOLIO ***************************
//DIV Contenedor de portafolios
const contIndex = document.querySelector('#contIndex');

//DIV Modal
const modal = document.getElementById('modalNewPort');

// inputs del Modal
const portfolio = document.getElementsByClassName('portfolio');
const nombre = document.getElementById('newNombre');
const broker = document.getElementById('newBroker');
const ticker = document.getElementById('newTicker');
const cantidad = document.getElementById('newCantidad');
const valorActual = Number.parseInt(50);

const precioMedio = document.getElementById('newPrecioMedio');
const inversionTotal = Number.parseInt(cantidad) * Number.parseInt(precioMedio);
const valorMercado = Number.parseInt(cantidad) * Number.parseInt(valorActual); 
const profit = Number.parseInt(valorMercado - inversionTotal); /// Falta mejorar, resultado "NaN"

console.log(Number.parseInt(inversionTotal.value))

/* Botones del Modal */
const btnNewPort = document.querySelector('#btnNewPort');
const aceptarNewPort = document.getElementById ('aceptarNewPort');
const btnCancelNewPort = document.getElementById ('btnCancelNewPort');
const btnCerrarNewPort = document.getElementById ('cerrarNewPort');
/* FIN VARIABLES */

//EVENTOS *******************************************************************************

cargarEventListeners()
function cargarEventListeners(){
  //Botón agregar Portfolio nuevo
  btnNewPort.addEventListener('click', mostrarModal);    
  //Cuando le damos a aceptar en el Modal
  aceptarNewPort.addEventListener('click', aceptarModal);
  
  //Ocultar Modal
  btnCancelNewPort.addEventListener('click', ocultarModal);
  btnCerrarNewPort.addEventListener('click', ocultarModal);
  newPortContainer.addEventListener('click', cerrarModal);   //<<< para clic fuera del modal
  //Validar que los campos estén llenos para aceptar  
  nombre.addEventListener('blur', validar);
  broker.addEventListener('blur', validar);
  ticker.addEventListener('blur', validar);
  cantidad.addEventListener('blur', validar);
  precioMedio.addEventListener('blur', validar);
}

//Mostrar y ocultar modal de nuevo Portafolio
function mostrarModal() {
    if( newPortContainer.classList.contains('off') ) {        
        newPortContainer.classList.remove('off');       
        /* btnAceptarDisabled(); */   
    }     
}


//Ocultar la bienvenida cuando se crea el primer modal
function ocultarBienvenida(){
  const bienvenida = document.querySelector('#bienvenida');
  bienvenida.classList.add('off');  
}

//Mantener el botón aceptar deshabilitado hasta completar los inputs
/* function btnAceptarDisabled() {
  aceptarNewPort.disabled = true;
  aceptarNewPort.classList.add('op50', 'not-allowed');
} */

function btnAceptarEnabled() {
  aceptarNewPort.disabled = false;
  aceptarNewPort.classList.remove('op50', 'not-allowed');
}

//Valida que todos los inputs estén rellenados antes de activar Aceptar
function validar() { 

  if(nombre.value !== '' && broker.value !== '' && ticker.value !== '' && cantidad.value !== '' && precioMedio.value !== '' ) {
    btnAceptarEnabled()
   }
   
}

//Al hacer clic en aceptar
function aceptarModal() {      
  ocultarBienvenida();  
  HTMLport();  
  ocultarModal();  
}

// Cerrar con botones 'cancelar y X '
function ocultarModal() {    
  newPortContainer.classList.add('off');
  /* btnAceptarDisabled(); */          
}

//cerrar con clic fuera del modal
function cerrarModal(e) {        
  if(e.target.classList.contains('newPortContainer', 'cerrarNewPort')){
      ocultarModal();
  } 
}

