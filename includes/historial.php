<div class="ofertas p-2 px-5 row text-center justify-content-center overflow-scroll azulFondo">
                    <!-- Aquí comienza el portfolio -->
                    <div class="tarjetas px-2 my-3 col col-lg-9 col-xl-8 col-md-8 col-8 text-center  rounded">
                        <h3 class="mt-3 mb-1 text-light">HISTORIAL</h3>
                        <hr class="text-light mx-auto rounded bg-white opacityOff mb-1">
                        <div class="tabla text-light mt-2">
                            <!-- La tabla tendrá máximo 10 filas , la versión Pro tendrá infinitas y además se podrán crear más portfolios-->
                            <table class="table mt-1 mb-5 overflow-hidden">
                                <thead>
                                    <tr>
                                        <th class="celdaTop" scope="col">Fecha</th>
                                        <th class="celdaTop" scope="col">Tipo</th>
                                        <th class="celdaTop" scope="col">Ticker</th>
                                        <th class="celdaTop" scope="col">Cant.</th>
                                        <th class="celdaTop" scope="col">Precio</th>
                                        <th class="celdaTop" scope="col">Capital</th>
                                        <th class="celdaTop">Portfolio<img class="rounded mb-2">
                                        <img class="icon" src="img/arrow_drop_down_18dp.svg" alt="">
                                        </img>
                                        </th>                                        
                                        <!-- Botón configuración Portfolio -->
                                        <th class="bMenu mb-5">
                                            <button class="rounded mb-2"><img id="portConfig" class="my-auto p-1"
                                                    src="img/date_range_black_18dp.svg" alt=""></button>
                                            <ul class="navPort azulOscuro p-2 rounded">
                                                <li class="px-5 rounded"><a class="" href="">Dividir en:</a></li>
                                                <li class="px-5 rounded"><a class="text-light" href=""> Días</a></li>
                                                <li class="px-5 rounded"><a class="text-light" href=""> Semanas</a></li>
                                                <li class="px-5 rounded"><a class="text-light" href=""> Meses</a></li>
                                                <li class="px-5 rounded"><a class="text-light" href=""> Años</a></li>
                                                <li class="px-5 rounded"><a class="text-warning" href="">Ver completo</a></li>
                                                <li class="px-5 rounded"><a class="rojoTrade" href="">Borrar historial (Borrará los portfolios)</a></li>
                                            </ul>
                                        </th>
                                    </tr>
                                </thead>
                                

                                <!-- Fila de datos del activo en proceso (maquetación casi terminada) -->
                                <tbody class="table fondoVerde">
                                    <div class="">
                                        <tr id="datos">
                                            <th class="celda opacityOff" scope="row">09/07/2021</th>                                            
                                            <th class="celda opacityOff">Compra</th> 
                                            <th class="celda">ETH/BTC</th> 
                                            <th class="celda">200</th> 
                                            <th class="celda naranja">0.025 btc</th> 
                                            <th class="celda opacityOff verdeTrade">-1000 eth</th> 
                                            <th class="celda">Criptomonedas</th>                                                                                      
                                            <th class="celda bMenu">

                                                <!-- Botón borrar fila del historial -->
                                                <button class=""><img src="img/linear_scale_white_24dp.svg" alt=""></button> 
                                                <ul class="navFila azulOscuro p-2 rounded">
                                                    <li class="px-2 rounded"><a class="text-light" href="">Unificar con otra operación</a>
                                                    </li>
                                                    <li class="px-2 rounded"><a class="rojoTrade" href="">Eliminar (Se modificará el portfolio)</a>
                                                    </li>
                                                    
                                                </ul>                                               
                                                <!-- Fin botón borrar -->

                                            </th>
                                        </tr>
                                        <tr id="salto"></tr>
                                        <!-- Este parámetro está por pulir, pero permite el margen inferior de 5px en cada fila -->
                                    </div>
                                </tbody>
                                <!-- Fin fila de datos del activo  -->  

                                <!-- Fila de datos del activo en proceso (maquetación casi terminada) -->
                                <tbody class="table fondoRojo">
                                    <div class="">
                                        <tr id="datos">
                                            <th class="celda opacityOff" scope="row">06/07/2021</th>                                            
                                            <th class="celda opacityOff">Venta</th> 
                                            <th class="celda">ETH/BTC</th> 
                                            <th class="celda">200</th> 
                                            <th class="celda naranja">0.078 btc</th> 
                                            <th class="celda opacityOff verdeTrade">+480 btc</th>
                                            <th class="celda">Criptomonedas</th>                                                                                    
                                            <th class="celda bMenu">

                                                <!-- Botón borrar fila del historial -->
                                                <button class=""><img src="img/linear_scale_white_24dp.svg" alt=""></button> 
                                                <ul class="navFila azulOscuro p-2 rounded">
                                                    <li class="px-2 rounded"><a class="text-light" href="">Unificar con otra operación</a>
                                                    </li>
                                                    <li class="px-2 rounded"><a class="rojoTrade" href="">Eliminar (Se modificará el portfolio)</a>
                                                    </li>
                                                    
                                                </ul>                                               
                                                <!-- Fin botón borrar -->

                                            </th>
                                        </tr>
                                        <tr id="salto"></tr>
                                        <!-- Este parámetro está por pulir, pero permite el margen inferior de 5px en cada fila -->
                                    </div>
                                </tbody>
                                <!-- Fin fila de datos del activo  -->                             

                                    

                                <!-- Fila de totales del portfolio -->
                                <tr id="total" class="azul2 opacityOff z0">
                                    <th class="celdaPlTotal nowrap opacityOff" scope="row"></th>
                                    <!-- Total de activos, o filas, que sería lo mismo -->
                                    <th class="celdaPlTotal"></th> <!-- Vacía -->
                                    <th class="celdaPlTotal"></th> <!-- Vacía -->
                                    <th class="celdaPlTotal"></th> <!-- Vacía -->
                                    <th class="celdaPlTotal naranja opacityOff"></th>
                                    <!-- Total inversión en el portfolio entero-->
                                    <th class="celdaPlTotal nowrap">15840 usdt</th>
                                    <!-- Total ganancias en el portfolio entero -->
                                    <!-- Botón + de añadir nueva fila -->
                                    <th class="celdaPlTotal nowrap"></th>
                                    <th class="bMenu opacityOff"></th>
                                </tr>
                                <!-- Final fila de totales del portfolio -->
                            
                            </table>
                        </div>
                    </div>
                    <!-- Aquí termina el portfolio -->
                </div>