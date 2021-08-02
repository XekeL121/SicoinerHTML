                <div class="ofertas row pt-2 text-center justify-content-center overflow-scroll azulFondo overflow-scroll">
                    <!-- Aquí comienza el portfolio -->
                    <div class="tarjetas px-2 my-3 col-12 col-xl-8 col-md-10 text-center rounded">
                        <h3 class="mt-3 mb-1 text-light op80">Historial</h3>
                        <hr class=" mx-auto rounded bg-white ">


                        <div id="selectHist">                            
                            <form class="mb-3 d-flex justify-content-center op80 w-100">
                                <fieldset class="row">                                    
                                    <div class="selector col-xl-3 col-6 p-3">
                                        <label for="disabledSelect" class="form-label text-light col">Periodo:</label>
                                        <select id="disabledSelect" class="form-select col px-2">
                                            <option>Completo</option>
                                            <option>Mensual</option>
                                            <option>Trimenstral</option>
                                            <option>Semestral</option>
                                            <option>Año en curso</option>
                                            <option>Año anterior</option>
                                            <option>Personalizar..</option>
                                        </select>
                                    </div>
                                    <div class="selector col-xl-3 col-6 p-3">
                                        <label for="disabledSelect" class="form-label text-light col">Portfolio:</label>
                                        <select id="disabledSelect" class="form-select col px-2">
                                            <option>Todos</option>
                                            <option>Portfolio 1</option>
                                        </select>
                                    </div>
                                    <div class="selector col-xl-3 col-6 p-3">
                                        <label for="disabledSelect" class="form-label text-light col">Ticker:</label>
                                        <select id="disabledSelect" class="form-select col px-2">
                                            <option>Todos</option>
                                            <option>ETH</option>
                                        </select>
                                    </div>
                                    <div class="selector col-xl-3 col-6 p-3">
                                        <label for="disabledSelect" class="form-label text-light col">Órdenes:</label>
                                        <select id="disabledSelect" class="form-select col px-2">
                                            <option>Todas</option>
                                            <option>Compra</option>
                                            <option>Venta</option>
                                        </select>
                                    </div>
                                </fieldset>
                            </form>                            
                        </div>



                        <div class="tabla text-light d-flex justify-content-center pt-3">
                           <table class="table mb-5 of-hidden table-hover">
                                <thead>
                                    <tr>
                                        <th class="celdaTop col-1">Portfolio<img class="rounded mb-2">
                                        <th class="celdaTop col-1" scope="col">Ticker</th>
                                        <th class="celdaTop col-1" scope="col">Fecha</th>
                                        <th class="celdaTop col-1" scope="col">Orden</th>
                                        <th class="celdaTop col-1" scope="col">Cant.</th>
                                        <th class="celdaTop col-1 nowrap" scope="col">Precio C/V</th>
                                        <th class="celdaTop col-1" scope="col">Capital $</th> <!-- Aquí se deberá poder añadir el capital disponible para un resultado 100% justo en el total -->
                                        <img class="icon" src="img/arrow_drop_down_18dp.svg" alt="">
                                        </img>
                                        </th>                                        
                                        <!-- Botón configuración Portfolio -->
                                        <th class="bMenu mb-5 col-1">
                                            <button class="rounded mb-1 bg-transparent"><img id="portConfig" class="my-auto p-1"
                                                    src="img/date_range_white_18dp.svg" alt=""></button>
                                            <ul class="navHistorial azulOscuro p-2 rounded z1">
                                                <li class="px-5 rounded"><a class="text-warning op50" href="">Ver en lista</a></li>
                                                <li class="px-5 rounded"><a class="text-warning" href="">Ver en gráfico</a></li>                                                
                                                <li class="px-5 rounded"><a class="text-light" href=""> Exportar</a></li>
                                                <li class="px-5 rounded"><a class="text-red" href="">Borrar historial*</a></li> <!-- Esta acción afecta a sus respectivos portfolios? Es irreversible? -->
                                            </ul>
                                        </th>
                                    </tr>
                                </thead>
                                

                                <!-- Fila de datos del activo -->
                                <tbody class="table bg-rojo">                                    
                                        <tr class="activos">
                                            <th class="celda textoAzul opacityOff">Portfolio 1</th>                                                                                      
                                            <th class="celda bg-marca">ETH</th> 
                                            <th class="celda opacityOff" scope="row">09/07/21</th>                                            
                                            <th class="celda opacityOff">Venta</th> 
                                            <th class="celda">200</th> 
                                            <th class="celda text-orange">1500 $</th> 
                                            <th class="celda opacityOff text-green">+300,000 $</th> 
                                            <th class="celda bMenu">
                                            <?php
                                                include "includes/menufila_historial.php";
                                            ?> 
                                            </th>
                                        </tr>
                                        <tr id="salto"></tr> <!-- Este parámetro está por pulir, pero permite el margen inferior de 5px en cada fila -->
                                    
                                </tbody>
                                <!-- Fin fila de datos del activo  -->  

                                <!-- Fila de datos del activo -->
                                <tbody class="table bg-verde">
                                    <div class="">
                                        <tr class="activos">
                                            <th class="celda textoAzul opacityOff">Portfolio 1</th>                                                                                    
                                            <th class="celda bg-marca">ETH</th> 
                                            <th class="celda opacityOff" scope="row">06/07/21</th>                                            
                                            <th class="celda opacityOff">Compra</th> 
                                            <th class="celda">200</th> 
                                            <th class="celda text-orange">1000 $</th> 
                                            <th class="celda text-light">-200,000 $</th>
                                            <th class="celda bMenu">

                                            <?php
                                                include "includes/menufila_historial.php";
                                            ?> 

                                            </th>
                                        </tr>
                                        <tr id="salto"></tr> <!-- Este parámetro está por pulir, pero permite el margen inferior de 5px en cada fila -->
                                    </div>
                                </tbody>
                                <!-- Fin fila de datos del activo  -->                             

                                    

                                <!-- Fila de totales del portfolio -->
                                <tr id="total" class="azul2 opacityOff z0">
                                    <th class="celdaPlTotal nowrap opacityOff text-green pl-2" scope="row">Total X operaciones</th>
                                    <!-- Total de activos, o filas, que sería lo mismo -->
                                    <th class="celdaPlTotal"></th> <!-- Vacía -->
                                    <th class="celdaPlTotal"></th> <!-- Vacía -->
                                    <th class="celdaPlTotal"></th> <!-- Vacía -->
                                    <th class="celdaPlTotal text-orange opacityOff"></th>
                                    <!-- Total inversión en el portfolio entero-->
                                    <!-- Total ganancias en el portfolio entero -->
                                    <!-- Botón + de añadir nueva fila -->
                                    <th class="celdaPlTotal nowrap"></th>
                                    <th class="celdaPlTotal nowrap text-orange">+300,000 $</th>
                                    <th class="bMenu opacityOff"></th>
                                </tr>
                                <!-- Final fila de totales del portfolio -->
                            
                            </table>
                        </div>
                    </div>
                    <!-- Aquí termina el portfolio -->
                </div>