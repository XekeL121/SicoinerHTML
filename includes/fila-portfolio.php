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