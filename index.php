<!DOCTYPE html>
<html lang="es">
  <head>
    <?php
    include "includes/head.php";
    ?> 
  </head>
  <body class="container-full azulFondo m-auto"> 

    <?php
    include "includes/header.php";
    ?>
    <!-- Container index -->
    <div id="contIndex" class="contIndex contenedor p-2 of-hidden">   
      
      <!-- //Futura ventana para acciones del menú de la fila
      <div id="contMenuFila">
        <div id="MenuFila">
          <div id="tituloMenuFila">a</div>
          <div id="herramientasMenuFila">a</div>
          <div id="btnMenuFila">a</div>
        </div>
      </div> -->
      
      <!-- Aquí comienza el portafolio -->
      
      
      <!-- Aquí terminaría el portfolio -->      

      <div class="final"></div> <!-- Este div es sólo como referencia para insertar nuevos portfolios appendchild antes de este div -->
      <div id="container-btnNextPort" class="mt-5">
        <!-- Mensaje bienvenida -->
        <div id="bienvenida" class="text-center">
          <h3 class="t-azul1 p-3">Bienvenid@ a tu portafolio digital</h3>
          <p class="text-light m-2 op80">Agrega el primer activo y empieza a controlar tus finanzas</p>
        </div>
      </div>          
      <div id="btnNextPort" class="divNextPort w-100 d-flex text-center justify-content-center mb-5">
        <button id="btnNewPort" type="button" class="btnNewPort mx-auto btn btn-primary col-xl-2 col-sm-3 col-6 m-2 rounded p-2 border-naranja">
          <h6 class="">+ Nuevo Portafolio</h6>
        </button>
      </div>
    </div>
    <!-- BOTÓN ABRIR PRIMER PORTFOLIO -->
    <!-- Modal para Nuevo portafolio -->
    <?php
    include "includes/modalNewPortfolio.php";    
    include "includes/modalNewFila.php";
    ?>
    
    
    <!-- Footer -->
    <?php
    include "includes/footer.php";
    ?>    
    <!-- Scripts -->
    <script src="js/modalNewPort.js"></script>
    <script src="js/modalNewFila.js"></script>
    <script src="js/menuFila.js"></script>
    <!-- <script src="js/addTicker.js"></script> -->

    <!-- Scripts de prueba -->
    <!-- <script src="js/listadocurso copy.js"></script>  -->
  </body>
</html>
