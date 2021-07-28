                <div class="ofertas row p-2 px-5 text-center justify-content-center overflow-scroll azulFondo">
                    <!-- Aquí comienza el portfolio -->
                    <div class="tarjetas px-2 my-3 col col-lg-9 col-xl-10 col-md-11 col-10 text-center">                       
                        <h3 class="textoAzul mt-3 mb-1 text-light">Portfolio 1</h3>
                        <hr class="azulLogo text-light mx-auto rounded bg-white">
                        <div class="text-light mt-2 w-100 mx-auto">
                            <!-- La tabla tendrá máximo 10 filas , la versión Pro tendrá infinitas y además se podrán crear más portfolios-->
                            <table class="table mt-1 mb-5 of-hidden table-hover table-stripped">
                                <thead>
                                    <tr>
                                        <th class="celdaTop" scope="col">Ticker</th>
                                        <th class="celdaTop" scope="col">Cant.</th>
                                        <th class="celdaTop" scope="col">Precio</th> <!-- Precio medio de compra -->
                                        <th class="celdaTop" scope="col">Cotización*</th> <!-- Que solo se actualice con un icono de actualizar -->
                                        <th class="celdaTop" scope="col">Inversión</th>
                                        <th class="celdaTop" scope="col">P&L | %</th>
                                        <!-- Botón configuración Portfolio -->
                                        <th class="bMenu mb-5">
                                            <button class="rounded mb-1 bg-transparent"><img id="portConfig" class="my-auto p-1"
                                                    src="img/tune_white_18dp.svg" alt=""></button>
                                            <ul class="navPort azulOscuro p-2 rounded">
                                                <li class="px-5 rounded"><a class="" href="">Color</a>
                                                </li>
                                                <li class="px-5 rounded"><a class="" href="">Renombrar</a> </li>;
                                                <li class="px-5 rounded"><a class="" href="">Duplicar</a></li>
                                                <li class="px-5 rounded"><a class="" href="">Exportar</a> </li>
                                                <li class="px-5 rounded"><a class="" href="">Eliminar</a></li>
                                            </ul>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="table azul1 justify-content-center">

                                 <!-- Fila de datos del activo -->
                                 <div>
                                        <tr class="activos">
                                            <th id="ticker" class="celda opacityOff" scope="row">ETH</th>
                                            <!-- IMPORTANTE - El ticker no puede estar repetido en el mismo portfolio -->
                                            <th id="cantidad" class="celda opacityOff">200</th> <!-- Cantidad de ADA en portfolio -->
                                            <th id="breakEven" class="celda">500 $</th> <!-- Precio medio de compra -->
                                            <th class="celda"><input id="coti" class="opacityOff text-bold coti text-white text-center border-0 cursor-pointer rounded azulLogo2 w-75 h-75 p-1" type="number" value="1500"></th> <!-- Precio actual de ADA en el mercado -->
                                            <th id="inversion" class="celda text-orange">100,000 $</th> <!-- Capital total invertido en ADA -->
                                            <th id="diferencia" class="celda opacityOff text-green">100,000 $ | 100%</th>
                                            <!-- Ganancias | Porcentaje de ganancias en ADA ahora-->
                                            <th class="celda bMenu">
                                            <?php
                                                include "includes/menufila_portfolio.php";
                                            ?> 
                                            </th>
                                        </tr>
                                        <tr id="salto"></tr>
                                        <!-- Este parámetro está por pulir, pero permite el margen inferior de 5px en cada fila -->
                                    </div>
                                    <!-- Fin fila de datos del activo  -->

                                    <!-- Fila de datos del activo -->
                                 <div>
                                        <tr class="activos">
                                            <th id="ticker" class="celda opacityOff" scope="row">ETH</th>
                                            <!-- IMPORTANTE - El ticker no puede estar repetido en el mismo portfolio -->
                                            <th id="cantidad" class="celda opacityOff">200</th> <!-- Cantidad de ADA en portfolio -->
                                            <th id="breakEven" class="celda">500 $</th> <!-- Precio medio de compra -->
                                            <th class="celda"><input id="coti" class="opacityOff text-bold coti text-white text-center border-0 cursor-pointer rounded azulLogo2 w-75 h-75 p-1" type="number" value="1500"></th> <!-- Precio actual de ADA en el mercado -->
                                            <th id="inversion" class="celda text-orange">100,000 $</th> <!-- Capital total invertido en ADA -->
                                            <th id="diferencia" class="celda opacityOff text-green">100,000 $ | 100%</th>
                                            <!-- Ganancias | Porcentaje de ganancias en ADA ahora-->
                                            <th class="celda bMenu">
                                            <?php
                                                include "includes/menufila_portfolio.php";
                                            ?> 
                                            </th>
                                        </tr>
                                        <tr id="salto"></tr>
                                        <!-- Este parámetro está por pulir, pero permite el margen inferior de 5px en cada fila -->
                                    </div>
                                    <!-- Fin fila de datos del activo  -->

                                    <!-- Fila de datos del activo -->
                                 <div>
                                        <tr class="activos">
                                            <th id="ticker" class="celda opacityOff" scope="row">ETH</th>
                                            <!-- IMPORTANTE - El ticker no puede estar repetido en el mismo portfolio -->
                                            <th id="cantidad" class="celda opacityOff">200</th> <!-- Cantidad de ADA en portfolio -->
                                            <th id="breakEven" class="celda">500 $</th> <!-- Precio medio de compra -->
                                            <th class="celda"><input id="coti" class="opacityOff text-bold coti text-white text-center border-0 cursor-pointer rounded azulLogo2 w-75 h-75 p-1" type="number" value="1500"></th> <!-- Precio actual de ADA en el mercado -->
                                            <th id="inversion" class="celda text-orange">100,000 $</th> <!-- Capital total invertido en ADA -->
                                            <th id="diferencia" class="celda opacityOff text-green">100,000 $ | 100%</th>
                                            <!-- Ganancias | Porcentaje de ganancias en ADA ahora-->
                                            <th class="celda bMenu">
                                            <?php
                                                include "includes/menufila_portfolio.php";
                                            ?> 
                                            </th>
                                        </tr>
                                        <tr id="salto"></tr>
                                        <!-- Este parámetro está por pulir, pero permite el margen inferior de 5px en cada fila -->
                                    </div>
                                    <!-- Fin fila de datos del activo  -->


                                   



                                    <!-- Fila de totales del portfolio -->
                                    <tr id="total" class="azul2 opacityOff z0">
                                        <th class="celda nowrap opacityOff" scope="row">Total "1" activos</th>
                                        <!-- Total de activos, o filas, que sería lo mismo -->
                                        <th class="celda"></th> <!-- Vacía -->
                                        <th class=" celda"></th> <!-- Vacía -->
                                        <th class=" celda"></th> <!-- Vacía -->
                                        <th class="celda text-orange opacityOff">100,000 $</th>
                                        <!-- Total inversión en el portfolio entero-->
                                        <th class="celdaPlTotal nowrap opacityOff">100,000 $ | 100%</th>
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
