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
      <!-- Aquí comienza el portafolio -->
      
      <div id="contMenuFila">
        <div id="MenuFila">
          <div id="tituloMenuFila"></div>
          <div id="herramientasMenuFila"></div>
          <div id="btnMenuFila"></div>

        </div>
      </div>
      
      
      
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
    ?>
    
    <!-- Footer -->
    <?php
    include "includes/footer.php";
    ?>    
    <!-- Scripts -->
    <script src="js/portfolio.js"></script> 
    <!-- <script src="js/menuFilaPort.js"></script> -->
    <!-- <script src="js/newPortfolio.js"></script>  -->
    <script src="js/modalNewPort.js"></script>
    <script src="js/navsPort.js"></script>

    <!-- Scripts de prueba -->
    <!-- <script src="js/listadocurso copy.js"></script>  -->
  </body>
</html>
