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
    
      <div class="contenedor p-2 of-hidden">     
        
        <!-- Inicio de añadir primer portfolio -->
        
        <?php
          include "includes/newPortfolio.php";  //Para cambiar a vista con portfolio/newPortfolio, poner portfolio.php
        ?> 

        

        <!-- Fin de añadir primer portfolio -->
        
      </div>

      <?php
      include "includes/footer.php";
      ?> 
   
    

   <script src="js/menuFilaPort.js"></script>
   <script src="js/newPortfolio.js"></script>

  </body>
</html>