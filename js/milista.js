//FILA PORTFOLIO
let ticker = "ETH";
let cantidad = 100;
let precioCompra = 500;
let inversion = (cantidad * precioCompra);
let valorActual = 1500;




//Nueva compra
let newCantidad = 153;
let newPrecioCompra = 1000;
let newInversion = (newCantidad * newPrecioCompra);

//Precio medio del activo
let cantidadTotal = (cantidad + newCantidad);
let precioMedio = ((inversion + newInversion) / (cantidad + newCantidad)); 

//Inversión total
let inversionTotal = (inversion + newInversion);

//Profit
let diferencia = ( (cantidadTotal * valorActual) - (cantidadTotal * precioMedio) );

//Catital total
let capitalNeto = (inversionTotal + diferencia);

//Profit %
let diferenciaPercent = ((valorActual / precioMedio) * 100 - (100));

console.log (`Tengo ${cantidad} ${ticker} que los compré a ${precioCompra}$,`);
console.log (`eso fue una inversión de ${inversion}$.`);

//Nueva compra
console.log (`Hoy he comprado ${newCantidad} ${ticker} más a un precio de ${newPrecioCompra}$,`);
console.log (`siendo ésto una inversión de ${newInversion}$ más.`);

//Media General
console.log (`Ahora tengo una cantidad total de ${cantidadTotal}${ticker} a un precio medio de ${precioMedio}$`);
console.log (`con una inversión total de ${inversionTotal}$`);
console.log (`Si ${ticker} llega al valor de ${valorActual}$,`);
console.log (`estaré obteniendo unas Ganancias de aproximadamente ${diferencia}$, que equivale a un ${diferenciaPercent}%.`);
console.log (`Esto significa que si vendiera todo, tendría un capital en ese momento de ${capitalNeto}$.`);

//Código para poder unir los dos valores en la celda "profit" en el portfolio Sicoiner.
let profitFilaPort = (`${diferencia}$ | ${diferenciaPercent}%`);

console.log ( profitFilaPort );


//Textos para recordar

let nuevoTicker = false;

//if(uno /* === true */) {
 //   console.log("Sí está correcto")
//} else {
//    console.log("No está correcto")
//}

console.log(nuevoTicker ? "Crear media del activo existente en el portfolio" : "Añadir nueva fila de activo en el Portofolio con el nuevo Ticker simbol")



// ******************************************************************** HTML del PORTOFOLIO CON JS
// ******************************************************************** HTML del PORTOFOLIO CON JS
// ******************************************************************** HTML del PORTOFOLIO CON JS

// Variables Portafolio
let portfolio = document.querySelector ('.portfolio'),
    tituloPortfolio = document.getElementsByClassName('titPortfolio'),
    portBody = document.getElementsByClassName('portBody'),
    filaPort = document.getElementsByClassName('filaPort');   
    
//Totales del portfolio
let totalActivos = document.getElementsByClassName('totalActivos');
    totalInvertido = document.getElementsByClassName('totalInvertido');
    totalProfit = document.getElementsByClassName('totalProfit');

// *********************************************  creación html portofolio simple

// HTML FILA portofolio

let celda1 = document.createElement('td');
celda1.classList.add('col', 'w-s', 'text-light', 'bg-marca2');
celda1.textContent = 'ticker';

let celda2 = document.createElement('td');
celda2.classList.add('cantidad', 'col', 'w-s', 'text-light');
celda2.textContent = 'cantidad';

let celda3 = document.createElement('td');
celda3.classList.add('precioMedio', 'col', 'w-s', 'text-light');
celda3.textContent = 'Break Even';

let celda4 = document.createElement('td');
celda4.classList.add('inversion', 'col', 'w-s', 'text-light');
celda4.textContent = 'Inversión';

let inputCelda5 = document.createElement('input');
inputCelda5.classList.add('mx-auto', 'w-75', 'azul3', 'border-none', 'text-light',
'text-center', 'rounded', 'd-flex', 'align-items-center');
inputCelda5.setAttribute('type', 'text');
inputCelda5.setAttribute('value', 'default');

let celda5 = document.createElement('td');
celda5.classList.add('valorActual', 'col', 'w-s', 'text-light', 'd-grid');
celda5.appendChild(inputCelda5)

let celda6 = document.createElement('td');
celda6.classList.add('diferencia', 'col', 'w-s', 'text-light');
celda6.textContent = 'p&L | %';

let imgMenuFila = document.createElement('img');
imgMenuFila.classList.add('btnMenuFilaPort');
imgMenuFila.src = 'images/linear_scale_white_24dp.svg'

let celda7 = document.createElement('td');
celda7.classList.add('btnMenuFilaPort', 'col', 'w-s', 'text-light', 'cursor', 'z1');
celda7.appendChild(imgMenuFila);

//html menu fila

let celdaMenuA1 = document.createElement('a')
celdaMenuA1.classList.add('px-5', 'text-primary');
celdaMenuA1.href = '#'
celdaMenuA1.textContent = 'Compra';
let celdaMenuLi1 =  document.createElement('li');
celdaMenuLi1.classList.add('rounded', 'nowrap');
celdaMenuLi1.appendChild(celdaMenuA1);

let celdaMenuA2 = document.createElement('a')
celdaMenuA2.classList.add('px-5', 'text-primary');
celdaMenuA2.href = '#'
celdaMenuA2.textContent = 'Venta';
let celdaMenuLi2 =  document.createElement('li');
celdaMenuLi2.classList.add('rounded', 'nowrap');
celdaMenuLi2.appendChild(celdaMenuA2);

let celdaMenuA3 = document.createElement('a')
celdaMenuA3.classList.add('px-5', 'text-primary');
celdaMenuA3.href = '#'
celdaMenuA3.textContent = 'Promediar';
let celdaMenuLi3 =  document.createElement('li');
celdaMenuLi3.classList.add('rounded', 'nowrap');
celdaMenuLi3.appendChild(celdaMenuA3);

let celdaMenuA4 = document.createElement('a')
celdaMenuA4.classList.add('px-5', 'text-primary');
celdaMenuA4.href = '#'
celdaMenuA4.textContent = 'Eliminar';
let celdaMenuLi4 =  document.createElement('li');
celdaMenuLi4.classList.add('rounded', 'nowrap');
celdaMenuLi4.appendChild(celdaMenuA4);

let menuFila = document.createElement('ul');
menuFila.classList.add('menuFilaPort', 'azul5', 'd-flex', 'p-2', 'text-left', 'rounded', 'z2', 'off');
menuFila.appendChild(celdaMenuLi1)
menuFila.appendChild(celdaMenuLi2)
menuFila.appendChild(celdaMenuLi3)
menuFila.appendChild(celdaMenuLi4)

//html salto fila 
let salto = document.createElement('tr');
salto.classList.add('salto1')

// FIN HTML FILA PORTFOLIO

//Contenedor Filas
let fila = document.createElement('tr');
fila.classList.add('d-flex','filaPort', 'azul4', 'd-flex', 'row', 'align-items-center',
 'text-center', 'rounded');
fila.appendChild(celda1)
fila.appendChild(celda2)
fila.appendChild(celda3)
fila.appendChild(celda4)
fila.appendChild(celda5)
fila.appendChild(celda6)
fila.appendChild(celda7)
fila.appendChild(menuFila)
fila.appendChild(salto)

// fin html salto fila

//HTML totales
let total1 = document.createElement('th');
total1.textContent = 'Valor'; //FALTA PONER LA SINTAXIS CORRECTA <<<<<<<<<<<<<<<<<<<<<<
total1.classList.add('totalActivos', 'col', 'w-s', 'text-light', 'nowrap');

let total2 = document.createElement('th');
total2.classList.add('col', 'w-s', 'text-light', 'nowrap');

let total3 = document.createElement('th');
total3.classList.add('col', 'w-s', 'text-light', 'nowrap');

let total4 = document.createElement('th');
total4.textContent = 'Valor'; //FALTA PONER LA SINTAXIS CORRECTA <<<<<<<<<<<<<<<<<<<<<<
total4.classList.add('totalInvertido', 'col', 'w-s', 'text-light', 'nowrap');

let total5 = document.createElement('th');
total5.classList.add('col', 'w-s', 'text-light', 'nowrap');


let total6 = document.createElement('th');
total6.textContent = 'Valor'; //FALTA PONER LA SINTAXIS CORRECTA <<<<<<<<<<<<<<<<<<<<<<
total6.classList.add('totalProfit', 'col', 'w-s', 'text-light', 'nowrap');

let imagenTotal7 = document.createElement('img');
imagenTotal7.src = 'images/add_box_white_24dp.svg';

let total7 = document.createElement('th');
total7.classList.add('col', 'w-s', 'text-light', 'cursor');
total7.appendChild(imagenTotal7);

let totales = document.createElement('tr')
totales.classList.add('totalPorta', 'azul5', 'd-flex', 'text-center', 'nowrap');
totales.appendChild(total1)
totales.appendChild(total2)
totales.appendChild(total3)
totales.appendChild(total4)
totales.appendChild(total5)
totales.appendChild(total6)
totales.appendChild(total7)


// FIN HTML TOTALES ^^^^^

//Body de Filas y Totales
let tBodyPort =  document.createElement('tbody');
tBodyPort.classList.add('bodyPortfolio', 'portBody', 'd-flex', 'row');
tBodyPort.appendChild(fila)
tBodyPort.appendChild(totales)

//Html del encabezado de las filas
let headPortTh1 = document.createElement('th');
headPortTh1.classList.add('col', 'w-s', 'text-light');
headPortTh1.textContent = 'Ticker';

let headPortTh2 = document.createElement('th');
headPortTh2.classList.add('col', 'w-s', 'text-light');
headPortTh2.textContent = 'Cantidad';

let headPortTh3 = document.createElement('th');
headPortTh3.classList.add('col', 'w-s', 'text-light');
headPortTh3.textContent = 'Break Even';

let headPortTh4 = document.createElement('th');
headPortTh4.classList.add('col', 'w-s', 'text-light');
headPortTh4.textContent = 'Inversión';

let headPortTh5 = document.createElement('th');
headPortTh5.classList.add('col', 'w-s', 'text-light');
headPortTh5.textContent = 'Cotización';

let headPortTh6 = document.createElement('th');
headPortTh6.classList.add('col', 'w-s', 'text-light');
headPortTh6.textContent = 'P&L | %';

let menuHeadPort = document.createElement('img')
menuHeadPort.classList.add('my-auto', 'p-1', 'vPro');
menuHeadPort.src = 'images/tune_white_24dp.svg';

let headPortTh7 = document.createElement('th');
headPortTh7.classList.add('col', 'w-s', 'text-light', 'cursor');
headPortTh7.appendChild(menuHeadPort)

let headPort = document.createElement('tr')
headPort.classList.add('headPort', 'd-flex', 'text-center', 'nowrap');
headPort.appendChild(headPortTh1)
headPort.appendChild(headPortTh2)
headPort.appendChild(headPortTh3)
headPort.appendChild(headPortTh4)
headPort.appendChild(headPortTh5)
headPort.appendChild(headPortTh6)
headPort.appendChild(headPortTh7)

//Contenedor de headport y tbody

let tHeadPort = document.createElement('thead');
tHeadPort.appendChild(headPort)

// Contenedor table

let tablePort =  document.createElement('table');
tablePort.classList.add('table', 'text-light', 'table-hover', 'mx-auto', 'rounded', 'nowrap', 'text-center', 'mb-5');
tablePort.appendChild(tHeadPort)
tablePort.appendChild(tBodyPort)

//hr
let hrPort = document.createElement('hr');
hrPort.classList.add('mx-auto', 'rounded', 'azul2', 'mb-2', 'col-6');

//h4
let h4Port = document.createElement('h4');
h4Port.classList.add('titPortfolio', 'text-light', 'col-12', 'nowrap', 't-azul1', 'mt-5');
h4Port.textContent = 'Portfolio1';

//Div que contiene todo el portafolio
let portafolioJS = document.createElement('div');
portafolioJS.classList.add('portfolio', 'text-light', 'text-center', 'd-flex', 'justify-content-center',
 'mt-4', 'col-xl-8', 'col-12', 'mx-auto', 'on');
 portafolioJS.appendChild(h4Port)
 portafolioJS.appendChild(hrPort)
 portafolioJS.appendChild(tablePort)

const contenedorIndex = document.getElementById('contIndex');

function activarDesactivarPortfolio() {
    if( tBodyPort.children.length <= 1 ) {
        /* portfolio.classList.remove('on'); */
        portafolioJS.classList.add('off');          
        
    } else {        
        portafolioJS.classList.remove('off');  
        portafolioJS.classList.add('on');
    }
    
}

activarDesactivarPortfolio()







//*############################################################ Modal metod 1
//*############################################################ Modal metod 1
//*############################################################ Modal metod 1
//*############################################################ Modal metod 1

//   *****   VARIABLES INPUTS EN EL MODAL NUEVO PORTFOLIO ***************************
//DIV Contenedor de portafolios
const containerPorts = document.getElementById('contIndex');

//DIV Modal
const modal = document.getElementById('modalNewPort');

// inputs del Modal
const portfolio = document.getElementsByClassName('portfolio');
const nombre = document.getElementById('newNombre');
const broker = document.getElementById('newBroker');
const ticker = document.getElementById('newTicker');
const cantidad = document.getElementById('newCantidad');
const valorActual = Number.parseInt(50);
/* const cotizacion = valorActual.getAttribute('value'); */
const precioMedio = document.getElementById('newPrecioMedio');
const inversionTotal = cantidad * precioMedio;
const valorMercado = cantidad * valorActual; 
const profit = valorMercado - inversionTotal /// Falta


console.log(valorMercado)

/* Botones del Modal */
const btnNewPort = document.getElementById ('btnNewPort');
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
    newPortContainer.addEventListener('click', cerrarModal); 
    //Inputs Modal
    nombre.addEventListener('blur', validar);
    broker.addEventListener('blur', validar);
    ticker.addEventListener('blur', validar);
    cantidad.addEventListener('blur', validar);
    precioMedio.addEventListener('blur', validar);
}

function validar(e) {
  console.log(e.target.value)
}


// *********************
// *********************
// *********************

/* function validar (e){
    console.log(e.target.value)
} */


//Mostrar y ocultar modal de nuevo Portafolio
function mostrarModal() {
    if( newPortContainer.classList.contains('off') ) {        
        newPortContainer.classList.remove('off');           
    } 
}

// Cerrar con botones 'cancelar y X '
function ocultarModal() {    
    newPortContainer.classList.add('off');           
}
//cerrar con clic fuera del modal
function cerrarModal(e) {        
    if(e.target.classList.contains('newPortContainer', 'cerrarNewPort')){
        ocultarModal()
    } 
}

function aceptarModal() {        
    const inputsModal = {
        nombre: nombre.value,
        broker: broker.value,
        ticker: ticker.value,
        cantidad: cantidad.value,
        precio: precioMedio.value, 
        cotizacion: valorActual,
        inversion: cantidad.value * precioMedio.value,
        valorMercado: cantidad.value * valorActual,
        profit: valorMercado - inversionTotal  //<<< FAlta retocar, devuelve NaN, he probado 1000 sintaxis...
      

        
    }
    console.log(inputsModal.nombre, 'nombre')
    console.log(inputsModal.broker, 'broker')
    console.log(inputsModal.ticker, 'ticker')
    console.log(inputsModal.cantidad, 'cantidad')
    console.log(inputsModal.precio, 'precio')
    console.log(inputsModal.cotizacion, 'cotizacion')
    console.log(inputsModal.inversion, 'inversion')
    console.log(inputsModal.valorMercado, 'valorMercado')
    console.log(inputsModal.profit, 'profit')
    

    if (portfolio.length == 0) {
      console.log('es el primer portfolio')
    containerPorts.innerHTML = `
    <div id="p01" class="portfolio text-light text-center d-flex justify-content-center mt-4 col-xl-8 col-12 mx-auto on">   <!-- << poner off para usar js inicial -->

    <h4 id="titPortfolio" class="titPortfolio text-light col-12 nowrap t-azul1 mt-5" value="">${inputsModal.nombre}</h4>
    <hr class="mx-auto rounded azul2 mb-2 col-6">
  
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
        <tr id="f01" class="filaPort azul4 d-flex row align-items-center text-center nowrap rounded">
          <td id="ticker" class="col w-s text-light text-uppercase">${inputsModal.broker}</td>
          <td id="ticker" class="col w-s t-naranja text-uppercase bg-marca2">${inputsModal.ticker}</td>
          <td id="cantidad" class="col w-s text-light">${inputsModal.cantidad}</td>
          <td id="precioMedio" class="col w-s text-light">${inputsModal.precio}</td>
          <td id="inversion" class="col w-s text-light">${inputsModal.inversion}</td>
          <td id="coti" class="col w-s text-light d-grid"><input id="valorActual" class="coti azul3 border-none text-light text-center rounded d-flex align-items-center nowrap" type="number" value="${inputsModal.cotizacion}"></td>
          <td id="diferencia" class="col w-s t-verde">${inputsModal.profit}</td>
          <td id="btnMenuFilaPort" class="col w-s text-light cursor z1"><img class="btnMenuFilaPort" src="images/linear_scale_white_24dp.svg" alt=""></td> 
          <!-- MENÚ DESPLEGABLE DE FILA PORTFOLIO -->
          <?php
            include "includes/menu-fila-portfolio.php";
          ?> 
          <!-- FIN MENÚ DESPLEGABLE DE FILA PORTFOLIO -->  
        <tr class="salto1"></tr>
        <!-- Fin Filas -->  

        <!-- TOTALES -->
        <tr class="totalPorta azul5 d-flex text-center nowrap">
          <th id="" class="col w-s text-light nowrap"></th>
          <th id="" class="totalActivos col w-s text-light nowrap">Total 3 Activos</th>
          <th id="" class="col w-s text-light nowrap"></th>
          <th id="" class="col w-s text-light nowrap"></th>
          <th id="" class="totalInvertido col w-s text-light nowrap">&nbsp300,000 </th>
          <th id="" class="col w-s text-light nowrap"></th>
          <th id="" class="totalProfit col w-s nowrap text-light"> &nbsp300,000 | 300%</th>
          <th id="" class="col w-s text-light cursor"><img src="images/add_box_white_24dp.svg" alt=""></th> 
        </tr>            
      </tbody>
      <!-- FIN CUERPO DE LAS FILAS DE ACTIVOS -->
  
    </table>
  </div>
  `;} else {
    console.log('Este sería un nuevo portfolio')
   
  }
 
  ocultarModal()
}




//*############################################################ Modal metod 2
//*############################################################ Modal metod 2  funciona lo de agregar nuevoportfolio pero el footer se queda fijo
//*############################################################ Modal metod 2
//*############################################################ Modal metod 2

//   *****   VARIABLES INPUTS EN EL MODAL NUEVO PORTFOLIO ***************************
//DIV Contenedor de portafolios
const contPortfolio = document.querySelector('#contIndex');

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
const inversionTotal = cantidad * precioMedio;
const valorMercado = cantidad * valorActual; 
const profit = valorMercado - inversionTotal /// Falta


console.log(valorMercado)

/* Botones del Modal */
const btnNewPort = document.getElementById ('btnNewPort');
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
    newPortContainer.addEventListener('click', cerrarModal); 
    //Inputs Modal
    nombre.addEventListener('blur', validar);
    broker.addEventListener('blur', validar);
    ticker.addEventListener('blur', validar);
    cantidad.addEventListener('blur', validar);
    precioMedio.addEventListener('blur', validar);
}

function validar(e) {
  console.log(e.target.value)
}

//Mostrar y ocultar modal de nuevo Portafolio
function mostrarModal() {
    if( newPortContainer.classList.contains('off') ) {        
        newPortContainer.classList.remove('off');           
    } 
}

// Cerrar con botones 'cancelar y X '
function ocultarModal() {    
    newPortContainer.classList.add('off');           
}
//cerrar con clic fuera del modal
function cerrarModal(e) {        
    if(e.target.classList.contains('newPortContainer', 'cerrarNewPort')){
        ocultarModal()
    } 
}


function aceptarModal() {        
    const inputsModal = {
        nombre: nombre.value,
        broker: broker.value,
        ticker: ticker.value,
        cantidad: cantidad.value,
        precio: precioMedio.value, 
        cotizacion: valorActual,
        inversion: cantidad.value * precioMedio.value,
        valorMercado: cantidad.value * valorActual,
        profit: valorMercado - inversionTotal  //<<< FAlta retocar, devuelve NaN, he probado 1000 sintaxis...
    }
    console.log(inputsModal, 'inputs')
    console.log(inputsModal.nombre, 'nombre')
    console.log(inputsModal.broker, 'broker')
    console.log(inputsModal.ticker, 'ticker')
    console.log(inputsModal.cantidad, 'cantidad')
    console.log(inputsModal.precio, 'precio')
    console.log(inputsModal.cotizacion, 'cotizacion')
    console.log(inputsModal.inversion, 'inversion')
    console.log(inputsModal.valorMercado, 'valorMercado')
    console.log(inputsModal.profit, 'profit')
    

    if (portfolio.length == 0) {
      console.log('es el primer portfolio')
      contPortfolio.innerHTML = `
    <div id="p01" class="portfolio text-light text-center d-flex justify-content-center mt-4 col-xl-8 col-12 mx-auto on">   <!-- << poner off para usar js inicial -->

    <h4 id="titPortfolio" class="titPortfolio text-light col-12 nowrap t-azul1 mt-5" value="">${inputsModal.nombre}</h4>
    <hr class="mx-auto rounded azul2 mb-2 col-6">
  
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
        <tr id="f01" class="filaPort azul4 d-flex row align-items-center text-center nowrap rounded">
          <td id="ticker" class="col w-s text-light text-uppercase">${inputsModal.broker}</td>
          <td id="ticker" class="col w-s t-naranja text-uppercase bg-marca2">${inputsModal.ticker}</td>
          <td id="cantidad" class="col w-s text-light">${inputsModal.cantidad}</td>
          <td id="precioMedio" class="col w-s text-light">${inputsModal.precio}</td>
          <td id="inversion" class="col w-s text-light">${inputsModal.inversion}</td>
          <td id="coti" class="col w-s text-light d-grid"><input id="valorActual" class="coti azul3 border-none text-light text-center rounded d-flex align-items-center nowrap" type="number" value="${inputsModal.cotizacion}"></td>
          <td id="diferencia" class="col w-s t-verde">${inputsModal.profit}</td>
          <td id="btnMenuFilaPort" class="col w-s text-light cursor z1"><img class="btnMenuFilaPort" src="images/linear_scale_white_24dp.svg" alt=""></td> 
          <!-- MENÚ DESPLEGABLE DE FILA PORTFOLIO -->
          <?php
            include "includes/menu-fila-portfolio.php";
          ?> 
          <!-- FIN MENÚ DESPLEGABLE DE FILA PORTFOLIO -->  
        <tr class="salto1"></tr>
        <!-- Fin Filas -->  

        <!-- TOTALES -->
        <tr class="totalPorta azul5 d-flex text-center nowrap">
          <th id="" class="col w-s text-light nowrap"></th>
          <th id="" class="totalActivos col w-s text-light nowrap">Total 3 Activos</th>
          <th id="" class="col w-s text-light nowrap"></th>
          <th id="" class="col w-s text-light nowrap"></th>
          <th id="" class="totalInvertido col w-s text-light nowrap">&nbsp300,000 </th>
          <th id="" class="col w-s text-light nowrap"></th>
          <th id="" class="totalProfit col w-s nowrap text-light"> &nbsp300,000 | 300%</th>
          <th id="" class="col w-s text-light cursor"><img src="images/add_box_white_24dp.svg" alt=""></th> 
        </tr>            
      </tbody>
      <!-- FIN CUERPO DE LAS FILAS DE ACTIVOS -->
  
    </table>
  </div>
  `;} else {
    console.log('Este sería un nuevo portfolio')

    const newPortfolio = document.createElement('div')
    newPortfolio.classList.add('portfolio', 'text-light', 'text-center', 'd-flex', 'justify-content-center', 'mt-4', 'col-xl-8', 'col-12', 'mx-auto', 'on')
    newPortfolio.innerHTML = `

    <h4 id="titPortfolio" class="titPortfolio text-light col-12 nowrap t-azul1 mt-5" value="">${inputsModal.nombre}</h4>
    <hr class="mx-auto rounded azul2 mb-2 col-6">
  
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
        <tr id="f01" class="filaPort azul4 d-flex row align-items-center text-center nowrap rounded">
          <td id="ticker" class="col w-s text-light text-uppercase">${inputsModal.broker}</td>
          <td id="ticker" class="col w-s t-naranja text-uppercase bg-marca2">${inputsModal.ticker}</td>
          <td id="cantidad" class="col w-s text-light">${inputsModal.cantidad}</td>
          <td id="precioMedio" class="col w-s text-light">${inputsModal.precio}</td>
          <td id="inversion" class="col w-s text-light">${inputsModal.inversion}</td>
          <td id="coti" class="col w-s text-light d-grid"><input id="valorActual" class="coti azul3 border-none text-light text-center rounded d-flex align-items-center nowrap" type="number" value="${inputsModal.cotizacion}"></td>
          <td id="diferencia" class="col w-s t-verde">${inputsModal.profit}</td>
          <td id="btnMenuFilaPort" class="col w-s text-light cursor z1"><img class="btnMenuFilaPort" src="images/linear_scale_white_24dp.svg" alt=""></td> 
          <!-- MENÚ DESPLEGABLE DE FILA PORTFOLIO -->
          <?php
            include "includes/menu-fila-portfolio.php";
          ?> 
          <!-- FIN MENÚ DESPLEGABLE DE FILA PORTFOLIO -->  
        <tr class="salto1"></tr>
        <!-- Fin Filas -->  

        <!-- TOTALES -->
        <tr class="totalPorta azul5 d-flex text-center nowrap">
          <th id="" class="col w-s text-light nowrap"></th>
          <th id="" class="totalActivos col w-s text-light nowrap">Total 3 Activos</th>
          <th id="" class="col w-s text-light nowrap"></th>
          <th id="" class="col w-s text-light nowrap"></th>
          <th id="" class="totalInvertido col w-s text-light nowrap">&nbsp300,000 </th>
          <th id="" class="col w-s text-light nowrap"></th>
          <th id="" class="totalProfit col w-s nowrap text-light"> &nbsp300,000 | 300%</th>
          <th id="" class="col w-s text-light cursor"><img src="images/add_box_white_24dp.svg" alt=""></th> 
        </tr>            
      </tbody>
      <!-- FIN CUERPO DE LAS FILAS DE ACTIVOS -->
  
    </table>
  `;

  contPortfolio.appendChild(newPortfolio);
    
  }
 
  ocultarModal()
}



// ********************************* Funciona añadir portafolio debajo con el botón corresponiente
// ********************************* Funciona añadir portafolio debajo con el botón corresponiente
// ********************************* Funciona añadir portafolio debajo con el botón corresponiente
// ********************************* Funciona añadir portafolio debajo con el botón corresponiente

//   *****   VARIABLES INPUTS EN EL MODAL NUEVO PORTFOLIO ***************************
//DIV Contenedor de portafolios
const contPortfolio = document.querySelector('#contIndex');

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
const inversionTotal = cantidad * precioMedio;
const valorMercado = cantidad * valorActual; 
const profit = valorMercado - inversionTotal /// Falta

console.log(valorMercado)

/* Botones del Modal */
const btnNewPort = document.querySelector('#btnNewPort');
/* const btnNextPort = document.querySelector('#btnNextPort'); */
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
    newPortContainer.addEventListener('click', cerrarModal); 
    //Inputs Modal
    nombre.addEventListener('blur', validar);
    broker.addEventListener('blur', validar);
    ticker.addEventListener('blur', validar);
    cantidad.addEventListener('blur', validar);
    precioMedio.addEventListener('blur', validar);
}

//FUNCIONES *********************************

function validar(e) {
  console.log(e.target.value)
}

//Mostrar y ocultar modal de nuevo Portafolio
function mostrarModal() {
    if( newPortContainer.classList.contains('off') ) {        
        newPortContainer.classList.remove('off');           
    } 
}

// Cerrar con botones 'cancelar y X '
function ocultarModal() {    
    newPortContainer.classList.add('off');           
}
//cerrar con clic fuera del modal
function cerrarModal(e) {        
    if(e.target.classList.contains('newPortContainer', 'cerrarNewPort')){
        ocultarModal()
    } 
}

function ocultarBienvenida(){
  const bienvenida = document.querySelector('#bienvenida')
  bienvenida.classList.add('off')
  const btnBienvenida = document.querySelector('#btnNextPort')
  btnBienvenida.classList.add('off')
}

//HTML que se inserta EN CONTAINER PORTAFOLIOS 
function HTMLport() {
  const inputsModal = {
    nombre: nombre.value,
    broker: broker.value,
    ticker: ticker.value,
    cantidad: cantidad.value,
    precio: precioMedio.value, 
    cotizacion: valorActual,
    inversion: cantidad.value * precioMedio.value,
    valorMercado: cantidad.value * valorActual,
    profit: valorMercado - inversionTotal  //<<< FAlta retocar, devuelve NaN, he probado 1000 sintaxis...
}

  const newPortfolio = document.createElement('div')
  newPortfolio.classList.add('portfolio', 'text-light', 'text-center', 'd-flex', 'justify-content-center', 'mt-4', 'col-xl-8', 'col-12', 'mx-auto', 'on')
  newPortfolio.innerHTML = `

  <h4 id="titPortfolio" class="titPortfolio text-light col-12 nowrap t-azul1 mt-5" value="">${inputsModal.nombre}</h4>
  <hr class="mx-auto rounded azul2 mb-2 col-6">

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
      <tr id="f01" class="filaPort azul4 d-flex row align-items-center text-center nowrap rounded">
        <td id="ticker" class="col w-s text-light text-uppercase">${inputsModal.broker}</td>
        <td id="ticker" class="col w-s t-naranja text-uppercase bg-marca2">${inputsModal.ticker}</td>
        <td id="cantidad" class="col w-s text-light">${inputsModal.cantidad}</td>
        <td id="precioMedio" class="col w-s text-light">${inputsModal.precio}</td>
        <td id="inversion" class="col w-s text-light">${inputsModal.inversion}</td>
        <td id="coti" class="col w-s text-light d-grid"><input id="valorActual" class="coti azul3 border-none text-light text-center rounded d-flex align-items-center nowrap" type="number" value="${inputsModal.cotizacion}"></td>
        <td id="diferencia" class="col w-s t-verde">${inputsModal.profit}</td>
        <td id="btnMenuFilaPort" class="col w-s text-light cursor z1"><img class="btnMenuFilaPort" src="images/linear_scale_white_24dp.svg" alt=""></td> 
        <!-- MENÚ DESPLEGABLE DE FILA PORTFOLIO -->
        <?php
          include "includes/menu-fila-portfolio.php";
        ?> 
        <!-- FIN MENÚ DESPLEGABLE DE FILA PORTFOLIO -->  
      <tr class="salto1"></tr>
      <!-- Fin Filas -->  

      <!-- TOTALES -->
      <tr class="totalPorta azul5 d-flex text-center nowrap">
        <th id="" class="col w-s text-light nowrap"></th>
        <th id="" class="totalActivos col w-s text-light nowrap">Total 3 Activos</th>
        <th id="" class="col w-s text-light nowrap"></th>
        <th id="" class="col w-s text-light nowrap"></th>
        <th id="" class="totalInvertido col w-s text-light nowrap">&nbsp300,000 </th>
        <th id="" class="col w-s text-light nowrap"></th>
        <th id="" class="totalProfit col w-s nowrap text-light"> &nbsp300,000 | 300%</th>
        <th id="" class="col w-s text-light cursor"><img src="images/add_box_white_24dp.svg" alt=""></th> 
      </tr>            
    </tbody>
    <!-- FIN CUERPO DE LAS FILAS DE ACTIVOS -->

  </table>
`;
contPortfolio.insertBefore(newPortfolio, document.querySelector('.portfolio'));

}

//Al hacer clic en aceptar del Modal
function aceptarModal() {      

    ocultarBienvenida()
    if (portfolio.length == 0) {
      console.log('es el primer portfolio')
      HTMLport()   
      newBtnPort()
      ocultarModal()
  } else {
    console.log('Este sería un nuevo portfolio')    
    HTMLport()
    ocultarModal()
}

const botones = document.querySelector('.divNextPort')
  if(botones.length == 1){
    newBtnPort()
  }

/* console.log(btnNextPort, 'btn') */
  
}


//HTML del botón de nuevo portafolio que se inserta al final de la página
function newBtnPort() {

  const btnNextPort = document.createElement('button')
  btnNextPort.classList.add('btnNewPort', 'mx-auto', 'btn', 'btn-primary', 
  'col-xl-2', 'col-sm-3', 'col-6', 'm-2', 'rounded', 'p-2', 'border-naranja');
  btnNextPort.setAttribute('type', 'button');
  btnNextPort.setAttribute('id', 'btnNextPort');
  
  const h6 = document.createElement('h6')
  h6.textContent = '+ Nuevo Portafolio'
  
  btnNextPort.appendChild(h6)
  
  const divNextPort = document.createElement('div');
  divNextPort.classList.add('divNextPort', 'w-100', 'd-flex', 'text-center', 'justify-content-center', 'mb-5');  
  divNextPort.appendChild(btnNextPort)
  
  contPortfolio.appendChild(divNextPort)
  btnNextPort.addEventListener('click', mostrarModal);

  console.log(divNextPort)
}