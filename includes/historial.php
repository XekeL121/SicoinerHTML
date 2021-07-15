                <div class="ofertas p-2 px-5 row text-center justify-content-center overflow-scroll">
                    <!-- Aquí comienza el portfolio -->
                    <div class="tarjetas px-2 my-3 col col-lg-9 col-xl-8 col-md-8 col-8 text-center rounded">
                        <h3 class="mt-3 mb-1 text-light op80">Historial</h3>
                        <hr class=" mx-auto rounded bg-white ">
                        <div class="tabla text-light">
                           <table class="table mt-1 mb-5 overflow-hidden">
                                <thead>
                                    <tr>
                                        <th class="celdaTop">Portfolio<img class="rounded mb-2">
                                        <th class="celdaTop" scope="col">Fecha</th>
                                        <th class="celdaTop" scope="col">Tipo</th>
                                        <th class="celdaTop" scope="col">Ticker</th>
                                        <th class="celdaTop" scope="col">Cant.</th>
                                        <th class="celdaTop" scope="col">Precio</th>
                                        <th class="celdaTop" scope="col">Capital *</th> <!-- Aquí se deberá poder añadir el capital disponible para un resultado 100% justo en el total -->
                                        <img class="icon" src="img/arrow_drop_down_18dp.svg" alt="">
                                        </img>
                                        </th>                                        
                                        <!-- Botón configuración Portfolio -->
                                        <th class="bMenu mb-5">
                                            <button class="rounded mb-1 bg-transparent"><img id="portConfig" class="my-auto p-1"
                                                    src="img/date_range_white_18dp.svg" alt=""></button>
                                            <ul class="navPort azulOscuro p-2 rounded">
                                                <li class="px-5 rounded"><a class="text-warning op50" href="">Ver completo</a></li>
                                            <li class="px-5 rounded"><a class="text-warning" href="">Ver en gráfico</a></li>
                                                <li class="px-5 rounded"><a class="" href="">Dividir en:</a></li>
                                                <li class="px-5 rounded"><a class="text-light" href=""> D/S/M/A</a></li>                                                
                                                <li class="px-5 rounded"><a class="text-light" href=""> Por Portfolios</a></li>
                                                <li class="px-5 rounded"><a class="text-light" href=""> Exportar</a></li>
                                                <li class="px-5 rounded"><a class="rojoTrade" href="">Borrar historial (Popup)</a></li>
                                            </ul>
                                        </th>
                                    </tr>
                                </thead>
                                

                                <!-- Fila de datos del activo -->
                                <tbody class="table fondoRojo">
                                    <div class="">
                                        <tr id="datos">
                                            <th class="celda">Criptomonedas</th>                                                                                      
                                            <th class="celda opacityOff" scope="row">09/07/2021</th>                                            
                                            <th class="celda opacityOff">Venta</th> 
                                            <th class="celda">ETH</th> 
                                            <th class="celda">200</th> 
                                            <th class="celda naranja">1500 $</th> 
                                            <th class="celda opacityOff verdeTrade">+300,000 $</th> 
                                            <th class="celda bMenu">

                                                <!-- Botón borrar fila del historial -->
                                                <button class=""><img src="img/linear_scale_white_24dp.svg" alt=""></button> 
                                                <ul class="navFila azulOscuro p-2 rounded">
                                                    <li class="px-2 rounded"><a class="text-light" href="">Compartir operación*</a></li> <!-- Se copiaría un texto en diferentes líneas para poder pegar en otra app -->
                                                    <li class="px-2 rounded"><a class="rojoTrade" href="">Eliminar (Afectará al portfolio)</a>
                                                    </li>
                                                    
                                                </ul>                                               
                                                <!-- Fin botón borrar -->

                                            </th>
                                        </tr>
                                        <tr id="salto"></tr> <!-- Este parámetro está por pulir, pero permite el margen inferior de 5px en cada fila -->
                                    </div>
                                </tbody>
                                <!-- Fin fila de datos del activo  -->  

                                <!-- Fila de datos del activo -->
                                <tbody class="table fondoVerde">
                                    <div class="">
                                        <tr id="datos">
                                            <th class="celda">Criptomonedas</th>                                                                                    
                                            <th class="celda opacityOff" scope="row">06/07/2021</th>                                            
                                            <th class="celda opacityOff">Compra</th> 
                                            <th class="celda">ETH</th> 
                                            <th class="celda">200</th> 
                                            <th class="celda naranja">1000 $</th> 
                                            <th class="celda opacityOff verdeTrade">-200,000 $</th>
                                            <th class="celda bMenu">

                                                <!-- Botón borrar fila del historial -->
                                                <button class=""><img src="img/linear_scale_white_24dp.svg" alt=""></button> 
                                                <ul class="navFila azulOscuro p-2 rounded">
                                                    <li class="px-2 rounded"><a class="text-light" href="">Compartir operación</a>
                                                    </li>
                                                    <li class="px-2 rounded"><a class="rojoTrade" href="">Eliminar (Afectará al portfolio)</a>
                                                    </li>
                                                    
                                                </ul>                                               
                                                <!-- Fin botón borrar -->

                                            </th>
                                        </tr>
                                        <tr id="salto"></tr> <!-- Este parámetro está por pulir, pero permite el margen inferior de 5px en cada fila -->
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
                                    <!-- Total ganancias en el portfolio entero -->
                                    <!-- Botón + de añadir nueva fila -->
                                    <th class="celdaPlTotal nowrap"></th>
                                    <th class="celdaPlTotal nowrap">+300,000 $</th>
                                    <th class="bMenu opacityOff"></th>
                                </tr>
                                <!-- Final fila de totales del portfolio -->
                            
                            </table>
                        </div>
                    </div>
                    <!-- Aquí termina el portfolio -->
                </div>