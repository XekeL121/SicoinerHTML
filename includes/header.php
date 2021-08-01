            <header class="row justify-content-center azul1 py-2">
                <div class="divLogo col-xl-3 col-sm-8 col-12 p-2 text-center my-auto">
                    <a href="index.php"> <img class="text-center w-50 cursor-pointer" src="img/Isotipo Sicoiner v1.png" alt="logotipo Sicoiner"></a>
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

                
                <nav class="col-md-12 col-lg-12 col-xl-6 p-2 text-center">
                    <ul class="d-flex col-lg-12 justify-content-center">
                        <a href="index.php" class="navButon d-block col-12 col-md-4 p-2 mt-2 text-light text-center cursor-pointer nowrap">
                            <li class="d-flex row align-items-center justify-content-center">
                                <img class="icon align-middle" src="img/app_registration_white_24dp.svg" alt="">
                                <div class="col-2 w-auto ml-2">Portfolios</div> 
                            </li>
                        </a>
                        <a href="historial.php" class="navButon d-block col-12 col-md-4 p-2 mt-2 text-light text-center cursor-pointer nowrap">
                            <li class="d-flex row align-items-center justify-content-center">
                                <img class="icon" src="img/insights_white_24dp.svg" alt="">
                                <div class="col-2 w-auto ml-2">Historial</div> 
                            </li>
                        </a>
                        <div class="navButon d-block col-12 col-md-2 p-2 mt-2 text-light text-center cursor-pointer nowrap">
                            
                            <!-- Menú desplegable de botón usuario -->
                            <button class="bg-transparent">                                
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
                    <div class="my-auto noticias nowrap ">
                        <!-- <img id="info" class="icon my-auto align-middle" src="img/info_naranja.svg" alt=""> -->
                        <span class="loop">Esto podría ser una barra informativa, pero no debe ser molesta y que no se reinicie cada vez que se cambia de página, deberían ir los principales índices mundiales? faltaría concretar su función BTC 31,500 $ +0.8% | ADA 1.18 $ +10% | BTC 31,500 $ +0.8% | ADA 1.18 $ +10% | BTC 31,500 $ +0.8% | ADA 1.18 $ +10% |
                        BTC 31,500 $ +0.8% | ADA 1.18 $ +10% | BTC 31,500 $ +0.8% | ADA 1.18 $ +10% | BTC 31,500 $ +0.8% | ADA 1.18 $ +10% | XXXXX
                        </span>
                    </div>
                </div>
                <ul class="subSubMenu d-flex col-12 col-xl-2 col-sm-4 row azulLogo2 nowrap">
                    <a href="calculos.php" class="p-1 col-xl-6 col-sm-6 col-6 text-center text-light cursor-pointer">
                        <img class="" src="img/data_usage_white_24dp.svg" alt="">
                        <span class="subsub text-light">Cálculos</span>
                    </a>
                    <a href="alertas.php" class="p-1 col-xl-6 col-sm-6 col-6 text-center">
                        <img class="" src="img/notifications_white_24dp.svg" alt="">
                        <span class="subsub text-light align-center">Alertas</span>
                    </a>
                </ul>
            </div>

           