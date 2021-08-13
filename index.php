<!DOCTYPE html>
<html lang="es">
  <head>
    <?php
    include "includes/head.php";
    ?> 
  </head>
  <body class="container-full azulFondo"> 

    <?php
    include "includes/header.php";
    ?>
    
      <div class="contenedor p-2 of-hidden">


        <!-- INICIO PORTFOLIO -->
        
        <div class="portfolio text-light text-center d-flex justify-content-center mt-4 col-xl-8 col-12 mx-auto">

          <h4 class="text-light col-12 nowrap t-azul1">Portfolio 1</h4>
          <hr class="azulLogo text-light mx-auto rounded bg-white azul2 mb-2 col-6">

          <table class="table text-light table-hover mx-auto rounded nowrap text-center">

            <thead>
              
              <tr class="titPorta d-flex text-center nowrap">
                <th class="col w-s text-light">Ticker</th>
                <th class="col w-s text-light">Posición</th>
                <th class="col w-s text-light">Break even</th>
                <th class="col w-s text-light">Inversión</th>
                <th class="col w-s text-light">Cotización</th>
                <th class="col w-s text-light">P&L | %</th>
                <th class="col w-s text-light cursor"><img id="portConfig" class="my-auto p-1 vPro" src="images/tune_white_24dp.svg" alt=""></th> 
              </tr>
            </thead>

            <tbody class="d-flex row">
              <!-- Filas de portofolio -->
              <?php
              include "includes/fila-portfolio.php";
              ?>

              <?php
              include "includes/fila-portfolio.php";
              ?>

              <?php
              include "includes/fila-portfolio.php";
              ?>

              <!-- Fin Filas de portofolio -->

              <tr class="totalPorta azul5 d-flex text-center nowrap">
                <th class="col w-s text-light">Total 3 Activos</th>
                <th class="col w-s text-light"></th>
                <th class="col w-s text-light"></th>
                <th class="col w-s text-light"> &nbsp300,000 </th>
                <th class="col w-s text-light"></th>
                <th class="col w-s text-light"> &nbsp300,000 | 300%</th>
                <th class="col w-s text-light cursor"><img src="images/add_box_white_24dp.svg" alt=""></th> 
              </tr>            
            </tbody>
          </table>
        </div>
        <!-- FIN PORTFOLIO -->

       

        
        
      </div>

      <?php
      include "includes/footer.php";
      ?> 
    
  </body>
</html>