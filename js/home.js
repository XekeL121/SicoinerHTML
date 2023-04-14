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
                const mainContainer = document.querySelector('.contenedor-principal');
                const tableTemplate = `
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
                                    <th class="">Valor</th>
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
                                    <td id="preciMedio" class="">${price}</td>
                                    <td id="inversion" class="">100,000</td>
                                    <td id="valorActual" class="py-05"><input id="cotiTH" class="" type="number" inputmode="numeric" value=""></td>
                                    <td id="diferencia" class="">100,000</td>
                                    <td id="diferencia" class="">100%</td>
                                    <td id="btnMenuFilaPort" class="cursor"><img class="size-min op-50" src="img/linear_scale_white_24dp.svg" alt=""></td>
                                </tr>
                                <tr class="salto1"></tr>
                            </tbody>
                        </table>
                    </section>`;
        
                mainContainer.insertAdjacentHTML('beforeend', tableTemplate);
            }
        });