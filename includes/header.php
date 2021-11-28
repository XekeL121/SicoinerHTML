    <header class="cabecera azul4 d-flex justify-content-center">

      <a href="index.php" class="logo d-grid col-xl-4 col-md-4 col-12 my-auto text-center justify-content-end">
        <img class="col-12 mx-auto" src="images/Isotipo Sicoiner v1.png" alt="">
        <p class="col-12 op50 d-flex mt-1 text-uppercase letter-spacing-3 text-light op80 mx-auto justify-content-center w-s">- Portfolio digital -</p>
      </a>       
      
      <nav class="col-xl-8 col-md-9 col-12 d-flex justify-content-center">

        <div class="menu row col-xl-7 col-12 dflex">

          <a href="index.php" class="navButton dflex col-4 row rounded py-2 op90">
            <img class="iconNav op90 col-6" src="images/auto_stories_white_24dp.svg" alt="">
            <h5 class="text-light col-6 ml-2 pl-1">Portfolios</h5>
          </a>
          
          <a href="historial.php" class="navButton dflex col-4 row rounded py-2 op90">
            <img class="iconNav op90 col-6" src="images/insights_white_24dp.svg" alt="">
            <h5 class="text-light col-6 ml-2">Historial</h5>
          </a>      

          <div id="account" class="navButton col-3 dflex rounded">
            <button class="btn py-1 col-12">
              <img class="iconNav col-6" src="images/account_circle_white_24dp.svg" alt="">
              <img class="iconNav col-6" src="images/arrow_drop_down_white_18dp.svg" alt="">
           
            </button>


            <!-- MENÚ DESPLEGABLE DE CUENTA DE USUARIO -->
              <?php
              include "includes/menu-account.php";
              ?> 
            <!-- FIN MENÚ DESPLEGABLE DE CUENTA DE USUARIO -->
          </div>


          
        </div>
        
      </nav>      

    </header>

    <div class="nav2 d-flex no-wrap">
      <div class="noticias col-xl-10 col-md-8 col-sm-8 col-12 w-s azulNoticias t-naranja d-flex row align-items-center of-hidden">
         <p class="">noticias noticias noticias noticias noticias</p>
      </div>
      <div class="subMenu button d-flex col-xl-2 col-md-4 col-sm-4 col-12 text-light">
        <a href="calculos.php" class="col-6 button text-light azul3 cursor nowrap px-2 py-1" data-bs-toggle="modal" data-bs-target="#exampleModal">
          <img class="mr-1 pl-1" src="images/point_of_sale_white_24dp.svg" alt="">
          <p>Cálculos</p>
        </a>
        <a href="estadisticas.php" class="col-6 button text-light azul3 cursor nowrap px-2 py-1">
          <img class="mr-1" src="images/bar_chart_white_24dp.svg" alt="">
          <p>Estadísticas</p>
        </a>
      </div>       
    </div>

    <!-- MODAL DE CÁLCULOS -->

    <!-- data-bs-toggle="modal" data-bs-target="#exampleModal" -->

    <div class="modal mx-auto" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-xl d-flex justify-content-center mx-auto rounded mt-5">
          <div class=" pt-3 modal-content azul1 mx-auto border-azul rounded br-none bl-none">

            <div class="modal-body mx-auto p-3 calculo col-xl-6 col-12">                      
                                                      
              <!-- CALCULADORA DE INVERSIÓN -->
              <?php
              include "includes/calc-inversion.php";
              ?> 
              <!-- FIN CALCULADORA DE INVERSIÓN -->

            
              <!--  COST AVERAGE  -->
              <?php
              include "includes/calc-average.php";
              ?> 
              <!--  FIN COST AVERAGE  -->

              <div class="d-flex justify-content-center p-3 mt-4">
                <button type="button" class="btn w-25 py-1 border-none azul2 text-light "  data-bs-dismiss="modal">Cerrar</button>
              </div>
            </div>   
                 
             
          </div>
      </div>
    </div>

     <!-- FIN MODAL DE CÁLCULOS -->