<!-- CONTAINER PORTFOLIO -->
        
<div id="p01" class="portfolio text-light text-center d-flex justify-content-center mt-4 col-xl-8 col-12 mx-auto on">   <!-- << poner off para usar js inicial -->

  <h4 id="titPortfolio" class="titPortfolio text-light col-12 nowrap t-azul1 mt-5" value=""></h4>
  <hr class="mx-auto rounded azul2 mb-2 col-6">

  <table class="table text-light table-hover mx-auto rounded nowrap text-center mb-5">

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
    <tbody id="bodyPortfolio" class="bodyPortfolio portBody d-flex row">        
      <!-- Filas de portofolio -->
      <tr id="f01" class="filaPort azul4 d-flex row align-items-center text-center nowrap rounded">
        <td id="ticker" class="col w-s text-light bg-marca2">ETH</td>
        <td id="cantidad" class="col w-s text-light">200</td>
        <td id="precioMedio" class="col w-s text-light">500</td>
        <td id="inversion" class="col w-s text-light">100,000</td>
        <td id="valorActual" class="col w-s text-light d-grid"><input id="" class="coti azul3 border-none text-light text-center rounded d-flex align-items-center" type="number" value=""></td>
        <td id="diferencia" class="col w-s text-light">100,000 | 100%</td>
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
        <th id="" class="totalActivos col w-s text-light nowrap">Total 3 Activos</th>
        <th id="" class="col w-s text-light nowrap"></th>
        <th id="" class="col w-s text-light nowrap"></th>
        <th id="" class="totalInvertido col w-s text-light nowrap"> &nbsp300,000 </th>
        <th id="" class="col w-s text-light nowrap"></th>
        <th id="" class="totalProfit col w-s text-light nowrap"> &nbsp300,000 | 300%</th>
        <th id="" class="col w-s text-light cursor"><img src="images/add_box_white_24dp.svg" alt=""></th> 
      </tr>            
    </tbody>
    <!-- FIN CUERPO DE LAS FILAS DE ACTIVOS -->

  </table>
  



  



</div>
<!-- FIN PORTFOLIO -->









