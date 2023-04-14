document.addEventListener('DOMContentLoaded', () => {
    const btnNewPortButton = document.querySelector('.btn__newPort__button');
    const closeModalButton = document.querySelector('#closeModal');
    const acceptModalButton = document.querySelector('#accept-modal');
    const modal = document.querySelector('.modal');
    const modalOverlay = document.querySelector('.modal-overlay');
  
    btnNewPortButton.addEventListener('click', () => {
        modal.classList.add('open');
        modalOverlay.classList.add('open');
    });
    
    closeModalButton.addEventListener('click', () => {
        modal.classList.remove('open');
        modalOverlay.classList.remove('open');
    });
    
    
    // modalOverlay.addEventListener('click', () => {
    //   modal.classList.remove('open');
    //   modalOverlay.classList.remove('open');
    // });
    
    // document.addEventListener('click', (event) => {
    //     if (event.target === modalOverlay) {
    //         modal.classList.remove('open');
    //         modalOverlay.classList.remove('open');
    //     }
    // });

    acceptModalButton.addEventListener('click', () => {
      const portfolioName = document.querySelector('#portfolioName').value;
      const broker = document.querySelector('#broker').value;
      const ticker = document.querySelector('#ticker').value;
      const quantity = document.querySelector('#quantity').value;
      const price = document.querySelector('#price').value;
      
      createPortfolioTable(portfolioName, broker, ticker, quantity, price);
  
      // Restablecer valores en inputs excepto Bróker y Ticker
      const inputs = document.querySelectorAll('#newPortfolioForm input:not(#broker):not(#ticker)');
      inputs.forEach(input => {
        input.value = "";
      });

      
      modal.classList.remove('open');
      modalOverlay.classList.remove('open');
      
    });
    
    function createPortfolioTable(portfolioName, broker, ticker, quantity, price) {
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
                <tr id="f01" class="portafolio__fila">
                  <td id="broker" class="px-1">${broker}</td>
                  <td id="ticker" class="">${ticker}</td>
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
                  <th id="" class="cursor border-radius-right-bottom"><img class=" op-50" src="img/add_box_white_24dp.svg" alt=""></th> 
              </tr>    
              </tbody>
            </table>
          </section>`;
              
                const btnNewPortContainer = document.querySelector('.btn__newPort__container');
                btnNewPortContainer.insertAdjacentHTML('beforebegin', newTable);

                const cotiTH = document.querySelector('#cotiTH');
                const cantidad = document.querySelector('#cantidad').textContent;
                const inversion = document.querySelector('#inversion').textContent;

                cotiTH.addEventListener('input', () => {
                    const valorActual = cotiTH.value;
                    const diferencia = (valorActual * cantidad - inversion).toFixed(2);
                    document.querySelector('#diferencia').textContent = diferencia;
                });
              }
              
        });

    