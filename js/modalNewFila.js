//Btn abrir modal
modalNewFila = document.getElementById('modalNewFila');
//inputs modal newfila
btnNewFila = document.getElementById('aceptarNewFila');
brokerFila = document.getElementById('brokerFila');
tickerFila = dbrokerFila = document.getElementById('tickerFila');
cantidadFila = dbrokerFila = document.getElementById('cantidadFila');
precioMedioFila = dbrokerFila = document.getElementById('precioMedioFila');
btnCancelNewFila = dbrokerFila = document.getElementById('btnCancelNewFila');
cerrarNewFila = dbrokerFila = document.getElementById('cerrarNewFila');

//Add Events listeners
contIndex.addEventListener('click', newFila)
btnNewFila.addEventListener('click', aceptarFila)
btnCancelNewFila.addEventListener('click', ocultarModalFila)
cerrarNewFila.addEventListener('click', ocultarModalFila)
//Validar que los campos estén llenos para aceptar  
brokerFila.addEventListener('blur', validarFila);
tickerFila.addEventListener('blur', validarFila);
cantidadFila.addEventListener('blur', validarFila);
precioMedioFila.addEventListener('blur', validarFila);

//FUNCIONES***************************************************************************

//Función para abrir el modal de nueva fila al pulsar el botón
function newFila(e){
  btnNewTicker = e.target.classList.contains('newTicker');
  bodyPortfolio = e.target.parentElement.parentElement.parentElement;
  totalPorta = e.target.parentElement.parentElement;
  btnAceptarFilaDisabled()
  if(btnNewTicker) {   
    modalNewFila.classList.remove('off')
  }  
}

//Btn Aceptar
function aceptarFila() {
  if(aceptarFila){
    HTMLfila()
    ocultarModalFila();
  }
}

function validarFila() { 

  if(brokerFila.value !== '' && tickerFila.value !== '' && cantidadFila.value !== '' && precioMedioFila.value !== '' ) {
    btnAceptarFilaEnabled()
   }   
}

//Mantener el botón aceptar deshabilitado hasta completar los inputs
function btnAceptarFilaDisabled() {
  btnNewFila.disabled = true;
  btnNewFila.classList.add('op50', 'not-allowed');
}

function btnAceptarFilaEnabled() {
  btnNewFila.disabled = false;
  btnNewFila.classList.remove('op50', 'not-allowed');
}


function ocultarModalFila() {    
  modalNewFila.classList.add('off');
  /* btnAceptarDisabled(); */          
}

// HTML del btnAddActivo
function HTMLfila() {
    const inputsModalFila = {          
      broker: brokerFila.value,
      ticker: tickerFila.value,
      cantidad: parseFloat(cantidadFila.value),
      precio: parseFloat(precioMedioFila.value), 
      cotizacion: valorActual,
      inversion: cantidadFila.value * precioMedioFila.value,
      valorMercado: cantidadFila.value * valorActual,
      profit: (cantidadFila.value * valorActual) - (cantidadFila.value * precioMedioFila.value),  // todo <<< Falta que calcule al cambiar el valor manualmente en el input...
  }

  
  
  const newFila = document.createElement('tr')
  newFila.classList.add('filaPort', 'bg-filaMenuOff', 'd-flex', 'row', 'align-items-center', 'text-center', 'nowrap', 'rounded', 'mb-1', 'bg-verde', 'op80')
  newFila.setAttribute('id', '01 =+ 1 ')
  newFila.innerHTML = `      
      <!-- Filas de portofolio -->    
        <td id="broker" class="col w-s text-light text-uppercase">${inputsModalFila.broker}</td>
        <td id="ticker" class="col w-s t-naranja text-uppercase bg-marca2">${inputsModalFila.ticker}</td>
        <td id="cantidad" class="col w-s text-light">${inputsModalFila.cantidad}</td>
        <td id="precioMedio" class="col w-s text-light">${inputsModalFila.precio} $</td>
        <td id="inversion" class="inversion col w-s text-light">${inputsModalFila.inversion} $</td>
        <td id="coti" class="col w-s text-light d-grid"><input id="valorActual" class="valorActual coti azul3 border-none text-light text-center rounded d-flex align-items-center nowrap" type="number" value="${inputsModalFila.cotizacion}"></td>
        <td id="diferencia" class="diferencia col w-s t-verde">${inputsModalFila.profit} $</td>
        <td id="btnMenuFilaPort" class=" col w-s text-light cursor">
        <img class="btnMenuFilaPort" src="images/linear_scale_white_24dp.svg" alt="">   
          <ul id="IDmenuFilaPort" class="menuClic menuFilaPort d-flex justify-content-center azul5 d-flex col p-2 rounded z2 d-none">
              <h6 id="" class="t-naranja text-uppercase">${inputsModalFila.ticker}</h6>
              <div class="nombreSub mx-auto rounded azul3 my-1 op-50"></div>
              <li id="editar" class="editar w-100 px-5 text-left row rounded nowrap"><a class="w-100 text-primary" href="">Editar</a></li>
              <li id="newOperacion" class="newOperacion w-100 px-5 text-left row rounded nowrap"><a class="w-100 text-primary" href="#">Nueva Operación</a></li>
              <li id="promediar" class="promediar w-100 px-5 text-left row rounded nowrap"><a class="w-100 text-primary" href="#">Promediar con...</a></li>
              <li id="eliminar" class="eliminar w-100 px-5 text-left row rounded nowrap"><a class="w-100 text-danger" href="#">Eliminar fila</a></li>              
            </ul>
       
          </td>          
      </tr>   
      <tr class="salto1"></tr>           
  `;

  //Este código maqueta un nuevo total al portofolio para contabilizar el número de filas
  const filasNum = bodyPortfolio.getElementsByClassName('filaPort');
  const filasTotal = filasNum.length + 1;

  const newFilasTotal = document.createElement('tr');
  newFilasTotal.classList.add('totalPorta', 'azul5', 'd-flex', 'text-center', 'nowrap');
  newFilasTotal.innerHTML = `

    <th id="" class="col w-s text-light nowrap"></th>
    <th id="" class="totalActivos col w-s text-light nowrap">${filasTotal} Activos</th>
    <th id="" class="col w-s text-light nowrap"></th>
    <th id="" class="col w-s text-light nowrap"></th>
    <th id="" class="totalInvertido col w-s text-light nowrap">&nbsp </th>
    <th id="" class="col w-s text-light nowrap"></th>
    <th id="" class="totalProfit col w-s nowrap text-light"> &nbsp300,000 | 300%</th>
    <th id="" class="col w-s text-light cursor"><img class="newTicker" src="images/add_box_white_24dp.svg" alt=""></th>
  `;

  bodyPortfolio.insertBefore(newFila, totalPorta);
  totalPorta.remove()
  bodyPortfolio.appendChild(newFilasTotal);

  setTimeout(()=> {
    newFila.classList.remove('bg-verde', 'op80');    
  }, 500);
}
  