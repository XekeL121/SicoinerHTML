                <div class="ofertas row p-2 px-5 text-center justify-content-center overflow-scroll azulFondo">
                    <!-- Aquí comienza el portfolio -->
                    <div class="tarjetas px-2 my-3 col col-lg-9 col-xl-10 col-md-11 col-10 text-center">                       
                        <h3 class="textoAzul mt-3 mb-1 text-light">Portfolio 1</h3>
                        <hr class="azulLogo text-light mx-auto rounded bg-white">
                        <div class="text-light mt-2 w-100 mx-auto">

                            <!-- comienza el PORTFOLIO, que tendrá máximo 10 filas , la versión Pro tendrá infinitas y además se podrán crear más portfolios-->
                            <table class="table mt-1 mb-5 of-hidden table-hover table-stripped">
                                <thead>
                                    <tr>
                                        <th class="celdaTop col-1" scope="">Ticker</th>
                                        <th class="celdaTop col-2" scope="">Cant.</th>
                                        <th class="celdaTop col-2" scope="">Precio</th> <!-- Precio medio de compra -->
                                        <th class="celdaTop col-2" scope="">Cotización $</th> <!-- Que solo se actualice con un icono de actualizar -->
                                        <th class="celdaTop col-2" scope="">Inversión</th>
                                        <th class="celdaTop col-2" scope="">P&L | %</th>
                                        <!-- Botón configuración Portfolio -->
                                        <th class="bMenu mb-5 col-1">                                            
                                            <!-- Menú del portfolio -->
                                                <?php
                                                    include "includes/menu_portfolio.php";
                                                ?>  
                                            <!-- FIN Menú del portfolio -->
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="table azul1 justify-content-center">

                                    <!-- Aquí comienza la fila del portfolio -->
                                    <?php
                                        include "includes/fila-portfolio.php";
                                    ?>              
                                    <!-- Aquí termina la fila del portfolio -->

                                    <!-- Aquí comienza la fila del portfolio -->
                                    <?php
                                        include "includes/fila-portfolio.php";
                                    ?>              
                                    <!-- Aquí termina la fila del portfolio -->

                                    <!-- Aquí comienza la fila del portfolio -->
                                    <?php
                                        include "includes/fila-portfolio.php";
                                    ?>              
                                    <!-- Aquí termina la fila del portfolio -->


                                    <!-- Fila TOTALES del portfolio -->
                                    <tr id="total" class="azul2 opacityOff z0">
                                        <th class="pl-2 celda nowrap opacityOff" scope="row">Total "3" activos</th>
                                        <!-- Total de activos, o filas, que sería lo mismo -->
                                        <th class="celda"></th> <!-- Vacía -->
                                        <th class=" celda"></th> <!-- Vacía -->
                                        <th class=" celda"></th> <!-- Vacía -->
                                        <th class="celda text-orange opacityOff">300,000 $</th>
                                        <!-- Total inversión en el portfolio entero-->
                                        <th class="celdaPlTotal nowrap opacityOff">300,000 $ | 300%</th>
                                        <!-- Total ganancias en el portfolio entero -->
                                        <!-- Botón + de añadir nueva fila -->
                                        <th class="bMenu">
                                            <button class="mb-1"><img src="img/add_box_white_24dp.svg" alt=""></button>
                                        </th>
                                    </tr>
                                    <!-- Final fila de totales del portfolio -->
                                </tbody>
                            </table>
                        </div>
                        <button id="nuevoPort" type="button" class="azulLogo2 pt-1 px-3 rounded text-light"><img class="p-1 mb-1" src="img/add_circle_white_24dp.svg" alt="">Nuevo Portfolio</button>
                    </div>
                    <!-- Aquí termina el portfolio -->
                </div>
