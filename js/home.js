document.addEventListener('DOMContentLoaded', () => {
  const btnNewPortButton = document.querySelector('.btn__newPort__button');
  const closeModalButton = document.querySelector('#closeModal');
  const acceptModalButton = document.querySelector('#accept-modal');
  const modal = document.querySelector('#myModal');  


  btnNewPortButton.addEventListener("click", function () {
    openModal(myModal);
  });
  
  closeModalButton.addEventListener('click', () => {
      modal.classList.remove('open');      
  });
  
  // Código para abrir y cerrar el modal inicial
  function openModal(modal) {
    modal.classList.add("open");
  }
  
  function closeModal(modal) {
    modal.classList.remove("open");
  }

  window.addEventListener("click", function (event) {
    if (event.target == myModal) {
      closeModal(myModal);
    }
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
    } else {
      alert("Por favor, complete todos los campos antes de continuar.");
    }
  });
    
  modal.classList.remove('open');     
  
  function createPortfolioTable(portfolioName, broker, ticker, quantity, price) {
    // Crear el ID dinámicamente  
    const rowId = `${portfolioName.replace(/\s/g, '').toUpperCase()}_${broker.substring(0, 2).toUpperCase()}_${ticker}`;
    const portfolioID = `portfolio-${portfolioName.replace(/\s/g, '').toUpperCase()}`;
    const newTable = `
      <section class="contenedor-portfolio">
        <div class="portfolio__titulo">
          <h1 class="nowrap">${portfolioName}</h1>
          <hr class="portfolio__nombre__linea op-25"></hr>
        </div>
        <table id="${portfolioID}" class="portfolio-table">
          <thead class="">
            <tr class="portfolio__th">
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
            <tr id="${rowId}" class="portfolio__fila">
              <td id="broker" class="px-1">${broker}</td>
              <td id="ticker" class="t-naranja">${ticker.toUpperCase()}</td>
              <td id="cantidad" class="">${quantity}</td>
              <td id="precioMedio" class="">${price}</td>
              <td id="inversion" class="">${(quantity * price).toFixed(2)}</td>
              <td id="valorActual" class="py-05"><input id="cotiTH" class="valorActual-placeholder" type="number" step="0.01" defaultValue="${price}" placeholder="Manual"></td>
              <td id="diferencia" class=""></td>
              <td id="diferenciaPercent" class=""></td>
              <td id="btnMenuFilaPort" class="cursor"><img class="size-min op-50" src="img/linear_scale_white_24dp.svg" alt=""></td>
            </tr>
            <tr class="salto1"></tr>
            <!-- /** TOTALES **/ -->
          <tr class="portfolio__totales">
              <th id="" class="border-radius-left-bottom"></th>
              <th id="totalActivos" class="nowrap">2 Activos</th>
              <th id="" class=""></th>
              <th id="" class=""></th>
              <th id="totalInversion" class=""> &nbsp111,200 </th>
              <th id="" class=""></th>
              <th id="totalProfit" class=""> &nbsp300,000</th>
              <th id="totalDiferenciaPercent" class=""> &nbsp300%</th>
              <th id="add-row" class="cursor border-radius-right-bottom"><img id="add-icon" class="op-50" src="img/add_box_white_24dp.svg" alt=""></th>
          </tr>             
          </tbody>
          </table>          
          <div class="modalFila" id="myModalFila">
            <div class="modal-content">
                <h2>Añadir activo</h2>
                <form id="newFilaForm" class="">
                    <label for="broker">Bróker:</label>
                    <input type="text" id="broker" name="broker" required>
                    <label for="ticker">Activo:</label>
                    <input type="text" id="ticker" name="ticker" required>
                    <label for="quantity">Cantidad:</label>
                    <input type="number" id="quantity" name="quantity" step="0.01" required>
                    <label for="price">Precio:</label>
                    <input type="number" id="price" name="price" step="0.01" min="0" required>
                    <div class="modalButtons">
                        <input type="submit" id="accept-modal-fila" value="Aceptar">
                        <input type="button" id="closeModalFila" value="Cerrar">
                    </div>
                  </form>
              </div>
          </div>          
          <div class="modalChanges" id="myModalChanges-${rowId}">
            <div class="modal-changes-content">
              <h2 class="mt-3">${ticker.toUpperCase()}</h2>
                <form id="changesForm" class="">
                    <label for="he_comprado">Cálculo de operación:</label>
                    <input class="ml-2" type="number" id="he_comprado_cantidad" name="he_comprado_cantidad" step="0.01" placeholder="Cantidad..." required>
                    <input class="ml-2" type="number" id="he_comprado_precio" name="he_comprado_precio" step="0.01" placeholder="A precio..." required>                    
                    <div class="resultadoModalChanges">
                      <h2 class="" for="resultado_virtual">Resultado virtual:</h2> 
                      <label for="cantidad_virtual">Cantidad total:</label> 
                  		<input type="number" id="virtualActivos" name="virtualActivos" step="0.01" required>
                      <label for="precio_medio_virtual">Media:</label>
                      <input type="number" id="virtualMedia" name="virtualMedia" step="0.01" required>
                      <label for="inversion_virtual">Inversión total:</label> 
                  		<input type="number" id="virtualInversion" name="virtualInversion" step="any" required>
                  	</div>
                    <span class=""><p>Opciones</p></span>
                    <hr class="row_linea op-25"></hr>
                    <div class="modalChangesButtons">
                        <input type="submit" id="aplicar-activo" value="Aplicar">
                        <div></div>
                        <input type="button" id="eliminar-activo" class="btn btn-danger" value="Eliminar">
                    </div>
                    <input type="button" class="btn btn-dark text-center" id="closeModalChanges" value="Cancelar">
                  </form>
              </div>
          </div>
      </section>`;
                      
      const btnNewPortContainer = document.querySelector('.btn__newPort__container');
      btnNewPortContainer.insertAdjacentHTML('beforebegin', newTable);

      const newTableRow = document.getElementById(rowId);

      const cotiTH = newTableRow.querySelector('#cotiTH');
      const cantidad = newTableRow.querySelector('#cantidad').textContent;
      const inversion = newTableRow.querySelector('#inversion').textContent;

      // Establecer el valor inicial para la diferencia y la diferencia en porcentaje
      const initialValue = parseFloat(price);
      updateDifference(initialValue, cantidad, inversion, newTableRow);

      cotiTH.addEventListener('input', () => {
        const valorActual = cotiTH.value || price; // Utiliza el valor de price cuando el input está vacío
        updateDifference(valorActual, cantidad, inversion, newTableRow);
      });

      // Código para abrir y cerrar el modal de añadir fila
      const addIcon = document.getElementById("add-icon");
      const myModalFila = document.getElementById("myModalFila");
      const closeModalFila = document.getElementById("closeModalFila");

      addIcon.addEventListener("click", function() {
          myModalFila.style.display = "block";
      });

      closeModalFila.addEventListener("click", function() {
          myModalFila.style.display = "none";
      });

      window.addEventListener("click", function(event) {
          if (event.target == myModalFila) {
              myModalFila.style.display = "none";
          }
      });      

      const btnMenuFilaPort = newTableRow.querySelector('#btnMenuFilaPort');

      // Código para abrir y cerrar el modal de editar fila
      const myModalChanges = document.getElementById(`myModalChanges-${rowId}`);
      const closeModalChanges = document.getElementById('closeModalChanges');      

      btnMenuFilaPort.addEventListener("click", function() {
        myModalChanges.style.display = "block";
      });

      myModalChanges.querySelector('#changesForm').appendChild(closeModalChanges);
      closeModalChanges.addEventListener("click", function() {
        myModalChanges.style.display = "none";
      });

      window.addEventListener("click", function(event) {
        if (event.target == myModalChanges) {
          myModalChanges.style.display = "none";
        }
      });          
  }     

  function updateDifference(valorActual, cantidad, inversion, row) {
    const diferencia = (valorActual * cantidad - inversion).toFixed(2);
    const diferenciaPercent = (diferencia / inversion * 100).toFixed(2);
    row.querySelector('#diferencia').textContent = diferencia;
    row.querySelector('#diferenciaPercent').textContent = diferenciaPercent;
  
    // Cambiar el color de fondo de la celda de diferencia en porcentaje
    const diferenciaPercentCell = row.querySelector('#diferenciaPercent');
    const diferenciaPercentValue = parseFloat(diferenciaPercentCell.textContent);
  
    if (diferenciaPercentValue > 0) {
      diferenciaPercentCell.classList.add('bg-up');
      diferenciaPercentCell.classList.remove('bg-down');
      diferenciaPercentCell.classList.remove('bg-white');
    } else if (diferenciaPercentValue < 0) {
      diferenciaPercentCell.classList.add('bg-down');
      diferenciaPercentCell.classList.remove('bg-up');
      diferenciaPercentCell.classList.remove('bg-white');
    } else {
      diferenciaPercentCell.classList.add('bg-white');
      diferenciaPercentCell.classList.remove('bg-up');
      diferenciaPercentCell.classList.remove('bg-down');
    }
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


// Cierre del codigo completo

});