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
    
      <div class="contenedor of-hidden">




        <!-- CALCULADORA DE INVERSIÓN -->
        <div class="col-xl-7 col-11 mx-auto mt-5 mb-5 ">
            <?php
            include "includes/calc-inversion.php";
            ?> 
        </div>
        <!-- FIN CALCULADORA DE INVERSIÓN -->

       
        <!--  COST AVERAGE  -->
        <div class="col-xl-7 col-11 mx-auto mt-5 mb-5 ">
            <?php
            include "includes/calc-average.php";
            ?> 
        </div>
        <!--  FIN COST AVERAGE  -->
        
        
      </div>

      <?php
      include "includes/footer.php";
      ?> 
    
  </body>
</html>