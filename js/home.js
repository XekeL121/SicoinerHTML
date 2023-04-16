document.addEventListener('DOMContentLoaded', () => {
  const btnNewPortButton = document.querySelector('.btn__newPort__button');
  const closeModalButton = document.querySelector('#closeModal');
  const acceptModalButton = document.querySelector('#accept-modal');
  const modal = document.querySelector('.modal');
  

  btnNewPortButton.addEventListener('click', () => {
      modal.classList.add('open');
      
  });
  
  closeModalButton.addEventListener('click', () => {
      modal.classList.remove('open');
      
  });
  
  
  

  // Asegurarse de que el formulario no se envíe al hacer clic en el botón submit
document.querySelector('#newPortfolioForm').addEventListener('submit', (e) => {
  e.preventDefault();
});

acceptModalButton.addEventListener('click', () => {
  const portfolioName = document.querySelector('#portfolioName').value;
  const broker = document.querySelector('#broker').value;
  const ticker = document.querySelector('#ticker').value;
  const quantity = document.querySelector('#quantity').value;
  const price = document.querySelector('#price').value;

  // Verifica si todos los campos están completos
  if (portfolioName && broker && ticker && quantity && price) {
    createPortfolioTable(portfolioName, broker, ticker, quantity, price);

    // Restablecer valores en inputs excepto Bróker y Ticker
    const inputs = document.querySelectorAll('#newPortfolioForm input:not(#broker):not(#ticker)');
    inputs.forEach(input => {
      input.value = "";
    });

    modal.classList.remove('open');
    modalOverlay.classList.remove('open');
  } else {
    alert("Por favor, complete todos los campos antes de continuar.");
  }
});

  

    
  modal.classList.remove('open');
    modalOverlay.classList.remove('open');    
  });
  
  function createPortfolioTable(portfolioName, broker, ticker, quantity, price) {
    // Crear el ID dinámicamente  
    const rowId = `${portfolioName.substr(0, 3).toUpperCase()}_${portfolioName.slice(-1)}_${broker.substr(0, 2).toUpperCase()}-${ticker}`;
    const newTable = `
      <section class="contenedor-portafolio">
        <div class="portafolio__titulo">
          <h1 class="nowrap">${portfolioName}</h1>
          <hr class="portafolio__nombre__linea op-25"></hr>
        </div>
        <table class="portafolio-table">
          <thead class="">
            <tr class="portafolio__th">
              <th class="border-radius-left-top">Bróker</th>
              <th class="">Ticker</th>
              <th class="">Cant.</th>
              <th class="">Media</th>
              <th class="">Inv.</th>
              <th class="">Precio</th>
              <th class="">P&L</th>
              <th class="">%</th>
              <th class="border-radius-right-top cursor"><img id="" class="size-min op-50" src="img/settings_white_18dp.svg" alt=""></th> 
            </tr>
          </thead>    
          <tbody id="" class="">
            <tr id="${rowId}" class="portafolio__fila">
              <td id="broker" class="px-1">${broker}</td>
              <td id="ticker" class="">${ticker.toUpperCase()}</td>
              <td id="cantidad" class="">${quantity}</td>
              <td id="precioMedio" class="">${price}</td>
              <td id="inversion" class="">${(quantity * price).toFixed(2)}</td>
              <td id="valorActual" class="py-05"><input id="cotiTH" class="" type="number" step="0.01" value=""></td>
              <td id="diferencia" class=""></td>
              <td id="diferenciaPercent" class=""></td>
              <td id="btnMenuFilaPort" class="cursor"><img class="size-min op-50" src="img/linear_scale_white_24dp.svg" alt=""></td>
            </tr>
            <tr class="salto1"></tr>
            <!-- /** TOTALES **/ -->
          <tr class="portafolio__totales">
              <th id="" class="border-radius-left-bottom"></th>
              <th id="totalActivos" class="nowrap">2 Activos</th>
              <th id="" class=""></th>
              <th id="" class=""></th>
              <th id="totalInversion" class=""> &nbsp111,200 </th>
              <th id="" class=""></th>
              <th id="totalProfit" class=""> &nbsp300,000</th>
              <th id="totalDiferenciaPercent" class=""> &nbsp300%</th>
              <th id="add-row" class="cursor border-radius-right-bottom"><img class=" op-50" src="img/add_box_white_24dp.svg" alt=""></th> 
          </tr>    
          </tbody>
        </table>
      </section>`;
          
      const btnNewPortContainer = document.querySelector('.btn__newPort__container');
      btnNewPortContainer.insertAdjacentHTML('beforebegin', newTable);

      const cotiTH = document.querySelector('#cotiTH');
      const cantidad = document.querySelector('#cantidad').textContent;
      const inversion = document.querySelector('#inversion').textContent;

      // Establecer el valor inicial para la diferencia y la diferencia en porcentaje
      const initialValue = parseFloat(price);
      updateDifference(initialValue, cantidad, inversion);

      cotiTH.addEventListener('input', () => {
        const valorActual = cotiTH.value;
        updateDifference(valorActual, cantidad, inversion);
      });
      
  }   

  function updateDifference(valorActual, cantidad, inversion) {
    const diferencia = (valorActual * cantidad - inversion).toFixed(2);
    const diferenciaPercent = (diferencia / inversion * 100).toFixed(2);
    document.querySelector('#diferencia').textContent = diferencia;
    document.querySelector('#diferenciaPercent').textContent = diferenciaPercent;
  }


// Función para deshacer y rehacer cambios en inputs con Ctrl + Z

const inputHistory = new Map();
const inputFuture = new Map();

document.addEventListener('keydown', (e) => {
  const isRedo = (e.ctrlKey || e.metaKey) && (e.key === 'y' || (e.shiftKey && e.key === 'Z'));
  const isUndo = (e.ctrlKey || e.metaKey) && !e.shiftKey && e.key === 'z';

  if (e.target.tagName === 'INPUT' && (isRedo || isUndo)) {
    e.preventDefault(); // Evita la acción predeterminada del navegador

    const inputElement = e.target;

    if (!inputHistory.has(inputElement)) {
      inputHistory.set(inputElement, []);
    }
    if (!inputFuture.has(inputElement)) {
      inputFuture.set(inputElement, []);
    }

    const history = inputHistory.get(inputElement);
    const future = inputFuture.get(inputElement);

    if (isUndo && history.length > 0) {
      // Deshacer al valor anterior
      const previousValue = history.pop();
      future.push(inputElement.value);
      inputElement.value = previousValue;
    } else if (isRedo && future.length > 0) {
      // Rehacer al siguiente valor
      const nextValue = future.pop();
      history.push(inputElement.value);
      inputElement.value = nextValue;
    }
  }
});

document.addEventListener('input', (e) => {
  if (e.target.tagName === 'INPUT') {
    const inputElement = e.target;

    if (!inputHistory.has(inputElement)) {
      inputHistory.set(inputElement, []);
    }
    if (!inputFuture.has(inputElement)) {
      inputFuture.set(inputElement, []);
    }

    const history = inputHistory.get(inputElement);
    const future = inputFuture.get(inputElement);

    // Guardar el valor actual en el historial antes de cambiar
    history.push(inputElement.value);
    // Limpiar el futuro cuando se realiza una nueva entrada
    future.length = 0;
  }
});

















     
    