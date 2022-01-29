// Video 115 clases de creación de html
// Video 116 Cómo hacer que el botón borrar fila reconozca la fila que borra (ParentElement)
// Video 117 Crear arreglo de portafolio para luego crear arreglo de portafolioS - foreach
// Video 119 Crear nuevo portafolio si ya existe 1, si no, crear el primero. min:3
// Video 123 Formularios - Leer lo que escribimos en un input


// *********************************************
// *********************************************
// *********************************************
// *********************************************



//HTML del portfolio al que se le llama en modalNewPort
function HTMLport() {
    const inputsModal = {
      nombre: nombre.value,
      broker: broker.value,
      ticker: ticker.value,
      cantidad: cantidad.value,
      precio: precioMedio.value, 
      /* cotizacion: valorActual, */
      inversion: cantidad.value * precioMedio.value,
      valorMercado: cantidad.value * valorActual,
      profit: valorMercado.value - inversionTotal.value  //<<< FAlta retocar, devuelve NaN, he probado 1000 sintaxis...
  }
  
  const newPortfolio = document.createElement('div')
  newPortfolio.classList.add('portfolio', 'text-light', 'text-center', 'd-flex', 'justify-content-center', 'mt-4', 'col-xl-8', 'col-12', 'mx-auto')
  newPortfolio.innerHTML = `
  
  <h4 id="titPortfolio" class="titPortfolio text-light col-12 nowrap t-azul1 mt-5 text-capitalize" value="">${inputsModal.nombre}</h4>
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
        <td id="ticker" class="col w-s text-light text-uppercase">${inputsModal.broker}</td>
        <td id="ticker" class="col w-s t-naranja text-uppercase bg-marca2">${inputsModal.ticker}</td>
        <td id="cantidad" class="col w-s text-light">${inputsModal.cantidad}</td>
        <td id="precioMedio" class="col w-s text-light">${inputsModal.precio} $</td>
        <td id="inversion" class="col w-s text-light">${inputsModal.inversion} $</td>
        <td id="coti" class="col w-s text-light d-grid"><input id="valorActual" class="valorActual coti azul3 border-none text-light text-center rounded d-flex align-items-center nowrap" type="number" value="${valorActual}"></td>
        <td id="diferencia" class="col w-s t-verde">${inputsModal.profit} $</td>
        <td id="btnMenuFilaPort" class=" col w-s text-light cursor">
        <img class="btnMenuFilaPort" src="images/linear_scale_white_24dp.svg" alt="">
          <!-- MENÚ DESPLEGABLE DE FILA PORTFOLIO -->

          <ul id="IDmenuFilaPort" onClick="cerrarMenu()" class="menuClic menuFilaPort d-flex justify-content-center azul5 d-flex col p-2 rounded z2 d-none">
              <h6 id="" class="t-naranja text-uppercase">${inputsModal.ticker}</h6>
              <div class="nombreSub mx-auto rounded azul3 my-1 op-50"></div>
              <li id="" class="w-100 px-5 text-left row rounded nowrap"><a class="w-100 text-primary" href="">Editar</a></li>
              <li id="" class="w-100 px-5 text-left row rounded nowrap"><a class="w-100 text-primary" href="#">Nueva Operación</a></li>
              <li id="" class="w-100 px-5 text-left row rounded nowrap"><a class="w-100 text-primary" href="#">Promediar con...</a></li>
              <li id="" class="w-100 px-5 text-left row rounded nowrap"><a class="w-100 text-danger" href="#">Eliminar fila</a></li>              
            </ul>
       
          </td> 
          <!-- FIN MENÚ DESPLEGABLE DE FILA PORTFOLIO -->  
      </tr>   
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
        <th id="" class="addActivo col w-s text-light cursor"><img src="images/add_box_white_24dp.svg" alt=""></th> 
      </tr>            
    </tbody>
    <!-- FIN CUERPO DE LAS FILAS DE ACTIVOS -->
  
  </table>
  `;
  contIndex.insertBefore(newPortfolio, document.querySelector('.final'));
  }


// HTML del btnAddActivo
function HTMLfila() {
  const inputsModal = {    
    broker: broker.value,
    ticker: ticker.value,
    cantidad: cantidad.value,
    precio: precioMedio.value, 
    cotizacion: valorActual,
    inversion: cantidad.value * precioMedio.value,
    valorMercado: cantidad.value * valorActual,
    profit: valorMercado.value - inversionTotal.value  //<<< FAlta retocar, devuelve NaN, he probado 1000 sintaxis...
}

const newFila = document.createElement('tr')
newFila.classList.add('filaPort', 'bg-filaMenuOff', 'd-flex', 'row', 'align-items-center', 'text-center', 'nowrap', 'rounded')
newFila.setAttribute('id', '01 =+ 1 ')
newFila.innerHTML = `      
    <!-- Filas de portofolio -->    
      <td id="ticker" class="col w-s text-light text-uppercase">${inputsModal.broker}</td>
      <td id="ticker" class="col w-s t-naranja text-uppercase bg-marca2">${inputsModal.ticker}</td>
      <td id="cantidad" class="col w-s text-light">${inputsModal.cantidad}</td>
      <td id="precioMedio" class="col w-s text-light">${inputsModal.precio} $</td>
      <td id="inversion" class="col w-s text-light">${inputsModal.inversion} $</td>
      <td id="coti" class="col w-s text-light d-grid"><input id="valorActual" class="valorActual coti azul3 border-none text-light text-center rounded d-flex align-items-center nowrap" type="number" value="${inputsModal.cotizacion}"></td>
      <td id="diferencia" class="col w-s t-verde">${inputsModal.profit} $</td>
      <td id="btnMenuFilaPort" class=" col w-s text-light cursor">
      <img class="btnMenuFilaPort" src="images/linear_scale_white_24dp.svg" alt="">
        <!-- MENÚ DESPLEGABLE DE FILA PORTFOLIO -->

        <ul id="IDmenuFilaPort" onClick="cerrarMenu()" class="menuClic menuFilaPort d-flex justify-content-center azul5 d-flex col p-2 rounded z2 d-none">
            <h6 id="" class="t-naranja text-uppercase">${inputsModal.ticker}</h6>
            <div class="nombreSub mx-auto rounded azul3 my-1 op-50"></div>
            <li id="" class="w-100 px-5 text-left row rounded nowrap"><a class="w-100 text-primary" href="">Editar</a></li>
            <li id="" class="w-100 px-5 text-left row rounded nowrap"><a class="w-100 text-primary" href="#">Nueva Operación</a></li>
            <li id="" class="w-100 px-5 text-left row rounded nowrap"><a class="w-100 text-primary" href="#">Promediar con...</a></li>
            <li id="" class="w-100 px-5 text-left row rounded nowrap"><a class="w-100 text-danger" href="#">Eliminar fila</a></li>              
          </ul>
     
        </td> 
        <!-- FIN MENÚ DESPLEGABLE DE FILA PORTFOLIO -->  
    </tr>   
    <tr class="salto1"></tr>
    <!-- Fin Filas -->  
`;
portSeleccionado.insertBefore(newFila, document.querySelector('.totalPorta'));
}