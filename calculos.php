<!DOCTYPE html>
<html lang="es">

            <?php
                include "includes/head.php";
            ?>
    <body> 

        <div class="container-full row h-full d-flex justify-content-center azul1"> 
            <div class="divLogo col-12 col-xl-3 col-md-8 p-2 text-center my-2 azul1 ">
                <a href="index.php"> <img class="text-center w-50 cursor-pointer" src="img/Isotipo Sicoiner v1.png" alt="logotipo Sicoiner"></a>
                <p class="op50 d-flex nowrap mt-1 text-uppercase letter-spacing-3 text-light op80 mx-auto justify-content-center text-center">- Tu portfolio digital -</p>           
            </div>


            <!-- franja de texto loop -->
            <div class="avisos col-12 my-auto p-2 align-middle azul2 op80 text-orange nowrap of-hidden">
                <?php
                    include "includes/noticias.php";
                ?>
            </div>

           

            <?php
                include "includes/calculos_main.php";
            ?>                     
            
            <?php
                include "includes/footer.php";
            ?> 

            

        </div>

        <!-- Option 1: Bootstrap Bundle with Popper -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous">
        </script>
    </body>

</html>