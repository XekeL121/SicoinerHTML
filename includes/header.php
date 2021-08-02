            <header class="row justify-content-center azul1 py-2">
                <div class="divLogo col-12 col-xl-3 col-md-8 p-2 text-center my-auto">
                    <a href="index.php"> <img class="text-center w-50 cursor-pointer" src="img/Isotipo Sicoiner v1.png" alt="logotipo Sicoiner"></a>
                    <p class="op50 d-flex nowrap mt-1 text-uppercase letter-spacing-3 text-light op80 mx-auto justify-content-center text-center">- Tu portfolio digital -</p>
                </div>

                <!-- Menú responsive que aparece a partir de --> 
                <div class="menuResponsive position-absolute op80 cursor-pointer">
                    <ul class="d-flex row justify-content-center">

                            <a href="index.php" class="navButon col-2 p-2 mt-2 text-light text-center cursor-pointer nowrap">
                                <li>
                                    <img class="icon align-middle " src="img/app_registration_white_24dp.svg" alt="">                              
                                </li>
                            </a>

                            <a href="historial.php" class="navButon col-2 p-2 mt-2 text-light text-center nowrap">
                                <li>
                                    <img class="icon" src="img/insights_white_24dp.svg" alt="">                                
                                </li>
                            </a>                            
                                
                            <!-- Menú desplegable de botón usuario -->
                            <button class="navButon col-2 p-2 mt-2 text-light bg-transparent justify-content-center text-center cursor-pointer nowrap">                                
                                <img class="icon" src="img/account_circle_white_24dp.svg" alt="">
                                <img class="icon" src="img/arrow_drop_down_white_18dp.svg" alt="">
                            </button>
                            <?php
                                include "includes/modalheader.php";
                            ?> 
                            
                        </ul>
                </div>
                <!-- Fin del menú responsive -->

                
                <nav class="col-md-12 col-lg-12 col-xl-6 pt-2 text-center">
                    <ul class="d-flex col-lg-12 justify-content-center align-items-center transition-500">
                        <a href="index.php" class="navButon d-block col-12 col-md-4 p-2 mt-2 text-light text-center cursor-pointer nowrap">
                            <li class="d-flex row align-items-center justify-content-center">
                                <img class="icon align-middle  op80" src="img/app_registration_white_24dp.svg" alt="">
                                <div class="col-2 w-auto ml-2 op80">Portfolios</div> 
                            </li>
                        </a>
                        <a href="historial.php" class="navButon d-block col-12 col-md-4 p-2 mt-2 text-light text-center cursor-pointer nowrap">
                            <li class="d-flex row align-items-center justify-content-center">
                                <img class="icon  op80" src="img/insights_white_24dp.svg" alt="">
                                <div class="col-2 w-auto ml-2 op80">Historial</div> 
                            </li>
                        </a>
                        <div class="navButon d-block col-12 col-md-2 p-2 mt-2 text-light text-center cursor-pointer nowrap">
                            
                            <!-- Menú desplegable de botón usuario -->
                            <button class="bg-transparent op80">                                
                                <img class="icon" src="img/account_circle_white_24dp.svg" alt="">
                                <img class="icon" src="img/arrow_drop_down_white_18dp.svg" alt="">
                            </button>
                            <?php
                                include "includes/modalheader.php";
                            ?> 
                        </div>
                    </ul>
                </nav>
            </header>
            <div class="submenu d-flex azul2 my-auto nowrap">
                <div class="avisos col-12 col-xl-10 col-sm-8 my-auto p-2 align-middle op80 text-orange nowrap of-hidden">
                    
                    <?php
                        include "includes/noticias.php";
                    ?> 


                </div>


                <ul class="subSubMenu d-flex col-12 col-xl-2 col-sm-4 row azulLogo2 nowrap transition-800">
                    <a class="p-1 col-xl-6 col-sm-6 col-6 text-center text-light cursor-pointer"  data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <img class="" src="img/track_changes_white_24dp.svg" alt="">
                        <span class="subsub text-light">Cálculos</span>
                    </a>
                    <a href="estadisticas.php" class="p-1 col-xl-6 col-sm-6 col-6 text-center">
                        <img class="" src="img/data_usage_white_24dp.svg" alt="">
                        <span class="subsub text-light align-center">Estadísticas</span>
                    </a>
                </ul>
            </div>

            

                <!-- Button trigger modal -->
                <!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
                </button> -->

                <!-- Modal -->

                <!-- El modal necesita ajuste de scroll en tamaño tablet -->
                <div class="modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog d-flex justify-content-center mx-auto ">
                        <div class="modal-content">
                            <div id="modal-calc" class=" d-flex justify-content-center">
                                <div class="mt-5 calculos d-flex justify-content-center col-11 col-xl-8 mx-auto row z1 azul1 rounded text-center px-5">
                                    <div class="d-flex justify-content-end my-3">
                                        <a target="_blank" href="calculos.php" class="col-xl-2 col-12 text-right text-primary nowrap">¿Abrir en una nueva pestaña?</a>
                                    </div>                                

                                    <!-- Calculadora Coste de Inversión -->
                                    <?php
                                        include "calc-inversion.php";
                                    ?> 
                                    <!-- Fin Calculadora Coste de Inversión -->

                                    <div class="salto2"></div>
                                    
                                    <!-- Calculadora Cost Average -->
                                    <?php
                                        include "calc-average.php";
                                    ?> 
                                    <!-- Fin Calculadora Cost Average -->

                                    <button class="mb-5 col-2 btn bg-orange" data-bs-dismiss="modal">Cerrar</button>


                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

           