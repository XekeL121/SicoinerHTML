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

/* console.log(Number.parseInt(inversionTotal.value)) */

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
        /* btnAceptarDisabled();    */
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
  ocultarModal();     

  HTMLport();   
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

//HTML del portfolio al que se le llama en modalNewPort
function HTMLport() {
  const inputsModal = {
    nombre: nombre.value,
    broker: broker.value,
    ticker: ticker.value,
    cantidad: parseFloat(cantidad.value),
    precio: parseFloat(precioMedio.value), 
    cotizacion: valorActual,
    inversion: cantidad.value * precioMedio.value,
    valorMercado: cantidad.value * valorActual,
    profit: (cantidad.value * valorActual) - (cantidad.value * precioMedio.value),  // todo <<< Falta que calcule al cambiar el valor manualmente en el input...
    
  }
  
  /* console.log(Object.values(inputsModal)); */

  const newPortfolio = document.createElement('div')
  newPortfolio.classList.add('portfolio', 'text-light', 'text-center', 'd-flex', 'justify-content-center', 'mt-2', 'col-xl-7', 'col-12', 'col-md-8', 'mx-auto', 'op50')
  newPortfolio.setAttribute('id', '1')
  newPortfolio.innerHTML = `
  
  <h4 id="titPortfolio" class="titPortfolio text-light col-12 nowrap t-azul1 text-capitalize" value="">${inputsModal.nombre}</h4>
  <div class="nombreSub mx-auto rounded azul3 mb-4 col-8"></div>
  <table class="table text-light table-hover mx-auto rounded nowrap text-center mb-5">
    <thead>      
    <tr class="headPort d-flex text-center nowrap">
    <th class="col w-s text-light">Bróker</th>
          <th class="col w-s text-light">Ticker</th>
          <th class="col w-s text-light">Cantidad</th>
          <th class="col w-s text-light">Break even</th>
          <th class="col w-s text-light">Inversión</th>
          <th class="col w-s text-light">Cotización</th>
          <th class="col w-s text-light">P&L | %</th>
          <th class="col w-s text-light cursor"><img id="portConfig" class="my-auto p-1 vPro" src="images/tune_white_24dp.svg" alt=""></th> 
          </tr>
          </thead>    
    <tbody id="bodyPortfolio" class="bodyPortfolio portBody d-flex row">        
    <!-- Filas de portofolio -->
      <tr id="f01" class="filaPort bg-filaMenuOff d-flex row align-items-center text-center nowrap rounded">
        <td id="broker" class="col w-s text-light text-uppercase">${inputsModal.broker}</td>
        <td id="ticker" class="col w-s t-naranja text-uppercase bg-marca2">${inputsModal.ticker}</td>
        <td id="cantidad" class="col w-s text-light">${inputsModal.cantidad}</td>
        <td id="precioMedio" class="col w-s text-light">${inputsModal.precio} $</td>
        <td id="inversion" class="inversion col w-s text-light">${inputsModal.inversion} $</td>
        <td id="coti" class="col w-s text-light d-grid"><input id="valorActual" class="valorActual coti azul3 border-none text-light text-center rounded d-flex align-items-center nowrap" type="number" value="${valorActual}"></td>
        <td id="diferencia" class="col w-s t-verde">${inputsModal.profit} $</td>
        <td id="btnMenuFilaPort" class=" col w-s text-light cursor">
        <img class="btnMenuFilaPort" src="images/linear_scale_white_24dp.svg" alt="">
        <!-- MENÚ DESPLEGABLE DE FILA PORTFOLIO -->

        <ul id="IDmenuFilaPort" class="menuClic menuFilaPort d-flex justify-content-center azul5 d-flex col p-2 rounded z2 d-none">
          <h6 id="" class="t-naranja text-uppercase">${inputsModal.ticker}</h6>
          <div class="nombreSub mx-auto rounded azul3 my-1 op-50"></div>
            <li id="editar" class="editar w-100 px-5 text-left row rounded nowrap"><a class="w-100 text-primary" href="#">Editar</a></li>
            <li id="newOperacion" class="newOperacion w-100 px-5 text-left row rounded nowrap"><a class="w-100 text-primary" href="#">Nueva Operación</a></li>
            <li id="promediar" class="promediar w-100 px-5 text-left row rounded nowrap"><a class="w-100 text-primary" href="#">Promediar con...</a></li>
            <li id="eliminar" class="eliminar w-100 px-5 text-left row rounded nowrap"><a class="w-100 text-danger" href="#">Eliminar fila</a></li>              
            
        </ul>
            
        </td>
        <!-- FIN MENÚ DESPLEGABLE DE FILA PORTFOLIO --> 

        <!-- MODAL ELIMINAR -->         
        <div class="faqRemove bg-shadow d-flex row 'w-100 h-100 justify-content-center align-items-center mx-auto position-fixed z2 off">
            <div class="azul3 col-6 rounded p-5 border-azul">
              <div class="d-flex justify-content-center">
                  <h3 class="text-light text-center">¿Eliminar fila de <span class="text-uppercase t-naranja">${inputsModal.ticker}</span>?</h3>
              </div>
              <div class="d-flex justify-content-center m-2">
                  <button type="" id="aceptar" class="m-2 p-2 btn btn-success">Aceptar</button>
                  <button type="" id="cancelar" class="m-2 p-2 btn btn-danger">Cancelar</button>
              </div>
            </div>
        </div>
        <!-- FIN MODAL ELIMINAR --> 

      </tr>   
          <tr class="salto1"></tr>
          <!-- Fin Filas -->  
  
      <!-- TOTALES -->
      <tr class="totalPorta azul5 d-flex text-center nowrap">
        <th id="" class="col w-s text-light nowrap"></th>
        <th id="" class="totalActivos col w-s text-light nowrap">1 Activo</th>
        <th id="" class="col w-s text-light nowrap"></th>
        <th id="" class="col w-s text-light nowrap"></th>
        <th id="" class="totalInvertido col w-s text-light nowrap">${inputsModal.inversion}&nbsp</th>
        <th id="" class="col w-s text-light nowrap"></th>
        <th id="" class="totalProfit col w-s nowrap text-light"> &nbsp300,000 | 300%</th>
        <th id="" class="col w-s text-light cursor"><img class="newTicker" src="images/add_box_white_24dp.svg" alt=""></th> 
        </tr>            
        </tbody>
        <!-- FIN CUERPO DE LAS FILAS DE ACTIVOS -->
        
  </table>
  `;  
  
  contIndex.insertBefore(newPortfolio, document.querySelector('.final'));
  
  setTimeout(()=> {
    newPortfolio.classList.remove('op50');
  }, 500);
}