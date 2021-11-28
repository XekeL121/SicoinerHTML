<!-- INICIO PORTFOLIO -->
        
<div id="portfolio" class="portfolio text-light text-center d-flex justify-content-center mt-4 col-xl-8 col-12 mx-auto">

  <h4 id="titPortfolio" class="text-light col-12 nowrap t-azul1">Portfolio 1</h4>
  <hr class="azulLogo text-light mx-auto rounded bg-white azul2 mb-2 col-6">

  <table class="table text-light table-hover mx-auto rounded nowrap text-center">

    <thead>
      
      <tr class="headPort d-flex text-center nowrap">
        <th class="col w-s text-light">Ticker</th>
        <th class="col w-s text-light">Cantidad</th>
        <th class="col w-s text-light">Break even</th>
        <th class="col w-s text-light">Inversión</th>
        <th class="col w-s text-light">Cotización</th>
        <th class="col w-s text-light">P&L | %</th>
        <th class="col w-s text-light cursor"><img id="portConfig" class="my-auto p-1 vPro" src="images/tune_white_24dp.svg" alt=""></th> 
      </tr>
    </thead>

    <tbody id="bodyPortfolio" class="d-flex row">    
      <!-- Filas de portofolio -->


      <tr id="filaPort" class="filaPort azul4 d-flex row align-items-center text-center nowrap rounded">
        <td id="ticker" class="col w-s text-light bg-marca2">ETH</td>
        <td id="cantidad" class="col w-s text-light">200</td>
        <td id="precioMedio" class="col w-s text-light">500</td>
        <td id="inversion" class="col w-s text-light">100,000</td>
        <td id="valorActual" class="col w-s text-light d-grid"><input id="coti" class=" azul3 border-none text-light text-center rounded d-flex align-items-center" type="number" value="1500"></td>
        <td id="diferencia" class="col w-s text-light">100,000 | 100%</td>
        <td id="btnMenuFilaPort" class="col w-s text-light cursor"><img class="btnMenuFilaPort" src="images/linear_scale_white_24dp.svg" alt=""></td> 
        <!-- MENÚ DESPLEGABLE DE FILA PORTFOLIO -->
        <?php
          include "includes/menu-fila-portfolio.php";
        ?> 
        <!-- FIN MENÚ DESPLEGABLE DE FILA PORTFOLIO -->  
        <tr class="salto1"></tr>
      </tr>



      <!-- Fin Filas de portofolio -->
      <tr class="totalPorta azul5 d-flex text-center nowrap">
        <th id="totalActivos" class="col w-s text-light nowrap">Total 3 Activos</th>
        <th id="" class="col w-s text-light nowrap"></th>
        <th id="" class="col w-s text-light nowrap"></th>
        <th id="totalInvertido" class="col w-s text-light nowrap"> &nbsp300,000 </th>
        <th id="" class="col w-s text-light nowrap"></th>
        <th id="totalProfit" class="col w-s text-light nowrap"> &nbsp300,000 | 300%</th>
        <th id="" class="col w-s text-light cursor"><img src="images/add_box_white_24dp.svg" alt=""></th> 
      </tr>            
    </tbody>
  </table>
</div>
<!-- FIN PORTFOLIO -->


<!-- BOTÓN ABRIR PRIMER PORTFOLIO -->
<div class="w-100 d-flex justify-content-center">
  <button id="btnNewPort" type="button" class="btnNewPort mx-auto btn btn-primary col-xl-2 col-sm-3 col-6 m-5 rounded p-2 border-naranja">
    <h4 class="">+</h4>
  </button>
</div>
