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
    
    <div class="contenedor p-2 of-hidden text-center">


        <h3 class="mt-3 mb-1 text-light op80">Historial</h3>
        <hr class=" mx-auto rounded bg-white col-3">

        <div id="selectHist" class="vPro">                            
            <form class="mb-3 d-flex justify-content-center op80 w-100">
                <fieldset class="row">                                    
                    <div class="selector col-xl-3 col-6 p-3">
                        <label for="disabledSelect" class="form-label text-light col">Periodo:</label>
                        <select id="disabledSelect" class="form-select col px-2">
                            <option>Completo</option>
                            <option>Mensual</option>
                            <option>Trimenstral</option>
                            <option>Semestral</option>
                            <option>Año en curso</option>
                            <option>Año anterior</option>
                            <option>Personalizar..</option>
                        </select>
                    </div>
                    <div class="selector col-xl-3 col-6 p-3">
                        <label for="disabledSelect" class="form-label text-light col">Portfolio:</label>
                        <select id="disabledSelect" class="form-select col px-2">
                            <option>Todos</option>
                            <option>Portfolio 1</option>
                        </select>
                    </div>
                    <div class="selector col-xl-3 col-6 p-3">
                        <label for="disabledSelect" class="form-label text-light col">Ticker:</label>
                        <select id="disabledSelect" class="form-select col px-2">
                            <option>Todos</option>
                            <option>ETH</option>
                        </select>
                    </div>
                    <div class="selector col-xl-3 col-6 p-3">
                        <label for="disabledSelect" class="form-label text-light col">Órdenes:</label>
                        <select id="disabledSelect" class="form-select col px-2">
                            <option>Todas</option>
                            <option>Compra</option>
                            <option>Venta</option>
                        </select>
                    </div>
                </fieldset>
            </form>                            
        </div>



        <!-- INICIO HISTORIAL -->
        
        <div class="historial text-light text-center d-flex justify-content-center mt-4 col-xl-8 col-12 mx-auto">

      

          <table class="table text-light table-hover mx-auto rounded nowrap text-center">

            <thead>
              
              <tr class="titHisto d-flex text-center nowrap">
                <th class="col w-s text-light">Portfolio</th>
                <th class="col w-s text-light">Ticker</th>
                <th class="col w-s text-light">Fecha</th>
                <th class="col w-s text-light">Orden</th>
                <th class="col w-s text-light">Posiciones</th>
                <th class="col w-s text-light">Precio C/V</th>
                <th class="col w-s text-light">Capital $</th>
                <th class="col w-s text-light cursor vPro"><img id="portConfig" class="my-auto p-1" src="images/tune_white_24dp.svg" alt="">
                    <!-- <div class="menuHistorial position-absolute">
                        <div>hola</div>
                        <div>blanco</div>
                        <div>negro</div>
                        <div>negro</div>
                        <div>negro</div>
                    </div> -->
                </th> 
              </tr>
            </thead>

            <tbody class="d-flex row">

                <?php
                include "includes/fila-historial.php";
                ?> 
               

                <tr class="totalHisto azulNoticias d-flex text-center nowrap">
                    <th class="col w-s text-light">Total 2 Operaciones</th>
                    <th class="col w-s text-light"></th>
                    <th class="col w-s text-light"></th>
                    <th class="col w-s text-light"></th>
                    <th class="col w-s text-light"></th>
                    <th class="col w-s text-light"></th>
                    <th class="col w-s text-light">&nbsp;200,000</th>
                    <th class="col w-s text-light vPro"></th> 
                </tr>            
            </tbody>
          </table>
        </div>
        <!-- FIN HISTORIAL -->

       

        
        
      </div>

      <?php
      include "includes/footer.php";
      ?> 
    
  </body>
</html>